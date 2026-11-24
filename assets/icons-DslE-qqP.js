import{r as a,j as A,R as ye,a as Dt}from"./react-DIei6r0b.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),vt=e=>{const t=zn(e);return t.charAt(0).toUpperCase()+t.slice(1)},At=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),Tn=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:i,...s},f)=>a.createElement("svg",{ref:f,...Fn,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:At("lucide",o),...!c&&!Tn(s)&&{"aria-hidden":"true"},...s},[...i.map(([l,h])=>a.createElement(l,h)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,t)=>{const n=a.forwardRef(({className:r,...o},c)=>a.createElement(qn,{ref:c,iconNode:t,className:At(`lucide-${Ln(vt(e))}`,`lucide-${e}`,r),...o}));return n.displayName=vt(e),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],di=u("activity",Vn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],fi=u("app-window",Un);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]],hi=u("archive-restore",Bn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],yi=u("archive",Hn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],pi=u("arrow-down-to-line",Wn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],vi=u("arrow-down",Kn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],mi=u("arrow-left",Zn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ki=u("arrow-right",Gn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],gi=u("arrow-up-down",Xn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],bi=u("arrow-up-right",Yn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],wi=u("arrow-up",Qn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],xi=u("award",Jn);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],_i=u("bell",er);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Mi=u("book-open",tr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Ei=u("bot",nr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Ci=u("briefcase",rr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Si=u("building-2",or);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ni=u("camera",ar);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Pi=u("check",cr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ri=u("chevron-down",ir);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],$i=u("chevron-left",sr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Di=u("chevron-right",lr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ai=u("chevron-up",ur);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Oi=u("circle-alert",dr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ii=u("circle-check",fr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ji=u("circle-help",hr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Li=u("circle-x",yr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],zi=u("circle",pr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=[["path",{d:"M11 14h10",key:"1w8e9d"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344",key:"1e62lh"}],["path",{d:"m17 18 4-4-4-4",key:"z2g111"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",key:"bjbb7m"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]],Ti=u("clipboard-paste",vr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Fi=u("clock",mr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]],qi=u("cloud-download",kr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Vi=u("cloud-upload",gr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Ui=u("code-xml",br);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Bi=u("copy",wr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=[["path",{d:"m15 10 5 5-5 5",key:"qqa56n"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]],Hi=u("corner-down-right",xr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Wi=u("cpu",_r);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Ki=u("credit-card",Mr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Zi=u("crosshair",Er);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Gi=u("database",Cr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]],Xi=u("dices",Sr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Yi=u("download",Nr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Qi=u("ellipsis",Pr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ji=u("external-link",Rr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],es=u("eye-off",$r);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ts=u("eye",Dr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],ns=u("file-code-2",Ar);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],rs=u("file-json",Or);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],os=u("file-text",Ir);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],as=u("file-up",jr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],cs=u("flame",Lr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],is=u("flask-conical",zr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],ss=u("folder-open",Tr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],ls=u("folder-tree",Fr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],us=u("gauge",qr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]],ds=u("git-compare",Vr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],fs=u("globe",Ur);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],hs=u("grip-vertical",Br);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]],ys=u("id-card",Hr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],ps=u("inbox",Wr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],vs=u("info",Kr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],ms=u("key-round",Zr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",key:"165ttr"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",key:"1ubxi2"}]],ks=u("key-square",Gr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],gs=u("layers",Xr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],bs=u("layout-dashboard",Yr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],ws=u("layout-grid",Qr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],xs=u("link-2",Jr);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],_s=u("list-checks",eo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],Ms=u("list-todo",to);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],Es=u("list",no);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Cs=u("loader-circle",ro);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ss=u("mail",oo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ns=u("map-pin",ao);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Ps=u("maximize-2",co);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Rs=u("message-square",io);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],$s=u("minimize-2",so);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=[["path",{d:"M5 12h14",key:"1ays0h"}]],Ds=u("minus",lo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],As=u("monitor",uo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Os=u("moon",fo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],Is=u("mouse-pointer-click",ho);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],js=u("network",yo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Ls=u("palette",po);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],zs=u("panel-left-close",vo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Ts=u("panel-left-open",mo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],Fs=u("paperclip",ko);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],qs=u("pause",go);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Vs=u("pencil",bo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Us=u("phone",wo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],Bs=u("pin",xo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Hs=u("play",_o);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ws=u("plus",Mo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],Ks=u("power",Eo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Zs=u("radio",Co);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Gs=u("refresh-cw",So);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Xs=u("rocket",No);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ys=u("rotate-ccw",Po);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Qs=u("save",Ro);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Js=u("search",$o);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],el=u("send",Do);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],tl=u("settings-2",Ao);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],nl=u("server",Oo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],rl=u("settings",Io);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],ol=u("shield-alert",jo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],al=u("shield-check",Lo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],cl=u("shield",zo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],il=u("sliders-horizontal",To);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],sl=u("sliders-vertical",Fo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],ll=u("sparkles",qo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ul=u("square",Vo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],dl=u("star",Uo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]],fl=u("sticky-note",Bo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],hl=u("sun",Ho);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],yl=u("tag",Wo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],pl=u("target",Ko);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],vl=u("terminal",Zo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],ml=u("trash-2",Go);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],kl=u("triangle-alert",Xo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],gl=u("upload",Yo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],bl=u("users",Qo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],wl=u("wand-sparkles",Jo);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=[["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["path",{d:"M3 18h7",key:"sq21v6"}],["path",{d:"M3 6h18",key:"d0wm0j"}]],xl=u("wrap-text",ea);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_l=u("x",ta);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],Ml=u("wrench",na);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],El=u("zap",ra);var mt=1,oa=.9,aa=.8,ca=.17,Oe=.1,Ie=.999,ia=.9999,sa=.99,la=/[\\\/_+.#"@\[\(\{&]/,ua=/[\\\/_+.#"@\[\(\{&]/g,da=/[\s-]/,Ot=/[\s-]/g;function Ue(e,t,n,r,o,c,i){if(c===t.length)return o===e.length?mt:sa;var s=`${o},${c}`;if(i[s]!==void 0)return i[s];for(var f=r.charAt(c),l=n.indexOf(f,o),h=0,d,y,g,m;l>=0;)d=Ue(e,t,n,r,l+1,c+1,i),d>h&&(l===o?d*=mt:la.test(e.charAt(l-1))?(d*=aa,g=e.slice(o,l-1).match(ua),g&&o>0&&(d*=Math.pow(Ie,g.length))):da.test(e.charAt(l-1))?(d*=oa,m=e.slice(o,l-1).match(Ot),m&&o>0&&(d*=Math.pow(Ie,m.length))):(d*=ca,o>0&&(d*=Math.pow(Ie,l-o))),e.charAt(l)!==t.charAt(c)&&(d*=ia)),(d<Oe&&n.charAt(l-1)===r.charAt(c+1)||r.charAt(c+1)===r.charAt(c)&&n.charAt(l-1)!==r.charAt(c))&&(y=Ue(e,t,n,r,l+1,c+2,i),y*Oe>d&&(d=y*Oe)),d>h&&(h=d),l=n.indexOf(f,l+1);return i[s]=h,h}function kt(e){return e.toLowerCase().replace(Ot," ")}function fa(e,t,n){return e=n&&n.length>0?`${e+" "+n.join(" ")}`:e,Ue(e,t,kt(e),kt(t),0,0,{})}var ha=Object.defineProperty,pe=(e,t)=>ha(e,"name",{value:t,configurable:!0}),It=!!(typeof window<"u"&&window.document&&window.document.createElement);function ee(e,t,{checkForDefaultPrevented:n=!0}={}){return pe(function(o){if(e==null||e(o),n===!1||!o||!o.defaultPrevented)return t==null?void 0:t(o)},"handleEvent")}pe(ee,"composeEventHandlers");function ya(e){var t;if(!It)throw new Error("Cannot access window outside of the DOM");return((t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView)??window}pe(ya,"getOwnerWindow");function Be(e){if(!It)throw new Error("Cannot access document outside of the DOM");return(e==null?void 0:e.ownerDocument)??document}pe(Be,"getOwnerDocument");function jt(e,t=!1){const{activeElement:n}=Be(e);if(!(n!=null&&n.nodeName))return null;if(Lt(n)&&n.contentDocument)return jt(n.contentDocument.body,t);if(t){const r=n.getAttribute("aria-activedescendant");if(r){const o=Be(n).getElementById(r);if(o)return o}}return n}pe(jt,"getActiveElement");function Lt(e){return e.tagName==="IFRAME"}pe(Lt,"isFrame");var pa=Object.defineProperty,tt=(e,t)=>pa(e,"name",{value:t,configurable:!0});function He(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}tt(He,"setRef");function te(...e){return t=>{let n=!1;const r=e.map(o=>{const c=He(o,t);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let o=0;o<r.length;o++){const c=r[o];typeof c=="function"?c():He(e[o],null)}}}}tt(te,"composeRefs");function ve(...e){return a.useCallback(te(...e),e)}tt(ve,"useComposedRefs");var va=Object.defineProperty,V=(e,t)=>va(e,"name",{value:t,configurable:!0});function ma(e,t){const n=a.createContext(t);n.displayName=e+"Context";const r=V(c=>{const{children:i,...s}=c,f=a.useMemo(()=>s,Object.values(s));return A.jsx(n.Provider,{value:f,children:i})},"Provider");r.displayName=e+"Provider";function o(c,i={}){const{optional:s=!1}=i,f=a.useContext(n);if(f)return f;if(t!==void 0)return t;if(!s)throw new Error(`\`${c}\` must be used within \`${e}\``)}return V(o,"useContext"),[r,o]}V(ma,"createContext");function zt(e,t=[]){let n=[];function r(c,i){const s=a.createContext(i);s.displayName=c+"Context";const f=n.length;n=[...n,i];const l=V(d=>{var w;const{scope:y,children:g,...m}=d,v=((w=y==null?void 0:y[e])==null?void 0:w[f])||s,k=a.useMemo(()=>m,Object.values(m));return A.jsx(v.Provider,{value:k,children:g})},"Provider");l.displayName=c+"Provider";function h(d,y,g={}){var w;const{optional:m=!1}=g,v=((w=y==null?void 0:y[e])==null?void 0:w[f])||s,k=a.useContext(v);if(k)return k;if(i!==void 0)return i;if(!m)throw new Error(`\`${d}\` must be used within \`${c}\``)}return V(h,"useContext"),[l,h]}V(r,"createContext");const o=V(()=>{const c=n.map(i=>a.createContext(i));return V(function(s){const f=(s==null?void 0:s[e])||c;return a.useMemo(()=>({[`__scope${e}`]:{...s,[e]:f}}),[s,f])},"useScope")},"createScope");return o.scopeName=e,[r,Tt(o,...t)]}V(zt,"createContextScope");function Tt(...e){const t=e[0];if(e.length===1)return t;const n=V(()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return V(function(c){const i=r.reduce((s,{useScope:f,scopeName:l})=>{const d=f(c)[`__scope${l}`];return{...s,...d}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])},"useComposedScopes")},"createScope");return n.scopeName=t.scopeName,n}V(Tt,"composeContextScopes");var ne=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},ka=Object.defineProperty,ga=(e,t)=>ka(e,"name",{value:t,configurable:!0}),ba=ye[" useId ".trim().toString()]||(()=>{}),wa=0;function W(e){const[t,n]=a.useState(ba());return ne(()=>{e||n(r=>r??String(wa++))},[e]),e||(t?`radix-${t}`:"")}ga(W,"useId");var xa=Object.defineProperty,_a=(e,t)=>xa(e,"name",{value:t,configurable:!0}),gt=ye[" useEffectEvent ".trim().toString()],bt=ye[" useInsertionEffect ".trim().toString()];function Ft(e){if(typeof gt=="function")return gt(e);const t=a.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof bt=="function"?bt(()=>{t.current=e}):ne(()=>{t.current=e}),a.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}_a(Ft,"useEffectEvent");var Ma=Object.defineProperty,ge=(e,t)=>Ma(e,"name",{value:t,configurable:!0}),Ea=ye[" useInsertionEffect ".trim().toString()]||ne;function qt({prop:e,defaultProp:t,onChange:n=ge(()=>{},"onChange"),caller:r}){const[o,c,i]=Vt({defaultProp:t,onChange:n}),s=e!==void 0,f=s?e:o,l=a.useCallback(h=>{var d;if(s){const y=Ut(h)?h(e):h;y!==e&&((d=i.current)==null||d.call(i,y))}else c(h)},[s,e,c,i]);return[f,l]}ge(qt,"useControllableState");function Vt({defaultProp:e,onChange:t}){const[n,r]=a.useState(e),o=a.useRef(n),c=a.useRef(t);return Ea(()=>{c.current=t},[t]),a.useEffect(()=>{var i;o.current!==n&&((i=c.current)==null||i.call(c,n),o.current=n)},[n,o]),[n,r,c]}ge(Vt,"useUncontrolledState");function Ut(e){return typeof e=="function"}ge(Ut,"isFunction");var wt=Symbol("RADIX:SYNC_STATE");function Ca(e,t,n,r){const{prop:o,defaultProp:c,onChange:i,caller:s}=t,f=o!==void 0,l=Ft(i),h=[{...n,state:c}];r&&h.push(r);const[d,y]=a.useReducer((k,w)=>{if(w.type===wt)return{...k,state:w.state};const P=e(k,w);return f&&!Object.is(P.state,k.state)&&l(P.state),P},...h),g=d.state,m=a.useRef(g);a.useEffect(()=>{m.current!==g&&(m.current=g,f||l(g))},[g,m,f]);const v=a.useMemo(()=>o!==void 0?{...d,state:o}:d,[d,o]);return a.useEffect(()=>{f&&!Object.is(o,d.state)&&y({type:wt,state:o})},[o,d.state,f]),[v,y]}ge(Ca,"useControllableStateReducer");var Sa=Object.defineProperty,T=(e,t)=>Sa(e,"name",{value:t,configurable:!0});function nt(e){const t=a.forwardRef((n,r)=>{let{children:o,...c}=n,i=null,s=!1;const f=[];o=Gt(o),a.Children.forEach(o,y=>{var g;if(Kt(y)){s=!0;const m=y;let v="child"in m.props?m.props.child:m.props.children;for(;rt(v)&&typeof Pe=="function";)v=Pe(v._payload);i=Pa(m,v),f.push((g=i==null?void 0:i.props)==null?void 0:g.children)}else f.push(y)}),i?i=a.cloneElement(i,void 0,f):!s&&a.Children.count(o)===1&&a.isValidElement(o)&&(i=o);const l=i?Wt(i):void 0,h=ve(r,l);if(!i){if(o||o===0)throw new Error(s?Da(e):$a(e));return o}const d=Ht(c,i.props??{});return i.type!==a.Fragment&&(d.ref=r?h:l),a.cloneElement(i,d)});return t.displayName=`${e}.Slot`,t}T(nt,"createSlot");var Bt=Symbol.for("radix.slottable");function Na(e){const t=T(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Bt,t}T(Na,"createSlottable");var Pa=T((e,t)=>"child"in e.props?a.isValidElement(t)?a.cloneElement(t,void 0,e.props.children(t.props.children)):null:a.isValidElement(t)?t:null,"getSlottableElementFromSlottable");function Ht(e,t){const n={...t};for(const r in t){const o=e[r],c=t[r];/^on[A-Z]/.test(r)?o&&c?n[r]=(...s)=>{const f=c(...s);return o(...s),f}:o&&(n[r]=o):r==="style"?n[r]={...o,...c}:r==="className"?n[r]=[o,c].filter(Boolean).join(" "):r==="aria-describedby"&&(n[r]=Xt(c,o))}return{...e,...n}}T(Ht,"mergeProps");function Wt(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}T(Wt,"getElementRef");function Kt(e){return a.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Bt}T(Kt,"isSlottable");var Ra=Symbol.for("react.lazy");function rt(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Ra&&"_payload"in e&&Zt(e._payload)}T(rt,"isLazyComponent");function Zt(e){return typeof e=="object"&&e!==null&&"then"in e}T(Zt,"isPromiseLike");function Gt(e){let t=e;for(;rt(t)&&typeof Pe=="function";)t=Pe(t._payload);return t}T(Gt,"useUnwrappedLazy");function Xt(...e){const t=new Set;for(const n of e)if(typeof n=="string")for(const r of String(n).trim().split(/\s+/))r&&t.add(r);return t.size>0?Array.from(t).join(" "):void 0}T(Xt,"concatAriaDescribedby");var $a=T(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Da=T(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Pe=ye[" use ".trim().toString()],Aa=Object.defineProperty,Oa=(e,t)=>Aa(e,"name",{value:t,configurable:!0}),Ia=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],U=Ia.reduce((e,t)=>{const n=nt(`Primitive.${t}`),r=a.forwardRef((o,c)=>{const{asChild:i,...s}=o,f=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),A.jsx(f,{...s,ref:c})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Yt(e,t){e&&Dt.flushSync(()=>e.dispatchEvent(t))}Oa(Yt,"dispatchDiscreteCustomEvent");var ja=Object.defineProperty,La=(e,t)=>ja(e,"name",{value:t,configurable:!0}),xt=ye[" useInsertionEffect ".trim().toString()];function he(e){const t=a.useRef(e);return typeof xt=="function"?xt(()=>{t.current=e}):ne(()=>{t.current=e}),a.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}La(he,"useCallbackRef");var za=Object.defineProperty,j=(e,t)=>za(e,"name",{value:t,configurable:!0}),We="dismissableLayer.update",Ta="dismissableLayer.pointerDownOutside",Fa="dismissableLayer.focusOutside",_t,Qt=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),qa=a.forwardRef(j(function(t,n){const{disableOutsidePointerEvents:r=!1,deferPointerDownOutside:o=!1,onEscapeKeyDown:c,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:f,onDismiss:l,...h}=t,d=a.useContext(Qt),[y,g]=a.useState(null),m=(y==null?void 0:y.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,v]=a.useState({}),k=ve(n,g),w=Array.from(d.layers),[P]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),b=P?w.indexOf(P):-1,S=y?w.indexOf(y):-1,M=d.layersWithOutsidePointerEventsDisabled.size>0,_=S>=b,C=a.useRef(!1),I=en($=>{i==null||i($),f==null||f($),$.defaultPrevented||l==null||l()},{ownerDocument:m,deferPointerDownOutside:o,isDeferredPointerDownOutsideRef:C,dismissableSurfaces:d.dismissableSurfaces,shouldHandlePointerDownOutside:a.useCallback($=>{if(!($ instanceof Node))return!1;const ae=[...d.branches].some(Z=>Z.contains($));return _&&!ae},[d.branches,_])}),F=tn($=>{if(o&&C.current)return;const ae=$.target;[...d.branches].some(J=>J.contains(ae))||(s==null||s($),f==null||f($),$.defaultPrevented||l==null||l())},m),Y=y?S===w.length-1:!1,q=he($=>{$.key==="Escape"&&(c==null||c($),!$.defaultPrevented&&l&&($.preventDefault(),l()))});return a.useEffect(()=>{if(Y)return m.addEventListener("keydown",q,{capture:!0}),()=>m.removeEventListener("keydown",q,{capture:!0})},[m,Y,q]),a.useEffect(()=>{if(y)return r&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(_t=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(y)),d.layers.add(y),Ke(),()=>{r&&(d.layersWithOutsidePointerEventsDisabled.delete(y),d.layersWithOutsidePointerEventsDisabled.size===0&&(m.body.style.pointerEvents=_t))}},[y,m,r,d]),a.useEffect(()=>()=>{y&&(d.layers.delete(y),d.layersWithOutsidePointerEventsDisabled.delete(y),Ke())},[y,d]),a.useEffect(()=>{const $=j(()=>v({}),"handleUpdate");return document.addEventListener(We,$),()=>document.removeEventListener(We,$)},[]),A.jsx(U.div,{...h,ref:k,style:{pointerEvents:M?_?"auto":"none":void 0,...t.style},onFocusCapture:ee(t.onFocusCapture,F.onFocusCapture),onBlurCapture:ee(t.onBlurCapture,F.onBlurCapture),onPointerDownCapture:ee(t.onPointerDownCapture,I.onPointerDownCapture)})},"DismissableLayer"));function Jt(){const e=a.useContext(Qt),[t,n]=a.useState(null);return a.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}j(Jt,"useDismissableLayerSurface");var Va=j(()=>!0,"IS_TRUE");function en(e,t){const{ownerDocument:n=globalThis==null?void 0:globalThis.document,deferPointerDownOutside:r=!1,isDeferredPointerDownOutsideRef:o,dismissableSurfaces:c,shouldHandlePointerDownOutside:i=Va}=t,s=he(e),f=a.useRef(!1),l=a.useRef(!1),h=a.useRef(new Map),d=a.useRef(()=>{});return a.useEffect(()=>{function y(){l.current=!1,o.current=!1,h.current.clear()}j(y,"resetOutsideInteraction");function g(){return Array.from(h.current.values()).some(Boolean)}j(g,"isOutsideInteractionIntercepted");function m(b){if(!l.current)return;const S=b.target;S instanceof Node&&[...c].some(_=>_.contains(S))||h.current.set(b.type,!0),b.type==="click"&&window.setTimeout(()=>{l.current&&d.current()},0)}j(m,"handleInteractionCapture");function v(b){l.current&&h.current.set(b.type,!1)}j(v,"handleInteractionBubble");const k=j(b=>{if(b.target&&!f.current){let S=function(){n.removeEventListener("click",d.current);const _=g();y(),_||ot(Ta,s,M,{discrete:!0})};if(j(S,"handleAndDispatchPointerDownOutsideEvent"),!i(b.target)){n.removeEventListener("click",d.current),y(),f.current=!1;return}const M={originalEvent:b};l.current=!0,o.current=r&&b.button===0,h.current.clear(),!r||b.button!==0?S():(n.removeEventListener("click",d.current),d.current=S,n.addEventListener("click",d.current,{once:!0}))}else n.removeEventListener("click",d.current),y();f.current=!1},"handlePointerDown"),w=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const b of w)n.addEventListener(b,m,!0),n.addEventListener(b,v);const P=window.setTimeout(()=>{n.addEventListener("pointerdown",k)},0);return()=>{window.clearTimeout(P),n.removeEventListener("pointerdown",k),n.removeEventListener("click",d.current);for(const b of w)n.removeEventListener(b,m,!0),n.removeEventListener(b,v)}},[n,s,r,o,c,i]),{onPointerDownCapture:j(()=>f.current=!0,"onPointerDownCapture")}}j(en,"usePointerDownOutside");function tn(e,t=globalThis==null?void 0:globalThis.document){const n=he(e),r=a.useRef(!1);return a.useEffect(()=>{const o=j(c=>{c.target&&!r.current&&ot(Fa,n,{originalEvent:c},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:j(()=>r.current=!0,"onFocusCapture"),onBlurCapture:j(()=>r.current=!1,"onBlurCapture")}}j(tn,"useFocusOutside");function Ke(){const e=new CustomEvent(We);document.dispatchEvent(e)}j(Ke,"dispatchUpdate");function ot(e,t,n,{discrete:r}){const o=n.originalEvent.target,c=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Yt(o,c):o.dispatchEvent(c)}j(ot,"handleAndDispatchCustomEvent");var Ua=Object.defineProperty,O=(e,t)=>Ua(e,"name",{value:t,configurable:!0}),je="focusScope.autoFocusOnMount",Le="focusScope.autoFocusOnUnmount",Mt={bubbles:!1,cancelable:!0},Ba=a.forwardRef(O(function(t,n){const{loop:r=!1,trapped:o=!1,branches:c,onMountAutoFocus:i,onUnmountAutoFocus:s,...f}=t,[l,h]=a.useState(null),d=he(i),y=he(s),g=a.useRef(null),m=ve(n,h),v=a.useRef(c);a.useEffect(()=>{v.current=c});const k=a.useCallback(b=>{var S;return b?l!=null&&l.contains(b)?!0:!!((S=v.current)!=null&&S.some(M=>M.contains(b))):!1},[l]),w=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(o){let b=function(C){if(w.paused||!l)return;const I=C.target;k(I)?g.current=I:G(g.current,{select:!0})},S=function(C){if(w.paused||!l)return;const I=C.relatedTarget;I!==null&&(k(I)||G(g.current,{select:!0}))},M=function(C){if(document.activeElement===document.body)for(const F of C)F.removedNodes.length>0&&G(l)};O(b,"handleFocusIn"),O(S,"handleFocusOut"),O(M,"handleMutations"),document.addEventListener("focusin",b),document.addEventListener("focusout",S);const _=new MutationObserver(M);return l&&_.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",b),document.removeEventListener("focusout",S),_.disconnect()}}},[o,l,w.paused,k]),a.useEffect(()=>{if(l){Et.add(w);const b=document.activeElement;if(!l.contains(b)){const M=new CustomEvent(je,Mt);l.addEventListener(je,d),l.dispatchEvent(M),M.defaultPrevented||(an(dn(at(l)),{select:!0}),document.activeElement===b&&G(l))}return()=>{l.removeEventListener(je,d);const M=l.ownerDocument,_=CustomEvent;setTimeout(()=>{const C=new _(Le,Mt);l.addEventListener(Le,y),l.dispatchEvent(C),C.defaultPrevented||G(b??M.body,{select:!0}),l.removeEventListener(Le,y),Et.remove(w)},0)}}},[l,d,y,w]);const P=a.useCallback(b=>{if(!r&&!o||w.paused)return;const S=b.key==="Tab"&&!b.altKey&&!b.ctrlKey&&!b.metaKey,M=document.activeElement;if(S&&M){const _=b.currentTarget,[C,I]=cn(_);C&&I?!b.shiftKey&&M===I?(b.preventDefault(),r&&G(C,{select:!0})):b.shiftKey&&M===C&&(b.preventDefault(),r&&G(I,{select:!0})):M===_&&b.preventDefault()}},[r,o,w.paused]);return A.jsx(U.div,{tabIndex:-1,...f,ref:m,onKeyDown:P})},"FocusScope")),nn=a.createContext(null);function rn({registry:e,children:t}){return e?A.jsx(nn.Provider,{value:e,children:t}):t}O(rn,"FocusScopeBranchProvider");function on(){const[e,t]=a.useState([]),n=a.useMemo(()=>({add:O(r=>t(o=>o.includes(r)?o:[...o,r]),"add"),remove:O(r=>t(o=>o.filter(c=>c!==r)),"remove")}),[]);return{nodes:e,registry:n}}O(on,"useFocusScopeBranchRegistry");function Ha(e){const t=a.useContext(nn);a.useEffect(()=>{if(!(!e||!t))return t.add(e),()=>t.remove(e)},[e,t])}O(Ha,"useFocusScopeBranch");function an(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(G(r,{select:t}),document.activeElement!==n)return}O(an,"focusFirst");function cn(e){const t=at(e),n=Ze(t,e),r=Ze(t.reverse(),e);return[n,r]}O(cn,"getTabbableEdges");function at(e){const t=[],r=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:O(o=>{const c=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||c?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;r.nextNode();)t.push(r.currentNode);return t}O(at,"getTabbableCandidates");function Ze(e,t){const n=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(const r of e)if(!(n?!r.checkVisibility({checkVisibilityCSS:!0}):sn(r,{upTo:t})))return r}O(Ze,"findVisible");function sn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}O(sn,"isHidden");function ln(e){return e.tagName==="INPUT"&&typeof e.select=="function"}O(ln,"isSelectableInput");function G(e,{select:t=!1}={}){if(e&&e.focus){const r=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==r&&ln(e)&&t&&e.select()}}O(G,"focus");var Et=un();function un(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Ge(e,t),e.unshift(t)},remove(t){var n;e=Ge(e,t),(n=e[0])==null||n.resume()}}}O(un,"createFocusScopesStack");function Ge(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}O(Ge,"arrayRemove");function dn(e){return e.filter(t=>t.tagName!=="A")}O(dn,"removeLinks");var Wa=Object.defineProperty,Ka=(e,t)=>Wa(e,"name",{value:t,configurable:!0}),Za=a.forwardRef(Ka(function(t,n){var f;const{container:r,...o}=t,[c,i]=a.useState(!1);ne(()=>i(!0),[]);const s=r||c&&((f=globalThis==null?void 0:globalThis.document)==null?void 0:f.body);return s?Dt.createPortal(A.jsx(U.div,{...o,ref:n}),s):null},"Portal")),Ga=Object.defineProperty,X=(e,t)=>Ga(e,"name",{value:t,configurable:!0});function fn(e,t){return a.useReducer((n,r)=>t[n][r]??n,e)}X(fn,"useStateMachine");var ct=X(e=>{const{present:t,children:n}=e,r=hn(t),o=typeof n=="function"?n({present:r.isPresent}):a.Children.only(n),c=yn(r.ref,pn(o));return typeof n=="function"||r.isPresent?a.cloneElement(o,{ref:c}):null},"Presence");function hn(e){const[t,n]=a.useState(),r=a.useRef(null),o=a.useRef(e),c=a.useRef("none"),i=a.useRef(void 0),s=e?"mounted":"unmounted",[f,l]=fn(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{f==="mounted"?(c.current=i.current??le(r.current),i.current=void 0):c.current="none"},[f]),ne(()=>{const h=r.current,d=o.current;if(d!==e){const g=c.current,m=le(h);e?(i.current=m,l("MOUNT")):m==="none"||(h==null?void 0:h.display)==="none"?l("UNMOUNT"):l(d&&g!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),ne(()=>{if(t){let h;const d=t.ownerDocument.defaultView??window,y=X(m=>{const k=le(r.current).includes(CSS.escape(m.animationName));if(m.target===t&&k&&(l("ANIMATION_END"),!o.current)){const w=t.style.animationFillMode;t.style.animationFillMode="forwards",h=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=w)})}},"handleAnimationEnd"),g=X(m=>{m.target===t&&(c.current=le(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",y),t.addEventListener("animationend",y),()=>{d.clearTimeout(h),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",y),t.removeEventListener("animationend",y)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:a.useCallback(h=>{if(h){const d=getComputedStyle(h);r.current=d,i.current=le(d)}else r.current=null;n(h)},[])}}X(hn,"usePresence");function Xe(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}X(Xe,"setRef");function yn(...e){const t=a.useRef(e);return t.current=e,a.useCallback(n=>{const r=t.current;let o=!1;const c=r.map(i=>{const s=Xe(i,n);return!o&&typeof s=="function"&&(o=!0),s});if(o)return()=>{for(let i=0;i<c.length;i++){const s=c[i];typeof s=="function"?s():Xe(r[i],null)}}},[])}X(yn,"useStableComposedRefs");function le(e){return(e==null?void 0:e.animationName)||"none"}X(le,"getAnimationName");function pn(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}X(pn,"getElementRef");var Xa=Object.defineProperty,it=(e,t)=>Xa(e,"name",{value:t,configurable:!0}),xe=0,B=null;function Ya(e){return st(),e.children}it(Ya,"FocusGuards");function st(){a.useEffect(()=>{B||(B={start:Ye(),end:Ye()});const{start:e,end:t}=B;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),xe++,()=>{xe===1&&(B==null||B.start.remove(),B==null||B.end.remove(),B=null),xe=Math.max(0,xe-1)}},[])}it(st,"useFocusGuards");function Ye(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}it(Ye,"createFocusGuard");var H=function(){return H=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},H.apply(this,arguments)};function vn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Qa(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,c;r<o;r++)(c||!(r in t))&&(c||(c=Array.prototype.slice.call(t,0,r)),c[r]=t[r]);return e.concat(c||Array.prototype.slice.call(t))}var Se="right-scroll-bar-position",Ne="width-before-scroll-bar",Ja="with-scroll-bars-hidden",ec="--removed-body-scroll-bar-size";function ze(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function tc(e,t){var n=a.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var nc=typeof window<"u"?a.useLayoutEffect:a.useEffect,Ct=new WeakMap;function rc(e,t){var n=tc(null,function(r){return e.forEach(function(o){return ze(o,r)})});return nc(function(){var r=Ct.get(n);if(r){var o=new Set(r),c=new Set(e),i=n.current;o.forEach(function(s){c.has(s)||ze(s,null)}),c.forEach(function(s){o.has(s)||ze(s,i)})}Ct.set(n,e)},[e]),n}function oc(e){return e}function ac(e,t){t===void 0&&(t=oc);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var i=t(c,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(c){for(r=!0;n.length;){var i=n;n=[],i.forEach(c)}n={push:function(s){return c(s)},filter:function(){return n}}},assignMedium:function(c){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(c),i=n}var f=function(){var h=i;i=[],h.forEach(c)},l=function(){return Promise.resolve().then(f)};l(),n={push:function(h){i.push(h),l()},filter:function(h){return i=i.filter(h),n}}}};return o}function cc(e){e===void 0&&(e={});var t=ac(null);return t.options=H({async:!0,ssr:!1},e),t}var mn=function(e){var t=e.sideCar,n=vn(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return a.createElement(r,H({},n))};mn.isSideCarExport=!0;function ic(e,t){return e.useMedium(t),mn}var kn=cc(),Te=function(){},Re=a.forwardRef(function(e,t){var n=a.useRef(null),r=a.useState({onScrollCapture:Te,onWheelCapture:Te,onTouchMoveCapture:Te}),o=r[0],c=r[1],i=e.forwardProps,s=e.children,f=e.className,l=e.removeScrollBar,h=e.enabled,d=e.shards,y=e.sideCar,g=e.noRelative,m=e.noIsolation,v=e.inert,k=e.allowPinchZoom,w=e.as,P=w===void 0?"div":w,b=e.gapMode,S=vn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),M=y,_=rc([n,t]),C=H(H({},S),o);return a.createElement(a.Fragment,null,h&&a.createElement(M,{sideCar:kn,removeScrollBar:l,shards:d,noRelative:g,noIsolation:m,inert:v,setCallbacks:c,allowPinchZoom:!!k,lockRef:n,gapMode:b}),i?a.cloneElement(a.Children.only(s),H(H({},C),{ref:_})):a.createElement(P,H({},C,{className:f,ref:_}),s))});Re.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Re.classNames={fullWidth:Ne,zeroRight:Se};var sc=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function lc(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=sc();return t&&e.setAttribute("nonce",t),e}function uc(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function dc(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var fc=function(){var e=0,t=null;return{add:function(n){e==0&&(t=lc())&&(uc(t,n),dc(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},hc=function(){var e=fc();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},gn=function(){var e=hc(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},yc={left:0,top:0,right:0,gap:0},Fe=function(e){return parseInt(e||"",10)||0},pc=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Fe(n),Fe(r),Fe(o)]},vc=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return yc;var t=pc(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},mc=gn(),fe="data-scroll-locked",kc=function(e,t,n,r){var o=e.left,c=e.top,i=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Ja,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(fe,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Se,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Ne,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Se," .").concat(Se,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Ne," .").concat(Ne,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(fe,`] {
    `).concat(ec,": ").concat(s,`px;
  }
