import { createRequire as __crearRequire } from 'node:module'; const require = __crearRequire(import.meta.url);
import {
  AQ,
  AV,
  AW,
  AZ,
  B5,
  Ba,
  Bf,
  Bg,
  mJ,
  mL,
  mM,
  mN,
  mO,
  zr,
  zt
} from "./comun-DDWB6OEM.js";

// arketum/dist/mcp/telemetria-cli.js
var w = b;
function b(c2, d2) {
  c2 = c2 - 165;
  const e = a();
  let f = e[c2];
  if (b["oiwhFV"] === void 0) {
    var g = function(l) {
      const m = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let n = "", o = "";
      for (let p = 0, q, r, s = 0; r = l["charAt"](s++); ~r && (q = p % 4 ? q * 64 + r : r, p++ % 4) ? n += String["fromCharCode"](255 & q >> (-2 * p & 6)) : 0) {
        r = m["indexOf"](r);
      }
      for (let t = 0, u = n["length"]; t < u; t++) {
        o += "%" + ("00" + n["charCodeAt"](t)["toString"](16))["slice"](-2);
      }
      return decodeURIComponent(o);
    };
    b["VhdltZ"] = g, b["ktbyVV"] = {}, b["oiwhFV"] = !![];
  }
  const h = e[0], i = c2 + h, j = b["ktbyVV"][i];
  return !j ? (f = b["VhdltZ"](f), b["ktbyVV"][i] = f) : f = j, f;
}
(function(e, f) {
  const v = b, g = e();
  while (!![]) {
    try {
      const h = -parseInt(v(175)) / 1 * (-parseInt(v(182)) / 2) + parseInt(v(181)) / 3 * (parseInt(v(177)) / 4) + parseInt(v(170)) / 5 * (-parseInt(v(166)) / 6) + parseInt(v(179)) / 7 + -parseInt(v(168)) / 8 * (-parseInt(v(180)) / 9) + parseInt(v(185)) / 10 + -parseInt(v(174)) / 11 * (parseInt(v(176)) / 12);
      if (h === f) break;
      else g["push"](g["shift"]());
    } catch (i) {
      g["push"](g["shift"]());
    }
  }
})(a, 712190);
var c = w(171);
async function d(e, f = /* @__PURE__ */ new Date()) {
  const x = w, [g, ...h] = e;
  if (h["length"] > 0 || g !== void 0 && ![x(172), x(178), "--probar"]["includes"](g)) return { "salida": x(167) + e[x(165)](" ") + x(169) + c, "codigo": 2 };
  if (g === "--acepto" || g === "--no") {
    const p = g === "--acepto";
    return await Ba(p, "arketum telemetria " + g, zt(await zr()), x(183)), { "salida": p ? "Telemetr\xEDa aceptada para esta instalaci\xF3n." + (AQ() ? " Ahora est\xE1 apagada en esta m\xE1quina (`ARKETUM_TELEMETRIA=0`): no se cuenta ni se env\xEDa nada mientras siga as\xED." : "") + "\n" : "Telemetr\xEDa no aceptada: se borr\xF3 lo contado, el id de la instalaci\xF3n y la sal; no se cuenta ni se env\xEDa nada.\n", "codigo": 0 };
  }
  const i = await B5(), j = AZ(), k = AW(f), l = Bf(i, k);
  if (g === x(173)) {
    const q = mM(i, { "apagada": AQ(), "destino": j });
    if (q !== void 0) return { "salida": mO({ "razon": q }) + "\n", "codigo": 1 };
    const s = JSON["stringify"](mJ(l, j, { "instalacion": i["instalacion"], "momento": f["toISOString"]() })), t = await AV()(j["url"], s)["catch"]((u) => ({ "ok": ![], "error": u[x(186)] }));
    return { "salida": mO(t) + "\n", "codigo": t["ok"] ? 0 : 1 };
  }
  const m = mN(i, { "apagada": AQ(), "destino": j, "hoy": k }), n = m === void 0 ? "Se enviar\xEDa ahora (la primera llamada de hoy lo env\xEDa):" : x(184) + mL(m) + x(187), o = j === void 0 ? JSON["stringify"](l) : Bg(l, j, i, f["toISOString"]());
  return { "salida": n + "\n" + o + "\n", "codigo": 0 };
}
function a() {
  const y = ["nuvozwnXCa", "DxnVoIbHCMTLDhvTihrLBgvTzxrYAweGwY0TywnLChrVihWGls1UBYb8ic0TChjVyMfYxqO", "ls1Hy2vWDg8", "ls1WCM9Iyxi", "mteZnJn3zxHvvw8", "mti0mJK5nNn6zg14qq", "mZe3mdrgteXtsuC", "ndq1otK2DgHjELjw", "ls1UBW", "nZeXotmWogrNuwrIuG", "mtHcvxriAKS", "mJDHrwjMqvK", "mK1yCLD5uG", "DgvYBwLUywW", "tM8GC2uGzw52AwfYW61HigfOB3jHoIa", "ndq2ndm4mfvSAvvTEa", "BwvZC2fNzq", "lIbfC3rVigvZigXVihf1zsbZzsbLBNzPyxldRwe6", "AM9PBG", "nZG3nduYnKHZDxbgDG", "yxjRzxr1Bsb0zwXLBwv0CMLHoIbUBYbJB25VEMnVimkR", "nde3ntmXmM53BwvIBa", "WRSUcG"];
  a = function() {
    return y;
  };
  return a();
}
export {
  c as USO_DE_TELEMETRIA,
  d as ordenTelemetria
};
