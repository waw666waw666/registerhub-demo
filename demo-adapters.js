// Auto-generated synthetic RegisterHub Demo adapters (RFC 2606 example domains) & window geometry
window.__RH_DEMO_ADAPTERS__ = [
  {
    "name": "demo",
    "class_name": "DemoSiteAdapter",
    "tier": "template",
    "target_url": "embedded / local (Base64 HTML)",
    "file": "sites/demo_site.py",
    "lines": 81,
    "code": "\"\"\"\nDemo Site Adapter.\nDemonstrates standard form filling, identity generation, and submission.\n\"\"\"\nfrom typing import Dict, Any\nfrom core.adapter import BaseSiteAdapter\nfrom core.identity import generate_identity\n\n\nclass DemoSiteAdapter(BaseSiteAdapter):\n    \"\"\"\n    Standard demonstration adapter.\n    Uses an embedded self-contained registration page to guarantee\n    100% successful offline or local execution.\n    \"\"\"\n\n    def target_url(self) -> str:\n        # A lightweight data URI containing a complete, standard registration form\n        html_content = \"\"\"\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset=\"utf-8\">\n            <title>Demo Registration Portal</title>\n            <style>\n                body { font-family: sans-serif; background: #f0f2f5; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }\n                .card { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 360px; }\n                h2 { margin-top: 0; color: #1a1a1a; text-align: center; }\n                .field { margin-bottom: 15px; }\n                label { display: block; margin-bottom: 5px; font-weight: bold; font-size: 13px; color: #555; }\n                input { width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; }\n                button { width: 100%; padding: 12px; background: #0066cc; color: white; border: none; border-radius: 4px; font-size: 15px; cursor: pointer; font-weight: bold; margin-top: 10px; }\n                button:hover { background: #0052a3; }\n                .success-msg { display: none; color: #2e7d32; text-align: center; font-weight: bold; margin-top: 15px; }\n            </style>\n        </head>\n        <body>\n            <div class=\"card\">\n                <h2>Create Account</h2>\n                <form id=\"regForm\" onsubmit=\"event.preventDefault(); document.getElementById('regForm').style.display='none'; document.getElementById('success').style.display='block';\">\n                    <div class=\"field\">\n                        <label>Username</label>\n                        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Enter username\" required>\n                    </div>\n                    <div class=\"field\">\n                        <label>Email Address</label>\n                        <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"name@example.com\" required>\n                    </div>\n                    <div class=\"field\">\n                        <label>Password</label>\n                        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"At least 8 chars\" required>\n                    </div>\n                    <button type=\"submit\" id=\"submitBtn\">Sign up</button>\n                </form>\n                <div id=\"success\" class=\"success-msg\">\n                    <h3>Welcome aboard!</h3>\n                    <p>Account registered successfully.</p>\n                </div>\n            </div>\n        </body>\n        </html>\n        \"\"\"\n        import base64\n        encoded = base64.b64encode(html_content.encode(\"utf-8\")).decode(\"utf-8\")\n        return f\"data:text/html;base64,{encoded}\"\n\n    def prepare_identity(self) -> Dict[str, Any]:\n        self.account_data = generate_identity(email_domain=\"demo-community.org\")\n        return self.account_data\n\n    def fill_form(self, identity: Dict[str, Any]) -> bool:\n        self.page.wait_for_selector(\"#username\", timeout=10000)\n        self.page.fill(\"#username\", identity[\"username\"])\n        self.page.fill(\"#email\", identity[\"email\"])\n        self.page.fill(\"#password\", identity[\"password\"])\n        return True\n\n    def submit_and_confirm(self) -> bool:\n        self.page.click(\"#submitBtn\")\n        self.page.wait_for_selector(\"#success\", state=\"visible\", timeout=10000)\n        return True\n"
  },
  {
    "name": "acmespeech",
    "class_name": "AcmeSpeechAdapter",
    "tier": "verified",
    "target_url": "https://console.acmespeech.example.com/signup",
    "file": "sites/acmespeech.py",
    "lines": 53,
    "code": "\"\"\"AcmeSpeech Synthetic Demo Adapter.\nDemonstrates form input, interactive challenge clearance, email OTP, and REST API Key minting.\nTarget URL: https://console.acmespeech.example.com/signup (RFC 2606 synthetic showcase domain)\n\"\"\"\nimport time\nimport requests\nfrom typing import Dict, Any, Optional\n\nfrom core.adapter import BaseSiteAdapter\nfrom core.identity import generate_identity\nfrom core.pilot import human_type, smart_click\nfrom core.mail_client import DisposableMailClient\n\n\nclass AcmeSpeechAdapter(BaseSiteAdapter):\n    \"\"\"Reference adapter for synthetic Voice AI console onboarding.\"\"\"\n\n    def __init__(self, page, context, config=None):\n        super().__init__(page, context, config)\n        self.mail_client: Optional[DisposableMailClient] = None\n        self.api_key: Optional[str] = None\n\n    def target_url(self) -> str:\n        return \"https://console.acmespeech.example.com/signup\"\n\n    def prepare_identity(self) -> Dict[str, Any]:\n        self.mail_client = DisposableMailClient()\n        self.account_data = generate_identity(locale=\"US\", mail_client=self.mail_client)\n        return self.account_data\n\n    def fill_form(self, identity: Dict[str, Any]) -> bool:\n        self.page.wait_for_selector(\"#email\", timeout=20000)\n        human_type(self.page, \"#email\", identity[\"email\"])\n        time.sleep(0.2)\n        human_type(self.page, \"#new-password\", identity[\"password\"])\n        return True\n\n    def submit_and_confirm(self) -> bool:\n        smart_click(self.page, 'button:has-text(\"Create account\")')\n        api_base = \"https://api.acmespeech.example.com/v1\"\n        session = requests.Session()\n        code = self.mail_client.poll_for_verification_code(pattern=r\"\\b\\d{6}\\b\", timeout_secs=60) if self.mail_client else \"\"\n        if not code:\n            return False\n        r_ver = session.post(f\"{api_base}/auth/verify-email\", json={\"code\": code}, timeout=15)\n        if r_ver.status_code not in (200, 201):\n            return False\n        r_key = session.post(f\"{api_base}/projects/default/keys\", json={\"name\": \"RegisterHub-Demo\"}, timeout=15)\n        if r_key.status_code in (200, 201):\n            self.api_key = r_key.json().get(\"key\")\n            self.account_data[\"api_key\"] = self.api_key\n            return bool(self.api_key)\n        return False\n"
  },
  {
    "name": "novaapi",
    "class_name": "NovaApiAdapter",
    "tier": "verified",
    "target_url": "https://portal.nova-api.example.com/signup",
    "file": "sites/novaapi.py",
    "lines": 35,
    "code": "\"\"\"NovaAPI Synthetic Demo Adapter.\nDemonstrates modal dismissal, Turnstile token wait, and DOM API Key card extraction.\nTarget URL: https://portal.nova-api.example.com/signup (RFC 2606 synthetic showcase domain)\n\"\"\"\nimport time\nfrom typing import Dict, Any\nfrom core.adapter import BaseSiteAdapter\nfrom core.identity import generate_identity\nfrom core.pilot import human_type\n\n\nclass NovaApiAdapter(BaseSiteAdapter):\n    \"\"\"Reference adapter for Turnstile-protected developer API portal.\"\"\"\n\n    def target_url(self) -> str:\n        return \"https://portal.nova-api.example.com/signup\"\n\n    def prepare_identity(self) -> Dict[str, Any]:\n        self.account_data = generate_identity(email_domain=\"demo-mail.test\", locale=\"US\")\n        return self.account_data\n\n    def fill_form(self, identity: Dict[str, Any]) -> bool:\n        self.page.wait_for_selector('#signup input[name=\"email\"]', timeout=15000)\n        human_type(self.page, '#signup input[name=\"email\"]', identity[\"email\"])\n        time.sleep(0.5)\n        return True\n\n    def submit_and_confirm(self) -> bool:\n        self.page.click('#signup button[type=\"submit\"]')\n        self.page.wait_for_selector('#done [data-p=\"key\"]', state=\"visible\", timeout=15000)\n        key = self.page.locator('#done [data-p=\"key\"]').inner_text().strip()\n        if not key:\n            return False\n        self.account_data[\"api_key\"] = key\n        return True\n"
  },
  {
    "name": "slidersandbox",
    "class_name": "SliderSandboxAdapter",
    "tier": "verified",
    "target_url": "https://auth.slidersandbox.example.com/register",
    "file": "sites/slidersandbox.py",
    "lines": 41,
    "code": "\"\"\"SliderSandbox Synthetic Demo Adapter.\nDemonstrates offline OpenCV Canny edge detection + normalized template matching for slider puzzles.\nTarget URL: https://auth.slidersandbox.example.com/register (RFC 2606 synthetic showcase domain)\n\"\"\"\nimport base64\nfrom typing import Dict, Any\nimport cv2\nimport numpy as np\nfrom core.adapter import BaseSiteAdapter\nfrom core.identity import generate_identity\nfrom core.pilot import human_type, smart_click\n\n\ndef solve_slider_gap(bg_b64: str, piece_b64: str, piece_y: int, offset: int = 10) -> int:\n    bg_bytes = base64.b64decode(bg_b64.split(\",\")[-1])\n    piece_bytes = base64.b64decode(piece_b64.split(\",\")[-1])\n    bg = cv2.imdecode(np.frombuffer(bg_bytes, np.uint8), cv2.IMREAD_COLOR)\n    piece = cv2.imdecode(np.frombuffer(piece_bytes, np.uint8), cv2.IMREAD_UNCHANGED)\n    mask = (piece[:, :, 3] > 0).astype(np.uint8) * 255\n    bg_edge = cv2.Canny(cv2.cvtColor(bg, cv2.COLOR_BGR2GRAY), 100, 200)\n    piece_edge = cv2.bitwise_and(cv2.Canny(cv2.cvtColor(piece[:, :, :3], cv2.COLOR_BGR2GRAY), 100, 200), mask)\n    band = bg_edge[max(0, piece_y - offset - 6) : min(bg.shape[0], piece_y - offset + piece.shape[0] + 6), :]\n    _, _, _, max_loc = cv2.minMaxLoc(cv2.matchTemplate(band, piece_edge, cv2.TM_CCOEFF_NORMED))\n    return int(max_loc[0] + offset)\n\n\nclass SliderSandboxAdapter(BaseSiteAdapter):\n    def target_url(self) -> str:\n        return \"https://auth.slidersandbox.example.com/register\"\n\n    def prepare_identity(self) -> Dict[str, Any]:\n        self.account_data = generate_identity(locale=\"US\")\n        return self.account_data\n\n    def fill_form(self, identity: Dict[str, Any]) -> bool:\n        human_type(self.page, \"#f-email\", identity[\"email\"])\n        human_type(self.page, \"#f-pass\", identity[\"password\"])\n        return True\n\n    def submit_and_confirm(self) -> bool:\n        return smart_click(self.page, \"form button.btn-cta\")\n"
  },
  {
    "name": "devcloud",
    "class_name": "DevCloudAdapter",
    "tier": "verified",
    "target_url": "https://developer.cloudlab.example.org/signup",
    "file": "sites/devcloud.py",
    "lines": 26,
    "code": "\"\"\"DevCloud Synthetic Demo Adapter.\nDemonstrates multi-field enterprise developer portal signup with region & role selection.\nTarget URL: https://developer.cloudlab.example.org/signup (RFC 2606 synthetic showcase domain)\n\"\"\"\nfrom typing import Dict, Any\nfrom core.adapter import BaseSiteAdapter\nfrom core.identity import generate_identity\nfrom core.pilot import human_type, smart_click\n\n\nclass DevCloudAdapter(BaseSiteAdapter):\n    def target_url(self) -> str:\n        return \"https://developer.cloudlab.example.org/signup\"\n\n    def prepare_identity(self) -> Dict[str, Any]:\n        self.account_data = generate_identity(locale=\"US\")\n        return self.account_data\n\n    def fill_form(self, identity: Dict[str, Any]) -> bool:\n        human_type(self.page, 'input[name=\"first_name\"]', identity[\"first_name\"])\n        human_type(self.page, 'input[name=\"last_name\"]', identity[\"last_name\"])\n        human_type(self.page, 'input[name=\"email\"]', identity[\"email\"])\n        return True\n\n    def submit_and_confirm(self) -> bool:\n        return smart_click(self.page, 'button[type=\"submit\"]')\n"
  },
  {
    "name": "studio_oauth",
    "class_name": "StudioOAuthAdapter",
    "tier": "partial",
    "target_url": "https://app.openstudio.example.net/account/api",
    "file": "sites/studio_oauth.py",
    "lines": 24,
    "code": "\"\"\"StudioOAuth Synthetic Demo Adapter.\nDemonstrates session-authenticated API Key creation inside a developer dashboard.\nTarget URL: https://app.openstudio.example.net/account/api (RFC 2606 synthetic showcase domain)\n\"\"\"\nfrom typing import Dict, Any\nfrom core.adapter import BaseSiteAdapter\nfrom core.identity import generate_identity\n\n\nclass StudioOAuthAdapter(BaseSiteAdapter):\n    def target_url(self) -> str:\n        return \"https://app.openstudio.example.net/account/api\"\n\n    def prepare_identity(self) -> Dict[str, Any]:\n        self.account_data = generate_identity(locale=\"UK\")\n        return self.account_data\n\n    def fill_form(self, identity: Dict[str, Any]) -> bool:\n        self.page.wait_for_selector(\"button.create-key\", timeout=15000)\n        return True\n\n    def submit_and_confirm(self) -> bool:\n        self.page.click(\"button.create-key\")\n        return True\n"
  }
];
window.__RH_DEMO_GEOMETRY__ = {
  "calibrated_at": "2026-11-19 12:50:00",
  "description": "Win11 1920x1080 @ 125% DPI (逻辑工作区 1536x864) 全家桶对称精修标定：1全屏 / 2左右 / 4双形态 / 6双形态",
  "screen_resolution": "1920x1080 (125% -> 1536x864)",
  "total_slots": 4,
  "quad_mode": "centered_compact",
  "hex_mode": "wing_cascade",
  "single_concurrency": {
    "total_slots": 1,
    "description": "1并发：全屏满屏",
    "slots": [
      {
        "slot": 0,
        "name": "单窗口 (全屏)",
        "x": -6,
        "y": 0,
        "width": 1548,
        "height": 871,
        "dpr": 1.25,
        "zoom": 0.85
      }
    ]
  },
  "dual_concurrency": {
    "total_slots": 2,
    "description": "2并发：左右两侧全高贴边 (Win11 Snap 对称精修)",
    "slots": [
      {
        "slot": 0,
        "name": "左窗口 (#1)",
        "x": -6,
        "y": 0,
        "width": 782,
        "height": 871,
        "dpr": 1.25,
        "zoom": 0.85
      },
      {
        "slot": 1,
        "name": "右窗口 (#2)",
        "x": 762,
        "y": 0,
        "width": 782,
        "height": 871,
        "dpr": 1.25,
        "zoom": 0.85
      }
    ]
  },
  "quad_presets": {
    "edge_2x2": {
      "total_slots": 4,
      "description": "4并发形式一：严丝合缝贴满四边 (0缝隙0重叠)",
      "slots": [
        {
          "slot": 0,
          "name": "左上 (#1)",
          "x": -6,
          "y": 0,
          "width": 782,
          "height": 439,
          "dpr": 1.25,
          "zoom": 0.68
        },
        {
          "slot": 1,
          "name": "右上 (#2)",
          "x": 762,
          "y": 0,
          "width": 782,
          "height": 439,
          "dpr": 1.25,
          "zoom": 0.68
        },
        {
          "slot": 2,
          "name": "左下 (#3)",
          "x": -6,
          "y": 432,
          "width": 782,
          "height": 439,
          "dpr": 1.25,
          "zoom": 0.68
        },
        {
          "slot": 3,
          "name": "右下 (#4)",
          "x": 762,
          "y": 432,
          "width": 782,
          "height": 439,
          "dpr": 1.25,
          "zoom": 0.68
        }
      ]
    },
    "centered_compact": {
      "total_slots": 4,
      "description": "4并发形式二：四周对称留白居中紧凑微叠 (鼠标行程短)",
      "slots": [
        {
          "slot": 0,
          "name": "左上 (#1)",
          "x": 78,
          "y": 64,
          "width": 780,
          "height": 440,
          "dpr": 1.25,
          "zoom": 0.7
        },
        {
          "slot": 1,
          "name": "右上 (#2)",
          "x": 678,
          "y": 64,
          "width": 780,
          "height": 440,
          "dpr": 1.25,
          "zoom": 0.7
        },
        {
          "slot": 2,
          "name": "左下 (#3)",
          "x": 78,
          "y": 360,
          "width": 780,
          "height": 440,
          "dpr": 1.25,
          "zoom": 0.7
        },
        {
          "slot": 3,
          "name": "右下 (#4)",
          "x": 678,
          "y": 360,
          "width": 780,
          "height": 440,
          "dpr": 1.25,
          "zoom": 0.7
        }
      ]
    }
  },
  "hex_presets": {
    "edge_3x2": {
      "total_slots": 6,
      "description": "6并发形式一：严丝合缝贴满六宫格 (0缝隙0重叠)",
      "slots": [
        {
          "slot": 0,
          "name": "上左 (#1)",
          "x": -6,
          "y": 0,
          "width": 526,
          "height": 440,
          "dpr": 1.25,
          "zoom": 0.59
        },
        {
          "slot": 1,
          "name": "上中 (#2)",
          "x": 506,
          "y": 0,
          "width": 526,
          "height": 440,
          "dpr": 1.25,
          "zoom": 0.59
        },
        {
          "slot": 2,
          "name": "上右 (#3)",
          "x": 1018,
          "y": 0,
          "width": 526,
          "height": 440,
          "dpr": 1.25,
          "zoom": 0.59
        },
        {
          "slot": 3,
          "name": "下左 (#4)",
          "x": -6,
          "y": 432,
          "width": 526,
          "height": 440,
          "dpr": 1.25,
          "zoom": 0.59
        },
        {
          "slot": 4,
          "name": "下中 (#5)",
          "x": 506,
          "y": 432,
          "width": 526,
          "height": 440,
          "dpr": 1.25,
          "zoom": 0.59
        },
        {
          "slot": 5,
          "name": "下右 (#6)",
          "x": 1018,
          "y": 432,
          "width": 526,
          "height": 440,
          "dpr": 1.25,
          "zoom": 0.59
        }
      ]
    },
    "wing_cascade": {
      "total_slots": 6,
      "description": "6并发形式二：左右镜像对称八字阶梯展翼 (660x480大视野、0切边、状态栏全裸露)",
      "slots": [
        {
          "slot": 0,
          "name": "左翼上 (#1)",
          "x": 114,
          "y": 24,
          "width": 660,
          "height": 480,
          "dpr": 1.25,
          "zoom": 0.65
        },
        {
          "slot": 1,
          "name": "右翼上 (#2)",
          "x": 762,
          "y": 24,
          "width": 660,
          "height": 480,
          "dpr": 1.25,
          "zoom": 0.65
        },
        {
          "slot": 2,
          "name": "左翼中 (#3)",
          "x": 54,
          "y": 204,
          "width": 660,
          "height": 480,
          "dpr": 1.25,
          "zoom": 0.65
        },
        {
          "slot": 3,
          "name": "右翼中 (#4)",
          "x": 822,
          "y": 204,
          "width": 660,
          "height": 480,
          "dpr": 1.25,
          "zoom": 0.65
        },
        {
          "slot": 4,
          "name": "左翼下 (#5)",
          "x": -6,
          "y": 384,
          "width": 660,
          "height": 480,
          "dpr": 1.25,
          "zoom": 0.65
        },
        {
          "slot": 5,
          "name": "右翼下 (#6)",
          "x": 882,
          "y": 384,
          "width": 660,
          "height": 480,
          "dpr": 1.25,
          "zoom": 0.65
        }
      ]
    }
  },
  "slots": [
    {
      "slot": 0,
      "name": "左上 (#1)",
      "x": 78,
      "y": 64,
      "width": 780,
      "height": 440,
      "dpr": 1.25,
      "zoom": 0.7
    },
    {
      "slot": 1,
      "name": "右上 (#2)",
      "x": 678,
      "y": 64,
      "width": 780,
      "height": 440,
      "dpr": 1.25,
      "zoom": 0.7
    },
    {
      "slot": 2,
      "name": "左下 (#3)",
      "x": 78,
      "y": 360,
      "width": 780,
      "height": 440,
      "dpr": 1.25,
      "zoom": 0.7
    },
    {
      "slot": 3,
      "name": "右下 (#4)",
      "x": 678,
      "y": 360,
      "width": 780,
      "height": 440,
      "dpr": 1.25,
      "zoom": 0.7
    }
  ],
  "x": -6,
  "y": 0,
  "width": 1548,
  "height": 871,
  "zoom": 0.85,
  "dpr": 1.25,
  "work_area": {
    "left": 0,
    "top": 0,
    "width": 1536,
    "height": 864
  }
};
