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
} from "./comun-7HOQALCI.js";

// arketum/dist/mcp/telemetria-cli.js
var w = b;
function a() {
  const y = ["vgvSzw1LDhldRweGywnLChrHzgeGCgfYysbLC3rHigLUC3rHBgfJACoZBI4", "DxnVoIbHCMTLDhvTihrLBgvTzxrYAweGwY0TywnLChrVihWGls1UBYb8ic0TChjVyMfYxqO", "Aw5ZDgfSywnPB24", "otyYntDNqNb3yMy", "mJeXntyYmfvMv0vItW", "mtyZmJiYmhn2AKjsrW", "ls1UBW", "yxjRzxr1Bsb0zwXLBwv0CMLHia", "AM9PBG", "mtGWAK5wEw9N", "ls1Hy2vWDg8", "C3rYAw5NAwz5", "vgvSzw1LDhldRweGBM8GywnLChrHzge6ihnLigjVCNldSYbSBYbJB250ywrVlcbLBcbPzcbKzsbSysbPBNn0ywXHy2NdS24GEsbSysbZywW7ig5VihnLign1zw50ysbUAsbZzsbLBNBdRweGBMfKys4k", "mJu5otqWmfryqLvqAa", "ndy4mJe2vw1eEfzV", "mZm3mZC2ogzKCvjSvW", "DxjS", "WRSUcG", "ls1WCM9Iyxi", "ovb4rKP4va", "u2uGzw52AwfYW61HigfOB3jHicHSysbWCMLTzxjHigXSyw1HzgeGzguGAg95igXVigvUDSoTysK6", "mJu1mtmZofHZventEG", "tM8GC2uGzw52AwfYW61HigfOB3jHoIa", "yxjRzxr1Bsb0zwXLBwv0CMLHoIbUBYbJB25VEMnVimkR"];
  a = function() {
    return y;
  };
  return a();
}
(function(e, f) {
  const v = b, g = e();
  while (!![]) {
    try {
      const h = parseInt(v(278)) / 1 + parseInt(v(293)) / 2 + -parseInt(v(285)) / 3 + -parseInt(v(292)) / 4 + parseInt(v(277)) / 5 + parseInt(v(273)) / 6 * (-parseInt(v(291)) / 7) + parseInt(v(279)) / 8 * (parseInt(v(283)) / 9);
      if (h === f) break;
      else g["push"](g["shift"]());
    } catch (i) {
      g["push"](g["shift"]());
    }
  }
})(a, 434046);
function b(c2, d2) {
  c2 = c2 - 271;
  const e = a();
  let f = e[c2];
  if (b["LDVINn"] === void 0) {
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
    b["OSSMKX"] = g, b["CiwhoR"] = {}, b["LDVINn"] = !![];
  }
  const h = e[0], i = c2 + h, j = b["CiwhoR"][i];
  return !j ? (f = b["OSSMKX"](f), b["CiwhoR"][i] = f) : f = j, f;
}
var c = w(289);
async function d(e, f = /* @__PURE__ */ new Date()) {
  const x = w, [g, ...h] = e;
  if (h["length"] > 0 || g !== void 0 && !["--acepto", "--no", x(282)]["includes"](g)) return { "salida": x(287) + e[x(272)](" ") + x(281) + c, "codigo": 2 };
  if (g === x(274) || g === x(294)) {
    const p = g === x(274);
    return await Ba(p, x(271) + g, zt(await zr()), "terminal"), { "salida": p ? x(288) + (AQ() ? " Ahora est\xE1 apagada en esta m\xE1quina (`ARKETUM_TELEMETRIA=0`): no se cuenta ni se env\xEDa nada mientras siga as\xED." : "") + "\n" : x(276), "codigo": 0 };
  }
  const i = await B5(), j = AZ(), k = AW(f), l = Bf(i, k);
  if (g === "--probar") {
    const q = mM(i, { "apagada": AQ(), "destino": j });
    if (q !== void 0) return { "salida": mO({ "razon": q }) + "\n", "codigo": 1 };
    const s = JSON[x(275)](mJ(l, j, { "instalacion": i[x(290)], "momento": f["toISOString"]() })), t = await AV()(j[x(280)], s)["catch"]((u) => ({ "ok": ![], "error": u["message"] }));
    return { "salida": mO(t) + "\n", "codigo": t["ok"] ? 0 : 1 };
  }
  const m = mN(i, { "apagada": AQ(), "destino": j, "hoy": k }), n = m === void 0 ? x(284) : x(286) + mL(m) + ". Esto es lo que se enviar\xEDa:", o = j === void 0 ? JSON["stringify"](l) : Bg(l, j, i, f["toISOString"]());
  return { "salida": n + "\n" + o + "\n", "codigo": 0 };
}
export {
  c as USO_DE_TELEMETRIA,
  d as ordenTelemetria
};
