import { createRequire as __crearRequire } from 'node:module'; const require = __crearRequire(import.meta.url);
import {
  Jh,
  Jj,
  Jk
} from "./comun-FGC64UAE.js";

// arketum/dist/mcp/telemetria-cli.js
function b(c, d) {
  c = c - 232;
  var e = a();
  var f = e[c];
  if (b["RciRZE"] === void 0) {
    var g = function(l) {
      var m = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      var n = "", o = "";
      for (var p = 0, q, r, s = 0; r = l["charAt"](s++); ~r && (q = p % 4 ? q * 64 + r : r, p++ % 4) ? n += String["fromCharCode"](255 & q >> (-2 * p & 6)) : 0) {
        r = m["indexOf"](r);
      }
      for (var t = 0, u = n["length"]; t < u; t++) {
        o += "%" + ("00" + n["charCodeAt"](t)["toString"](16))["slice"](-2);
      }
      return decodeURIComponent(o);
    };
    b["hyVjAN"] = g, b["gdUroe"] = {}, b["RciRZE"] = !![];
  }
  var h = e[0], i = c + h, j = b["gdUroe"][i];
  return !j ? (f = b["hyVjAN"](f), b["gdUroe"][i] = f) : f = j, f;
}
(function(c, d) {
  var h = b, e = c();
  while (!![]) {
    try {
      var f = -parseInt(h(232)) / 1 * (-parseInt(h(235)) / 2) + -parseInt(h(233)) / 3 * (parseInt(h(236)) / 4) + parseInt(h(237)) / 5 + parseInt(h(241)) / 6 * (-parseInt(h(239)) / 7) + -parseInt(h(234)) / 8 + -parseInt(h(240)) / 9 + -parseInt(h(238)) / 10;
      if (f === d) break;
      else e["push"](e["shift"]());
    } catch (g) {
      e["push"](e["shift"]());
    }
  }
})(a, 446560);
function a() {
  var i = ["mJeWmdGZnfflvMTttG", "mty2mKLLwuvMsW", "mJqXyuPtExjM", "ntm3re9Tz0Lo", "ntCYnte2ofH2BNvbEq", "nJG5nhbpt1ryrW", "mJu1mLDWqxDlrq", "ndm1mZy4mhPVBK9LvW", "mtiYnJu2mffJqunxtG", "mtC0m3LZywzrwq"];
  a = function() {
    return i;
  };
  return a();
}
export {
  Jh as USO_DE_TELEMETRIA,
  Jj as loQueSeEnviaria,
  Jk as ordenTelemetria
};
