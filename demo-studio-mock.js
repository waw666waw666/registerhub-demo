/**
 * RegisterHub Community Studio · Pure-Frontend Interactive Demo Mock Engine
 * Intercepts window.fetch & window.EventSource for the full AutoRegister Studio
 * (`edition="community"`, `demo_mode=true`) API contract so all panels, 8 themes,
 * real-time streaming Markdown AI Agent, single-thread Runner SSE, 6-preset Window
 * Calibration, HAR parser, RFC 6238 TOTP & Luhn cards run 100% client-side with zero backend.
 */
(() => {
  const ORIGINAL_FETCH = window.fetch ? window.fetch.bind(window) : null;
  const ORIGINAL_EVENTSOURCE = window.EventSource;

  const pad2 = (n) => String(n).padStart(2, '0');
  const nowTime = () => {
    const d = new Date();
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
  };
  const nowDateTime = () => {
    const d = new Date();
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())} ${nowTime()}`;
  };
  const formatDateOffset = (daysAgo) => {
    const d = new Date(Date.now() - daysAgo * 86400 * 1000);
    const mm = pad2(d.getMonth() + 1);
    const dd = pad2(d.getDate());
    return { date: `${mm}-${dd}`, full_date: `${d.getFullYear()}-${mm}-${dd}` };
  };
  const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const randHex = (len) => {
    const c = '0123456789abcdef';
    let s = '';
    for (let i = 0; i < len; i += 1) s += c[Math.floor(Math.random() * c.length)];
    return s;
  };
  const maskKey = (k) => {
    const s = String(k || '').trim();
    if (!s) return '';
    return s.length <= 10 ? '••••••••' : `${s.slice(0, 6)}...${s.slice(-4)}`;
  };
  const makePassword = (len = 14) => {
    const u = 'ABCDEFGHJKLMNPQRSTUVWXYZ', l = 'abcdefghijkmnopqrstuvwxyz', d = '23456789', sym = '!@#$%^&*-_';
    const all = u + l + d + sym;
    const arr = [pick(u), pick(l), pick(d), pick(sym)];
    while (arr.length < len) arr.push(pick(all));
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  };

  function extractApiPath(input) {
    const raw = typeof input === 'string' ? input : (input && input.url) || '';
    if (!raw) return null;
    try {
      const u = new URL(raw, window.location.href);
      const m = u.pathname.match(/(\/api\/.*)$/);
      return m ? { path: m[1], searchParams: u.searchParams } : null;
    } catch {
      return null;
    }
  }

  function jsonResponse(obj, status = 200) {
    return new Response(JSON.stringify(obj), {
      status,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  // ==================== Crisp Inline SVG Failure Snapshots ====================
  function makeSnapshotSvg({ title, url, badge, badgeColor, detail, selector }) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 380" width="640" height="380">
      <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#09090b"/><stop offset="100%" stop-color="#18181b"/></linearGradient></defs>
      <rect width="640" height="380" fill="url(#bg)"/>
      <rect x="0" y="0" width="640" height="38" fill="#18181b"/>
      <circle cx="20" cy="19" r="5" fill="#f43f5e"/><circle cx="36" cy="19" r="5" fill="#f59e0b"/><circle cx="52" cy="19" r="5" fill="#10b981"/>
      <rect x="76" y="8" width="440" height="22" rx="6" fill="#09090b" stroke="#27272a"/>
      <text x="88" y="23" fill="#a1a1aa" font-family="ui-monospace,Consolas,monospace" font-size="11">${url}</text>
      <rect x="528" y="8" width="96" height="22" rx="6" fill="${badgeColor}" fill-opacity="0.18" stroke="${badgeColor}" stroke-opacity="0.45"/>
      <text x="576" y="23" text-anchor="middle" fill="${badgeColor}" font-family="sans-serif" font-size="11" font-weight="600">${badge}</text>
      <rect x="44" y="64" width="552" height="270" rx="12" fill="#111114" stroke="#27272a"/>
      <text x="68" y="98" fill="#fafafa" font-family="sans-serif" font-size="16" font-weight="600">${title}</text>
      <text x="68" y="122" fill="#a1a1aa" font-family="sans-serif" font-size="12">${detail}</text>
      <rect x="68" y="152" width="504" height="58" rx="8" fill="${badgeColor}" fill-opacity="0.1" stroke="${badgeColor}" stroke-dasharray="6 4"/>
      <text x="84" y="176" fill="${badgeColor}" font-family="ui-monospace,Consolas,monospace" font-size="11.5" font-weight="600">CAPTURED FAILURE NODE</text>
      <text x="84" y="198" fill="#e4e4e7" font-family="ui-monospace,Consolas,monospace" font-size="11.5">${selector}</text>
      <text x="68" y="308" fill="#71717a" font-family="ui-monospace,Consolas,monospace" font-size="11">RegisterHub Blackbox Snapshot · Simulated Demo Preview</text>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  // ==================== Pure-JS RFC 6238 TOTP ====================
  function sha1Bytes(msgBytes) {
    const ml = msgBytes.length;
    const bitHi = Math.floor((ml * 8) / 0x100000000);
    const bitLo = (ml * 8) >>> 0;
    const padLen = ((56 - ((ml + 1) % 64)) + 64) % 64;
    const total = ml + 1 + padLen + 8;
    const buf = new Uint8Array(total);
    buf.set(msgBytes, 0);
    buf[ml] = 0x80;
    const view = new DataView(buf.buffer);
    view.setUint32(total - 8, bitHi, false);
    view.setUint32(total - 4, bitLo, false);
    let h0 = 0x67452301, h1 = 0xefcdab89, h2 = 0x98badcfe, h3 = 0x10325476, h4 = 0xc3d2e1f0;
    const w = new Uint32Array(80);
    const rol = (v, s) => ((v << s) | (v >>> (32 - s))) >>> 0;
    for (let off = 0; off < total; off += 64) {
      for (let i = 0; i < 16; i += 1) w[i] = view.getUint32(off + i * 4, false);
      for (let i = 16; i < 80; i += 1) w[i] = rol(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16], 1);
      let a = h0, b = h1, c = h2, d = h3, e = h4;
      for (let i = 0; i < 80; i += 1) {
        let f, k;
        if (i < 20) { f = (b & c) | (~b & d); k = 0x5a827999; }
        else if (i < 40) { f = b ^ c ^ d; k = 0x6ed9eba1; }
        else if (i < 60) { f = (b & c) | (b & d) | (c & d); k = 0x8f1bbcdc; }
        else { f = b ^ c ^ d; k = 0xca62c1d6; }
        const tmp = (rol(a, 5) + f + e + k + w[i]) >>> 0;
        e = d; d = c; c = rol(b, 30); b = a; a = tmp;
      }
      h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0; h4 = (h4 + e) >>> 0;
    }
    const out = new Uint8Array(20);
    const ov = new DataView(out.buffer);
    ov.setUint32(0, h0, false); ov.setUint32(4, h1, false); ov.setUint32(8, h2, false); ov.setUint32(12, h3, false); ov.setUint32(16, h4, false);
    return out;
  }
  function hmacSha1(keyBytes, msgBytes) {
    const key = keyBytes.length > 64 ? sha1Bytes(keyBytes) : keyBytes;
    const ipad = new Uint8Array(64).fill(0x36);
    const opad = new Uint8Array(64).fill(0x5c);
    for (let i = 0; i < key.length; i += 1) { ipad[i] ^= key[i]; opad[i] ^= key[i]; }
    const inner = new Uint8Array(64 + msgBytes.length);
    inner.set(ipad, 0); inner.set(msgBytes, 64);
    const ih = sha1Bytes(inner);
    const outer = new Uint8Array(84);
    outer.set(opad, 0); outer.set(ih, 64);
    return sha1Bytes(outer);
  }
  function computeTotp(secret) {
    const clean = String(secret || '').toUpperCase().replace(/[\s=-]+/g, '');
    if (!clean || !/^[A-Z2-7]+$/.test(clean)) return { error: '无效的 Base32 密钥' };
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let bits = 0, val = 0;
    const bytes = [];
    for (let i = 0; i < clean.length; i += 1) {
      val = (val << 5) | alpha.indexOf(clean[i]);
      bits += 5;
      if (bits >= 8) { bytes.push((val >>> (bits - 8)) & 0xff); bits -= 8; }
    }
    const nowSec = Math.floor(Date.now() / 1000);
    const step = Math.floor(nowSec / 30);
    const remaining = 30 - (nowSec % 30);
    const msg = new Uint8Array(8);
    const mv = new DataView(msg.buffer);
    mv.setUint32(0, Math.floor(step / 0x100000000), false);
    mv.setUint32(4, step >>> 0, false);
    const mac = hmacSha1(new Uint8Array(bytes), msg);
    const off = mac[19] & 0x0f;
    const bin = ((mac[off] & 0x7f) << 24) | ((mac[off + 1] & 0xff) << 16) | ((mac[off + 2] & 0xff) << 8) | (mac[off + 3] & 0xff);
    return { code: String(bin % 1000000).padStart(6, '0'), period: 30, remaining };
  }

  // ==================== Real Luhn Card Generator ====================
  const CARD_SPECS = {
    visa: { label: 'Visa', prefixes: ['4532', '4556', '4916'], len: 16, cvvLen: 3 },
    mastercard: { label: 'Mastercard', prefixes: ['5123', '5248', '5425'], len: 16, cvvLen: 3 },
    amex: { label: 'Amex', prefixes: ['3412', '3714', '3782'], len: 15, cvvLen: 4 },
    discover: { label: 'Discover', prefixes: ['6011', '6441', '6501'], len: 16, cvvLen: 3 },
    jcb: { label: 'JCB', prefixes: ['3528', '3539', '3566'], len: 16, cvvLen: 3 },
  };
  function luhnComplete(prefix, totalLen) {
    let digits = String(prefix || '').replace(/\D/g, '').slice(0, totalLen - 1);
    while (digits.length < totalLen - 1) digits += String(randInt(0, 9));
    let sum = 0;
    for (let i = 0; i < digits.length; i += 1) {
      let d = Number(digits[digits.length - 1 - i]);
      if (i % 2 === 0) { d *= 2; if (d > 9) d -= 9; }
      sum += d;
    }
    return digits + String((10 - (sum % 10)) % 10);
  }
  function generateCards(brand, binPrefix, count = 6) {
    const key = String(brand || 'visa').toLowerCase();
    const spec = CARD_SPECS[key] || CARD_SPECS.visa;
    const cleanBin = String(binPrefix || '').replace(/\D/g, '');
    const curY = new Date().getFullYear();
    const names = ['HANNAH CALLAHAN', 'CALEB SORENSEN', 'NADIA DELGADO', 'TREVOR WHITAKER', 'CLAIRE MERCER', 'OWEN FLETCHER'];
    const out = [];
    for (let i = 0; i < Math.min(12, Math.max(1, count)); i += 1) {
      const pfx = cleanBin || pick(spec.prefixes);
      const num = luhnComplete(pfx, spec.len);
      const fmt = num.length === 15 ? `${num.slice(0, 4)} ${num.slice(4, 10)} ${num.slice(10)}` : num.replace(/(\d{4})(?=\d)/g, '$1 ');
      const mm = pad2(randInt(1, 12));
      const yy = String(curY + randInt(2, 5));
      const cvv = String(randInt(Math.pow(10, spec.cvvLen - 1), Math.pow(10, spec.cvvLen) - 1));
      out.push({
        brand: spec.label,
        card_number: num,
        card_number_formatted: fmt,
        bin_prefix: num.slice(0, 6),
        exp_month: mm,
        exp_year: yy,
        exp_formatted: `${mm}/${yy.slice(-2)}`,
        cvv,
        cardholder_name: pick(names),
      });
    }
    return out;
  }

  // ==================== High-Diversity Multi-Country Profile Generator ====================
  const POOLS = {
    US: {
      country: 'United States',
      firsts: ['Hannah', 'Caleb', 'Nadia', 'Trevor', 'Maya', 'Owen', 'Claire', 'Derek', 'Elena', 'Gavin', 'Tessa', 'Marcus', 'Audrey', 'Nolan', 'Priya', 'Grant'],
      lasts: ['Callahan', 'Kowalski', 'Delgado', 'Whitaker', 'Patel', 'Sorensen', 'Mercer', 'Hollis', 'Bennett', 'Alvarez', 'Prescott', 'Nakamura', 'Vaughn', 'Fletcher'],
      places: [
        ['Wilmington', 'Delaware', 'DE', '19801', '742 Market St'],
        ['Portland', 'Oregon', 'OR', '97209', '1120 NW Couch St'],
        ['Austin', 'Texas', 'TX', '78704', '2108 S Congress Ave'],
        ['Seattle', 'Washington', 'WA', '98109', '415 Westlake Ave N'],
        ['Denver', 'Colorado', 'CO', '80205', '2840 Larimer St'],
        ['Bozeman', 'Montana', 'MT', '59715', '318 E Main St'],
      ],
      phone: () => `+1 (${randInt(212, 919)}) ${randInt(210, 899)}-${randInt(1000, 9999)}`,
    },
    UK: {
      country: 'United Kingdom',
      firsts: ['Freya', 'Callum', 'Imogen', 'Oliver', 'Maisie', 'Declan', 'Phoebe', 'Gareth', 'Alistair', 'Harriet'],
      lasts: ['Ashworth', 'Bramwell', 'Hargreaves', 'MacLeod', 'Pemberton', 'Sinclair', 'Thornton', 'Whitfield'],
      places: [
        ['Bristol', 'England', 'ENG', 'BS1 5TR', '44 Queen Square'],
        ['Edinburgh', 'Scotland', 'SCT', 'EH2 2ER', '19 George St'],
        ['Cambridge', 'England', 'ENG', 'CB2 1TN', '27 King Parade'],
      ],
      phone: () => `+44 7${randInt(400, 999)} ${randInt(100000, 999999)}`,
    },
    DE: {
      country: 'Germany',
      firsts: ['Lukas', 'Johanna', 'Felix', 'Katharina', 'Moritz', 'Annika', 'Tobias', 'Miriam', 'Henrik', 'Lea'],
      lasts: ['Lindner', 'Hoffmann', 'Kruger', 'Brandt', 'Lehmann', 'Seidel', 'Richter', 'Hartmann', 'Winkler'],
      places: [
        ['Munich', 'Bavaria', 'BY', '80331', 'Sendlinger Str. 28'],
        ['Hamburg', 'Hamburg', 'HH', '20095', 'Spitalerstr. 14'],
        ['Frankfurt', 'Hesse', 'HE', '60311', 'Zeil 82'],
      ],
      phone: () => `+49 15${randInt(10, 99)} ${randInt(1000000, 9999999)}`,
    },
  };
  const ORGS = ['Northstar Analytics', 'Harborline Labs', 'Crestview Systems', 'Veridian Studio', 'Redwood Cloud', 'Bluepeak Research'];
  const ROLES = ['Backend Engineer', 'ML Researcher', 'QA Automation Lead', 'Platform Architect', 'DevOps Engineer'];

  function makeNaturalHandle(first, last) {
    const f = first.toLowerCase(), l = last.toLowerCase();
    const m = randInt(0, 4);
    if (m === 0) return `${f}.${l}${randInt(12, 98)}`;
    if (m === 1) return `${f[0]}${l}${randInt(88, 99)}`;
    if (m === 2) return `${f}-${l.slice(0, 5)}${randInt(1, 9)}`;
    if (m === 3) return `${f}_${l[0]}${randInt(2022, 2026)}`;
    return `${l}.${f.slice(0, 3)}${randInt(10, 89)}`;
  }

  function generateProfile(country = 'US', stateFilter = '') {
    const cc = POOLS[String(country || 'US').toUpperCase()] ? String(country).toUpperCase() : 'US';
    const pool = POOLS[cc];
    const first = pick(pool.firsts);
    const last = pick(pool.lasts);
    let place = pick(pool.places);
    if (stateFilter) {
      const hit = pool.places.find((p) => p[2].toUpperCase() === stateFilter.toUpperCase());
      if (hit) place = hit;
    }
    const [city, state, state_code, zip_code, address] = place;
    const handle = makeNaturalHandle(first, last);
    const by = randInt(1989, 2001);
    return {
      first_name: first,
      last_name: last,
      full_name: `${first} ${last}`,
      country: pool.country,
      country_code: cc,
      state,
      state_code,
      city,
      address,
      zip_code,
      phone: pool.phone(),
      email: `${handle}@demo-mail.test`,
      birthday: `${by}-${pad2(randInt(1, 12))}-${pad2(randInt(1, 28))}`,
      organization: pick(ORGS),
      job_title: pick(ROLES),
      address_source: 'Verified Geo Dataset (Demo)',
      address_verified: true,
    };
  }

  // ==================== Real Client-Side HAR Parser ====================
  function parseHarClient(harText, siteName = '') {
    let raw;
    try { raw = JSON.parse(harText); } catch (e) { return { error: `HAR JSON 解析失败: ${e.message}` }; }
    const entries = raw?.log?.entries;
    if (!Array.isArray(entries)) return { error: 'HAR 格式非法：缺少 log.entries 数组' };
    const staticExts = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.woff', '.woff2', '.ico', '.map'];
    const sigRules = [
      ['Turnstile', ['turnstile', 'challenges.cloudflare.com']],
      ['reCAPTCHA', ['recaptcha', 'g-recaptcha']],
      ['Clerk', ['clerk.', '/v1/client/sign_ups']],
      ['Supabase', ['supabase', '/auth/v1/signup']],
      ['JWT', ['access_token', 'id_token', 'eyj']],
      ['API Key', ['api_key', 'apikey', 'sk-']],
    ];
    const steps = [];
    const signals = new Set();
    let origin = '';
    const seen = new Set();
    for (const e of entries) {
      const req = e.request || {};
      const resp = e.response || {};
      const method = String(req.method || 'GET').toUpperCase();
      const url = String(req.url || '');
      let u;
      try { u = new URL(url); } catch { continue; }
      if (staticExts.some((ext) => u.pathname.toLowerCase().endsWith(ext))) continue;
      const reqText = String(req.postData?.text || '');
      const respText = String(resp.content?.text || '');
      const blob = `${url.toLowerCase()}\n${reqText.toLowerCase()}\n${respText.toLowerCase()}`;
      const stepSigs = [];
      for (const [lbl, kws] of sigRules) {
        if (kws.some((k) => blob.includes(k))) { signals.add(lbl); stepSigs.push(lbl); }
      }
      const isApi = method !== 'GET' || /\/(api|auth|signup|register|verify|token|keys|v1|v2)\b/i.test(u.pathname) || String(resp.content?.mimeType || '').includes('json');
      if (!isApi) continue;
      if (!origin) origin = u.origin;
      const key = `${method}:${u.pathname}`;
      if (seen.has(key)) continue;
      seen.add(key);
      let reqKeys = [], respKeys = [];
      try { const o = JSON.parse(reqText); if (o && typeof o === 'object') reqKeys = Object.keys(o).slice(0, 8); } catch {}
      try { const o = JSON.parse(respText); if (o && typeof o === 'object') respKeys = Object.keys(o).slice(0, 8); } catch {}
      steps.push({ method, url, path: u.pathname, status: Number(resp.status || 200), req_keys: reqKeys, resp_keys: respKeys, signals: stepSigs });
    }
    const slug = String(siteName || '').trim().replace(/[^a-zA-Z0-9_]/g, '_') || (origin ? new URL(origin).hostname.replace(/^www\./, '').split('.')[0].replace(/[^a-zA-Z0-9_]/g, '_') : 'custom_site');
    const cls = slug.split('_').filter(Boolean).map((s) => s[0].toUpperCase() + s.slice(1)).join('') + 'ProtocolAdapter';
    const stepLines = steps.slice(0, 8).map((st, idx) =>
      `        # Step ${idx + 1}: ${st.method} ${st.path} (HTTP ${st.status})\n` +
      `        r${idx + 1} = sess.request("${st.method}", f"{self.base_url}${st.path}", json={${st.req_keys.map((k) => `"${k}": identity.get("${k}", "")`).join(', ')}})\n` +
      `        r${idx + 1}.raise_for_status()`
    );
    const skeleton = [
      `"""Auto-extracted protocol skeleton for ${slug}."""`,
      'import requests',
      'from typing import Dict, Any',
      'from core.adapter import BaseSiteAdapter',
      'from core.identity import generate_identity',
      '',
      `class ${cls}(BaseSiteAdapter):`,
      `    base_url = "${origin || 'https://example.com'}"`,
      '',
      '    def run_protocol(self, identity: Dict[str, Any]) -> bool:',
      '        sess = requests.Session()',
      ...(stepLines.length ? stepLines : ['        # 补充目标注册 API 端点']),
      '        return True',
    ].join('\n');
    return {
      har_file: 'demo_upload.har',
      site: slug,
      origin: origin || 'https://example.com',
      total_entries: entries.length,
      api_steps: steps.slice(0, 30),
      signals: Array.from(signals),
      skeleton,
      written_path: '',
    };
  }

  // ==================== In-Memory Stateful Studio Demo Store ====================
  const rawAdapters = Array.isArray(window.__RH_DEMO_ADAPTERS__) ? window.__RH_DEMO_ADAPTERS__ : [];
  const rawGeometry = window.__RH_DEMO_GEOMETRY__ || { screen_resolution: '1920x1080', work_area: { left: 0, top: 0, width: 1536, height: 864 } };

  const snapTurnstile = makeSnapshotSvg({
    title: 'Cloudflare Turnstile Challenge Timeout',
    url: 'https://portal.nova-api.example.com/signup',
    badge: '人机验证',
    badgeColor: '#38bdf8',
    detail: 'Turnstile iframe token 未在 25s 内返回，自动归档现场黑匣子快照。',
    selector: 'iframe[src*="challenges.cloudflare.com"] · state=waiting',
  });
  const snap429 = makeSnapshotSvg({
    title: 'Upstream Rate Limit (HTTP 429)',
    url: 'https://console.acmespeech.example.com/api/v1/signup',
    badge: '频控重试',
    badgeColor: '#fbbf24',
    detail: '出口 IP 触发频控阈值（Retry-After: 60s），建议切换干净住宅出口。',
    selector: 'POST /api/v1/signup -> 429 Too Many Requests',
  });

  const trendSeed = [
    [4, 1], [6, 1], [5, 0], [8, 2], [7, 1], [9, 1], [6, 0],
    [11, 2], [8, 1], [10, 1], [12, 2], [9, 1], [14, 1], [10, 1],
  ];

  const todayStr = formatDateOffset(0).full_date;
  const state = {
    meta: {
      edition: 'community',
      brand: 'RegisterHub',
      subtitle: '开源社区工作台',
      version: '2.1.0',
      features: {
        fleet: true,
        materials: false,
        recycle: false,
        mailhub_3100: false,
        easy_proxies: false,
        magpie: false,
        editions_sync: false,
        har_studio: true,
        compound: false,
        keys_vault: true,
        notify: false,
        pro_sites: true,
        pro_adapters: true,
        adapter_editor: true,
        scheduler: false,
        proxy_import: false,
        accounts: true,
        accounts_delete: true,
        tools: true,
        tools_extras: true,
        password_change: false,
        ai_agent: true,
        builtin_mail: true,
        builtin_proxies: true,
        single_thread_only: true,
        demo_mode: true,
        github_url: 'https://github.com/waw666waw666/RegisterHub',
      },
    },
    builtinMailSeq: 7,
    builtinMail: [
      { id: 1, email: 'hannah.callahan@outlook-demo.test', provider_kind: 'outlook_oauth', protocol: 'graph', client_id: '9e5f94bc-e8a4-4e73-b8be-63364c29d753', has_password: true, has_refresh_token: true, has_link_url: false, imap_host: 'outlook.office365.com', imap_port: 993, status: 'valid', leased: false, leased_by: '', use_count: 2, last_checked_at: Math.floor(Date.now() / 1000) - 300, last_error: '', created_at: Math.floor(Date.now() / 1000) - 86400 },
      { id: 2, email: 'caleb.sorensen@outlook-demo.test', provider_kind: 'outlook_oauth', protocol: 'imap_xoauth2', client_id: '9e5f94bc-e8a4-4e73-b8be-63364c29d753', has_password: true, has_refresh_token: true, has_link_url: false, imap_host: 'outlook.office365.com', imap_port: 993, status: 'valid', leased: false, leased_by: '', use_count: 1, last_checked_at: Math.floor(Date.now() / 1000) - 600, last_error: '', created_at: Math.floor(Date.now() / 1000) - 72000 },
      { id: 3, email: 'nadia.cloud91@icloud-demo.test', provider_kind: 'icloud_link', protocol: 'icloud_link', client_id: '', has_password: false, has_refresh_token: false, has_link_url: true, imap_host: '', imap_port: 0, status: 'valid', leased: false, leased_by: '', use_count: 0, last_checked_at: Math.floor(Date.now() / 1000) - 420, last_error: '', created_at: Math.floor(Date.now() / 1000) - 54000 },
      { id: 4, email: 'owen.fletcher@icloud-demo.test', provider_kind: 'icloud_link', protocol: 'icloud_link', client_id: '', has_password: false, has_refresh_token: false, has_link_url: true, imap_host: '', imap_port: 0, status: 'valid', leased: false, leased_by: '', use_count: 0, last_checked_at: Math.floor(Date.now() / 1000) - 900, last_error: '', created_at: Math.floor(Date.now() / 1000) - 42000 },
      { id: 5, email: 'claire.mercer@demo-imap.example.org', provider_kind: 'imap', protocol: 'imap_plain', client_id: '', has_password: true, has_refresh_token: false, has_link_url: false, imap_host: 'imap.example.org', imap_port: 993, status: 'valid', leased: false, leased_by: '', use_count: 1, last_checked_at: Math.floor(Date.now() / 1000) - 1200, last_error: '', created_at: Math.floor(Date.now() / 1000) - 36000 },
      { id: 6, email: 'trevor.new@outlook-demo.test', provider_kind: 'outlook_oauth', protocol: 'unknown', client_id: '9e5f94bc-e8a4-4e73-b8be-63364c29d753', has_password: true, has_refresh_token: true, has_link_url: false, imap_host: 'outlook.office365.com', imap_port: 993, status: 'unknown', leased: false, leased_by: '', use_count: 0, last_checked_at: 0, last_error: '', created_at: Math.floor(Date.now() / 1000) - 1800 },
    ],
    builtinProxySeq: 7,
    builtinProxySourceSeq: 2,
    builtinProxies: [
      { id: 1, kind: 'residential_gateway', label: 'Smartproxy US Sticky 住宅网关', scheme: 'http', host: 'gate.demo-residential.example', port: 10001, masked_url: 'http://***@gate.demo-residential.example:10001', has_auth: true, preset: 'smartproxy', session_template: '{user}-country-{country}-session-{session}', country: 'US', enabled: true, available: true, browser_compatible: true, exit_ip: '198.51.100.42', residential: true, score: 98, grade: 'S', latency_ms: 142, last_checked_at: Math.floor(Date.now() / 1000) - 240, last_error: '' },
      { id: 2, kind: 'static', label: 'us-west-res-01.example:8080', scheme: 'http', host: 'us-west-res-01.example', port: 8080, masked_url: 'http://***@us-west-res-01.example:8080', has_auth: true, preset: '', session_template: '', country: 'US', enabled: true, available: true, browser_compatible: true, exit_ip: '198.51.100.88', residential: true, score: 96, grade: 'S', latency_ms: 186, last_checked_at: Math.floor(Date.now() / 1000) - 360, last_error: '' },
      { id: 3, kind: 'static', label: 'ca-tor-isp-02.example:8080', scheme: 'http', host: 'ca-tor-isp-02.example', port: 8080, masked_url: 'http://***@ca-tor-isp-02.example:8080', has_auth: true, preset: '', session_template: '', country: 'CA', enabled: true, available: true, browser_compatible: true, exit_ip: '203.0.113.19', residential: true, score: 95, grade: 'S', latency_ms: 214, last_checked_at: Math.floor(Date.now() / 1000) - 410, last_error: '' },
      { id: 4, kind: 'static', label: 'uk-lon-03.example:1080', scheme: 'socks5', host: 'uk-lon-03.example', port: 1080, masked_url: 'socks5://uk-lon-03.example:1080', has_auth: false, preset: '', session_template: '', country: 'GB', enabled: true, available: true, browser_compatible: true, exit_ip: '203.0.113.74', residential: false, score: 84, grade: 'A', latency_ms: 268, last_checked_at: Math.floor(Date.now() / 1000) - 520, last_error: '' },
      { id: 5, kind: 'api_extract', label: '短效住宅提取 #1', scheme: 'http', host: '192.0.2.55', port: 23001, masked_url: 'http://192.0.2.55:23001', has_auth: false, preset: '', session_template: '', country: 'JP', source_id: 1, expires_at: Math.floor(Date.now() / 1000) + 780, enabled: true, available: true, browser_compatible: true, exit_ip: '192.0.2.55', residential: true, score: 92, grade: 'S', latency_ms: 164, last_checked_at: Math.floor(Date.now() / 1000) - 180, last_error: '' },
      { id: 6, kind: 'static', label: 'sg-node-unprobed.example:8080', scheme: 'http', host: 'sg-node-unprobed.example', port: 8080, masked_url: 'http://***@sg-node-unprobed.example:8080', has_auth: true, preset: '', session_template: '', country: 'SG', enabled: true, available: false, browser_compatible: true, exit_ip: '', residential: false, score: 0, grade: '', latency_ms: 0, last_checked_at: 0, last_error: '' },
    ],
    builtinProxySources: [
      { id: 1, kind: 'api_extract', label: '示例短效代理 API 提取源', masked_url: 'https://api.proxy-demo.example/get?num=5&format=txt', default_scheme: 'http', min_available: 3, ttl_minutes: 15, enabled: true, last_pulled_at: Math.floor(Date.now() / 1000) - 180, last_count: 1, last_error: '', active_entries: 1 },
    ],
    agentSkills: [
      { id: '01_protocol_first', name: '01_protocol_first.md', title: '协议先行与接口嗅探', enabled: true, size_kb: 1.8, content: '# 协议先行与接口嗅探\n\n优先通过网络抓包或 JS 分析定位注册与提 Key 的真实 REST 接口，仅在人机校验步骤使用浏览器。' },
      { id: '02_stealth_browser', name: '02_stealth_browser.md', title: '环境自洽与拟人交互', enabled: true, size_kb: 1.6, content: '# 环境自洽与拟人交互\n\n启用原生 Chrome 通道与 patchright 隐匿内核，表单输入走拟人键入与阶段守门员断言。' },
      { id: '03_mail_otp', name: '03_mail_otp.md', title: '多通道接码与验证码提取', enabled: true, size_kb: 1.4, content: '# 多通道接码与验证码提取\n\n优先从内置邮箱池（Outlook OAuth2 / iCloud / IMAP）租借邮箱并按时间窗增量拉取 OTP。' },
    ],
    adapters: rawAdapters.map((a) => ({ ...a })),
    geometry: JSON.parse(JSON.stringify(rawGeometry)),
    dailyTrend: trendSeed.map(([s, f], idx) => ({
      ...formatDateOffset(13 - idx),
      success: s,
      failed: f,
    })),
    accounts: [
      { id: 'acc_1', project: 'acmespeech', email: 'hannah.callahan42@demo-mail.test', password: 'Ac#94xK!mP2vQ7', credential: 'ac_demo_9f4a8c21e0b74d63a19e5c82f704b319a6e82d14', has_key: true, kind: 'API Key', ip: '198.51.100.42', created_at: `${todayStr} 20:14` },
      { id: 'acc_2', project: 'novaapi', email: 'c.sorensen88@demo-mail.test', password: 'Nv@72nR$kW5bL9', credential: 'sk-nv-demo-7b2c19f0e4a68d31c509ab42ef71d830', has_key: true, kind: 'API Key', ip: '198.51.100.42', created_at: `${todayStr} 19:51` },
      { id: 'acc_3', project: 'studio_oauth', email: 'nadia_delgado@example.org', password: 'St!58pT#vH3yN6', credential: 'st_demo_3e19d74b0a58c2f619e4b803d2a7c514', has_key: true, kind: 'API Key', ip: '198.51.100.42', created_at: `${todayStr} 19:18` },
      { id: 'acc_4', project: 'acmespeech', email: 't.whitaker91@demo-mail.test', password: 'Ac$31zM@qR8jK4', credential: 'ac_demo_4c71b9e2f5a083d62e91c407b8a3f652d190e84a', has_key: true, kind: 'API Key', ip: '198.51.100.42', created_at: `${todayStr} 18:45` },
      { id: 'acc_5', project: 'slidersandbox', email: 'elena.merc24@example.org', password: 'Sl%64vL!pW9xC2', credential: '', has_key: false, kind: '普通账号', ip: '198.51.100.42', created_at: `${todayStr} 18:36` },
      { id: 'acc_6', project: 'devcloud', email: 'lukas.brandt77@demo-mail.test', password: 'Dc&83kF#tN4mP5', credential: '', has_key: false, kind: '普通账号', ip: '198.51.100.42', created_at: `${todayStr} 17:20` },
    ],
    jobs: [
      {
        id: 'job_demo_103', project: 'acmespeech', adapter: 'acmespeech', status: 'done', pid: 18420, concurrency: 1, count: 1, returncode: 0,
        started_at: `${todayStr} 20:14:09`, duration_s: 11.4,
        logs: [
          { ts: '20:14:09', level: 'info', text: '[RegisterHub] 启动单线程引擎 · adapter=acmespeech · count=1' },
          { ts: '20:14:10', level: 'info', text: '[Stealth] 启用 patchright 零 Runtime.enable 原生 Chrome 自洽内核' },
          { ts: '20:14:14', level: 'info', text: '[AcmeSpeech] 填表完成并完成模拟人机校验与 6 位 OTP 接码' },
          { ts: '20:14:20', level: 'ok', text: '[OK] 纯 REST 直出 40 位示例 API Key: ac_demo_9f4a...2d14' },
        ],
      },
      {
        id: 'job_demo_102', project: 'novaapi', adapter: 'novaapi', status: 'done', pid: 17904, concurrency: 1, count: 1, returncode: 0,
        started_at: `${todayStr} 19:51:33`, duration_s: 8.7,
        logs: [
          { ts: '19:51:33', level: 'info', text: '[RegisterHub] 启动单线程引擎 · adapter=novaapi · count=1' },
          { ts: '19:51:38', level: 'info', text: '[NovaAPI] Turnstile 校验放行，提取页面卡片示例 API Key' },
          { ts: '19:51:41', level: 'ok', text: '[OK] 示例 API Key 落盘: sk-nv-demo-7b2c...d830' },
        ],
      },
      {
        id: 'job_demo_101', project: 'slidersandbox', adapter: 'slidersandbox', status: 'done', pid: 16210, concurrency: 1, count: 1, returncode: 0,
        started_at: `${todayStr} 18:36:12`, duration_s: 13.8,
        logs: [
          { ts: '18:36:12', level: 'info', text: '[RegisterHub] 启动单线程引擎 · adapter=slidersandbox · count=1' },
          { ts: '18:36:16', level: 'info', text: '[Vision] OpenCV 双通 Canny 缺口匹配 x=164px (score=0.941)，三次贝塞尔轨迹拖动' },
          { ts: '18:36:25', level: 'ok', text: '[OK] 滑块一次通过并完成模拟注册: elena.merc24@example.org' },
        ],
      },
    ],
    activeJobId: '',
    jobTimers: [],
    jobSubscribers: new Map(),
    jobSeq: 104,
    settings: {
      edition: 'community',
      proxy_mode: 'builtin',
      proxy_residential_url: 'http://127.0.0.1:7897',
      proxy_cdp_endpoint: '',
      mail_provider: 'builtin',
      mail_hub_api: '',
      mail_cf_wildcard_domain: '',
      mail_imap_server: 'imap.example.com',
      mail_imap_port: 993,
      mail_imap_user: 'demo-inbox@example.org',
      mail_imap_password: '***',
      run_headless: false,
      run_delay_between_s: 0.5,
    },
    llmProfiles: [
      {
        id: 'community_deepseek',
        name: 'DeepSeek V4.1 (演示通道)',
        format: 'openai',
        model: 'deepseek-chat',
        base_url: 'https://api.deepseek.com/v1',
        proxy_url: '',
        api_key_hint: 'sk-de...demo',
        has_key: true,
        max_tokens: 4096,
        max_tokens_field: 'max_tokens',
        temperature: 0.2,
        priority: 1,
        context_window_k: 128,
        thinking_mode: 'enabled',
        reasoning_effort: 'medium',
        streaming: true,
        active: true,
        enabled: true,
        pinned_models: ['deepseek-chat', 'deepseek-reasoner', 'gpt-4o-mini'],
        catalog_models: ['deepseek-chat', 'deepseek-reasoner', 'gpt-4o-mini', 'claude-sonnet-4', 'gemini-2.5-flash', 'qwen3-coder-plus'],
        health: { status: 'ok', state: 'ok', last_latency_ms: 196 },
      },
    ],
    activeLlmId: 'community_deepseek',
    agentConfig: {
      name: 'RegisterHub 开源单线程 Agent',
      description: '单线程安全自主注册专家：自动探测表单、审查适配器、试跑 1 号并输出结构化排障报告',
      llm_profile_id: 'community_deepseek',
      max_steps: 16,
      system_prompt: '你是 RegisterHub 开源社区版（单线程安全模式）的自主注册工程师 AI 代理。\n1. 先调用 update_plan 制定 3~4 步计划；\n2. 使用 probe_url 探测表单与防护特征，复用 sites/_template.py 编写适配器；\n3. 严禁虚构成功或写入假占位符，必须通过 run_adapter_once 实测验收。',
      enabled_tools: ['update_plan', 'probe_url', 'list_adapters', 'read_adapter', 'write_adapter', 'run_adapter_once', 'read_failures'],
      enabled_skills: [],
    },
    availableTools: [
      { name: 'update_plan', label: '更新执行计划', description: '实时更新左侧步骤进度清单', risk: 'read' },
      { name: 'probe_url', label: '页面表单与防护嗅探', description: 'HTTP/DOM 探测表单选择器与 Turnstile/reCAPTCHA/Clerk 信号', risk: 'read' },
      { name: 'list_adapters', label: '列出站点适配器', description: '扫描 sites/*.py 全部本地适配器清单', risk: 'read' },
      { name: 'read_adapter', label: '读取适配器源码', description: '安全读取指定 sites/<name>.py 代码', risk: 'read' },
      { name: 'write_adapter', label: '写入适配器代码', description: 'AST 语法校验与防假成功检查后原子写入 sites/<name>.py', risk: 'write' },
      { name: 'run_adapter_once', label: '单线程试跑 1 号', description: '严格单线程执行 1 号实测并返回日志与成号增量', risk: 'exec' },
      { name: 'read_failures', label: '读取失败日志', description: '读取 results/failed.txt 定位最近报错根因', risk: 'read' },
    ],
    agentSessions: [],
    activeAgentSid: '',
    agentTimers: [],
    agentSubscribers: new Map(),
  };

  function seedAgentSessions() {
    state.agentSessions = [
      {
        id: 'ag_demo_acmespeech',
        title: 'AcmeSpeech 示例站表单探测与协议出 Key',
        status: 'done',
        target_url: 'https://console.acmespeech.example.com/signup',
        llm_profile_id: 'community_deepseek',
        llm_model: 'deepseek-chat',
        model: 'deepseek-chat',
        steps_count: 4,
        input_tokens: 4820,
        output_tokens: 1140,
        cache_read_tokens: 3900,
        last_tok_s: 158.4,
        last_ttft_ms: 420,
        last_seq: 8,
        created_at: `${todayStr} 20:05`,
        updated_at: `${todayStr} 20:06`,
        plan_steps: [
          { id: 'p1', title: '探测示例注册页 DOM 与人机防护信号', status: 'done' },
          { id: 'p2', title: '审查 sites/acmespeech.py REST 提 Key 逻辑', status: 'done' },
          { id: 'p3', title: '单线程试跑 1 号验收示例 Key 产出', status: 'done' },
          { id: 'p4', title: '汇总实测报告与导出指引', status: 'done' },
        ],
        usage: { input_tokens: 4820, output_tokens: 1140, total_tokens: 5960, cache_read_tokens: 3900, last_tok_s: 158.4, last_ttft_ms: 420 },
        messages: [
          { id: 'm1', role: 'user', content: '探测 https://console.acmespeech.example.com/signup 并单线程试跑 1 号验证出 Key', ts: `${todayStr} 20:05:11` },
          {
            id: 'm2', role: 'tool', tool_call_id: 'tc_ac_1', tool_name: 'probe_url', status: 'done', ok: true, duration_ms: 680,
            tool_args: { url: 'https://console.acmespeech.example.com/signup' },
            tool_result: JSON.stringify({ detected_count: 3, signals: ['Email OTP Flow', 'REST API Key Minting'], selectors: { email: '#email', password: '#new-password' } }, null, 2),
            ts: `${todayStr} 20:05:14`,
          },
          {
            id: 'm3', role: 'tool', tool_call_id: 'tc_ac_2', tool_name: 'run_adapter_once', status: 'done', ok: true, duration_ms: 11420,
            tool_args: { adapter: 'acmespeech' },
            tool_result: JSON.stringify({ ok: true, email: 'hannah.callahan42@demo-mail.test', api_key: 'ac_demo_9f4a...2d14', mode: 'synthetic_demo' }, null, 2),
            ts: `${todayStr} 20:05:26`,
          },
          {
            id: 'm4', role: 'assistant', model: 'deepseek-chat',
            thinking: '已通过 probe_url 确认虚拟演示站 #email 与 #new-password 选择器以及 OTP 提 Key 链路；调用 run_adapter_once 模拟 11.4s 产出 40 位示例 API Key。',
            metrics: { model: 'deepseek-chat', input_tokens: 4820, output_tokens: 1140, cache_read_tokens: 3900, cache_hit_pct: 81, tok_s: 158.4, ttft_ms: 420, latency_ms: 5200 },
            content:
              '### AcmeSpeech 虚拟示例站注册与提 Key 演示完成\n\n' +
              '| 检查项 | 演示结果 | 备注 |\n' +
              '| :--- | :--- | :--- |\n' +
              '| 目标入口 | `https://console.acmespeech.example.com/signup` | RFC 2606 虚拟演示域名 |\n' +
              '| 协议提 Key | **通过** (`11.4s`) | 拿到 Session 后直接 REST 签发示例 Key |\n' +
              '| 凭据落盘 | `ac_demo_9f4a...2d14` | 已同步至「账号资产」支持 CSV/Bitwarden 导出 |\n\n' +
              '```python\n' +
              '# 关键协议提 Key 片段（见 sites/acmespeech.py）\n' +
              'resp = session.post(f"{API}/projects/default/keys", json={"name": "RegisterHub-Demo"})\n' +
              'api_key = resp.json()["key"]\n' +
              '```\n\n' +
              '> 提示：你可以在下方直接输入任意虚拟 URL 或问题，体验 **实时流式 Markdown 排版** 与 **可折叠工具调用流**（纯前端模拟）。',
            ts: `${todayStr} 20:05:32`,
          },
        ],
        events: [],
      },
      {
        id: 'ag_demo_slider',
        title: 'SliderSandbox OpenCV 滑块缺口排障',
        status: 'done',
        target_url: 'https://auth.slidersandbox.example.com/register',
        llm_profile_id: 'community_deepseek',
        llm_model: 'deepseek-chat',
        model: 'deepseek-chat',
        steps_count: 3,
        input_tokens: 3190,
        output_tokens: 740,
        cache_read_tokens: 2400,
        last_tok_s: 142.1,
        last_ttft_ms: 390,
        last_seq: 5,
        created_at: `${todayStr} 18:30`,
        updated_at: `${todayStr} 18:31`,
        plan_steps: [
          { id: 'q1', title: '读取最近失败日志定位偏移根因', status: 'done' },
          { id: 'q2', title: '校验 Canny 边缘匹配与贝塞尔拖动曲线', status: 'done' },
          { id: 'q3', title: '单线程复测 1 号验收通过', status: 'done' },
        ],
        usage: { input_tokens: 3190, output_tokens: 740, total_tokens: 3930, cache_read_tokens: 2400, last_tok_s: 142.1, last_ttft_ms: 390 },
        messages: [
          { id: 'qm1', role: 'user', content: '排查 https://auth.slidersandbox.example.com/register 滑块偏移并复测 1 号', ts: `${todayStr} 18:30:10` },
          {
            id: 'qm2', role: 'tool', tool_call_id: 'tc_sl_1', tool_name: 'run_adapter_once', status: 'done', ok: true, duration_ms: 13800,
            tool_args: { adapter: 'slidersandbox' },
            tool_result: JSON.stringify({ ok: true, predicted_x: 164, score: 0.941, email: 'elena.merc24@example.org' }, null, 2),
            ts: `${todayStr} 18:30:24`,
          },
          {
            id: 'qm3', role: 'assistant', model: 'deepseek-chat',
            metrics: { model: 'deepseek-chat', input_tokens: 3190, output_tokens: 740, cache_read_tokens: 2400, cache_hit_pct: 75, tok_s: 142.1, ttft_ms: 390, latency_ms: 4100 },
            content: '已完成 **SliderSandbox** 离线 OpenCV 双通边缘滑块求解验证，匹配置信度 `0.941`，单号复测一次通过。',
            ts: `${todayStr} 18:30:29`,
          },
        ],
        events: [],
      },
    ];
  }
  seedAgentSessions();

  function jobSummary(j) {
    return {
      id: j.id,
      project: j.project,
      adapter: j.adapter,
      status: j.status,
      pid: j.pid,
      concurrency: 1,
      count: j.count,
      returncode: j.returncode,
      started_at: j.started_at,
      duration_s: j.duration_s,
      log_lines: j.logs.length,
    };
  }

  function agentSummary(s) {
    return {
      id: s.id,
      title: s.title,
      status: s.status,
      target_url: s.target_url,
      llm_profile_id: s.llm_profile_id,
      llm_model: s.llm_model,
      model: s.model,
      steps_count: s.steps_count,
      message_count: s.messages.length,
      input_tokens: s.input_tokens,
      output_tokens: s.output_tokens,
      cache_read_tokens: s.cache_read_tokens || 0,
      last_tok_s: s.last_tok_s || 0,
      last_ttft_ms: s.last_ttft_ms || 0,
      last_seq: s.last_seq,
      created_at: s.created_at,
      updated_at: s.updated_at,
    };
  }

  // ==================== Fake EventSource for Live Job & Agent SSE ====================
  class MockEventSource {
    constructor(url) {
      this.url = String(url);
      this.readyState = 0;
      this.onopen = null;
      this.onmessage = null;
      this.onerror = null;
      this._listeners = {};
      this._closed = false;

      const parsed = extractApiPath(this.url);
      if (!parsed) {
        if (ORIGINAL_EVENTSOURCE) return new ORIGINAL_EVENTSOURCE(url);
        this.readyState = 2;
        return;
      }
      const mJob = parsed.path.match(/^\/api\/jobs\/([^/]+)\/stream$/);
      const mAgent = parsed.path.match(/^\/api\/agent\/sessions\/([^/]+)\/stream$/);

      setTimeout(() => {
        if (this._closed) return;
        this.readyState = 1;
        this._emit('open', {});
        if (mJob) this._attachJob(decodeURIComponent(mJob[1]));
        else if (mAgent) this._attachAgent(decodeURIComponent(mAgent[1]));
        else this._emit('error', {});
      }, 25);
    }
    addEventListener(type, fn) {
      if (!this._listeners[type]) this._listeners[type] = [];
      this._listeners[type].push(fn);
    }
    removeEventListener(type, fn) {
      if (!this._listeners[type]) return;
      this._listeners[type] = this._listeners[type].filter((x) => x !== fn);
    }
    _emit(type, ev) {
      if (this._closed) return;
      const h = this[`on${type}`];
      if (typeof h === 'function') h.call(this, ev);
      for (const fn of this._listeners[type] || []) fn.call(this, ev);
    }
    pushData(obj) {
      if (this._closed) return;
      const evObj = { data: JSON.stringify(obj), lastEventId: obj.seq != null ? String(obj.seq) : '' };
      this._emit('message', evObj);
    }
    close() {
      this._closed = true;
      this.readyState = 2;
      if (this._cleanup) { this._cleanup(); this._cleanup = null; }
    }
    _attachJob(jid) {
      const job = state.jobs.find((x) => x.id === jid);
      if (!job) { this._emit('error', {}); return; }
      for (const l of job.logs) this.pushData({ type: 'log', ...l });
      if (job.status !== 'running') {
        this.pushData({ type: 'status', status: job.status, returncode: job.returncode });
        return;
      }
      if (!state.jobSubscribers.has(jid)) state.jobSubscribers.set(jid, new Set());
      const set = state.jobSubscribers.get(jid);
      set.add(this);
      this._cleanup = () => set.delete(this);
    }
    _attachAgent(sid) {
      const sess = state.agentSessions.find((x) => x.id === sid);
      if (!sess) { this._emit('error', {}); return; }
      this.pushData({ type: 'connected', seq: sess.last_seq });
      if (!state.agentSubscribers.has(sid)) state.agentSubscribers.set(sid, new Set());
      const set = state.agentSubscribers.get(sid);
      set.add(this);
      this._cleanup = () => set.delete(this);
    }
  }
  window.EventSource = MockEventSource;

  // ==================== Simulated Single-Thread Runner ====================
  function broadcastJob(jid, payload) {
    const subs = state.jobSubscribers.get(jid);
    if (!subs) return;
    for (const es of Array.from(subs)) es.pushData(payload);
  }

  function startSimulatedJob({ project, site, adapter, count = 1 }) {
    if (state.activeJobId) return { ok: false, error: `单线程模式已有运行中任务 (${state.activeJobId})` };
    const name = String(project || site || adapter || 'demo').trim();
    const targetAd = state.adapters.find((a) => a.name === name) || state.adapters[0];
    const adName = targetAd ? targetAd.name : name;
    const runs = Math.max(1, Math.min(20, Number(count) || 1));
    const jid = `job_demo_${state.jobSeq++}`;
    const startMs = Date.now();
    const job = {
      id: jid, project: adName, adapter: adName, status: 'running', pid: randInt(12000, 46000),
      concurrency: 1, count: runs, returncode: null, started_at: nowDateTime(), duration_s: 0, logs: [],
    };
    state.jobs.unshift(job);
    state.activeJobId = jid;

    const pushLog = (text, level = 'info') => {
      const entry = { ts: nowTime(), level, text };
      job.logs.push(entry);
      broadcastJob(jid, { type: 'log', ...entry });
    };

    const keyPrefixMap = { acmespeech: 'ac_demo_', novaapi: 'sk-nv-demo-', studio_oauth: 'st_demo_' };
    const steps = [
      { delay: 160, level: 'info', text: `[Demo] 启动单线程模拟试跑 · adapter=${adName} · count=${runs} · -c 1` },
      { delay: 540, level: 'info', text: '[Stealth] 注入原生 Chrome 自洽内核 (patchright 零 Runtime.enable)' },
    ];
    let t = 960;
    for (let i = 0; i < runs; i += 1) {
      const p = generateProfile('US');
      const pwd = makePassword(14);
      const pfx = keyPrefixMap[adName];
      const key = pfx ? `${pfx}${randHex(32)}` : '';
      const acc = {
        id: `acc_${Date.now()}_${i}`, project: adName, email: p.email, password: pwd,
        credential: key, has_key: Boolean(key), kind: key ? 'API Key' : '普通账号', ip: '198.51.100.42', created_at: nowDateTime().slice(0, 16),
      };
      steps.push({ delay: t, level: 'info', text: `[#${i + 1}/${runs}] 生成多国高熵人设: ${p.full_name} <${p.email}>` });
      t += 480;
      steps.push({ delay: t, level: 'info', text: `[#${i + 1}/${runs}] 打开 ${targetAd?.target_url || 'embedded'}，拟人键入表单并通过校验` });
      t += 520;
      steps.push({
        delay: t, level: 'ok',
        text: key ? `[OK] [#${i + 1}/${runs}] 模拟成号并落盘: ${p.email} (Key: ${maskKey(key)})` : `[OK] [#${i + 1}/${runs}] 模拟成号并落盘: ${p.email}`,
        addAcc: acc,
      });
      t += 320;
    }

    state.jobTimers = [];
    for (const s of steps) {
      state.jobTimers.push(setTimeout(() => {
        if (job.status !== 'running') return;
        pushLog(s.text, s.level);
        if (s.addAcc) {
          state.accounts.unshift(s.addAcc);
          const lastBar = state.dailyTrend[state.dailyTrend.length - 1];
          if (lastBar) lastBar.success += 1;
        }
      }, s.delay));
    }
    state.jobTimers.push(setTimeout(() => {
      if (job.status !== 'running') return;
      job.status = 'done';
      job.returncode = 0;
      job.duration_s = Number(((Date.now() - startMs) / 1000).toFixed(1));
      state.activeJobId = '';
      pushLog(`[Demo] 单站试跑模拟完成 · 新增 ${runs} 条模拟账号（纯前端演示）`, 'ok');
      broadcastJob(jid, { type: 'status', status: 'done', returncode: 0 });
    }, t + 260));

    return { ok: true, job: jobSummary(job) };
  }

  function stopSimulatedJob(jid) {
    const job = state.jobs.find((x) => x.id === jid);
    if (!job) return { ok: false, error: 'Job not found' };
    state.jobTimers.forEach(clearTimeout);
    state.jobTimers = [];
    if (job.status === 'running') {
      job.status = 'stopped';
      job.returncode = -15;
      state.activeJobId = '';
      const entry = { ts: nowTime(), level: 'warn', text: '[Demo] 已手动停止当前模拟任务' };
      job.logs.push(entry);
      broadcastJob(jid, { type: 'log', ...entry });
      broadcastJob(jid, { type: 'status', status: 'stopped', returncode: -15 });
    }
    return { ok: true, status: job.status };
  }

  // ==================== Simulated Live-Streaming Markdown AI Agent ====================
  function pushAgentEvent(sess, ev) {
    const payload = { ...ev, seq: ++sess.last_seq, ts: ev.ts || nowDateTime() };
    sess.events.push(payload);
    sess.updated_at = nowDateTime().slice(0, 16);
    const subs = state.agentSubscribers.get(sess.id);
    if (subs) for (const es of Array.from(subs)) es.pushData(payload);
    return payload;
  }

  function startSimulatedAgentTurn(sess, content, targetUrl) {
    if (targetUrl) sess.target_url = targetUrl;
    const urlDisplay = sess.target_url || 'https://example.com/signup';
    let slug = 'demo_site';
    try { slug = new URL(urlDisplay).hostname.replace(/^www\./, '').split('.')[0].replace(/[^a-zA-Z0-9_]/g, '_') || 'demo_site'; } catch {}
    if (!sess.title || sess.title.startsWith('新注册任务会话')) {
      sess.title = targetUrl ? `${slug} 自主注册分析` : content.slice(0, 26);
    }

    sess.status = 'running';
    state.activeAgentSid = sess.id;

    const userMsg = { id: `m_u_${Date.now()}`, role: 'user', content, ts: nowDateTime() };
    sess.messages.push(userMsg);
    pushAgentEvent(sess, { type: 'status', status: 'running' });
    pushAgentEvent(sess, { type: 'user_msg', message: userMsg, content });

    const planSteps = [
      '探测目标注册页 DOM 表单与防护信号',
      `生成并校验 sites/${slug}.py 适配器骨架`,
      '单线程安全试跑 1 号验收产物',
      '输出流式结构化验收结论',
    ];
    const makePlan = (doneCnt, runIdx) => planSteps.map((title, i) => ({
      id: `p_${i}`, title, status: i < doneCnt ? 'done' : i === runIdx ? 'running' : 'pending',
    }));

    const cid1 = `tc_p_${randHex(4)}`;
    const cid2 = `tc_r_${randHex(4)}`;
    const schedule = (ms, fn) => {
      state.agentTimers.push(setTimeout(() => { if (sess.status === 'running') fn(); }, ms));
    };
    state.agentTimers = [];

    // 1. Live thinking delta + Plan + Tool 1
    schedule(140, () => {
      sess.plan_steps = makePlan(0, 0);
      pushAgentEvent(sess, { type: 'plan', plan_steps: sess.plan_steps, steps: sess.plan_steps });
      pushAgentEvent(sess, { type: 'thinking_delta', delta: `正在分析目标指令「${content.slice(0, 40)}」，准备先探测 ${urlDisplay} 的表单选择器与人机防护特征…` });
    });
    schedule(520, () => {
      const tm = { id: `m_t_${cid1}`, role: 'tool', tool_call_id: cid1, tool_name: 'probe_url', tool_args: { url: urlDisplay }, status: 'running', ts: nowDateTime() };
      sess.messages.push(tm);
      pushAgentEvent(sess, { type: 'tool_start', call_id: cid1, tool_call_id: cid1, tool_name: 'probe_url', name: 'probe_url', args: tm.tool_args });
    });
    schedule(1180, () => {
      const resObj = { url: urlDisplay, detected_count: 4, signals: ['SPA Controlled Form', 'Email OTP Flow'], selectors: { email: 'input[type="email"]', password: 'input[type="password"]', submit: 'button[type="submit"]' } };
      const resStr = JSON.stringify(resObj, null, 2);
      const tm = sess.messages.find((m) => m.tool_call_id === cid1);
      if (tm) { tm.status = 'done'; tm.ok = true; tm.duration_ms = 640; tm.tool_result = resStr; }
      pushAgentEvent(sess, { type: 'tool_end', call_id: cid1, tool_call_id: cid1, tool_name: 'probe_url', name: 'probe_url', ok: true, status: 'done', duration_ms: 640, result: resStr, output: resStr });
      sess.plan_steps = makePlan(2, 2);
      pushAgentEvent(sess, { type: 'plan', plan_steps: sess.plan_steps, steps: sess.plan_steps });

      const tm2 = { id: `m_t_${cid2}`, role: 'tool', tool_call_id: cid2, tool_name: 'run_adapter_once', tool_args: { adapter: slug }, status: 'running', ts: nowDateTime() };
      sess.messages.push(tm2);
      pushAgentEvent(sess, { type: 'tool_start', call_id: cid2, tool_call_id: cid2, tool_name: 'run_adapter_once', name: 'run_adapter_once', args: tm2.tool_args });
    });

    // 2. Tool 2 finishes + Real-time chunked Markdown text_delta stream!
    const simProf = generateProfile('US');
    const simKey = `sk_demo_${randHex(24)}`;
    const fullReply =
      `### 「${slug}」单线程自主闭环演示完成\n\n` +
      `已完成针对 \`${urlDisplay}\` 的表单嗅探与模拟试跑验收：\n\n` +
      `| 环节 | 状态 | 实测摘要 |\n` +
      `| :--- | :--- | :--- |\n` +
      `| 表单探测 | **命中 4 项** | \`input[type="email"]\` / \`input[type="password"]\` |\n` +
      `| 模拟成号 | **成功** | \`${simProf.email}\` |\n` +
      `| 模拟凭据 | **已入库** | \`${maskKey(simKey)}\`（可在「账号资产」查看） |\n\n` +
      `\`\`\`python\n` +
      `# 派生适配器核心骨架 sites/${slug}.py\n` +
      `class ${slug[0].toUpperCase() + slug.slice(1)}Adapter(BaseSiteAdapter):\n` +
      `    def target_url(self) -> str:\n` +
      `        return "${urlDisplay}"\n` +
      `\`\`\`\n\n` +
      `> 当前页面为 **纯前端静态演示**，展示了与 AutoRegister Studio (\`:18888\`) 一致的 **实时流式 Markdown 渲染**；克隆 [RegisterHub GitHub 仓库](https://github.com/waw666waw666/RegisterHub) 本地运行 \`python main.py --web\` 即可连接真实模型与 Chrome。`;

    schedule(1920, () => {
      const resStr = JSON.stringify({ ok: true, mode: 'frontend_demo', email: simProf.email, api_key: maskKey(simKey) }, null, 2);
      const tm2 = sess.messages.find((m) => m.tool_call_id === cid2);
      if (tm2) { tm2.status = 'done'; tm2.ok = true; tm2.duration_ms = 730; tm2.tool_result = resStr; }
      pushAgentEvent(sess, { type: 'tool_end', call_id: cid2, tool_call_id: cid2, tool_name: 'run_adapter_once', name: 'run_adapter_once', ok: true, status: 'done', duration_ms: 730, result: resStr, output: resStr });

      state.accounts.unshift({
        id: `acc_${Date.now()}`, project: slug, email: simProf.email, password: makePassword(14),
        credential: simKey, has_key: true, kind: 'API Key', ip: '198.51.100.42', created_at: nowDateTime().slice(0, 16),
      });
      const lastBar = state.dailyTrend[state.dailyTrend.length - 1];
      if (lastBar) lastBar.success += 1;
      if (!state.adapters.some((a) => a.name === slug)) {
        state.adapters.unshift({
          name: slug, class_name: `${slug[0].toUpperCase() + slug.slice(1)}Adapter`, tier: 'template',
          target_url: urlDisplay, file: `sites/${slug}.py`, lines: 24,
          code: `"""Generated demo adapter for ${slug}."""\nfrom core.adapter import BaseSiteAdapter\n\nclass ${slug[0].toUpperCase() + slug.slice(1)}Adapter(BaseSiteAdapter):\n    def target_url(self) -> str:\n        return "${urlDisplay}"\n`,
        });
      }

      // Stream live Markdown chunks every 70ms so visitors see smooth live rendering!
      const chunkSize = 28;
      let offset = 0;
      let delay = 80;
      while (offset < fullReply.length) {
        const piece = fullReply.slice(offset, offset + chunkSize);
        offset += chunkSize;
        schedule(delay, () => pushAgentEvent(sess, { type: 'text_delta', delta: piece }));
        delay += 65;
      }

      schedule(delay + 120, () => {
        sess.plan_steps = makePlan(4, -1);
        sess.steps_count = (sess.steps_count || 0) + 2;
        sess.input_tokens = (sess.input_tokens || 0) + 1840;
        sess.output_tokens = (sess.output_tokens || 0) + 460;
        sess.cache_read_tokens = (sess.cache_read_tokens || 0) + 1480;
        sess.last_tok_s = 164.8;
        sess.last_ttft_ms = 380;
        sess.usage = {
          input_tokens: sess.input_tokens, output_tokens: sess.output_tokens, total_tokens: sess.input_tokens + sess.output_tokens,
          cache_read_tokens: sess.cache_read_tokens, last_tok_s: 164.8, last_ttft_ms: 380,
        };
        const asstMsg = {
          id: `m_a_${Date.now()}`, role: 'assistant', model: 'deepseek-chat', content: fullReply,
          thinking: `已探测 ${urlDisplay} 并完成单线程模拟试跑验收，产出示例账号 ${simProf.email}。`,
          metrics: { model: 'deepseek-chat', input_tokens: 1840, output_tokens: 460, cache_read_tokens: 1480, cache_hit_pct: 80, tok_s: 164.8, ttft_ms: 380, latency_ms: 2800 },
          ts: nowDateTime(),
        };
        sess.messages.push(asstMsg);
        sess.status = 'done';
        state.activeAgentSid = '';
        pushAgentEvent(sess, { type: 'plan', plan_steps: sess.plan_steps, steps: sess.plan_steps });
        pushAgentEvent(sess, { type: 'assistant_msg', message: asstMsg, content: fullReply, model: 'deepseek-chat', metrics: asstMsg.metrics });
        pushAgentEvent(sess, { type: 'usage', usage: sess.usage, ...sess.usage });
        pushAgentEvent(sess, { type: 'status', status: 'done' });
      });
    });
  }

  // ==================== Studio API Dispatcher ====================
  async function handleApi(method, path, searchParams, body) {
    // 1. Meta & Dashboard
    if (method === 'GET' && path === '/api/console/meta') return jsonResponse(state.meta);

    if (method === 'GET' && path === '/api/dashboard') {
      const validKeys = state.accounts.filter((a) => a.has_key);
      const keyDist = {};
      for (const a of state.accounts) keyDist[a.kind] = (keyDist[a.kind] || 0) + 1;
      const todayBar = state.dailyTrend[state.dailyTrend.length - 1] || { success: 0, failed: 0 };
      return jsonResponse({
        kpi: {
          projects_total: state.adapters.length,
          active_jobs: state.activeJobId ? 1 : 0,
          total_ok: state.accounts.length,
          valid_keys: validKeys.length,
          retriable_count: 2,
          dead_count: 1,
          avg_duration_s: 11.3,
          today_ok: todayBar.success,
          today_failed: todayBar.failed,
        },
        daily_trend: state.dailyTrend,
        key_distribution: keyDist,
        top_projects: state.adapters.map((ad) => ({
          project: ad.name,
          ok_total: state.accounts.filter((a) => a.project === ad.name).length,
          valid_keys: validKeys.filter((a) => a.project === ad.name).length,
          retriable: ad.name === 'novaapi' ? 1 : 0,
          dead: 0,
        })),
        all_projects: state.adapters.map((a) => a.name),
        recent_jobs: state.jobs.slice(0, 8).map(jobSummary),
        recent_accounts: state.accounts.slice(0, 8).map((a) => ({
          project: a.project, email: a.email, has_key: a.has_key, kind: a.kind,
          masked_key: maskKey(a.credential), credential: a.credential, created_at: a.created_at,
        })),
        external_running: [],
      });
    }

    // 2. Services Health (Doctor)
    if (method === 'GET' && path === '/api/services/health') {
      return jsonResponse({
        checked_at: nowTime(),
        summary: { total: 6, online: 5, offline: 0, all_core_ready: true },
        services: [
          { id: 'doc_py', name: 'Python 运行时', category: '核心依赖', endpoint: 'Python 3.12.8', status: 'online', latency_ms: 2, recoverable: false, metrics: {}, detail: '满足 Python >= 3.10 要求（演示模拟）' },
          { id: 'doc_pw', name: 'Playwright / Patchright 内核', category: '核心依赖', endpoint: 'patchright 1.52', status: 'online', latency_ms: 8, recoverable: false, metrics: {}, detail: '零 Runtime.enable 隐匿内核就绪' },
          { id: 'doc_ch', name: '原生 Chrome 浏览器通道', category: '核心依赖', endpoint: 'Chrome 134', status: 'online', latency_ms: 12, recoverable: false, metrics: {}, detail: '环境自洽通道可用' },
          { id: 'doc_cv', name: 'OpenCV 离线视觉算子', category: '核心依赖', endpoint: 'cv2 4.10', status: 'online', latency_ms: 5, recoverable: false, metrics: {}, detail: '双通 Canny 缺口匹配通过自检' },
          { id: 'doc_geo', name: '6 套跨分辨率视窗预设', category: '工作区', endpoint: 'window_geometry.json', status: 'online', latency_ms: 1, recoverable: false, metrics: {}, detail: `已载入 ${state.geometry.screen_resolution || '1920x1080'} 预设` },
          { id: 'doc_demo', name: '纯前端在线演示沙箱', category: '运行模式', endpoint: 'Browser Mock', status: 'degraded', latency_ms: 0, recoverable: false, metrics: {}, detail: '当前为浏览器内置 Mock 演示；克隆 GitHub 仓库本地运行 python main.py --web 启用真实引擎' },
        ],
      });
    }

    // 3. Fleet & Jobs
    if (method === 'GET' && path === '/api/fleet') {
      const projects = state.adapters.map((ad, idx) => ({
        project: ad.name,
        target_url: ad.target_url,
        project_dir: 'sites/',
        queue_count: 0,
        ok_total: state.accounts.filter((a) => a.project === ad.name).length,
        valid_keys: state.accounts.filter((a) => a.project === ad.name && a.has_key).length,
        failed_lines: idx === 0 ? 1 : idx === 1 ? 1 : 0,
        retriable_count: idx < 2 ? 1 : 0,
        dead_count: 0,
        unknown_count: 0,
        top_reasons: idx === 1 ? [{ reason: 'Turnstile challenge timeout', count: 1 }] : idx === 0 ? [{ reason: 'HTTP 429 rate limit', count: 1 }] : [],
        metrics: { count: Math.max(1, state.accounts.filter((a) => a.project === ad.name).length), success_rate: 0.92, avg_duration_s: 11.2 },
        recent_errors:
          ad.name === 'novaapi'
            ? [{ dir: 'fail_novaapi_turnstile', reason: 'Turnstile challenge timeout after 25s', has_screenshot: true, screenshot_url: snapTurnstile }]
            : ad.name === 'acmespeech'
              ? [{ dir: 'fail_acmespeech_429', reason: 'HTTP 429 Too Many Requests: IP rate limit', has_screenshot: true, screenshot_url: snap429 }]
              : [],
      }));
      return jsonResponse({ projects, total: projects.length });
    }
    if (method === 'GET' && path === '/api/fleet/external-running') return jsonResponse({ items: [] });
    if (method === 'GET' && path === '/api/fleet/queue') return jsonResponse({ queue_text: '', count: 0 });
    const mFlAct = path.match(/^\/api\/fleet\/([^/]+)\/activity$/);
    if (method === 'GET' && mFlAct) {
      const proj = decodeURIComponent(mFlAct[1]);
      const rows = state.accounts.filter((a) => a.project === proj);
      return jsonResponse({
        project: proj, ok_total: rows.length, valid_keys: rows.filter((a) => a.has_key).length,
        recent_accounts: rows.map((a) => ({ ...a, masked_key: maskKey(a.credential) })),
        recent_failures: proj === 'novaapi' ? [{ line: `${todayStr} 19:42 | Turnstile challenge timeout`, category: 'soft' }] : [],
        has_layout: true, notify_enabled: false, notify_platform: '',
      });
    }
    if (method === 'GET' && path === '/api/jobs') {
      const act = state.jobs.find((j) => j.id === state.activeJobId && j.status === 'running') || null;
      return jsonResponse({ jobs: state.jobs.map(jobSummary), active_job: act ? jobSummary(act) : null });
    }
    if (method === 'POST' && path === '/api/jobs/start') return jsonResponse(startSimulatedJob(body || {}));
    const mJobStop = path.match(/^\/api\/jobs\/([^/]+)\/stop$/);
    if (method === 'POST' && mJobStop) return jsonResponse(stopSimulatedJob(decodeURIComponent(mJobStop[1])));

    // 4. Assets (Keys Vault & Accounts Ledger)
    if (method === 'GET' && path === '/api/keys/vault') {
      const items = state.accounts.filter((a) => a.has_key).map((a) => ({
        project: a.project, email: a.email, password: a.password, key: a.credential,
        masked_key: maskKey(a.credential), kind: a.kind, created_at: a.created_at, status: 'valid', detail: '演示样例（格式有效）',
      }));
      const by_project = {}, by_kind = {};
      for (const it of items) {
        by_project[it.project] = (by_project[it.project] || 0) + 1;
        by_kind[it.kind] = (by_kind[it.kind] || 0) + 1;
      }
      return jsonResponse({ total: items.length, by_project, by_kind, items });
    }
    if (method === 'POST' && path === '/api/keys/verify') {
      const keys = Array.isArray(body?.keys) ? body.keys : [];
      return jsonResponse({
        ok: true,
        results: keys.map((k) => ({
          key: k.key || k, project: k.project || 'community', status: 'valid',
          detail: '[演示模拟] HTTP 200 · 模型列表可用 · 延迟 138ms',
        })),
      });
    }
    if (method === 'POST' && path === '/api/keys/oneapi') {
      const keys = Array.isArray(body?.keys) ? body.keys : [];
      const pfx = body?.name_prefix || 'RegisterHub';
      const base = body?.base_url || 'https://api.openai.com';
      return jsonResponse({
        ok: true, count: keys.length,
        channels: keys.map((k, i) => ({ name: `${pfx}-${i + 1}`, type: 1, key: k, base_url: base, models: 'gpt-4o-mini' })),
      });
    }
    if (method === 'POST' && path === '/api/keys/prune') {
      const rm = new Set((body?.items || []).map((x) => x.key));
      const before = state.accounts.length;
      state.accounts = state.accounts.filter((a) => !rm.has(a.credential));
      return jsonResponse({ ok: true, removed: before - state.accounts.length, skipped_projects: [] });
    }
    if (method === 'GET' && path === '/api/accounts/ledger') {
      const by_project = {};
      let with_key = 0;
      for (const a of state.accounts) {
        if (a.has_key) with_key += 1;
        by_project[a.project] = (by_project[a.project] || 0) + 1;
      }
      return jsonResponse({ total: state.accounts.length, with_key, without_key: state.accounts.length - with_key, by_project, items: state.accounts });
    }
    if (method === 'POST' && path === '/api/accounts/delete') {
      const rmIds = new Set((body?.items || []).map((x) => x.id));
      const rmEmails = new Set((body?.items || []).map((x) => x.email));
      const before = state.accounts.length;
      state.accounts = state.accounts.filter((a) => !(rmIds.has(a.id) || rmEmails.has(a.email)));
      return jsonResponse({ ok: true, removed: before - state.accounts.length });
    }
    if (method === 'POST' && path === '/api/accounts/export') {
      const fmt = String(body?.format || 'csv').toLowerCase();
      const rows = state.accounts;
      if (fmt === 'json') return jsonResponse({ ok: true, filename: 'registerhub_demo_accounts.json', content: JSON.stringify(rows, null, 2) });
      if (fmt === 'txt') {
        const txt = rows.map((r) => (r.credential ? `${r.email}----${r.password}----${r.project}----${r.credential}` : `${r.email}----${r.password}----${r.project}`)).join('\n');
        return jsonResponse({ ok: true, filename: 'registerhub_demo_accounts.txt', content: txt });
      }
      if (fmt === 'bitwarden') {
        return jsonResponse({
          ok: true, filename: 'registerhub_demo_bitwarden.json',
          content: JSON.stringify({ encrypted: false, items: rows.map((r, i) => ({ id: `bw-${i}`, type: 1, name: `${r.project} · ${r.email}`, notes: r.credential ? `API Key: ${r.credential}` : '', login: { username: r.email, password: r.password } })) }, null, 2),
        });
      }
      const csv = ['project,email,password,api_key', ...rows.map((r) => [r.project, r.email, r.password, r.credential].map((v) => `"${String(v || '').replace(/"/g, '""')}"`).join(','))].join('\n');
      return jsonResponse({ ok: true, filename: 'registerhub_demo_accounts.csv', content: csv });
    }

    // 5. IP Purity & Proxies
    if (method === 'GET' && path === '/api/services/proxies') {
      return jsonResponse({ source: 'community', online: true, latency_ms: 0, total: 0, available: 0, clean_count: 0, nodes: [] });
    }
    if (method === 'GET' && path === '/api/services/ip-score/current') {
      return jsonResponse({
        ok: true, ip: '198.51.100.42', score: 96, grade: 'S', ip_type: '住宅宽带 (Residential)', residential: true,
        asn: 'AS7922', country: 'United States', region: 'California', city: 'San Jose',
        isp: 'Comcast Cable Communications (演示样例)', abuser_score: 0.001, latency_ms: 82, cached: true,
        verdict: '极高纯净度原生住宅出口 · 适用于高敏站点注册（前端模拟数据）',
        factors: [
          { label: '原生住宅 ISP', delta: 0, tone: 'emerald' },
          { label: '无黑名单 / Tor 标记', delta: 0, tone: 'emerald' },
          { label: '低历史滥用分', delta: -4, tone: 'neutral' },
        ],
      });
    }
    if (method === 'POST' && path === '/api/services/ip-score') {
      const ip = String(body?.ip || '').trim();
      if (ip === '1.1.1.1' || ip === '8.8.8.8') {
        const cf = ip === '1.1.1.1';
        return jsonResponse({
          ok: true, ip, score: 68, grade: 'B', ip_type: '机房 / Anycast', residential: false,
          asn: cf ? 'AS13335' : 'AS15169', country: 'United States', region: 'California', city: cf ? 'San Francisco' : 'Mountain View',
          isp: cf ? 'Cloudflare, Inc.' : 'Google LLC', abuser_score: 0.14, latency_ms: 24, cached: false,
          verdict: '公共机房段 IP，高敏站点易触发额外人机验证',
          factors: [{ label: '机房 ASN 段', delta: -22, tone: 'amber' }, { label: 'Anycast 任播段', delta: -10, tone: 'amber' }],
        });
      }
      return jsonResponse({
        ok: true, ip: ip || '198.51.100.42', score: 94, grade: 'S', ip_type: '住宅宽带 (Residential)', residential: true,
        asn: 'AS7018', country: 'United States', region: 'Texas', city: 'Austin', isp: 'AT&T Residential Fiber (演示模拟)',
        abuser_score: 0.002, latency_ms: 76, cached: false, verdict: '高纯净度住宅出口 · 推荐作为注册出口',
        factors: [{ label: '住宅宽带属性', delta: 0, tone: 'emerald' }, { label: '无代理特征', delta: 0, tone: 'emerald' }],
      });
    }
    if (method === 'POST' && path === '/api/services/ip-score/batch') {
      const items = Array.isArray(body?.items) && body.items.length ? body.items : ['198.51.100.42', '1.1.1.1'];
      return jsonResponse({
        ok: true, total: items.length,
        results: items.slice(0, 10).map((it, i) => ({
          ok: true, ip: String(it), score: i % 2 === 0 ? 94 : 68, grade: i % 2 === 0 ? 'S' : 'B',
          ip_type: i % 2 === 0 ? '住宅宽带' : '机房', residential: i % 2 === 0, asn: i % 2 === 0 ? 'AS7922' : 'AS13335',
          country: 'United States', city: 'San Jose', latency_ms: 60 + i * 18, verdict: i % 2 === 0 ? '纯净住宅' : '机房段',
        })),
      });
    }
    if (method === 'POST' && path === '/api/services/test-proxy') {
      return jsonResponse({ ok: true, status_code: 200, latency_ms: 118, body: '{"ip":"198.51.100.42"} (演示模拟)' });
    }
    if (method === 'POST' && path === '/api/services/test-mail') {
      return jsonResponse({ ok: true, inbox_messages: 12, latency_ms: 165, detail: 'IMAP BODY.PEEK[] 模拟测试成功' });
    }

    // 5b. Built-in Mail Pool (/api/mail/builtin/*)
    const calcMailStats = () => {
      const by_protocol = {};
      const by_provider = {};
      let valid = 0, unknown = 0, dead = 0, leased = 0;
      for (const a of state.builtinMail) {
        if (a.status === 'valid') valid += 1;
        else if (a.status === 'dead') dead += 1;
        else unknown += 1;
        if (a.leased) leased += 1;
        by_protocol[a.protocol || 'unknown'] = (by_protocol[a.protocol || 'unknown'] || 0) + 1;
        by_provider[a.provider_kind || 'imap'] = (by_provider[a.provider_kind || 'imap'] || 0) + 1;
      }
      return { total: state.builtinMail.length, valid, unknown, dead, leased, available: Math.max(0, valid - leased), by_protocol, by_provider };
    };
    const MAIL_FORMATS = [
      { id: 'auto', label: '智能无脑混合识别（推荐）', example: 'user@outlook.com----Pass123----client_id----refresh_token' },
      { id: 'outlook_4col', label: 'Outlook OAuth2 四段', example: 'user@outlook.com----Pass123----9e5f94bc-...----M.C519_...' },
      { id: 'icloud_link', label: 'iCloud 接码链接', example: 'user@icloud.com----https://mail-link.example/check?id=...' },
      { id: 'imap_plain', label: '通用 IMAP 账号', example: 'user@example.org----app_password----imap.example.org----993' },
    ];
    if (method === 'GET' && path === '/api/mail/builtin/accounts') {
      const st = (searchParams.get('status') || 'all').toLowerCase();
      const pk = (searchParams.get('provider_kind') || 'all').toLowerCase();
      const q = (searchParams.get('query') || '').trim().toLowerCase();
      let list = state.builtinMail.slice();
      if (st && st !== 'all') list = list.filter((x) => x.status === st);
      if (pk && pk !== 'all') list = list.filter((x) => x.provider_kind === pk);
      if (q) list = list.filter((x) => `${x.email} ${x.protocol} ${x.provider_kind} ${x.last_error}`.toLowerCase().includes(q));
      return jsonResponse({ total: list.length, items: list, stats: calcMailStats(), formats: MAIL_FORMATS });
    }
    if (method === 'POST' && path === '/api/mail/builtin/preview') {
      const lines = String(body?.text || '').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
      const preview = [];
      const summary = {};
      for (const line of lines.slice(0, 20)) {
        const parts = line.split(/----|[\t|,;]/).map((s) => s.trim()).filter(Boolean);
        const em = parts.find((p) => p.includes('@')) || `demo_${randHex(4)}@outlook-demo.test`;
        const isIc = line.includes('http://') || line.includes('https://') || em.includes('icloud');
        const isOut = !isIc && (em.includes('outlook') || em.includes('hotmail') || parts.length >= 4);
        const kind = isIc ? 'icloud_link' : isOut ? 'outlook_oauth' : 'imap';
        const label = isIc ? 'iCloud 接码链接' : isOut ? 'Outlook OAuth2' : '通用 IMAP';
        summary[label] = (summary[label] || 0) + 1;
        preview.push({ email: em.toLowerCase(), provider_kind: kind, detected_label: label, client_id: isOut ? '9e5f94bc-demo' : '', refresh_token_masked: isOut ? 'M.C519...demo' : '', link_url_masked: isIc ? 'https://mail-link.example/...demo' : '', has_password: parts.length >= 2, imap_host: isOut ? 'outlook.office365.com' : 'imap.example.org' });
      }
      return jsonResponse({ format: body?.format || 'auto', valid_count: preview.length, error_count: 0, summary, preview, errors: [] });
    }
    if (method === 'POST' && path === '/api/mail/builtin/import') {
      const lines = String(body?.text || '').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
      const imported_emails = [];
      let skipped = 0;
      for (const line of lines) {
        const parts = line.split(/----|[\t|,;]/).map((s) => s.trim()).filter(Boolean);
        const em = (parts.find((p) => p.includes('@')) || '').toLowerCase();
        if (!em) continue;
        if (state.builtinMail.some((x) => x.email === em) && !body?.overwrite_existing) { skipped += 1; continue; }
        const isIc = line.includes('http://') || line.includes('https://') || em.includes('icloud');
        const isOut = !isIc && (em.includes('outlook') || em.includes('hotmail') || parts.length >= 4);
        state.builtinMail = state.builtinMail.filter((x) => x.email !== em);
        state.builtinMail.unshift({
          id: state.builtinMailSeq++, email: em, provider_kind: isIc ? 'icloud_link' : isOut ? 'outlook_oauth' : 'imap',
          protocol: isIc ? 'icloud_link' : isOut ? 'graph' : 'imap_plain', client_id: isOut ? '9e5f94bc-demo' : '',
          has_password: true, has_refresh_token: isOut, has_link_url: isIc, imap_host: isOut ? 'outlook.office365.com' : 'imap.example.org', imap_port: 993,
          status: 'unknown', leased: false, leased_by: '', use_count: 0, last_checked_at: 0, last_error: '', created_at: Math.floor(Date.now() / 1000),
        });
        imported_emails.push(em);
      }
      return jsonResponse({ imported: imported_emails.length, updated: 0, skipped, errors: [], imported_emails, stats: calcMailStats() });
    }
    if (method === 'POST' && path === '/api/mail/builtin/verify') {
      const reqEmails = Array.isArray(body?.emails) && body.emails.length ? new Set(body.emails.map((e) => String(e).toLowerCase())) : null;
      const targets = reqEmails ? state.builtinMail.filter((x) => reqEmails.has(x.email)) : state.builtinMail.slice(0, Number(body?.limit || 50));
      const nowS = Math.floor(Date.now() / 1000);
      const results = targets.map((a) => {
        a.status = 'valid';
        if (a.protocol === 'unknown') a.protocol = a.provider_kind === 'icloud_link' ? 'icloud_link' : a.provider_kind === 'outlook_oauth' ? 'graph' : 'imap_plain';
        a.last_checked_at = nowS;
        a.last_error = '';
        return { email: a.email, ok: true, status: 'valid', protocol: a.protocol, error: '' };
      });
      return jsonResponse({ checked: results.length, valid: results.length, dead: 0, results, stats: calcMailStats() });
    }
    if (method === 'POST' && path === '/api/mail/builtin/inbox') {
      const em = String(body?.email || '').toLowerCase();
      const otp = String(randInt(100000, 999999));
      return jsonResponse({
        email: em, cached: false, elapsed_ms: randInt(95, 210),
        messages: [
          {
            id: 'msg_demo_1', from: 'no-reply@acmespeech.example.com', subject: `Your AcmeSpeech verification code is ${otp}`,
            received_at: nowDateTime(), excerpt: `Use verification code ${otp} within 10 minutes to finish your signup.`, has_html: true,
            candidates: [{ kind: 'code', value: otp, confidence: 0.99 }],
          },
          {
            id: 'msg_demo_2', from: 'security@nova-api.example.com', subject: 'Confirm your NovaAPI developer account',
            received_at: `${todayStr} 19:48:12`, excerpt: 'Click the magic link below to activate your workspace.', has_html: true,
            candidates: [{ kind: 'link', value: 'https://portal.nova-api.example.com/verify?token=demo_tok_94a2', confidence: 0.95 }],
          },
        ],
      });
    }
    if (method === 'POST' && path === '/api/mail/builtin/message') {
      const em = String(body?.email || '').toLowerCase();
      const mid = String(body?.msg_id || 'msg_demo_1');
      return jsonResponse({
        id: mid, email: em, from: 'no-reply@acmespeech.example.com', subject: 'Your AcmeSpeech verification code is 482916',
        date: nowDateTime(), received_at: nowDateTime(), excerpt: 'Verification code: 482916',
        text: 'Hello,\n\nYour one-time verification code is: 482916\n\n(Simulated inbox message in RegisterHub Pure-Frontend Demo)',
        html: '<div style="font-family:sans-serif;padding:16px"><h3>Verify your email</h3><p>Your one-time verification code is:</p><div style="font-size:24px;font-weight:700;letter-spacing:4px">482916</div><p style="color:#71717a;font-size:12px">Simulated message · RegisterHub Live Demo</p></div>',
        candidates: [{ kind: 'code', value: '482916', confidence: 0.99 }],
      });
    }
    if (method === 'POST' && path === '/api/mail/builtin/delete') {
      const rm = new Set((body?.emails || []).map((e) => String(e).toLowerCase()));
      const before = state.builtinMail.length;
      state.builtinMail = state.builtinMail.filter((x) => !rm.has(x.email));
      return jsonResponse({ deleted: before - state.builtinMail.length, stats: calcMailStats() });
    }
    if (method === 'POST' && path === '/api/mail/builtin/cleanup-dead') {
      const before = state.builtinMail.length;
      state.builtinMail = state.builtinMail.filter((x) => x.status !== 'dead');
      return jsonResponse({ deleted: before - state.builtinMail.length, stats: calcMailStats() });
    }
    if (method === 'POST' && path === '/api/mail/builtin/reset') {
      state.builtinMail.forEach((x) => { x.leased = false; x.leased_by = ''; if (x.status === 'dead') x.status = 'unknown'; });
      return jsonResponse({ reset: state.builtinMail.length, stats: calcMailStats() });
    }

    // 5c. Built-in Proxy Pool (/api/proxies/builtin/*)
    const calcProxyStats = () => {
      const list = state.builtinProxies;
      return {
        total: list.length,
        enabled: list.filter((x) => x.enabled).length,
        available: list.filter((x) => x.enabled && x.available).length,
        static: list.filter((x) => x.kind === 'static').length,
        residential_gateways: list.filter((x) => x.kind === 'residential_gateway').length,
        api_extracted: list.filter((x) => x.kind === 'api_extract').length,
        subscription_nodes: 0,
        api_sources: state.builtinProxySources.filter((s) => s.kind === 'api_extract').length,
        subscription_sources: 0,
        residential: list.filter((x) => x.residential).length,
        browser_compatible: list.filter((x) => x.enabled && x.available && x.browser_compatible).length,
      };
    };
    const RES_PRESETS = [
      { id: 'smartproxy', label: 'Smartproxy / Decodo', template: '{user}-country-{country}-session-{session}', hint: 'Sticky Session 住宅网关' },
      { id: 'iproyal', label: 'IPRoyal Residential', template: '{user}_country-{country}_session-{session}', hint: '按地区与会话粘性出口' },
      { id: 'oxylabs', label: 'Oxylabs', template: 'customer-{user}-cc-{country}-sessid-{session}', hint: '企业级住宅出口模板' },
      { id: 'brightdata', label: 'Bright Data', template: '{user}-country-{country}-session-{session}', hint: 'Zone 会话粘性模板' },
      { id: 'custom', label: '自定义模板', template: '{user}-session-{session}', hint: '自由拼接会话占位符' },
    ];
    const DEMO_KERNEL = { running: false, binary_exists: false, binary_label: '社区版不含订阅内核', pid: 0, subscription_count: 0, node_count: 0, available_nodes: 0, started_at: 0, last_error: '' };
    if (method === 'GET' && path === '/api/proxies/builtin/entries') {
      return jsonResponse({ items: state.builtinProxies, sources: state.builtinProxySources, stats: calcProxyStats(), presets: RES_PRESETS, kernel: DEMO_KERNEL });
    }
    if (method === 'GET' && path === '/api/proxies/builtin/sources') {
      return jsonResponse({ sources: state.builtinProxySources, kernel: DEMO_KERNEL, stats: calcProxyStats() });
    }
    if (method === 'POST' && path === '/api/proxies/builtin/import') {
      const scheme = String(body?.default_scheme || 'http');
      const lines = String(body?.text || '').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
      let imported = 0;
      for (const line of lines) {
        const clean = line.replace(/^[a-z0-9]+:\/\//i, '');
        const hostPort = clean.includes('@') ? clean.split('@').pop() : clean;
        const [h, p] = String(hostPort || 'proxy.example:8080').split(':');
        state.builtinProxies.unshift({
          id: state.builtinProxySeq++, kind: 'static', label: `${h}:${p || 8080}`, scheme, host: h || 'proxy.example', port: Number(p) || 8080,
          masked_url: `${scheme}://***@${h}:${p || 8080}`, has_auth: line.includes('@') || line.split(':').length >= 4,
          preset: '', session_template: '', country: 'US', enabled: true, available: false, browser_compatible: true,
          exit_ip: '', residential: false, score: 0, grade: '', latency_ms: 0, last_checked_at: 0, last_error: '',
        });
        imported += 1;
      }
      return jsonResponse({ imported, updated: 0, skipped: 0, errors: [], stats: calcProxyStats() });
    }
    if (method === 'POST' && path === '/api/proxies/builtin/gateway') {
      const gwUrl = String(body?.gateway_url || 'http://user:pass@gate.example:10001');
      const label = String(body?.label || '').trim() || `${body?.preset || 'smartproxy'} 住宅网关`;
      state.builtinProxies.unshift({
        id: state.builtinProxySeq++, kind: 'residential_gateway', label, scheme: 'http', host: 'gate.example', port: 10001,
        masked_url: gwUrl.replace(/:\/\/[^@]+@/, '://***@'), has_auth: true, preset: body?.preset || 'smartproxy',
        session_template: body?.session_template || '', country: String(body?.country || 'US').toUpperCase(),
        enabled: true, available: true, browser_compatible: true, exit_ip: `198.51.100.${randInt(10, 240)}`, residential: true,
        score: 97, grade: 'S', latency_ms: randInt(110, 220), last_checked_at: Math.floor(Date.now() / 1000), last_error: '',
      });
      return jsonResponse({ ok: true, stats: calcProxyStats() });
    }
    if (method === 'POST' && path === '/api/proxies/builtin/probe') {
      const reqIds = Array.isArray(body?.ids) && body.ids.length ? new Set(body.ids.map(Number)) : null;
      const targets = reqIds ? state.builtinProxies.filter((x) => reqIds.has(x.id)) : state.builtinProxies.filter((x) => x.enabled);
      const nowS = Math.floor(Date.now() / 1000);
      const countries = ['US', 'CA', 'GB', 'JP', 'SG'];
      const results = targets.map((p, idx) => {
        p.available = true;
        p.exit_ip = p.exit_ip || `198.51.100.${randInt(20, 240)}`;
        p.country = p.country || countries[idx % countries.length];
        p.residential = p.kind === 'residential_gateway' || p.residential || idx % 2 === 0;
        p.score = p.residential ? randInt(93, 100) : randInt(82, 90);
        p.grade = p.score >= 90 ? 'S' : 'A';
        p.latency_ms = randInt(115, 295);
        p.last_checked_at = nowS;
        p.last_error = '';
        return { id: p.id, ok: true, available: true, exit_ip: p.exit_ip, score: p.score, grade: p.grade, latency_ms: p.latency_ms };
      });
      return jsonResponse({ checked: results.length, ok: results.length, failed: 0, results, stats: calcProxyStats() });
    }
    if (method === 'POST' && path === '/api/proxies/builtin/toggle') {
      const ids = new Set((body?.ids || []).map(Number));
      state.builtinProxies.forEach((p) => { if (ids.has(p.id)) p.enabled = Boolean(body?.enabled); });
      return jsonResponse({ updated: ids.size, stats: calcProxyStats() });
    }
    if (method === 'POST' && path === '/api/proxies/builtin/delete') {
      const ids = new Set((body?.ids || []).map(Number));
      const before = state.builtinProxies.length;
      state.builtinProxies = state.builtinProxies.filter((p) => !ids.has(p.id));
      return jsonResponse({ deleted: before - state.builtinProxies.length, stats: calcProxyStats() });
    }
    if (method === 'POST' && path === '/api/proxies/builtin/cleanup-dead') {
      const before = state.builtinProxies.length;
      state.builtinProxies = state.builtinProxies.filter((p) => p.available || p.last_checked_at === 0);
      return jsonResponse({ deleted: before - state.builtinProxies.length, stats: calcProxyStats() });
    }
    if (method === 'POST' && path === '/api/proxies/builtin/sources') {
      const src = {
        id: state.builtinProxySourceSeq++, kind: body?.kind || 'api_extract', label: body?.label || '自定义 API 提取源',
        masked_url: String(body?.url || '').replace(/([?&](?:key|token|pass|pwd)=)[^&]+/gi, '$1***'),
        default_scheme: body?.default_scheme || 'http', min_available: Number(body?.min_available || 3), ttl_minutes: Number(body?.ttl_minutes || 15),
        enabled: true, last_pulled_at: Math.floor(Date.now() / 1000), last_count: 1, last_error: '', active_entries: 1,
      };
      state.builtinProxySources.unshift(src);
      return jsonResponse({ ok: true, source: src, sources: state.builtinProxySources, stats: calcProxyStats(), kernel: DEMO_KERNEL });
    }
    const mPxSrc = path.match(/^\/api\/proxies\/builtin\/sources\/(\d+)(?:\/(toggle|pull))?$/);
    if (mPxSrc) {
      const sid = Number(mPxSrc[1]);
      const act = mPxSrc[2];
      const src = state.builtinProxySources.find((s) => s.id === sid);
      if (method === 'DELETE' && !act) {
        state.builtinProxySources = state.builtinProxySources.filter((s) => s.id !== sid);
        return jsonResponse({ ok: true, sources: state.builtinProxySources, stats: calcProxyStats(), kernel: DEMO_KERNEL });
      }
      if (method === 'POST' && act === 'toggle' && src) {
        src.enabled = Boolean(body?.enabled);
        return jsonResponse({ ok: true, sources: state.builtinProxySources, stats: calcProxyStats(), kernel: DEMO_KERNEL });
      }
      if (method === 'POST' && act === 'pull' && src) {
        src.last_pulled_at = Math.floor(Date.now() / 1000);
        src.last_count = 1;
        state.builtinProxies.unshift({
          id: state.builtinProxySeq++, kind: 'api_extract', label: `${src.label} #${state.builtinProxySeq}`, scheme: src.default_scheme || 'http',
          host: `192.0.2.${randInt(10, 240)}`, port: randInt(20000, 29000), masked_url: `http://192.0.2.${randInt(10, 240)}:23008`,
          has_auth: false, preset: '', session_template: '', country: 'US', source_id: sid, expires_at: Math.floor(Date.now() / 1000) + src.ttl_minutes * 60,
          enabled: true, available: true, browser_compatible: true, exit_ip: `192.0.2.${randInt(10, 240)}`, residential: true, score: 94, grade: 'S',
          latency_ms: randInt(130, 240), last_checked_at: Math.floor(Date.now() / 1000), last_error: '',
        });
        return jsonResponse({ ok: true, pulled: 1, sources: state.builtinProxySources, stats: calcProxyStats(), kernel: DEMO_KERNEL });
      }
    }

    // 6. Tools
    if (method === 'POST' && path === '/api/tools/profile') {
      const cnt = Math.max(1, Math.min(10, Number(body?.count) || 4));
      const profiles = Array.from({ length: cnt }, () => {
        const p = generateProfile(body?.country, body?.state);
        if (body?.email) p.email = String(body.email).trim();
        return p;
      });
      return jsonResponse({
        ok: true,
        count: profiles.length,
        us_states: ['DE', 'OR', 'MT', 'NH', 'AK', 'CA', 'TX', 'WA', 'CO', 'NY', 'FL', 'IL'],
        profiles,
        ...profiles[0],
      });
    }
    if (method === 'POST' && path === '/api/tools/extras') {
      const kind = String(body?.kind || 'tax').toLowerCase();
      const cc = String(body?.country || 'US').toUpperCase();
      const st = String(body?.state || 'DE').toUpperCase();
      const plat = String(body?.platform || 'win_nvidia').toLowerCase();
      const digits = (n) => Array.from({ length: n }, () => randInt(0, 9)).join('');
      let data = {};
      if (kind === 'tax') {
        const p1 = String(randInt(10, 98)), p2 = digits(7);
        data = { country_code: cc, tax_type: cc === 'US' ? 'US EIN (Mock)' : `${cc} VAT / Tax ID (Mock)`, tax_id: `${p1}${p2}`, tax_id_formatted: `${p1}-${p2}`, duns_number: `${digits(2)}-${digits(3)}-${digits(4)}`, company_reg_number: `${st}-${digits(7)}`, vat_number: cc === 'US' ? '' : `${cc}${digits(9)}` };
      } else if (kind === 'phone') {
        const a = String(randInt(212, 899)), b = String(randInt(200, 999)), c = digits(4);
        data = { country_name: cc === 'UK' ? 'United Kingdom' : cc === 'DE' ? 'Germany' : 'United States', country_code: cc === 'UK' ? '+44' : cc === 'DE' ? '+49' : '+1', e164: `+1${a}${b}${c}`, national_number: `${a}${b}${c}`, formatted_national: `(${a}) ${b}-${c}`, carrier_hint: 'Mobile Carrier (Demo)' };
      } else if (kind === 'idcard') {
        const g1 = String(randInt(100, 665)), g2 = String(randInt(10, 99)), g3 = digits(4);
        data = { country_code: cc, state_code: st, id_type: `${cc} Synthetic ID (Mock)`, id_number: `${g1}${g2}${g3}`, id_number_formatted: `${g1}-${g2}-${g3}`, passport_number: `A${digits(8)}`, driver_license: `${st}-D${digits(7)}` };
      } else {
        data = plat === 'mac_apple_silicon'
          ? { os_platform: 'MacIntel', cpu_cores: 10, device_memory_gb: 24, screen_width: 1512, screen_height: 982, device_pixel_ratio: 2, timezone_id: 'America/Los_Angeles', locale: 'en-US', webgl_vendor: 'Apple Inc.', webgl_renderer: 'Apple M3 Pro', audio_sample_rate: 48000 }
          : { os_platform: 'Win32', cpu_cores: 16, device_memory_gb: 32, screen_width: 1920, screen_height: 1080, device_pixel_ratio: 1.25, timezone_id: 'America/New_York', locale: 'en-US', webgl_vendor: 'Google Inc. (NVIDIA)', webgl_renderer: 'ANGLE (NVIDIA GeForce RTX 4060 Direct3D11)', audio_sample_rate: 48000 };
      }
      return jsonResponse({ ok: true, kind, data });
    }
    if (method === 'POST' && path === '/api/tools/card') {
      const cards = generateCards(body?.brand, body?.bin_prefix, body?.count || 6);
      return jsonResponse({ ok: true, count: cards.length, cards });
    }
    if (method === 'POST' && path === '/api/tools/totp') {
      const r = computeTotp(body?.secret);
      return r.error ? jsonResponse(r, 400) : jsonResponse(r);
    }

    // 7. Studio (Adapters + HAR + Scaffold)
    if (method === 'GET' && path === '/api/studio/adapters') {
      return jsonResponse({ total: state.adapters.length, adapters: state.adapters.map(({ code, ...m }) => m) });
    }
    const mStCode = path.match(/^\/api\/studio\/adapters\/([^/]+)\/code$/);
    if (mStCode) {
      const name = decodeURIComponent(mStCode[1]);
      const ad = state.adapters.find((a) => a.name === name);
      if (!ad) return jsonResponse({ error: `Not found: ${name}` }, 404);
      if (method === 'GET') return jsonResponse({ ok: true, name: ad.name, file: ad.file, code: ad.code });
      if (method === 'POST' || method === 'PUT') {
        const nextCode = String(body?.code || '');
        if (!nextCode.trim()) return jsonResponse({ error: '代码内容不能为空' }, 400);
        ad.code = nextCode;
        ad.lines = nextCode.split('\n').length;
        return jsonResponse({ ok: true, name: ad.name, file: ad.file, lines: ad.lines });
      }
    }
    if (method === 'POST' && path === '/api/studio/har') {
      const res = parseHarClient(String(body?.har_text || ''), body?.site_name);
      return res.error ? jsonResponse(res, 400) : jsonResponse(res);
    }
    if (method === 'POST' && path === '/api/scaffold') {
      const slug = String(body?.site_name || '').trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');
      if (!slug) return jsonResponse({ success: false, ok: false, error: '请输入站点代号' }, 400);
      const url = String(body?.url || '').trim() || `https://${slug}.example.com/signup`;
      const cls = slug.split('_').filter(Boolean).map((s) => s[0].toUpperCase() + s.slice(1)).join('') + 'Adapter';
      const code = `"""${cls} (Generated in Demo Mode)."""\nfrom core.adapter import BaseSiteAdapter\n\nclass ${cls}(BaseSiteAdapter):\n    def target_url(self) -> str:\n        return "${url}"\n`;
      if (!state.adapters.some((a) => a.name === slug)) {
        state.adapters.unshift({ name: slug, class_name: cls, tier: 'template', target_url: url, file: `sites/${slug}.py`, lines: code.split('\n').length, code });
      }
      return jsonResponse({ success: true, ok: true, project_name: slug, site: slug, path: `sites/${slug}.py` });
    }

    // 8. Layout
    if (method === 'GET' && path === '/api/layout/presets') return jsonResponse(state.geometry);
    if (method === 'POST' && path === '/api/layout/auto') {
      if (body?.quad_mode) state.geometry.quad_mode = body.quad_mode;
      if (body?.hex_mode) state.geometry.hex_mode = body.hex_mode;
      state.geometry.calibrated_at = nowDateTime();
      return jsonResponse({ ok: true, geometry: state.geometry });
    }
    if (method === 'POST' && path === '/api/layout/update') {
      const pk = String(body?.preset_key || 'single');
      const z = Math.max(0.45, Math.min(1.25, Number(body?.zoom) || 1));
      const map = {
        single: state.geometry.single_concurrency,
        dual: state.geometry.dual_concurrency,
        quad_edge: state.geometry.quad_presets?.edge_2x2,
        quad_compact: state.geometry.quad_presets?.centered_compact,
        hex_edge: state.geometry.hex_presets?.edge_3x2,
        hex_wing: state.geometry.hex_presets?.wing_cascade,
      };
      const block = map[pk];
      if (block?.slots) for (const s of block.slots) s.zoom = Number(z.toFixed(2));
      state.geometry.calibrated_at = nowDateTime();
      return jsonResponse({ ok: true, geometry: state.geometry });
    }
    if (method === 'POST' && path === '/api/layout/calibrate') {
      return jsonResponse({ ok: true, message: `[演示模式] 真机交互标定 (-c ${body?.concurrency || 1}) 需在本地运行 python main.py --web 启动本机 Chrome` });
    }
    if (method === 'POST' && path === '/api/layout/demo') {
      return jsonResponse({ ok: true, message: '[演示模式] 直接点击上方 6 个预设标签，即可实时体验平滑形变与槽位联动' });
    }

    // 9. Settings
    if (method === 'GET' && path === '/api/settings/config') return jsonResponse(state.settings);
    if (method === 'POST' && path === '/api/settings/config') {
      state.settings = { ...state.settings, ...(body || {}), edition: 'community' };
      return jsonResponse(state.settings);
    }

    // 10. AI Engine (LLM Profiles & Agent Config)
    if (method === 'GET' && path === '/api/llm/profiles') {
      return jsonResponse({
        active_id: state.activeLlmId,
        active_profile_id: state.activeLlmId,
        profiles: state.llmProfiles,
        pool: { enabled: false },
        recent_calls: [
          { id: 'c1', ts: `${todayStr} 20:05:32`, profile_name: 'DeepSeek V4.1 (演示通道)', model: 'deepseek-chat', ok: true, status_code: 200, latency_ms: 5200, input_tokens: 4820, output_tokens: 1140, cache_read_tokens: 3900, cache_hit_pct: 81, tok_s: 158.4, ttft_ms: 420 },
          { id: 'c2', ts: `${todayStr} 18:30:29`, profile_name: 'DeepSeek V4.1 (演示通道)', model: 'deepseek-chat', ok: true, status_code: 200, latency_ms: 4100, input_tokens: 3190, output_tokens: 740, cache_read_tokens: 2400, cache_hit_pct: 75, tok_s: 142.1, ttft_ms: 390 },
        ],
      });
    }
    if (method === 'POST' && path === '/api/llm/profiles') {
      const np = {
        id: `prof_${randHex(5)}`, name: body?.name || '自定义渠道', format: body?.format || 'openai',
        model: body?.model || 'gpt-4o-mini', base_url: body?.base_url || 'https://api.openai.com/v1',
        api_key_hint: maskKey(body?.api_key || 'sk-demo-12345678'), has_key: true, max_tokens: Number(body?.max_tokens || 4096),
        max_tokens_field: body?.max_tokens_field || 'max_tokens', temperature: Number(body?.temperature ?? 0.2),
        priority: state.llmProfiles.length + 1, reasoning_effort: 'none', active: false, enabled: true, health: { status: 'ok', state: 'ok' },
      };
      state.llmProfiles.push(np);
      return jsonResponse({ ok: true, profile: np });
    }
    const mProf = path.match(/^\/api\/llm\/profiles\/([^/]+)(?:\/(test|activate))?$/);
    if (mProf) {
      const pid = decodeURIComponent(mProf[1]);
      const act = mProf[2];
      if (method === 'POST' && act === 'activate') {
        state.activeLlmId = pid;
        state.llmProfiles.forEach((p) => { p.active = p.id === pid; });
        return jsonResponse({ ok: true, active_id: pid });
      }
      if (method === 'POST' && act === 'test') {
        return jsonResponse({ ok: true, latency_ms: randInt(140, 260), model: body?.model || 'deepseek-chat', reply: 'OK (Demo Ready)' });
      }
      if (method === 'PUT' || method === 'PATCH') {
        const idx = state.llmProfiles.findIndex((p) => p.id === pid);
        if (idx >= 0) state.llmProfiles[idx] = { ...state.llmProfiles[idx], ...(body || {}) };
        return jsonResponse({ ok: true, profile: state.llmProfiles[idx] });
      }
      if (method === 'DELETE') {
        state.llmProfiles = state.llmProfiles.filter((p) => p.id !== pid);
        return jsonResponse({ ok: true });
      }
    }
    if (method === 'POST' && path === '/api/llm/models') {
      return jsonResponse({ ok: true, models: ['deepseek-chat', 'deepseek-reasoner', 'gpt-4o-mini', 'gpt-4.1', 'claude-sonnet-4', 'gemini-2.5-flash', 'qwen3-coder-plus'] });
    }
    if (method === 'GET' && path === '/api/llm/calls') {
      return jsonResponse({ ok: true, calls: [], total: 0 });
    }
    if (method === 'GET' && path === '/api/llm/magpie/status') return jsonResponse({ available: false, providers: [] });

    if (method === 'GET' && path === '/api/agent/config') {
      return jsonResponse({
        agent: state.agentConfig, available_tools: state.availableTools, skills: state.agentSkills, guard_rules: [], approvals: [],
      });
    }
    if ((method === 'PUT' || method === 'POST') && path === '/api/agent/config') {
      const src = body?.agent || body || {};
      state.agentConfig = { ...state.agentConfig, ...src };
      return jsonResponse({ ok: true, agent: state.agentConfig });
    }
    const mSkill = path.match(/^\/api\/agent\/skills\/([^/]+)$/);
    if (mSkill) {
      const skid = decodeURIComponent(mSkill[1]);
      const sk = state.agentSkills.find((x) => x.id === skid || x.name === skid);
      if (!sk) return jsonResponse({ error: 'Skill not found' }, 404);
      if (method === 'GET') return jsonResponse({ ok: true, skill: sk, content: sk.content });
      if (method === 'PUT' || method === 'POST') {
        if (typeof body?.content === 'string') sk.content = body.content;
        if (typeof body?.enabled === 'boolean') sk.enabled = body.enabled;
        return jsonResponse({ ok: true, skill: sk });
      }
    }

    // 11. Agent Sessions
    if (method === 'GET' && path === '/api/agent/sessions') {
      return jsonResponse({ sessions: state.agentSessions.map(agentSummary), active_session_id: state.activeAgentSid });
    }
    if (method === 'POST' && path === '/api/agent/sessions') {
      const sid = `ag_demo_${randHex(6)}`;
      const s = {
        id: sid, title: body?.title || `新注册任务会话 ${state.agentSessions.length + 1}`,
        status: 'idle', target_url: body?.target_url || '', llm_profile_id: state.activeLlmId,
        llm_model: 'deepseek-chat', model: 'deepseek-chat', steps_count: 0, input_tokens: 0, output_tokens: 0,
        last_seq: 0, created_at: nowDateTime().slice(0, 16), updated_at: nowDateTime().slice(0, 16),
        plan_steps: [], usage: { input_tokens: 0, output_tokens: 0, total_tokens: 0 }, messages: [], events: [],
      };
      state.agentSessions.unshift(s);
      return jsonResponse({ ok: true, session: s });
    }
    const mAgBase = path.match(/^\/api\/agent\/sessions\/([^/]+)$/);
    if (mAgBase) {
      const sid = decodeURIComponent(mAgBase[1]);
      const idx = state.agentSessions.findIndex((x) => x.id === sid);
      if (idx < 0) return jsonResponse({ error: 'Not found' }, 404);
      const sess = state.agentSessions[idx];
      if (method === 'GET') return jsonResponse({ ok: true, session: sess });
      if (method === 'PATCH') {
        if (body?.title) sess.title = String(body.title).slice(0, 80);
        if (body?.llm_model !== undefined) sess.llm_model = body.llm_model === '__follow_profile__' ? 'deepseek-chat' : body.llm_model;
        return jsonResponse({ ok: true, session: agentSummary(sess) });
      }
      if (method === 'DELETE') {
        state.agentSessions.splice(idx, 1);
        return jsonResponse({ ok: true });
      }
    }
    const mAgMsg = path.match(/^\/api\/agent\/sessions\/([^/]+)\/message$/);
    if (method === 'POST' && mAgMsg) {
      const sid = decodeURIComponent(mAgMsg[1]);
      const sess = state.agentSessions.find((x) => x.id === sid);
      if (!sess) return jsonResponse({ error: 'Not found' }, 404);
      const content = String(body?.content || body?.message || '').trim();
      const targetUrl = String(body?.target_url || '').trim();
      if (!content) return jsonResponse({ error: '请输入指令' }, 400);
      startSimulatedAgentTurn(sess, content, targetUrl);
      return jsonResponse({ ok: true, session: agentSummary(sess) });
    }
    const mAgStop = path.match(/^\/api\/agent\/sessions\/([^/]+)\/stop$/);
    if (method === 'POST' && mAgStop) {
      const sid = decodeURIComponent(mAgStop[1]);
      const sess = state.agentSessions.find((x) => x.id === sid);
      state.agentTimers.forEach(clearTimeout);
      state.agentTimers = [];
      if (sess && sess.status === 'running') {
        sess.status = 'stopped';
        state.activeAgentSid = '';
        pushAgentEvent(sess, { type: 'status', status: 'stopped', error: '用户已手动停止模拟执行' });
      }
      return jsonResponse({ ok: true, status: 'stopped' });
    }
    const mAgEvs = path.match(/^\/api\/agent\/sessions\/([^/]+)\/events$/);
    if (method === 'GET' && mAgEvs) {
      const sid = decodeURIComponent(mAgEvs[1]);
      const sess = state.agentSessions.find((x) => x.id === sid);
      const after = Number(searchParams.get('after_seq') || 0);
      const evs = sess ? sess.events.filter((e) => (e.seq || 0) > after) : [];
      return jsonResponse({ ok: true, events: evs, last_seq: sess?.last_seq || 0, has_more: false });
    }
    const mAgExp = path.match(/^\/api\/agent\/sessions\/([^/]+)\/export$/);
    if (method === 'GET' && mAgExp) {
      const sess = state.agentSessions.find((x) => x.id === decodeURIComponent(mAgExp[1]));
      if (!sess) return jsonResponse({ error: 'Not found' }, 404);
      const md = [`# ${sess.title}`, '', ...sess.messages.map((m) => `## ${m.role}\n${m.content || m.tool_result || ''}\n`)].join('\n');
      return jsonResponse({ ok: true, filename: `${sess.id}.md`, markdown: md });
    }
    const mAgBtw = path.match(/^\/api\/agent\/sessions\/([^/]+)\/side-question\/stream$/);
    if (method === 'POST' && mAgBtw) {
      const q = String(body?.question || '');
      const answer = `关于「${q}」：当前为纯前端静态演示站，展示与 Studio 一致的 \`/btw\` 旁路答疑流式交互；本地运行后将连接真实大模型上下文解答。`;
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'delta', delta: answer })}\n\n`));
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'done', answer, model: 'deepseek-chat', latency_ms: 210 })}\n\n`));
          controller.close();
        },
      });
      return new Response(stream, { status: 200, headers: { 'Content-Type': 'text/event-stream; charset=utf-8' } });
    }

    return jsonResponse({ ok: false, error: `Demo route not found: ${method} ${path}` }, 404);
  }

  window.fetch = async function patchedFetch(input, init = {}) {
    const parsed = extractApiPath(input);
    if (!parsed) {
      if (ORIGINAL_FETCH) return ORIGINAL_FETCH(input, init);
      throw new Error(`Fetch unavailable for ${input}`);
    }
    const method = String((init && init.method) || (input && input.method) || 'GET').toUpperCase();
    let body = {};
    if (init && typeof init.body === 'string') {
      try { body = JSON.parse(init.body); } catch { body = {}; }
    }
    await new Promise((r) => setTimeout(r, 30));
    return handleApi(method, parsed.path, parsed.searchParams, body);
  };
})();
