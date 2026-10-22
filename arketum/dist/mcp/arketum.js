#!/usr/bin/env node
import { createRequire as __crearRequire } from 'node:module'; const require = __crearRequire(import.meta.url);

// arketum/dist/mcp/arketum.js
var m = b;
function b(c2, d2) {
  c2 = c2 - 309;
  var e = a();
  var f = e[c2];
  if (b["RmESWC"] === void 0) {
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
    b["UEQXyv"] = g, b["yWmvmX"] = {}, b["RmESWC"] = !![];
  }
  var h = e[0], i = c2 + h, j = b["yWmvmX"][i];
  return !j ? (f = b["UEQXyv"](f), b["yWmvmX"][i] = f) : f = j, f;
}
(function(g, h) {
  var l = b, i = g();
  while (!![]) {
    try {
      var j = parseInt(l(313)) / 1 + parseInt(l(328)) / 2 + -parseInt(l(320)) / 3 * (parseInt(l(312)) / 4) + -parseInt(l(327)) / 5 * (parseInt(l(317)) / 6) + -parseInt(l(324)) / 7 * (-parseInt(l(315)) / 8) + -parseInt(l(309)) / 9 + -parseInt(l(321)) / 10 * (-parseInt(l(326)) / 11);
      if (j === h) break;
      else i["push"](i["shift"]());
    } catch (k) {
      i["push"](i["shift"]());
    }
  }
})(a, 519285);
var c = "uso: arketum (el servidor MCP por stdio) | arketum ci <ra\xEDz> <unidad>\u2026 | arketum panel [ra\xEDz] [--puerto N] | arketum panel --servidor | arketum panel --detener | arketum telemetria [--acepto | --no | --probar]\n";
var d = process[m(319)][2];
if (d === void 0) await import(m(316));
else {
  if (d === "ci" || d === m(310)) process[m(319)][m(318)](2, 1), await (d === "ci" ? import("./ci-cli.js") : import(m(314)));
  else {
    if (d === "telemetria") {
      const { ordenTelemetria: e } = await import("./telemetria-cli.js"), f = await e(process[m(319)][m(323)](3));
      process["stdout"]["write"](f[m(322)]), process["exitCode"] = f["codigo"];
    } else process[m(311)]["write"](d === m(329) || d === "-h" ? c : "arketum: no conozco \xAB" + d + "\xBB.\n" + c), process[m(325)] = d === m(329) || d === "-h" ? 0 : 2;
  }
}
function a() {
  var n = ["zxHPDenVzgu", "nJy3nteXowfWtM5btG", "mtyXmtu1A3HKvujt", "mJuXmJG0DxLAt3ru", "ls1OzwXW", "ode3otC0ovnQEgXvzq", "CgfUzwW", "C3rKzxjY", "ogTerMrQwG", "mJe2nJm4r3v4r1vz", "lI9Wyw5LBc1JBgKUANm", "ogrnyMvmvq", "lI9JBgKUANm", "ndj5sMn1vMe", "C3bSAwnL", "yxjNDG", "mti4ndK1muLQCxzxDG", "mJbJCfzQqxC", "C2fSAwrH", "C2XPy2u", "nJy4mtiXm2TAwgHivW"];
  a = function() {
    return n;
  };
  return a();
}