`)},St=function(){var e=parseInt(document.body.getAttribute(fe)||"0",10);return isFinite(e)?e:0},gc=function(){a.useEffect(function(){return document.body.setAttribute(fe,(St()+1).toString()),function(){var e=St()-1;e<=0?document.body.removeAttribute(fe):document.body.setAttribute(fe,e.toString())}},[])},bc=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;gc();var c=a.useMemo(function(){return vc(o)},[o]);return a.createElement(mc,{styles:kc(c,!t,o,n?"":"!important")})},Qe=!1;if(typeof window<"u")try{var _e=Object.defineProperty({},"passive",{get:function(){return Qe=!0,!0}});window.addEventListener("test",_e,_e),window.removeEventListener("test",_e,_e)}catch{Qe=!1}var ce=Qe?{passive:!1}:!1,wc=function(e){return e.tagName==="TEXTAREA"},bn=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!wc(e)&&n[t]==="visible")},xc=function(e){return bn(e,"overflowY")},_c=function(e){return bn(e,"overflowX")},Nt=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=wn(e,r);if(o){var c=xn(e,r),i=c[1],s=c[2];if(i>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Mc=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Ec=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},wn=function(e,t){return e==="v"?xc(t):_c(t)},xn=function(e,t){return e==="v"?Mc(t):Ec(t)},Cc=function(e,t){return e==="h"&&t==="rtl"?-1:1},Sc=function(e,t,n,r,o){var c=Cc(e,window.getComputedStyle(t).direction),i=c*r,s=n.target,f=t.contains(s),l=!1,h=i>0,d=0,y=0;do{if(!s)break;var g=xn(e,s),m=g[0],v=g[1],k=g[2],w=v-k-c*m;(m||w)&&wn(e,s)&&(d+=w,y+=m);var P=s.parentNode;s=P&&P.nodeType===Node.DOCUMENT_FRAGMENT_NODE?P.host:P}while(!f&&s!==document.body||f&&(t.contains(s)||t===s));return(h&&Math.abs(d)<1||!h&&Math.abs(y)<1)&&(l=!0),l},Me=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Pt=function(e){return[e.deltaX,e.deltaY]},Rt=function(e){return e&&"current"in e?e.current:e},Nc=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Pc=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Rc=0,ie=[];function $c(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(Rc++)[0],c=a.useState(gn)[0],i=a.useRef(e);a.useEffect(function(){i.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var v=Qa([e.lockRef.current],(e.shards||[]).map(Rt),!0).filter(Boolean);return v.forEach(function(k){return k.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),v.forEach(function(k){return k.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=a.useCallback(function(v,k){if("touches"in v&&v.touches.length===2||v.type==="wheel"&&v.ctrlKey)return!i.current.allowPinchZoom;var w=Me(v),P=n.current,b="deltaX"in v?v.deltaX:P[0]-w[0],S="deltaY"in v?v.deltaY:P[1]-w[1],M,_=v.target,C=Math.abs(b)>Math.abs(S)?"h":"v";if("touches"in v&&C==="h"&&_.type==="range")return!1;var I=window.getSelection(),F=I&&I.anchorNode,Y=F?F===_||F.contains(_):!1;if(Y)return!1;var q=Nt(C,_);if(!q)return!0;if(q?M=C:(M=C==="v"?"h":"v",q=Nt(C,_)),!q)return!1;if(!r.current&&"changedTouches"in v&&(b||S)&&(r.current=M),!M)return!0;var $=r.current||M;return Sc($,k,v,$==="h"?b:S)},[]),f=a.useCallback(function(v){var k=v;if(!(!ie.length||ie[ie.length-1]!==c)){var w="deltaY"in k?Pt(k):Me(k),P=t.current.filter(function(M){return M.name===k.type&&(M.target===k.target||k.target===M.shadowParent)&&Nc(M.delta,w)})[0];if(P&&P.should){k.cancelable&&k.preventDefault();return}if(!P){var b=(i.current.shards||[]).map(Rt).filter(Boolean).filter(function(M){return M.contains(k.target)}),S=b.length>0?s(k,b[0]):!i.current.noIsolation;S&&k.cancelable&&k.preventDefault()}}},[]),l=a.useCallback(function(v,k,w,P){var b={name:v,delta:k,target:w,should:P,shadowParent:Dc(w)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(S){return S!==b})},1)},[]),h=a.useCallback(function(v){n.current=Me(v),r.current=void 0},[]),d=a.useCallback(function(v){l(v.type,Pt(v),v.target,s(v,e.lockRef.current))},[]),y=a.useCallback(function(v){l(v.type,Me(v),v.target,s(v,e.lockRef.current))},[]);a.useEffect(function(){return ie.push(c),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:y}),document.addEventListener("wheel",f,ce),document.addEventListener("touchmove",f,ce),document.addEventListener("touchstart",h,ce),function(){ie=ie.filter(function(v){return v!==c}),document.removeEventListener("wheel",f,ce),document.removeEventListener("touchmove",f,ce),document.removeEventListener("touchstart",h,ce)}},[]);var g=e.removeScrollBar,m=e.inert;return a.createElement(a.Fragment,null,m?a.createElement(c,{styles:Pc(o)}):null,g?a.createElement(bc,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Dc(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Ac=ic(kn,$c);var _n=a.forwardRef(function(e,t){return a.createElement(Re,H({},e,{ref:t,sideCar:Ac}))});_n.classNames=Re.classNames;var Oc=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},se=new WeakMap,Ee=new WeakMap,Ce={},qe=0,Mn=function(e){return e&&(e.host||Mn(e.parentNode))},Ic=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Mn(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},jc=function(e,t,n,r){var o=Ic(t,Array.isArray(e)?e:[e]);Ce[n]||(Ce[n]=new WeakMap);var c=Ce[n],i=[],s=new Set,f=new Set(o),l=function(d){!d||s.has(d)||(s.add(d),l(d.parentNode))};o.forEach(l);var h=function(d){!d||f.has(d)||Array.prototype.forEach.call(d.children,function(y){if(s.has(y))h(y);else try{var g=y.getAttribute(r),m=g!==null&&g!=="false",v=(se.get(y)||0)+1,k=(c.get(y)||0)+1;se.set(y,v),c.set(y,k),i.push(y),v===1&&m&&Ee.set(y,!0),k===1&&y.setAttribute(n,"true"),m||y.setAttribute(r,"true")}catch(w){console.error("aria-hidden: cannot operate on ",y,w)}})};return h(t),s.clear(),qe++,function(){i.forEach(function(d){var y=se.get(d)-1,g=c.get(d)-1;se.set(d,y),c.set(d,g),y||(Ee.has(d)||d.removeAttribute(r),Ee.delete(d)),g||d.removeAttribute(n)}),qe--,qe||(se=new WeakMap,se=new WeakMap,Ee=new WeakMap,Ce={})}},Lc=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Oc(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),jc(r,o,n,"aria-hidden")):function(){return null}},zc=Object.defineProperty,K=(e,t)=>zc(e,"name",{value:t,configurable:!0}),lt="Dialog",[En,Cl]=zt(lt),[Tc,oe]=En(lt),Fc=K(e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:c,modal:i=!0}=e,s=a.useRef(null),f=a.useRef(null),{nodes:l,registry:h}=on(),[d,y]=qt({prop:r,defaultProp:o??!1,onChange:c,caller:lt}),[g,m]=a.useState(0),[v,k]=a.useState(0);return A.jsx(Tc,{scope:t,triggerRef:s,contentRef:f,contentId:W(),titleId:W(),descriptionId:W(),titlePresent:g>0,descriptionPresent:v>0,setTitleCount:m,setDescriptionCount:k,open:d,onOpenChange:y,onOpenToggle:a.useCallback(()=>y(w=>!w),[y]),modal:i,branchNodes:l,branchRegistry:h,children:n})},"Dialog"),Cn="DialogPortal",[qc,Sn]=En(Cn,{forceMount:void 0}),Vc=K(e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,c=oe(Cn,t);return A.jsx(qc,{scope:t,forceMount:n,children:a.Children.map(r,i=>A.jsx(ct,{present:n||c.open,children:A.jsx(Za,{asChild:!0,container:o,children:i})}))})},"DialogPortal"),Je="DialogOverlay",Uc=a.forwardRef(K(function(t,n){const r=Sn(Je,t.__scopeDialog),{forceMount:o=r.forceMount,...c}=t,i=oe(Je,t.__scopeDialog);return i.modal?A.jsx(ct,{present:o||i.open,children:A.jsx(Hc,{...c,ref:n})}):null},"DialogOverlay")),Bc=nt("DialogOverlay.RemoveScroll"),Hc=a.forwardRef(K(function(t,n){const{__scopeDialog:r,...o}=t,c=oe(Je,r),i=Jt(),s=ve(n,i);return A.jsx(_n,{as:Bc,allowPinchZoom:!0,shards:a.useMemo(()=>[c.contentRef,...c.branchNodes.map(f=>({current:f}))],[c.contentRef,c.branchNodes]),children:A.jsx(U.div,{"data-state":ut(c.open),...o,ref:s,style:{pointerEvents:"auto",...o.style}})})},"DialogOverlayImpl")),ke="DialogContent",Wc=a.forwardRef(K(function(t,n){const r=Sn(ke,t.__scopeDialog),{forceMount:o=r.forceMount,...c}=t,i=oe(ke,t.__scopeDialog);return A.jsx(ct,{present:o||i.open,children:i.modal?A.jsx(Kc,{...c,ref:n}):A.jsx(Zc,{...c,ref:n})})},"DialogContent")),Kc=a.forwardRef(K(function(t,n){const r=oe(ke,t.__scopeDialog),o=a.useRef(null),c=ve(n,r.contentRef,o);return a.useEffect(()=>{const i=o.current;if(i)return Lc(i)},[]),A.jsx(Nn,{...t,ref:c,trapFocus:r.open,disableOutsidePointerEvents:r.open,onCloseAutoFocus:ee(t.onCloseAutoFocus,i=>{var s;i.preventDefault(),(s=r.triggerRef.current)==null||s.focus()}),onPointerDownOutside:ee(t.onPointerDownOutside,i=>{const s=i.detail.originalEvent,f=s.button===0&&s.ctrlKey===!0;(s.button===2||f)&&i.preventDefault()}),onFocusOutside:ee(t.onFocusOutside,i=>i.preventDefault())})},"DialogContentModal")),Zc=a.forwardRef(K(function(t,n){const r=oe(ke,t.__scopeDialog),o=a.useRef(!1),c=a.useRef(!1);return A.jsx(Nn,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var s,f;(s=t.onCloseAutoFocus)==null||s.call(t,i),i.defaultPrevented||(o.current||(f=r.triggerRef.current)==null||f.focus(),i.preventDefault()),o.current=!1,c.current=!1},onInteractOutside:i=>{var l,h;(l=t.onInteractOutside)==null||l.call(t,i),i.defaultPrevented||(o.current=!0,i.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const s=i.target;((h=r.triggerRef.current)==null?void 0:h.contains(s))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&c.current&&i.preventDefault()}})},"DialogContentNonModal")),Nn=a.forwardRef(K(function(t,n){const{__scopeDialog:r,trapFocus:o,onOpenAutoFocus:c,onCloseAutoFocus:i,"aria-describedby":s,children:f,...l}=t,h=oe(ke,r);return st(),A.jsx(rn,{registry:h.branchRegistry,children:A.jsx(Ba,{asChild:!0,loop:!0,trapped:o,branches:h.branchNodes,onMountAutoFocus:c,onUnmountAutoFocus:i,children:A.jsx(qa,{role:"dialog",id:h.contentId,"aria-labelledby":h.titlePresent?h.titleId:void 0,"aria-describedby":h.descriptionPresent?Pn(s,h.descriptionId):s,"data-state":ut(h.open),...l,ref:n,deferPointerDownOutside:!0,onDismiss:()=>h.onOpenChange(!1),children:f})})})},"DialogContentImpl"));function Pn(...e){const t=new Set;for(const n of e)if(typeof n=="string")for(const r of String(n).trim().split(/\s+/))r&&t.add(r);return t.size>0?Array.from(t).join(" "):void 0}K(Pn,"concatAriaDescribedby");function ut(e){return e?"open":"closed"}K(ut,"getState");var me='[cmdk-group=""]',Ve='[cmdk-group-items=""]',Gc='[cmdk-group-heading=""]',Rn='[cmdk-item=""]',$t=`${Rn}:not([aria-disabled="true"])`,et="cmdk-item-select",ue="data-value",Xc=(e,t,n)=>fa(e,t,n),$n=a.createContext(void 0),be=()=>a.useContext($n),Dn=a.createContext(void 0),dt=()=>a.useContext(Dn),An=a.createContext(void 0),On=a.forwardRef((e,t)=>{let n=de(()=>{var p,E;return{search:"",value:(E=(p=e.value)!=null?p:e.defaultValue)!=null?E:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),r=de(()=>new Set),o=de(()=>new Map),c=de(()=>new Map),i=de(()=>new Set),s=In(e),{label:f,children:l,value:h,onValueChange:d,filter:y,shouldFilter:g,loop:m,disablePointerSelection:v=!1,vimBindings:k=!0,...w}=e,P=W(),b=W(),S=W(),M=a.useRef(null),_=ii();re(()=>{if(h!==void 0){let p=h.trim();n.current.value=p,C.emit()}},[h]),re(()=>{_(6,ae)},[]);let C=a.useMemo(()=>({subscribe:p=>(i.current.add(p),()=>i.current.delete(p)),snapshot:()=>n.current,setState:(p,E,N)=>{var x,R,D,z;if(!Object.is(n.current[p],E)){if(n.current[p]=E,p==="search")$(),Y(),_(1,q);else if(p==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let L=document.getElementById(S);L?L.focus():(x=document.getElementById(P))==null||x.focus()}if(_(7,()=>{var L;n.current.selectedItemId=(L=Z())==null?void 0:L.id,C.emit()}),N||_(5,ae),((R=s.current)==null?void 0:R.value)!==void 0){let L=E??"";(z=(D=s.current).onValueChange)==null||z.call(D,L);return}}C.emit()}},emit:()=>{i.current.forEach(p=>p())}}),[]),I=a.useMemo(()=>({value:(p,E,N)=>{var x;E!==((x=c.current.get(p))==null?void 0:x.value)&&(c.current.set(p,{value:E,keywords:N}),n.current.filtered.items.set(p,F(E,N)),_(2,()=>{Y(),C.emit()}))},item:(p,E)=>(r.current.add(p),E&&(o.current.has(E)?o.current.get(E).add(p):o.current.set(E,new Set([p]))),_(3,()=>{$(),Y(),n.current.value||q(),C.emit()}),()=>{c.current.delete(p),r.current.delete(p),n.current.filtered.items.delete(p);let N=Z();_(4,()=>{$(),(N==null?void 0:N.getAttribute("id"))===p&&q(),C.emit()})}),group:p=>(o.current.has(p)||o.current.set(p,new Set),()=>{c.current.delete(p),o.current.delete(p)}),filter:()=>s.current.shouldFilter,label:f||e["aria-label"],getDisablePointerSelection:()=>s.current.disablePointerSelection,listId:P,inputId:S,labelId:b,listInnerRef:M}),[]);function F(p,E){var N,x;let R=(x=(N=s.current)==null?void 0:N.filter)!=null?x:Xc;return p?R(p,n.current.search,E):0}function Y(){if(!n.current.search||s.current.shouldFilter===!1)return;let p=n.current.filtered.items,E=[];n.current.filtered.groups.forEach(x=>{let R=o.current.get(x),D=0;R.forEach(z=>{let L=p.get(z);D=Math.max(L,D)}),E.push([x,D])});let N=M.current;J().sort((x,R)=>{var D,z;let L=x.getAttribute("id"),we=R.getAttribute("id");return((D=p.get(we))!=null?D:0)-((z=p.get(L))!=null?z:0)}).forEach(x=>{let R=x.closest(Ve);R?R.appendChild(x.parentElement===R?x:x.closest(`${Ve} > *`)):N.appendChild(x.parentElement===N?x:x.closest(`${Ve} > *`))}),E.sort((x,R)=>R[1]-x[1]).forEach(x=>{var R;let D=(R=M.current)==null?void 0:R.querySelector(`${me}[${ue}="${encodeURIComponent(x[0])}"]`);D==null||D.parentElement.appendChild(D)})}function q(){let p=J().find(N=>N.getAttribute("aria-disabled")!=="true"),E=p==null?void 0:p.getAttribute(ue);C.setState("value",E||void 0)}function $(){var p,E,N,x;if(!n.current.search||s.current.shouldFilter===!1){n.current.filtered.count=r.current.size;return}n.current.filtered.groups=new Set;let R=0;for(let D of r.current){let z=(E=(p=c.current.get(D))==null?void 0:p.value)!=null?E:"",L=(x=(N=c.current.get(D))==null?void 0:N.keywords)!=null?x:[],we=F(z,L);n.current.filtered.items.set(D,we),we>0&&R++}for(let[D,z]of o.current)for(let L of z)if(n.current.filtered.items.get(L)>0){n.current.filtered.groups.add(D);break}n.current.filtered.count=R}function ae(){var p,E,N;let x=Z();x&&(((p=x.parentElement)==null?void 0:p.firstChild)===x&&((N=(E=x.closest(me))==null?void 0:E.querySelector(Gc))==null||N.scrollIntoView({block:"nearest"})),x.scrollIntoView({block:"nearest"}))}function Z(){var p;return(p=M.current)==null?void 0:p.querySelector(`${Rn}[aria-selected="true"]`)}function J(){var p;return Array.from(((p=M.current)==null?void 0:p.querySelectorAll($t))||[])}function De(p){let E=J()[p];E&&C.setState("value",E.getAttribute(ue))}function Ae(p){var E;let N=Z(),x=J(),R=x.findIndex(z=>z===N),D=x[R+p];(E=s.current)!=null&&E.loop&&(D=R+p<0?x[x.length-1]:R+p===x.length?x[0]:x[R+p]),D&&C.setState("value",D.getAttribute(ue))}function ft(p){let E=Z(),N=E==null?void 0:E.closest(me),x;for(;N&&!x;)N=p>0?ai(N,me):ci(N,me),x=N==null?void 0:N.querySelector($t);x?C.setState("value",x.getAttribute(ue)):Ae(p)}let ht=()=>De(J().length-1),yt=p=>{p.preventDefault(),p.metaKey?ht():p.altKey?ft(1):Ae(1)},pt=p=>{p.preventDefault(),p.metaKey?De(0):p.altKey?ft(-1):Ae(-1)};return a.createElement(U.div,{ref:t,tabIndex:-1,...w,"cmdk-root":"",onKeyDown:p=>{var E;(E=w.onKeyDown)==null||E.call(w,p);let N=p.nativeEvent.isComposing||p.keyCode===229;if(!(p.defaultPrevented||N))switch(p.key){case"n":case"j":{k&&p.ctrlKey&&yt(p);break}case"ArrowDown":{yt(p);break}case"p":case"k":{k&&p.ctrlKey&&pt(p);break}case"ArrowUp":{pt(p);break}case"Home":{p.preventDefault(),De(0);break}case"End":{p.preventDefault(),ht();break}case"Enter":{p.preventDefault();let x=Z();if(x){let R=new Event(et);x.dispatchEvent(R)}}}}},a.createElement("label",{"cmdk-label":"",htmlFor:I.inputId,id:I.labelId,style:li},f),$e(e,p=>a.createElement(Dn.Provider,{value:C},a.createElement($n.Provider,{value:I},p))))}),Yc=a.forwardRef((e,t)=>{var n,r;let o=W(),c=a.useRef(null),i=a.useContext(An),s=be(),f=In(e),l=(r=(n=f.current)==null?void 0:n.forceMount)!=null?r:i==null?void 0:i.forceMount;re(()=>{if(!l)return s.item(o,i==null?void 0:i.id)},[l]);let h=jn(o,c,[e.value,e.children,c],e.keywords),d=dt(),y=Q(_=>_.value&&_.value===h.current),g=Q(_=>l||s.filter()===!1?!0:_.search?_.filtered.items.get(o)>0:!0);a.useEffect(()=>{let _=c.current;if(!(!_||e.disabled))return _.addEventListener(et,m),()=>_.removeEventListener(et,m)},[g,e.onSelect,e.disabled]);function m(){var _,C;v(),(C=(_=f.current).onSelect)==null||C.call(_,h.current)}function v(){d.setState("value",h.current,!0)}if(!g)return null;let{disabled:k,value:w,onSelect:P,forceMount:b,keywords:S,...M}=e;return a.createElement(U.div,{ref:te(c,t),...M,id:o,"cmdk-item":"",role:"option","aria-disabled":!!k,"aria-selected":!!y,"data-disabled":!!k,"data-selected":!!y,onPointerMove:k||s.getDisablePointerSelection()?void 0:v,onClick:k?void 0:m},e.children)}),Qc=a.forwardRef((e,t)=>{let{heading:n,children:r,forceMount:o,...c}=e,i=W(),s=a.useRef(null),f=a.useRef(null),l=W(),h=be(),d=Q(g=>o||h.filter()===!1?!0:g.search?g.filtered.groups.has(i):!0);re(()=>h.group(i),[]),jn(i,s,[e.value,e.heading,f]);let y=a.useMemo(()=>({id:i,forceMount:o}),[o]);return a.createElement(U.div,{ref:te(s,t),...c,"cmdk-group":"",role:"presentation",hidden:d?void 0:!0},n&&a.createElement("div",{ref:f,"cmdk-group-heading":"","aria-hidden":!0,id:l},n),$e(e,g=>a.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?l:void 0},a.createElement(An.Provider,{value:y},g))))}),Jc=a.forwardRef((e,t)=>{let{alwaysRender:n,...r}=e,o=a.useRef(null),c=Q(i=>!i.search);return!n&&!c?null:a.createElement(U.div,{ref:te(o,t),...r,"cmdk-separator":"",role:"separator"})}),ei=a.forwardRef((e,t)=>{let{onValueChange:n,...r}=e,o=e.value!=null,c=dt(),i=Q(l=>l.search),s=Q(l=>l.selectedItemId),f=be();return a.useEffect(()=>{e.value!=null&&c.setState("search",e.value)},[e.value]),a.createElement(U.input,{ref:t,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":f.listId,"aria-labelledby":f.labelId,"aria-activedescendant":s,id:f.inputId,type:"text",value:o?e.value:i,onChange:l=>{o||c.setState("search",l.target.value),n==null||n(l.target.value)}})}),ti=a.forwardRef((e,t)=>{let{children:n,label:r="Suggestions",...o}=e,c=a.useRef(null),i=a.useRef(null),s=Q(l=>l.selectedItemId),f=be();return a.useEffect(()=>{if(i.current&&c.current){let l=i.current,h=c.current,d,y=new ResizeObserver(()=>{d=requestAnimationFrame(()=>{let g=l.offsetHeight;h.style.setProperty("--cmdk-list-height",g.toFixed(1)+"px")})});return y.observe(l),()=>{cancelAnimationFrame(d),y.unobserve(l)}}},[]),a.createElement(U.div,{ref:te(c,t),...o,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":s,"aria-label":r,id:f.listId},$e(e,l=>a.createElement("div",{ref:te(i,f.listInnerRef),"cmdk-list-sizer":""},l)))}),ni=a.forwardRef((e,t)=>{let{open:n,onOpenChange:r,overlayClassName:o,contentClassName:c,container:i,...s}=e;return a.createElement(Fc,{open:n,onOpenChange:r},a.createElement(Vc,{container:i},a.createElement(Uc,{"cmdk-overlay":"",className:o}),a.createElement(Wc,{"aria-label":e.label,"cmdk-dialog":"",className:c},a.createElement(On,{ref:t,...s}))))}),ri=a.forwardRef((e,t)=>Q(n=>n.filtered.count===0)?a.createElement(U.div,{ref:t,...e,"cmdk-empty":"",role:"presentation"}):null),oi=a.forwardRef((e,t)=>{let{progress:n,children:r,label:o="Loading...",...c}=e;return a.createElement(U.div,{ref:t,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":o},$e(e,i=>a.createElement("div",{"aria-hidden":!0},i)))}),Sl=Object.assign(On,{List:ti,Item:Yc,Input:ei,Group:Qc,Separator:Jc,Dialog:ni,Empty:ri,Loading:oi});function ai(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function ci(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function In(e){let t=a.useRef(e);return re(()=>{t.current=e}),t}var re=typeof window>"u"?a.useEffect:a.useLayoutEffect;function de(e){let t=a.useRef();return t.current===void 0&&(t.current=e()),t}function Q(e){let t=dt(),n=()=>e(t.snapshot());return a.useSyncExternalStore(t.subscribe,n,n)}function jn(e,t,n,r=[]){let o=a.useRef(),c=be();return re(()=>{var i;let s=(()=>{var l;for(let h of n){if(typeof h=="string")return h.trim();if(typeof h=="object"&&"current"in h)return h.current?(l=h.current.textContent)==null?void 0:l.trim():o.current}})(),f=r.map(l=>l.trim());c.value(e,s,f),(i=t.current)==null||i.setAttribute(ue,s),o.current=s}),o}var ii=()=>{let[e,t]=a.useState(),n=de(()=>new Map);return re(()=>{n.current.forEach(r=>r()),n.current=new Map},[e]),(r,o)=>{n.current.set(r,o),t({})}};function si(e){let t=e.type;return typeof t=="function"?t(e.props):"render"in t?t.render(e.props):e}function $e({asChild:e,children:t},n){return e&&a.isValidElement(t)?a.cloneElement(si(t),{ref:t.ref},n(t.props.children)):n(t)}var li={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};export{$s as $,di as A,Ei as B,Ii as C,Gi as D,Ji as E,rs as F,ds as G,Zs as H,vs as I,Fi as J,ms as K,_s as L,Ds as M,js as N,Bs as O,Ls as P,gi as Q,Xs as R,Js as S,vl as T,bl as U,vi as V,wi as W,_l as X,pl as Y,ji as Z,Sl as _,Oi as a,ls as a$,Ws as a0,Yi as a1,ul as a2,fs as a3,Ni as a4,Ml as a5,Hs as a6,al as a7,ns as a8,Rs as a9,ws as aA,Es as aB,fl as aC,ss as aD,tl as aE,pi as aF,qs as aG,as as aH,yl as aI,ps as aJ,$i as aK,gl as aL,qi as aM,Vi as aN,el as aO,Ti as aP,Ks as aQ,xs as aR,xi as aS,cs as aT,Ns as aU,Ki as aV,ks as aW,Xi as aX,Si as aY,Us as aZ,ys as a_,Cs as aa,Vs as ab,ml as ac,Qi as ad,El as ae,kl as af,Fs as ag,Hi as ah,ol as ai,dl as aj,Ms as ak,Li as al,zi as am,Di as an,xl as ao,Ps as ap,Qs as aq,es as ar,ts as as,il as at,cl as au,os as av,hs as aw,is as ax,yi as ay,hi as az,Pi as b,Ai as b0,Zi as b1,nl as b2,wl as b3,sl as b4,us as b5,Bi as c,Ri as d,hl as e,Os as f,As as g,bs as h,Ss as i,Wi as j,Ci as k,Mi as l,fi as m,rl as n,zs as o,Ts as p,Gs as q,Ys as r,Ui as s,ll as t,_i as u,Is as v,mi as w,ki as x,gs as y,bi as z};
