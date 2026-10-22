#!/usr/bin/env node
import { createRequire as __crearRequire } from 'node:module'; const require = __crearRequire(import.meta.url);

// arketum/dist/mcp/arketum.js
function b(c2, d2) {
  c2 = c2 - 349;
  var e = a();
  var f = e[c2];
  if (b["vxtoep"] === void 0) {
    var g = function(l) {
      var m2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      var n = "", o = "";
      for (var p = 0, q, r, s = 0; r = l["charAt"](s++); ~r && (q = p % 4 ? q * 64 + r : r, p++ % 4) ? n += String["fromCharCode"](255 & q >> (-2 * p & 6)) : 0) {
        r = m2["indexOf"](r);
      }
      for (var t = 0, u = n["length"]; t < u; t++) {
        o += "%" + ("00" + n["charCodeAt"](t)["toString"](16))["slice"](-2);
      }
      return decodeURIComponent(o);
    };
    b["EAKRbF"] = g, b["zYVLrN"] = {}, b["vxtoep"] = !![];
  }
  var h = e[0], i = c2 + h, j = b["zYVLrN"][i];
  return !j ? (f = b["EAKRbF"](f), b["zYVLrN"][i] = f) : f = j, f;
}
var m = b;
function a() {
  var n = ["CgfUzwW", "C3rKzxjY", "ls1OzwXW", "DgvSzw1LDhjPyq", "yxjRzxr1BtOGBM8Gy29UB3PJBYdcQW", "ndiYmty2tuTjterO", "mtm5nZm3mK1lu0z2wq", "mZvQqxbLAgy", "DxnVoIbHCMTLDhvTicHLBcbZzxj2AwrVCIbnq1aGCg9Yihn0zgLVksb8igfYA2v0Dw0Gy2KGphjHW616pIa8Dw5PzgfKpUkaPIb8igfYA2v0Dw0GCgfUzwWGw3jHW616xsbBls1WDwvYDg8GtL0GFcbHCMTLDhvTihbHBMvSic0TC2vYDMLKB3iGFcbHCMTLDhvTihbHBMvSic0Tzgv0zw5LCIb8igfYA2v0Dw0GDgvSzw1LDhjPysbBls1Hy2vWDg8GFcaTlw5VihWGls1WCM9IyxjDcG", "nMH5A3vVtG", "mJeXmtG4mgjZt2rMvG", "lI90zwXLBwv0CMLHlwnSAs5QCW", "WRSUcG", "mtfODNrJv3e", "lI9JAs1JBgKUANm", "mtHnDhHzrLy", "nZa2q1Hytg5h", "D3jPDgu", "zxHPDenVzgu", "otGWDeDztgDh", "nZeYnZuXmhDAywfyza", "mtKZmdG2nu9UDeL3sW", "yxjNDG", "nJe0mZmWngXyDLnwqW"];
  a = function() {
    return n;
  };
  return a();
}
(function(g, h) {
  var l = b, i = g();
  while (!![]) {
    try {
      var j = -parseInt(l(362)) / 1 * (-parseInt(l(365)) / 2) + -parseInt(l(355)) / 3 * (parseInt(l(352)) / 4) + parseInt(l(367)) / 5 + parseInt(l(351)) / 6 * (-parseInt(l(353)) / 7) + -parseInt(l(356)) / 8 * (-parseInt(l(361)) / 9) + parseInt(l(366)) / 10 + -parseInt(l(359)) / 11 * (parseInt(l(369)) / 12);
      if (j === h) break;
      else i["push"](i["shift"]());
    } catch (k) {
      i["push"](i["shift"]());
    }
  }
})(a, 410401);
var c = m(354);
var d = process[m(368)][2];
if (d === void 0) await import("./cli.js");
else {
  if (d === "ci" || d === m(370)) process["argv"]["splice"](2, 1), await (d === "ci" ? import(m(360)) : import("./panel-cli.js"));
  else {
    if (d === m(349)) {
      const { ordenTelemetria: e } = await import(m(357)), f = await e(process["argv"]["slice"](3));
      process["stdout"][m(363)](f["salida"]), process["exitCode"] = f["codigo"];
    } else process[m(371)]["write"](d === "--help" || d === "-h" ? c : m(350) + d + m(358) + c), process[m(364)] = d === m(372) || d === "-h" ? 0 : 2;
  }
}
