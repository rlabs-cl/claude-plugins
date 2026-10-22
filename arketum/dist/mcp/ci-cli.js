#!/usr/bin/env node
import { createRequire as __crearRequire } from 'node:module'; const require = __crearRequire(import.meta.url);
import {
  b8,
  c1,
  c4,
  dI
} from "./comun-YS3KNELU.js";
import {
  A0,
  A5,
  Aw,
  f2,
  gH,
  ha,
  hh,
  ji,
  jm,
  rB,
  rC,
  re,
  rx,
  sc,
  tW,
  tY,
  vO,
  yP,
  yW
} from "./comun-DDWB6OEM.js";

// arketum/dist/mcp/ci-cli.js
import { spawn } from "node:child_process";
import { resolve } from "node:path";
var al = b;
(function(o, p) {
  const af = b, q = o();
  while (!![]) {
    try {
      const r = -parseInt(af(385)) / 1 + -parseInt(af(485)) / 2 * (-parseInt(af(469)) / 3) + -parseInt(af(382)) / 4 * (-parseInt(af(443)) / 5) + parseInt(af(468)) / 6 * (parseInt(af(383)) / 7) + -parseInt(af(403)) / 8 + -parseInt(af(375)) / 9 + parseInt(af(484)) / 10;
      if (r === p) break;
      else q["push"](q["shift"]());
    } catch (s) {
      q["push"](q["shift"]());
    }
  }
})(a, 474610);
var c = 10 * 60 * 1e3;
var d = /* @__PURE__ */ new Set();
function e() {
  const ag = b;
  for (const o of d) {
    try {
      process["kill"](-o, ag(417));
    } catch {
    }
  }
  d[ag(437)]();
}
var f = (o, p, q) => new Promise((r) => {
  const ai = b;
  let s = ![];
  const t = (y) => {
    const ah = b;
    if (s) return;
    s = !![], clearTimeout(x);
    if (u[ah(376)] !== void 0) d["delete"](u["pid"]);
    r(y);
  }, u = spawn("sh", ["-c", o], { "cwd": p, "stdio": [ai(462), "pipe", "pipe"], "detached": !![] });
  if (u["pid"] !== void 0) d[ai(399)](u[ai(376)]);
  let v = "";
  const w = (y) => {
    const aj = ai;
    if (v["length"] < 2e4) v += y[aj(481)]();
  };
  u[ai(463)]["on"](ai(396), w), u[ai(424)]["on"]("data", w);
  const x = setTimeout(() => {
    const ak = ai;
    try {
      if (u["pid"] !== void 0) process["kill"](-u["pid"], "SIGKILL");
    } catch {
    }
    u["stdout"]["destroy"](), u[ak(424)][ak(398)](), t({ "exitCode": null, "output": v, "motivo": "tiempo" });
  }, Math["min"](q, g));
  u["on"]("exit", (y, z) => {
    t(y === null ? { "exitCode": null, "output": v, "motivo": z === null ? "error" : "se\xF1al" } : { "exitCode": y, "output": v });
  }), u["on"]("error", (y) => t({ "exitCode": null, "output": y["message"], "motivo": "error" }));
});
var g = 2147483647;
function h(o, p, q) {
  return rx(o, p, q);
}
var i = { "sin_formulario": "", "formulario_sin_respuesta": al(379), "forzado": ", forzado (`ARKETUM_GATES=chat`)" };
async function j(o, p, q = {}) {
  const am = al, t = q["ejecutar"] ?? f, u = q[am(423)] ?? c, w = await vO(o);
  if (w !== void 0) return { "ok": ![], "unidades": [], "noRepetible": [], "error": w };
  const y = await yP(o);
  if (y === null) return { "ok": ![], "unidades": [], "noRepetible": [], "error": am(415) };
  if ("negativa" in y) return { "ok": ![], "unidades": [], "noRepetible": [], "error": y[am(408)] };
  const z = y["manifiesto"], A = await yW(o, z);
  if (am(408) in A) return { "ok": ![], "unidades": [], "noRepetible": [], "error": A["negativa"] };
  const B = A["filter"]((H) => H[am(446)] === am(455) && !H[am(394)])["map"]((H) => H["root"]), C = B["map"]((H) => am(461) + H), D = (H, I) => A["some"]((J) => J["exists"] && (J[H] ?? [])[am(454)]((K) => K["name"] === I)), E = [];
  let F;
  for (const H of p) {
    const I = await c1(o, z, H);
    if ("negativa" in I) {
      E[am(459)]({ "unit": H, "status": "?", "repeticiones": [], "hallazgos": [], "noRepetible": [], "error": I[am(408)]["split"]("\n")[0] });
      continue;
    }
    if (I["lane"] === void 0) {
      !D(am(402), I[am(433)][am(380)]["name"]) ? E["push"]({ "unit": H, "status": I[am(433)][am(412)], "repeticiones": [], "hallazgos": [], "noRepetible": ["el carril \xAB" + I["unit"]["lane"][am(444)] + am(479)] }) : E["push"]({ "unit": H, "status": I["unit"][am(412)], "repeticiones": [], "hallazgos": [], "noRepetible": [], "error": I[am(438)] });
      continue;
    }
    const J = await c4(o, z, { ...I, "lane": I[am(380)] }), K = [], L = [];
    if (I[am(380)][am(378)] === "agrupada" && I[am(433)][am(412)] === "cerrada") {
      F ??= (await b8(o, z))["map"]((O) => O[am(420)]);
      const N = F["includes"](H);
      L[am(459)](N ? am(395) : "ajuste comprobado por una comprobaci\xF3n agrupada cerrada");
    }
    for (const O of I[am(435)]["filter"]((P) => P[am(493)] === "delegado")) {
      const P = O["delegacion"] === void 0 ? void 0 : await n(o, O["delegacion"]);
      L[am(459)]("aprobaci\xF3n delegada: gate \xAB" + O["subject"] + "\xBB, por la concesi\xF3n " + (O["delegacion"] ?? am(445)) + " (" + (P ?? "concesi\xF3n no hallada en ninguna bit\xE1cora") + ")");
    }
    for (const Q of [void 0, am(381), am(428)]) {
      for (const R of I["approvals"][am(489)]((S) => S["channel"] === "chat" && S["motivo"] === Q)) {
        L[am(459)]("aprobaci\xF3n por el chat" + i[Q ?? "sin_formulario"] + am(456) + R[am(447)] + am(386) + R[am(387)]);
      }
    }
    for (const S of re(I[am(380)], I["unit"])["filter"]((T) => T["kind"] === am(431) || T["kind"] === "milestone")) {
      const T = rB(S, J);
      if ("falta" in T) continue;
      for (const U of T[am(370)]) {
        const V = h(I["evidence"], S["id"], U);
        if (V === void 0) continue;
        if (V[am(488)] === "report") L[am(459)]("reporte en \xAB" + S["id"] + "\xBB/\xAB" + U["id"] + am(448) + V[am(384)] + " " + V["reference"]);
        else {
          if (V["class"] === am(441)) L[am(459)](am(440) + S["id"] + am(419) + U["id"] + am(466) + V[am(407)] + am(392) + V["channel"] + ")");
          else {
            if (V["on"] === "before") L["push"](am(410) + S["id"] + "\xBB/\xAB" + U["id"] + am(486) + V["command"] + "` (reconstruir ese estado es trabajo del CI)");
            else {
              if (V["on"] === am(377)) L[am(459)]("ejecuci\xF3n contra el entorno en \xAB" + S["id"] + "\xBB/\xAB" + U["id"] + "\xBB: `" + V[am(413)] + am(405));
              else {
                const W = await t(V["command"], o, u), X = W[am(422)] !== null ? rC({ ...V, "exitCode": W[am(422)], "output": W[am(374)] }, U) : { "ok": ![], "porque": W[am(458)] === am(400) ? am(470) + W[am(374)]["split"]("\n")[0] : W[am(458)] === am(465) ? am(430) : am(389) + Math[am(425)](u / 1e3) + " s" };
                K[am(459)]({ "step": S["id"], "requirement": U["id"], "command": V[am(413)], "exitCode": W[am(422)], ...X["ok"] ? {} : { "falla": X[am(473)] } });
              }
            }
          }
        }
      }
    }
    const M = [];
    if (I["unit"]["status"] === am(371)) {
      let Y, Z;
      try {
        const a7 = await Aw(o, H);
        Z = a7 === null ? void 0 : ji(a7), Y = Z?.["files"]["map"]((a8) => a8[am(418)]);
      } catch (a8) {
        M[am(459)]("5. undeclared_change: `cambios.yaml` no se puede leer (" + a8["message"]["split"]("\n")[0] + ")");
      }
      if (Y === void 0) L[am(459)](am(476));
      let a0 = { "sinFijar": !![] }, a1 = z;
      if (I[am(373)] === void 0) L["push"]("condici\xF3n 0, la pol\xEDtica: la unidad no tiene `politica.yaml` (empez\xF3 antes de que Arketum la fijara), as\xED que no se compara");
      else {
        if (Z?.["politica"] === void 0) L["push"](am(416));
        else {
          const a9 = Z[am(471)] ?? [], aa = ha(I["politicaFijada"], a9, I[am(433)]["id"])["politica"];
          a0 = { "fijada": I["politicaFijada"], "esperada": aa, "vigente": Z["politica"], "aplicadas": a9, "diferencias": hh(aa, Z["politica"], I[am(433)][am(482)]) }, a1 = gH(Z[am(391)], z);
        }
      }
      const a2 = a1 === z ? I[am(406)] : await yW(o, a1), a3 = await dI({ "action": am(426), "root": o, "manifiesto": a1 }, { ...I, "lane": I[am(380)], "catalogos": am(408) in a2 ? I["catalogos"] : a2 }, H, Y ?? [], a0, Z?.[am(404)] === void 0 ? void 0 : { "declarados": Z["borrados"], "deVerdad": Z[am(421)][am(489)]((ab) => ab[am(452)] === null)["map"]((ab) => ab["path"]) }), a4 = Object[am(393)](a3["vista"]["artefactos"])["some"]((ab) => ab[am(464)] === void 0 && ab[am(368)] !== void 0) && [...re(I["lane"], I["unit"])[am(489)]((ab) => ab["kind"] === am(401))["map"]((ab) => ["archetypes", ab["archetype"]["name"]]), ...I["unit"]["touches"][am(472)]((ab) => {
        const an = am, ac = a1["artifacts"][an(427)]((ad) => ad["id"] === ab);
        if (ac === void 0) return [];
        if (ac[an(464)] === void 0) return [["stacks", ac[an(397)]?.["name"] ?? ""], ["formas", a1["forma"]?.["name"] ?? ""]];
        return [["archetypes", ac[an(464)][an(444)]]];
      })][am(454)](([ab, ac]) => ac !== "" && !D(ab, ac)), a5 = (ab) => a4 && (ab[am(411)]("1.") || ab["startsWith"]("3."));
      L[am(459)](...a3["hallazgos"]["filter"](a5)["map"]((ab) => ab + am(429))), M[am(459)](...a3["hallazgos"][am(489)]((ab) => !a5(ab)));
      const a6 = sc(I)["senales"];
      a6 !== void 0 && am(400) in f2(a6["forma"], A, a6["version"]) && L["push"]("comprobaci\xF3n 7 del levantamiento: la forma \xAB" + a6["forma"] + "\xBB " + (a6["version"] ?? "") + " no est\xE1 en los cat\xE1logos de aqu\xED" + (A["some"]((ab) => ab["exists"] && ab[am(478)]["some"]((ac) => ac[am(444)] === a6["forma"])) ? am(457) : " (vendr\xEDa de uno personal)") + am(477));
    }
    E[am(459)]({ "unit": H, "status": I[am(433)][am(412)], "repeticiones": K, "hallazgos": M, "noRepetible": L });
  }
  const G = E["every"]((ab) => ab["error"] === void 0 && ab["hallazgos"][am(436)] === 0 && ab["repeticiones"]["every"]((ac) => ac[am(483)] === void 0));
  return { "ok": G, "unidades": E, "noRepetible": C };
}
function k(o) {
  const ao = al, p = [ao(467) + (o["ok"] ? "todo se reproduce y cierra" : "algo no se reproduce o no cierra")];
  if (o[ao(400)] !== void 0) return p[0] + "\n  " + o["error"];
  for (const q of o["unidades"]) {
    p["push"]("", "Unidad \xAB" + q["unit"] + ao(492) + q[ao(412)] + ")");
    if (q[ao(400)] !== void 0) {
      p["push"](ao(450) + q[ao(400)]);
      continue;
    }
    for (const s of q["repeticiones"]) {
      p["push"]("  " + (s[ao(483)] === void 0 ? ao(491) : "FALLA") + " \xAB" + s[ao(474)] + ao(419) + s["requirement"] + "\xBB: `" + s["command"] + ao(460) + (s["exitCode"] ?? "sin terminar") + (s["falla"] === void 0 ? "" : " (" + s[ao(483)] + ")"));
    }
    if (q[ao(414)]["length"] === 0) p[ao(459)]("  sin ejecuciones que repetir");
    for (const t of q["hallazgos"]) p["push"](ao(442) + t);
    if (q[ao(480)]["length"] > 0) p[ao(459)]("  No repetible:", ...q["noRepetible"]["map"]((v) => ao(453) + v));
  }
  if (o["noRepetible"]["length"] > 0) p["push"]("", ao(490), ...o[ao(480)]["map"]((v) => "  - " + v));
  return p["join"]("\n");
}
function l(o) {
  const ap = al, p = [];
  let q = ![], r = c;
  for (let u = 0; u < o["length"]; u += 1) {
    const v = o[u];
    if (v === "--json") q = !![];
    else {
      if (v === ap(390)) {
        const w = Number(o[u + 1]);
        if (!Number[ap(409)](w) || w <= 0 || w > 24 * 60) return { "error": ap(434) };
        r = w * 60 * 1e3, u += 1;
      } else {
        if (v[ap(411)]("-")) return { "error": "opci\xF3n desconocida: " + v };
        else {
          if (!p[ap(388)](v)) p[ap(459)](v);
        }
      }
    }
  }
  const [s, ...t] = p;
  if (s === void 0 || t[ap(436)] === 0) return { "error": "uso: arketum-ci <ra\xEDz> <unidad>\u2026 [--json] [--minutos N]. Las unidades son obligatorias: el\xEDgelas con tu herramienta de control de versiones (por ejemplo, las que cambian en el PR)." };
  return { "root": resolve(s), "units": t, "json": q, "timeoutMs": r };
}
async function m(o, p = (u) => process["stdout"][al(487)](u), q = (u) => process["stderr"]["write"](u)) {
  const aq = al, r = l(o);
  if ("error" in r) return q(r[aq(400)] + "\n"), 2;
  const s = await j(r[aq(475)], r[aq(432)], { "timeoutMs": r["timeoutMs"] });
  return p((r[aq(369)] ? JSON[aq(372)](s, null, 2) : k(s)) + "\n"), s["ok"] ? 0 : 1;
}
async function n(o, p) {
  const ar = al;
  for (const q of await A5(o)[ar(439)](() => [])) {
    let r = [];
    try {
      r = jm(await A0(o, q)["catch"](() => null) ?? "");
    } catch {
      continue;
    }
    const s = tW(p, r);
    if (s !== void 0) return tY(s) + ", en \xAB" + q + "\xBB";
  }
  return void 0;
}
for (const ae of [al(449), "SIGTERM"]) {
  process["on"](ae, () => {
    const as = al;
    e(), process[as(451)](ae === "SIGINT" ? 130 : 143);
  });
}
function a() {
  const av = ["ANnVBG", "zxHPz2vUy2LHCW", "y2vYCMfKyq", "C3rYAw5NAwz5", "Cg9SAxrPy2fgAwPHzge", "B3v0Chv0", "mZa5ndy4nMnusw9rAW", "CgLK", "zw50B3jUBW", "y29TChjVyMfJAw9U", "lcbJB24GzwWGzM9YBxvSyxjPBYbZAw4GCMvZChvLC3rH", "BgfUzq", "zM9YBxvSyxjPB19ZAw5FCMvZChvLC3rH", "mtjmt0TMzM4", "otK3nxjTAM9zzG", "C291CMnL", "nJe1oty5EvvwCK9p", "WRSSia", "zgvJAxnPB24", "Aw5JBhvKzxm", "BM8GDgvYBwLUW7mGzw4G", "ls1TAw51Dg9Z", "Cg9SAxrPy2e", "icHJyw5HBca", "DMfSDwvZ", "zxHPC3rZ", "ywP1C3rLihbVCIbJB21WCM9Iyxi6igXHCYbJB25KAwnPB25LCYa5ihKGmtaGBgfZigP1EMDHihvUysbJB21WCM9IywnPW7nUigfNCNvWywrH", "zgf0yq", "C3rHy2S", "zgvZDhjVEq", "ywrK", "zxjYB3i", "yxj0AwzHy3q", "BgfUzxm", "nZuYmZiWzhLwBxfk", "yM9YCMfKB3m", "ycaOCMvWzxrPCMXHigv4AwDPCSoTysbSB3mGywnJzxnVCYbKzwWGzw50B3jUBYK", "y2f0ywXVz29Z", "D2HV", "BMvNyxrPDMe", "AxngAw5PDgu", "zwPLy3vJACoZBIbHBNrLCYbKzwWGy2fTyMLVigvUimkR", "C3rHCNrZv2L0Aa", "C3rHDhvZ", "y29TBwfUza", "CMvWzxrPy2LVBMvZ", "BM8GAgf5igaUyxjRzxr1Bs9WCM95zwn0BY55yw1SycbLBIbSysbYyCoTEG", "y29UzgLJACoZBIaWlcbSysbWB2ZdRxrPy2e6igXHihvUAwrHzcbUBYbNDwfYzmoZigvUigbJyw1IAw9ZlNLHBwXGigXHihbVBmoTDgLJysbHBcbJzxjYyxiSigfZW60GCxvLig5VihnLignVBxbHCMe", "u0Lhs0Lmta", "Cgf0Aa", "WRSVWQS", "Dw5PzgfK", "zMLSzxm", "zxHPDenVzgu", "DgLTzw91De1Z", "C3rKzxjY", "CM91BMq", "y2XVC2u", "zMLUza", "zM9YEMfKBW", "icHHBgFdUM4GyxjXDwv0AxbVig5VigvZDmoHigvUig5PBMFdUM4Gy2f0W6fSB2DVigrLigXVCYbXDwuGAgf5igfXDCoToIb2zw5KCSoTysbKzsb1BM8GCgvYC29UywWP", "Bg8GDgvYBwLUW7mGDw5HihnLW7fHBa", "zxzPzgvUy2u", "Dw5PDhm", "Dw5PDa", "yc0TBwLUDxrVC2aGBMvJzxnPDgeGDw4GBSo6BwvYBYbTyxLVCIbXDwuGmcb5igrLignVBw8GBxvJAg8Gmtq0mcaODw4GzmoTysK", "yxbWCM92ywXZ", "BgvUz3rO", "y2XLyxi", "BgfUzuvYCM9Y", "y2f0y2G", "zgvJBgfYywnPW7nUigvUimkR", "C3rHDgvTzw50", "icbotYbdsuvsuKe6ia", "mtq4mJu5nwXZswv2AG", "BMfTzq", "khnPBIbODwvSBgeP", "Dhj1C3q", "C3vIAMvJDa", "WRS6ia", "u0Lhsu5u", "icbfuLjpuJOG", "zxHPDa", "y2HLy2TZDw0", "icaGic0G", "C29Tzq", "CgvYC29UywW", "oIbNyxrLimkR", "ignVBIbLC2eGDMvYC2NdS24", "Bw90AxzV", "ChvZAa", "ycdIHPiG", "y2f0W6fSB2DVihbLCNnVBMfSihf1zsbHCxxdRsbUBYbLEgLZDgu6ia", "AwDUB3jL", "C3rKB3v0", "yxjJAgv0ExbL", "C2xdSwfS", "WRSGzguG", "qvjlrvrvtsbdstOG", "nZyYC0rgEwzN", "mtu2odG4yKXdthHU", "BM8GC2uGChvKBYbSyw56yxi6ia", "zxHLBMnPB25LCW", "zMXHDe1HCa", "Cg9YCxvL", "C3rLCa", "CM9VDa", "y29UzgLJACoZBIa1oIbSysb1BMLKywqGBM8Gz3vHCMtdSYbGy2fTyMLVCY55yw1SycbHBcbJzxjYyxiGkhnLignLCNldSYbZAw4GzM90BYWGBYbHBNrLCYbKzsbXDwuGzxHPC3rPzxjHksWGyxpdRsbXDwuGBM8GC2uGy29TChj1zwjH", "lcbHC8oTihf1zsbUBYbZzsbYzxbPDgu", "zM9YBwfZ", "WRSGBM8Gzxn0W6eGzw4GBMLUz8o6BIbJyxtdOwXVz28GzguGBg9Zihf1zsbOyxKGyxf1W60GkhzLBMrYW61HigrLihvUBYbWzxjZB25HBcK6ig5HzgeGzguGBgeGDw5PzgfKihnLihb1zwrLihjLCgv0Axi", "BM9szxbLDgLIBgu", "Dg9tDhjPBMC", "Dg91y2HLCW", "zMfSBge", "mJq4nZu3meHIzeHIBG", "ogzLvxznyW", "WRS6iga", "D3jPDgu", "y2XHC3m", "zMLSDgvY", "tM8GCMvWzxrPyMXLigvUigvZDguGq0K6", "uKvquK9evunjree", "WRSGka", "y2HHBM5LBa", "C2XPy2u", "yxjJAgv0ExbLrxjYB3i"];
  a = function() {
    return av;
  };
  return a();
}
function b(c2, d2) {
  c2 = c2 - 368;
  const e2 = a();
  let f3 = e2[c2];
  if (b["QTiepZ"] === void 0) {
    var g2 = function(l2) {
      const m2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let n2 = "", o = "";
      for (let p = 0, q, r, s = 0; r = l2["charAt"](s++); ~r && (q = p % 4 ? q * 64 + r : r, p++ % 4) ? n2 += String["fromCharCode"](255 & q >> (-2 * p & 6)) : 0) {
        r = m2["indexOf"](r);
      }
      for (let t = 0, u = n2["length"]; t < u; t++) {
        o += "%" + ("00" + n2["charCodeAt"](t)["toString"](16))["slice"](-2);
      }
      return decodeURIComponent(o);
    };
    b["UHjKjX"] = g2, b["NlwFML"] = {}, b["QTiepZ"] = !![];
  }
  const h2 = e2[0], i2 = c2 + h2, j2 = b["NlwFML"][i2];
  return !j2 ? (f3 = b["UHjKjX"](f3), b["NlwFML"][i2] = f3) : f3 = j2, f3;
}
m(process["argv"][al(494)](2))["then"]((o) => {
  const at = al;
  process[at(422)] = o;
}, (o) => {
  const au = al;
  process[au(424)]["write"]("arketum-ci: " + (o instanceof Error ? o["stack"] ?? o["message"] : String(o)) + "\n"), process["exitCode"] = 1;
});
