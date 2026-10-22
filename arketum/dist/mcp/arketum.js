#!/usr/bin/env node
import { createRequire as __crearRequire } from 'node:module'; const require = __crearRequire(import.meta.url);

// arketum/dist/mcp/arketum.js
function b(c2, d2) {
  c2 = c2 - 366;
  var e = a();
  var f = e[c2];
  if (b["CddwPd"] === void 0) {
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
    b["AgVJsP"] = g, b["bgaqfc"] = {}, b["CddwPd"] = !![];
  }
  var h = e[0], i = c2 + h, j = b["bgaqfc"][i];
  return !j ? (f = b["AgVJsP"](f), b["bgaqfc"][i] = f) : f = j, f;
}
var m = b;
function a() {
  var n = ["nZi4mtyZofLwCe1vva", "yxjNDG", "D3jPDgu", "DxnVoIbHCMTLDhvTicHLBcbZzxj2AwrVCIbnq1aGCg9Yihn0zgLVksb8igfYA2v0Dw0Gy2KGphjHW616pIa8Dw5PzgfKpUkaPIb8igfYA2v0Dw0GCgfUzwWGw3jHW616xsbBls1WDwvYDg8GtL0GFcbHCMTLDhvTihbHBMvSic0TC2vYDMLKB3iGFcbHCMTLDhvTihbHBMvSic0Tzgv0zw5LCIb8igfYA2v0Dw0GDgvSzw1LDhjPysbBls1Hy2vWDg8GFcaTlw5VihWGls1WCM9IyxjDcG", "nZqYndCWtLHWwNDh", "ndi5nfDkCKvsDq", "nw5fteP2rW", "mtK1mta3mMT3y1P0Ca", "mJD3qvnbAfK", "n3rJs3vKDq", "mJK1ndK3nLrdD21XyW", "C2XPy2u", "ls1OzwXW", "mJyWmtyWyvLpufbi", "DgvSzw1LDhjPyq", "CgfUzwW", "mZq1ndyYm1LTCxnUEq"];
  a = function() {
    return n;
  };
  return a();
}
(function(g, h) {
  var l = b, i = g();
  while (!![]) {
    try {
      var j = -parseInt(l(380)) / 1 * (-parseInt(l(376)) / 2) + parseInt(l(370)) / 3 + parseInt(l(367)) / 4 + -parseInt(l(377)) / 5 * (-parseInt(l(381)) / 6) + -parseInt(l(371)) / 7 + parseInt(l(378)) / 8 + -parseInt(l(379)) / 9 * (parseInt(l(375)) / 10);
      if (j === h) break;
      else i["push"](i["shift"]());
    } catch (k) {
      i["push"](i["shift"]());
    }
  }
})(a, 705015);
var c = m(374);
var d = process["argv"][2];
if (d === void 0) await import("./cli.js");
else {
  if (d === "ci" || d === m(369)) process["argv"]["splice"](2, 1), await (d === "ci" ? import("./ci-cli.js") : import("./panel-cli.js"));
  else {
    if (d === m(368)) {
      const { ordenTelemetria: e } = await import("./telemetria-cli.js"), f = await e(process[m(372)][m(382)](3));
      process["stdout"][m(373)](f["salida"]), process["exitCode"] = f["codigo"];
    } else process["stderr"][m(373)](d === m(366) || d === "-h" ? c : "arketum: no conozco \xAB" + d + "\xBB.\n" + c), process["exitCode"] = d === "--help" || d === "-h" ? 0 : 2;
  }
}
