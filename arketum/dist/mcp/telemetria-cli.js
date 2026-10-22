import { createRequire as __crearRequire } from 'node:module'; const require = __crearRequire(import.meta.url);
import {
  AE,
  AF,
  AI,
  AO,
  AT,
  AY,
  AZ,
  Az,
  Bg,
  Bi,
  mJ,
  mL,
  mM,
  mN,
  mO
} from "./comun-EUTJM7FK.js";

// arketum/dist/mcp/telemetria-cli.js
var w = b;
function a() {
  const y = ["mtaWC3L6q2To", "mtyYnZKZog9RrvvPAG", "nZm5mduWyLHrDNH4", "mtG3mtCZmg9UDMPfqG", "Aw5JBhvKzxm", "ls1WCM9Iyxi", "tM8GC2uGzw52AwfYW61HigfOB3jHoIa", "BwvZC2fNzq", "Aw5ZDgfSywnPB24", "yxjRzxr1Bsb0zwXLBwv0CMLHoIbUBYbJB25VEMnVimkR", "otaZmMXTuKrICG", "WRSUcG", "mtK2ndi5wxD4t2L5", "iefOB3jHigvZDmoHigfWywDHzgeGzw4Gzxn0ysbTW6fXDwLUysaOyefss0vuvu1Fvevmru1fvfjjqt0WycK6ig5VihnLign1zw50ysbUAsbZzsbLBNBdRweGBMfKysbTAwvUDhjHCYbZAwDHigfZW60U", "mtqZvKn6Avvy", "DxjS", "Dg9ju09tDhjPBMC", "ls1Hy2vWDg8", "yxjRzxr1Bsb0zwXLBwv0CMLHia", "mZu0mJf4vMXsEwS", "DxnVoIbHCMTLDhvTihrLBgvTzxrYAweGwY0TywnLChrVihWGls1UBYb8ic0TChjVyMfYxqO", "lIbfC3rVigvZigXVihf1zsbZzsbLBNzPyxldRwe6", "vgvSzw1LDhldRweGywnLChrHzgeGCgfYysbLC3rHigLUC3rHBgfJACoZBI4", "mJyXBNnVBNzA", "mMjVuNzLwq", "ls1UBW", "mti4mZy0nNfju1fNtW", "C3rYAw5NAwz5", "DgvYBwLUywW"];
  a = function() {
    return y;
  };
  return a();
}
(function(e, f) {
  const v = b, g = e();
  while (!![]) {
    try {
      const h = -parseInt(v(158)) / 1 * (parseInt(v(170)) / 2) + -parseInt(v(165)) / 3 * (-parseInt(v(175)) / 4) + -parseInt(v(178)) / 5 + -parseInt(v(176)) / 6 + -parseInt(v(172)) / 7 + -parseInt(v(156)) / 8 * (parseInt(v(169)) / 9) + -parseInt(v(177)) / 10 * (-parseInt(v(160)) / 11);
      if (h === f) break;
      else g["push"](g["shift"]());
    } catch (i) {
      g["push"](g["shift"]());
    }
  }
})(a, 197723);
var c = w(166);
function b(c2, d2) {
  c2 = c2 - 153;
  const e = a();
  let f = e[c2];
  if (b["UsQgqu"] === void 0) {
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
    b["mrlOFj"] = g, b["mQnaQD"] = {}, b["UsQgqu"] = !![];
  }
  const h = e[0], i = c2 + h, j = b["mQnaQD"][i];
  return !j ? (f = b["mrlOFj"](f), b["mQnaQD"][i] = f) : f = j, f;
}
async function d(e, f = /* @__PURE__ */ new Date()) {
  const x = w, [g, ...h] = e;
  if (h["length"] > 0 || g !== void 0 && !["--acepto", x(171), x(180)][x(179)](g)) return { "salida": x(155) + e["join"](" ") + x(157) + c, "codigo": 2 };
  if (g === x(163) || g === x(171)) {
    const p = g === "--acepto";
    return await AT(p, x(164) + g, Bi(await Bg()), x(174)), { "salida": p ? x(168) + (Az() ? x(159) : "") + "\n" : "Telemetr\xEDa no aceptada: se borr\xF3 lo contado, el id de la instalaci\xF3n y la sal; no se cuenta ni se env\xEDa nada.\n", "codigo": 0 };
  }
  const i = await AO(), j = AI(), k = AF(f), l = AY(i, k);
  if (g === x(180)) {
    const q = mM(i, { "apagada": Az(), "destino": j });
    if (q !== void 0) return { "salida": mO({ "razon": q }) + "\n", "codigo": 1 };
    const s = JSON[x(173)](mJ(l, j, { "instalacion": i[x(154)], "momento": f[x(162)]() })), t = await AE()(j[x(161)], s)["catch"]((u) => ({ "ok": ![], "error": u[x(153)] }));
    return { "salida": mO(t) + "\n", "codigo": t["ok"] ? 0 : 1 };
  }
  const m = mN(i, { "apagada": Az(), "destino": j, "hoy": k }), n = m === void 0 ? "Se enviar\xEDa ahora (la primera llamada de hoy lo env\xEDa):" : x(181) + mL(m) + x(167), o = j === void 0 ? JSON["stringify"](l) : AZ(l, j, i, f["toISOString"]());
  return { "salida": n + "\n" + o + "\n", "codigo": 0 };
}
export {
  c as USO_DE_TELEMETRIA,
  d as ordenTelemetria
};
