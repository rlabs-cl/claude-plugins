#!/usr/bin/env node
import { createRequire as __crearRequire } from 'node:module'; const require = __crearRequire(import.meta.url);

// arketum/dist/mcp/arketum.js
function b(c2, d2) {
  c2 = c2 - 300;
  var e = a();
  var f = e[c2];
  if (b["GFCYTR"] === void 0) {
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
    b["HXqOVx"] = g, b["ViWFnx"] = {}, b["GFCYTR"] = !![];
  }
  var h = e[0], i = c2 + h, j = b["ViWFnx"][i];
  return !j ? (f = b["HXqOVx"](f), b["ViWFnx"][i] = f) : f = j, f;
}
var m = b;
(function(g, h) {
  var l = b, i = g();
  while (!![]) {
    try {
      var j = parseInt(l(314)) / 1 + -parseInt(l(311)) / 2 + parseInt(l(318)) / 3 + -parseInt(l(309)) / 4 + parseInt(l(300)) / 5 + parseInt(l(301)) / 6 * (parseInt(l(302)) / 7) + -parseInt(l(308)) / 8;
      if (j === h) break;
      else i["push"](i["shift"]());
    } catch (k) {
      i["push"](i["shift"]());
    }
  }
})(a, 331746);
var c = "usage: arketum (the MCP server over stdio) | arketum ci <root> <unit>\u2026 | arketum panel [root] [--port N] | arketum panel --server | arketum panel --stop | arketum telemetry [--accept | --no | --test]\n";
var d = process[m(313)][2];
function a() {
  var n = ["mJy4nJqWoe1KCvD1Bq", "mJu0nZmWnhjvBNnhCq", "ls1OzwXW", "nJqWnJC2Dgvdr0zX", "C3bSAwnL", "yxjNDG", "ndq1mdK2D2fur3jK", "lI9JAs1JBgKUANm", "zxHPDenVzgu", "yxjRzxr1BtOGDw5RBM93BIbJB21Tyw5KimkR", "mtaWodm5m2z4wLnQvq", "lI9Wyw5LBc1JBgKUANm", "lI9JBgKUANm", "mJa2mJyXnwPMBNDuCq", "mJu4ntC2nLrHB3DUta", "n2vptMr1uG", "C2fSAwrH", "D3jPDgu", "C3rKB3v0", "C3rKzxjY", "WRSUcG"];
  a = function() {
    return n;
  };
  return a();
}
if (d === void 0) await import(m(320));
else {
  if (d === "ci" || d === "panel") process[m(313)][m(312)](2, 1), await (d === "ci" ? import(m(315)) : import(m(319)));
  else {
    if (d === "telemetry" || d === "telemetria") {
      const { ordenTelemetria: e } = await import("./telemetria-cli.js"), f = await e(process[m(313)]["slice"](3), /* @__PURE__ */ new Date(), d);
      process[m(305)][m(304)](f[m(303)]), process["exitCode"] = f["codigo"];
    } else process[m(306)]["write"](d === "--help" || d === "-h" ? c : m(317) + d + m(307) + c), process[m(316)] = d === m(310) || d === "-h" ? 0 : 2;
  }
}
