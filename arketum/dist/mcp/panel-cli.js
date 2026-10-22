#!/usr/bin/env node
import { createRequire as __crearRequire } from 'node:module'; const require = __crearRequire(import.meta.url);
import {
  cG,
  cK,
  cU,
  cz,
  dE,
  dJ,
  eD,
  eE,
  g,
  l,
  p,
  r,
  t,
  u,
  w,
  x,
  z
} from "./comun-YS3KNELU.js";
import {
  B9,
  Bb,
  lb,
  mj,
  tg,
  th,
  ti,
  vO,
  xU,
  yN,
  yP,
  yr,
  zd,
  zr,
  zs,
  zt,
  zu
} from "./comun-DDWB6OEM.js";

// arketum/dist/mcp/panel-cli.js
import { spawn } from "node:child_process";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";
import { createServer } from "node:http";
var ab = b;
(function(p2, q) {
  const a1 = b, r2 = p2();
  while (!![]) {
    try {
      const s = -parseInt(a1(301)) / 1 + parseInt(a1(324)) / 2 + parseInt(a1(296)) / 3 + parseInt(a1(246)) / 4 + parseInt(a1(351)) / 5 + parseInt(a1(274)) / 6 + parseInt(a1(303)) / 7 * (-parseInt(a1(334)) / 8);
      if (s === q) break;
      else r2["push"](r2["shift"]());
    } catch (t2) {
      r2["push"](r2["shift"]());
    }
  }
})(a, 901159);
function b(c2, d2) {
  c2 = c2 - 242;
  const e2 = a();
  let f2 = e2[c2];
  if (b["UODQkn"] === void 0) {
    var g3 = function(l3) {
      const m2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let n2 = "", o2 = "";
      for (let p2 = 0, q, r2, s = 0; r2 = l3["charAt"](s++); ~r2 && (q = p2 % 4 ? q * 64 + r2 : r2, p2++ % 4) ? n2 += String["fromCharCode"](255 & q >> (-2 * p2 & 6)) : 0) {
        r2 = m2["indexOf"](r2);
      }
      for (let t2 = 0, u2 = n2["length"]; t2 < u2; t2++) {
        o2 += "%" + ("00" + n2["charCodeAt"](t2)["toString"](16))["slice"](-2);
      }
      return decodeURIComponent(o2);
    };
    b["BOHaPf"] = g3, b["CMABcH"] = {}, b["UODQkn"] = !![];
  }
  const h2 = e2[0], i2 = c2 + h2, j2 = b["CMABcH"][i2];
  return !j2 ? (f2 = b["BOHaPf"](f2), b["CMABcH"][i2] = f2) : f2 = j2, f2;
}
var c = 64 * 1024;
var d = 4e3;
function e(p2) {
  return new Promise((q, r2) => {
    const a3 = b;
    let s = "";
    p2["setEncoding"]("utf8"), p2["on"]("data", (t2) => {
      const a2 = b;
      s += t2, s[a2(268)] > c && (p2["removeAllListeners"]("data"), r2(new Error("demasiado grande")));
    }), p2["on"](a3(310), () => q(s)), p2["on"]("error", r2);
  });
}
var f = (p2, q, r2) => {
  const a4 = b;
  p2[a4(327)](q, { "content-type": "application/json; charset=utf-8", "cache-control": a4(243) }), p2[a4(310)](JSON["stringify"](r2));
};
function g2(p2) {
  const a5 = b;
  if (typeof p2 !== a5(244) || p2 === null) return void 0;
  const q = p2, s = (z2) => typeof q[z2] === "string" && q[z2]["trim"]() !== "" ? q[z2]["trim"]() : void 0, t2 = s("unidad"), u2 = s(a5(290)), w2 = s(a5(314));
  if (t2 === void 0 || u2 === void 0) return void 0;
  const y = w2 === void 0 ? {} : { "comentario": w2 };
  if (q[a5(309)] === a5(279)) {
    const z2 = s(a5(279)), A = q["eleccion"];
    if (z2 === void 0 || !tg[a5(270)](A)) return void 0;
    const B = A;
    if (ti[a5(270)](B) && w2 === void 0) return void 0;
    return { "tipo": "gate", "unidad": t2, "gate": z2, "huella": u2, "eleccion": B, ...y };
  }
  if (q[a5(309)] === "confirmacion") {
    const C = q["veredictos"];
    if (typeof C !== "object" || C === null) return void 0;
    const D = {};
    for (const [E, F] of Object[a5(316)](C)) {
      if (F !== "si" && F !== "no" && F !== "despues") return void 0;
      D[E] = F;
    }
    if (Object["keys"](D)[a5(268)] === 0 || Object[a5(307)](D)["includes"]("no") && w2 === void 0) return void 0;
    return { "tipo": "confirmacion", "unidad": t2, "huella": u2, "veredictos": D, ...y };
  }
  if (q[a5(309)] === "delegacion") {
    const G = s("hasta"), H = q[a5(345)];
    if (G === void 0 || H !== a5(337) && H !== "revocar") return void 0;
    return { "tipo": "delegacion", "unidad": t2, "huella": u2, "hasta": G, "eleccion": H, ...y };
  }
  if (q["tipo"] === a5(291)) {
    const I = s("requisito");
    if (I === void 0 || typeof q[a5(293)] !== "boolean") return void 0;
    return { "tipo": a5(291), "unidad": t2, "requisito": I, "huella": u2, "confirma": q[a5(293)], ...y };
  }
  return void 0;
}
async function h(p2) {
  const a6 = b, q = a6(329) + randomBytes(4)["toString"]("hex");
  let r2 = 0;
  const s = createServer((t2, u2) => {
    const a8 = a6;
    void (async () => {
      const a7 = b, v = (t2[a7(335)]["host"] ?? "")[a7(284)]();
      if (v !== "127.0.0.1:" + r2 && v !== "localhost:" + r2) return f(u2, 403, { "error": "solo desde esta m\xE1quina" });
      const w2 = new URL(t2[a7(271)] ?? "/", a7(355) + v);
      if (t2["method"] === a7(340) && w2["pathname"] === "/") {
        u2[a7(327)](200, { "content-type": "text/html; charset=utf-8", "cache-control": a7(243), "content-security-policy": a7(328) }), u2[a7(310)](i);
        return;
      }
      if (t2[a7(285)] === a7(340) && w2[a7(294)] === a7(299)) {
        const C = { "arketum": "panel", "huella": p2["huella"] ?? "", "pid": process["pid"] };
        return f(u2, 200, C);
      }
      if (t2["method"] === a7(261) && w2["pathname"] === "/detener") {
        const D = p2[a7(330)] === void 0 ? void 0 : await p2["detener"]["clave"]();
        if (p2["detener"] === void 0 || D === void 0 || D === "" || t2[a7(335)]["x-arketum-clave"] !== D) return f(u2, 401, { "error": a7(266) });
        f(u2, 200, { "detenido": !![] }), setImmediate(p2[a7(330)]["alDetener"]);
        return;
      }
      const x2 = typeof t2[a7(335)]["x-arketum-token"] === a7(313) ? t2["headers"][a7(251)] : void 0, y = x2 ?? (t2["method"] === "GET" ? w2[a7(349)][a7(319)]("t") ?? void 0 : void 0), z2 = y === void 0 || y === "" ? void 0 : await p2["raizDe"](y);
      if (z2 === void 0) return f(u2, 401, { "error": a7(264) });
      const A = await vO(z2);
      if (A !== void 0) return f(u2, 409, { "error": A });
      const B = await yP(z2);
      if (B === null) return f(u2, 404, { "error": "aqu\xED no hay un proyecto de Arketum (`.arketum/proyecto.yaml`)" });
      if (a7(302) in B) return f(u2, 500, { "error": B["negativa"] });
      if (t2["method"] === a7(340) && w2[a7(294)] === a7(348)) {
        const [E, F, G, H, I] = await yr(() => Promise["all"]([dE(z2, B[a7(289)], (/* @__PURE__ */ new Date())[a7(242)]()), eD(z2, B["manifiesto"]), dJ(z2), cK(z2, B[a7(289)]), cU(z2, B[a7(289)])])), J = zt(await zr()), K = zu();
        return f(u2, 200, { "estado": E, ...F, "historial": G, "integraciones": { "cuentas": H[a7(339)][a7(292)], "lineas": H[a7(350)] }, "prd": I, ...J === void 0 ? {} : { "identidad": J }, ...K === void 0 ? {} : { "propuesta": K } });
      }
      if (t2["method"] === a7(261) && w2[a7(294)] === "/api/identidad") {
        let L;
        try {
          L = JSON[a7(252)](await e(t2));
        } catch {
          return f(u2, 400, { "error": "no es JSON" });
        }
        const M = typeof L["soy"] === a7(313) ? L[a7(275)]["trim"]()[a7(321)](0, 200) : "";
        if (M === "") return f(u2, 400, { "error": a7(247) });
        const N = M["includes"]("@") && !/\s/["test"](M) ? { "correo": M } : { "nombre": M };
        return await zs(N), f(u2, 200, { "identidad": zt(N) });
      }
      if (t2["method"] === a7(261) && w2[a7(294)] === "/api/telemetria") {
        let O;
        try {
          O = JSON["parse"](await e(t2));
        } catch {
          return f(u2, 400, { "error": a7(267) });
        }
        if (typeof O["acepta"] !== a7(254)) return f(u2, 400, { "error": a7(322) + mj["si"] + a7(343) + mj["no"] + "\xBB" });
        const P = typeof O["comentario"] === "string" ? O[a7(314)][a7(336)]()[a7(321)](0, 2e3) : "";
        if (await B9() === void 0) return f(u2, 200, { "linea": "  \xB7 telemetr\xEDa: ya estaba decidida (o est\xE1 apagada en esta m\xE1quina); no se registra." });
        const Q = await Bb(O["acepta"], P === "" ? void 0 : P, zt(await zr()), a7(258));
        return f(u2, 200, { "linea": Q });
      }
      if (t2["method"] === "POST" && w2[a7(294)] === a7(283)) {
        let R;
        try {
          R = JSON["parse"](await e(t2));
        } catch {
          return f(u2, 400, { "error": a7(267) });
        }
        const S = typeof R["id"] === "string" ? R["id"][a7(336)]() : "";
        if (R[a7(342)] !== void 0) {
          const W = typeof R[a7(342)] === a7(313) ? R["respuesta"][a7(336)]() : "";
          if (S === "" || W === "") return f(u2, 400, { "error": "escribe tu respuesta" });
          if (W[a7(268)] > d) return f(u2, 400, { "error": "la respuesta es demasiado larga: " + W["length"] + " de " + d + a7(295) });
          const X = await cz(z2, q, S, W, zt(await zr()));
          return f(u2, "error" in X ? 400 : 200, X);
        }
        const T = typeof R["motivo"] === "string" ? R[a7(304)]["trim"]()[a7(321)](0, 2e3) : "";
        if (S === "" || T === "") return f(u2, 400, { "error": a7(255) });
        const U = zt(await zr());
        if (U === void 0) return f(u2, 400, { "error": a7(272) });
        const V = await cG(z2, q, S, T, U);
        return f(u2, "error" in V ? 400 : 200, V);
      }
      if (t2["method"] === "POST" && w2["pathname"] === a7(308)) {
        let Y;
        try {
          Y = JSON[a7(252)](await e(t2));
        } catch (a0) {
          return f(u2, a0["message"] === "demasiado grande" ? 413 : 400, { "error": a0[a7(273)] === a7(278) ? "la respuesta es demasiado grande" : a7(267) });
        }
        const Z = g2(Y);
        if (Z === void 0) return f(u2, 400, { "error": "la respuesta no est\xE1 completa (con \xABajustar\xBB o \xABrechazar\xBB, y con un \xABno\xBB, hace falta el comentario)" });
        return f(u2, 200, await eE(z2, B[a7(289)], q, Z));
      }
      f(u2, 404, { "error": "no existe" });
    })()[a8(277)]((v) => f(u2, 500, { "error": v instanceof Error ? v[a8(273)] : String(v) }));
  });
  return await new Promise((t2, u2) => {
    const a9 = a6;
    s["once"]("error", u2), s[a9(297)](p2[a9(256)], "127.0.0.1", () => t2());
  }), r2 = s[a6(311)]()[a6(269)], { "puerto": r2, "cerrar": () => new Promise((t2) => {
    const aa = a6;
    s["close"](() => t2()), s[aa(249)]();
  }) };
}
var i = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Arketum \xB7 panel</title>
<style>
:root { --fondo:#f7f7f5; --carta:#fff; --texto:#1d1d1b; --suave:#6b6b66; --borde:#e2e2dc; --acento:#2f5d8a; --ok:#2e7d4f; --aviso:#a5660b; --mal:#a33a3a; }
@media (prefers-color-scheme: dark) { :root { --fondo:#161615; --carta:#20201e; --texto:#ecece8; --suave:#a3a39c; --borde:#34342f; --acento:#7fb0e0; --ok:#6cc093; --aviso:#e0a64a; --mal:#e07a7a; } }
* { box-sizing: border-box; }
body { margin:0; background:var(--fondo); color:var(--texto); font:15px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
header { padding:16px 20px 0; max-width:960px; margin:0 auto; }
h1 { font-size:20px; margin:0 0 4px; }
.sub { color:var(--suave); font-size:13px; }
nav { display:flex; gap:8px; margin:14px 0 0; border-bottom:1px solid var(--borde); }
nav button { background:none; border:0; border-bottom:2px solid transparent; padding:8px 10px; color:var(--suave); font:inherit; cursor:pointer; }
nav button.activa { color:var(--texto); border-bottom-color:var(--acento); }
main { max-width:960px; margin:0 auto; padding:16px 20px 40px; }
.carta { background:var(--carta); border:1px solid var(--borde); border-radius:10px; padding:14px 16px; margin:0 0 12px; }
.cifras { display:flex; flex-wrap:wrap; gap:12px; }
.cifra { flex:1 1 140px; background:var(--carta); border:1px solid var(--borde); border-radius:10px; padding:12px 14px; }
.cifra b { display:block; font-size:24px; }
.cifra span { color:var(--suave); font-size:13px; }
.avance b { font-size:40px; }
h2 { font-size:15px; margin:18px 0 8px; }
.quien { font-weight:600; }
.dato { color:var(--suave); font-size:13px; }
pre { white-space:pre-wrap; background:var(--fondo); border:1px solid var(--borde); border-radius:8px; padding:10px; font:13px/1.45 ui-monospace, Menlo, monospace; margin:8px 0; }
.opciones { display:flex; flex-wrap:wrap; gap:8px; margin:8px 0; }
.opciones button { font:inherit; padding:6px 12px; border-radius:8px; border:1px solid var(--borde); background:var(--carta); color:var(--texto); cursor:pointer; }
.opciones button.aprobar { border-color:var(--ok); color:var(--ok); }
.opciones button.rechazar { border-color:var(--mal); color:var(--mal); }
textarea { width:100%; min-height:56px; font:inherit; padding:8px; border-radius:8px; border:1px solid var(--borde); background:var(--carta); color:var(--texto); }
.etiqueta { display:inline-block; font-size:12px; padding:1px 8px; border-radius:999px; border:1px solid var(--borde); color:var(--suave); margin-left:6px; }
.resultado { margin-top:6px; font-size:13px; }
table { width:100%; border-collapse:collapse; font-size:13px; }
th, td { text-align:left; padding:6px 8px; border-bottom:1px solid var(--borde); vertical-align:top; }
th { color:var(--suave); font-weight:500; }
.vacio { color:var(--suave); }
.error { color:var(--mal); }
.cambio { color:var(--aviso); margin:0 0 6px; }
@media (max-width: 600px) { header, main { padding-left:16px; padding-right:16px; } table { font-size:12px; } }
</style>
</head>
<body>
<header>
  <h1 id="titulo">Arketum</h1>
  <div class="sub" id="sub">Cargando\u2026</div>
  <nav>
    <button data-vista="estado" class="activa">Estado</button>
    <button data-vista="pendientes">Pendientes</button>
    <button data-vista="historial">Historial</button>
    <button data-vista="integraciones">Integraciones</button>
    <button data-vista="prd">PRD</button>
  </nav>
</header>
<main id="main"></main>
<script>
var token = new URLSearchParams(location.search).get('t') || '';
var vista = 'estado';
// Los nombres de las opciones de un gate, los mismos de la tanda y el chat (td-f02).
var NOMBRES = ` + JSON[ab(338)](th) + ";\n// Las dos respuestas de la telemetr\xEDa, las mismas de la tanda (tl-f01).\nvar TELEMETRIA = " + JSON[ab(338)](mj) + ab(276) + JSON["stringify"](lb) + `;
function pintarEstado() {
  // En grande, el avance (pn-f01); luego las cuentas.
  var e = datos.estado, h = cajaDeIdentidad() + '<div class="cifras avance">';
  h += '<div class="cifra"><b>' + e.progreso.construidas + ' / ' + e.progreso.funcionales + '</b><span>funcionalidades construidas</span></div>';
  h += '<div class="cifra"><b>' + e.progreso.confirmadas + '</b><span>confirmadas por ti</span></div></div><div class="cifras">';
  Object.keys(e.porEstado).forEach(function (k) { h += '<div class="cifra"><b>' + e.porEstado[k] + '</b><span>' + esc(k) + '</span></div>'; });
  Object.keys(FRENTES).forEach(function (k) { if (e.frentes && e.frentes[k]) h += '<div class="cifra"><b>' + e.frentes[k] + '</b><span>' + esc(FRENTES[k]) + '</span></div>'; });
  h += '</div>';
  if (e.integraciones) h += '<p class="dato">' + esc(e.integraciones) + '</p>';
  h += '<h2>Esperan tu decisi\xF3n (' + e.esperandoALaPersona.length + ')</h2>';
  h += e.esperandoALaPersona.length ? e.esperandoALaPersona.map(unidad).join('') : '<p class="vacio">Nada.</p>';
  h += '<h2>En marcha (' + e.enMarcha.length + ')</h2>';
  h += e.enMarcha.length ? e.enMarcha.map(unidad).join('') : '<p class="vacio">Nada.</p>';
  if (e.confirmacionesDeCerradas && e.confirmacionesDeCerradas.length) h += '<h2>Confirmaciones de unidades cerradas (' + e.confirmacionesDeCerradas.length + ')</h2>' + e.confirmacionesDeCerradas.map(function (c) { return '<div class="carta"><div class="quien">' + esc(c.unidad) + ' \xB7 \xBFes lo que quer\xEDas?</div>' + (c.desde ? '<div class="dato">Desde ' + esc(c.desde.slice(0, 10)) + ' (' + dias(c.dias) + '); resp\xF3ndela en Pendientes</div>' : '') + '</div>'; }).join('');
  // La pregunta de la telemetr\xEDa, de la instalaci\xF3n (tl-f01): se responde en Pendientes.
  if (e.telemetria) h += '<h2>De esta instalaci\xF3n</h2><div class="carta"><div class="quien">\xBFAceptas enviar un resumen an\xF3nimo de uso?</div><div class="dato">Sin decidir' + (e.telemetria.desde ? ' desde ' + esc(e.telemetria.desde.slice(0, 10)) + ' (' + dias(e.telemetria.dias) + ')' : '') + '; no bloquea nada; resp\xF3ndela en Pendientes</div></div>';
  if (e.gruposDeTemas && e.gruposDeTemas.length) h += '<h2>Para conversar (' + e.temas.length + ')</h2>' + e.gruposDeTemas.map(function (g) { return '<div class="carta"><div class="quien">' + esc(g.titulo) + '</div><div class="dato">' + esc(g.resumen) + '; no bloquean nada; resp\xF3ndelos en Pendientes</div></div>'; }).join('');
  else if (e.temas && e.temas.length) h += '<h2>Para conversar (' + e.temas.length + ')</h2>' + e.temas.map(function (t) { return '<div class="carta"><div class="quien">' + esc(t.titulo) + (t.de === 'agente' ? '<span class="etiqueta">lo propone el agente</span>' : t.de === 'arketum' ? '<span class="etiqueta">lo calcula Arketum' + (t.deDeducido ? '; deducido' : '') + '</span>' : '') + '</div><div class="dato">Desde ' + esc(t.desde.slice(0, 10)) + ' (' + dias(t.dias) + '); no bloquea nada' + (t.conRespuesta ? '; con respuesta' : '') + '</div></div>'; }).join('');
  if (e.solapes && e.solapes.length) h += '<h2>Tocan lo mismo</h2>' + e.solapes.map(function (s) { return '<div class="carta">' + esc(s.artefacto) + ': ' + s.unidades.map(esc).join(', ') + ' <span class="dato">(se avisa, no se bloquea)</span></div>'; }).join('');
  if (e.conflictos.length) h += '<h2>Conflictos</h2>' + e.conflictos.map(function (c) { return '<div class="carta error">' + esc(c) + '</div>'; }).join('');
  if (e.unidadesIlegibles.length || e.ilegibles.length) h += '<h2>No se pueden leer</h2>' + e.unidadesIlegibles.map(function (u) { return '<div class="carta error">' + esc(u.id) + ': ' + esc(u.motivo) + '</div>'; }).join('') + e.ilegibles.map(function (x) { return '<div class="carta error">' + esc(x.file) + ': ' + esc(x.problem) + '</div>'; }).join('');
  return h;
}
function pintarPendientes() {
  var h = cajaDeIdentidad();
  if (!datos.pendientes.length) h += '<p class="vacio">No hay nada pendiente de ti.</p>';
  datos.pendientes.forEach(function (p, i) {
    // La clave, estable entre refrescos; y lo pendiente tal como se pint\xF3, para enviar lo que la persona vio.
    var k = p.tipo === 'bloqueo' ? 'bloqueo:' + p.unidad : p.tipo === 'gate_en_el_chat' ? 'chat:' + p.unidad + ':' + p.gate : p.tipo === 'pregunta' ? 'pregunta:' + p.unidad : p.tipo === 'gate' ? 'gate:' + p.unidad + ':' + p.gate : p.tipo === 'confirmacion' ? 'confirmacion:' + p.unidad : p.tipo === 'delegacion' ? 'delegacion:' + p.unidad : p.tipo === 'telemetria' ? 'telemetria' : 'declaracion:' + p.unidad + ':' + p.requisito;
    h += '<div class="carta" data-k="' + esc(k) + '" data-p="' + esc(JSON.stringify(p)) + '">';
    if (p.tipo === 'bloqueo') {
      // Una bloqueada espera a la persona, pero no se responde aqu\xED: sin comentario ni botones, se desbloquea con el agente (rp-f01).
      h += '<div class="quien">' + esc(p.unidad) + ' \xB7 bloqueada</div>';
      h += '<div class="dato">Esperando desde ' + esc(p.desde.slice(0, 10)) + '</div><pre>' + esc(p.motivo) + '</pre>';
      if (p.enmienda) h += '<div class="dato">La bloquea la definici\xF3n nueva de ' + esc(p.enmienda) + ', que la enmienda.</div>';
      h += '<div class="dato">Se desbloquea con el agente: cu\xE9ntale c\xF3mo se resuelve (<code>action: desbloquear</code>).</div></div>';
      return;
    }
    if (p.tipo === 'pregunta') {
      // Una pregunta suelta sin respuesta: se nombra, sin controles; se responde en el chat (ec-f04).
      h += '<div class="quien">' + esc(p.unidad) + ' \xB7 pregunta sin respuesta</div>';
      if (p.desde) h += '<div class="dato">Esperando desde ' + esc(p.desde.slice(0, 10)) + '</div>';
      h += '<pre>' + esc(p.pregunta) + '</pre><div class="dato">Se responde en el chat con el agente.</div></div>';
      return;
    }
    if (p.tipo === 'gate_en_el_chat') {
      // El gate de un requisito o de una contradicci\xF3n: se nombra, sin controles; se decide en el chat (ec-f07, rp-f01).
      h += '<div class="quien">' + esc(p.unidad) + ' \xB7 ' + esc(p.gate) + '</div>';
      if (p.desde) h += '<div class="dato">Esperando desde ' + esc(p.desde.slice(0, 10)) + '</div>';
      h += '<div class="dato">Lleva opciones propias: se decide en el chat con el agente (o en el formulario de tu cliente).</div></div>';
      return;
    }
    if (p.tipo === 'gate') {
      h += '<div class="quien">' + esc(p.unidad) + ' \xB7 ' + esc(p.gate) + '<span class="etiqueta">' + esc(p.clase === 'tecnica' ? 't\xE9cnica' : p.clase) + '</span></div>';
      if (p.desde) h += '<div class="dato">Esperando desde ' + esc(p.desde.slice(0, 10)) + '</div>';
      if (p.explicacion) h += '<div class="dato">Pediste una explicaci\xF3n el ' + esc(p.explicacion.momento.slice(0, 10)) + ': te la da el agente.</div>';
      h += '<pre>' + esc(p.resumen) + '</pre><textarea placeholder="Comentario (obligatorio para ajustar o rechazar)"></textarea><div class="opciones">';
      p.opciones.concat(['no_entiendo']).forEach(function (o) { h += '<button class="' + o + '" data-eleccion="' + o + '">' + esc((NOMBRES[o] || o) + (o === 'rechazar' && p.alRechazar ? ' (' + p.alRechazar + ')' : '')) + '</button>'; });
      h += '</div>';
    } else if (p.tipo === 'confirmacion') {
      h += '<div class="quien">' + esc(p.unidad) + ' \xB7 \xBFes lo que quer\xEDas?</div>';
      if (p.desde) h += '<div class="dato">Esperando desde ' + esc(p.desde.slice(0, 10)) + '</div>';
      p.funcionales.forEach(function (f) {
        h += '<div>' + esc(f.titulo) + ' <span class="dato">' + esc(f.id) + '</span><div class="opciones">';
        ['si', 'no', 'despues'].forEach(function (v) { h += '<label><input type="radio" name="c' + i + '-' + esc(f.id) + '" value="' + v + '" data-f="' + esc(f.id) + '"> ' + (v === 'si' ? 's\xED' : v === 'despues' ? 'despu\xE9s' : 'no') + '</label>'; });
        h += '</div></div>';
      });
      h += '<textarea placeholder="Si alguno es \xABno\xBB: qu\xE9 falla"></textarea><div class="opciones"><button data-confirmar="1">Enviar</button></div>';
    } else if (p.tipo === 'telemetria') {
      // De la instalaci\xF3n, no de este proyecto (tl-f01): lo que elige es su cita, con su comentario si lo escribe.
      h += '<div class="quien">\xBFAceptas enviar un resumen an\xF3nimo de uso?<span class="etiqueta">de esta instalaci\xF3n</span></div>' + (p.desde ? '<div class="dato">Esperando desde ' + esc(p.desde.slice(0, 10)) + '</div>' : '');
      h += '<pre>' + esc(p.pregunta) + '</pre><textarea placeholder="Comentario (opcional)"></textarea>';
      h += '<div class="opciones"><button class="aprobar" data-telemetria="si">' + esc(TELEMETRIA.si) + '</button><button class="rechazar" data-telemetria="no">' + esc(TELEMETRIA.no) + '</button></div>';
    } else if (p.tipo === 'delegacion') {
      h += '<div class="quien">Lo aprobado por tu delegaci\xF3n<span class="etiqueta">proceso</span></div><div class="dato">Sin tope, hasta que la revoques; llega cada ' + esc(String(p.cada)) + ' unidades. Si no respondes, sigue.</div>';
      h += '<pre>' + p.aprobados.map(function (a) { return esc(a.unidad) + ' \xB7 gate \xAB' + esc(a.gate) + '\xBB \xB7 ' + esc(a.momento.slice(0, 16).replace('T', ' ')); }).join('\\n') + '</pre><textarea placeholder="Comentario"></textarea>';
      h += '<div class="opciones"><button class="aprobar" data-delegacion="sigue">sigue</button><button class="rechazar" data-delegacion="revocar">revocar</button></div>';
    } else {
      h += '<div class="quien">' + esc(p.unidad) + ' \xB7 confirmar una declaraci\xF3n de \xAB' + esc(p.requisito) + '\xBB</div>' + (p.desde ? '<div class="dato">Esperando desde ' + esc(p.desde.slice(0, 10)) + '</div>' : '') + '<pre>' + esc(p.quien) + ': \xAB' + esc(p.contenido) + '\xBB</pre><textarea placeholder="Comentario"></textarea>';
      h += '<div class="opciones"><button class="aprobar" data-confirma="1">confirmo</button><button class="rechazar" data-confirma="0">no confirmo</button></div>';
    }
    h += '<div class="resultado"></div></div>';
  });
  if (datos.temas && datos.temas.length) {
    h += '<h2>Para conversar (' + datos.temas.length + ')</h2><p class="dato">No bloquean nada. Se cierran cuando se convierten en una unidad de trabajo (con el agente) o cuando descartas la idea.</p>';
    // Agrupados igual que en la tanda (funcionalidad-temas-agrupados): por origen y, dentro, por intenci\xF3n y prioridad.
    var porId = {};
    datos.temas.forEach(function (t) { porId[t.id] = t; });
    var carta = function (t, intencion) {
      var h = '';
      h += '<div class="carta" data-k="tema:' + esc(t.id) + '" data-tema="' + esc(t.id) + '"><div class="quien">' + esc(t.titulo) + (t.de === 'agente' ? '<span class="etiqueta">lo propone el agente</span>' : t.de === 'arketum' ? '<span class="etiqueta">lo calcula Arketum' + (t.deDeducido ? '; deducido' : '') + '</span>' : '') + '</div><div class="dato">Desde ' + esc(t.desde.slice(0, 10)) + '</div>';
      (intencion || []).forEach(function (x) { h += '<div class="dato">' + esc(x) + '</div>'; });
      if (t.palabras) h += '<pre>' + esc(t.palabras) + '</pre>';
      if (t.contexto) h += '<div>' + esc(t.contexto) + '</div>';
      if (t.preguntas && t.preguntas.length) h += '<ul>' + t.preguntas.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ul>';
      if (t.propuesta) h += '<div class="dato">Propuesta: una unidad del carril \xAB' + esc(t.propuesta.carril) + '\xBB \u2014 ' + esc(t.propuesta.objetivo) + '</div>' + (t.propuesta.opciones && t.propuesta.opciones.length ? '<ol>' + t.propuesta.opciones.map(function (o) { return '<li>' + esc(o.camino) + (o.carril ? ' \u2192 \xAB' + esc(o.carril) + '\xBB' : '') + '</li>'; }).join('') + '</ol><div class="dato">Elige el camino con el agente: abre la unidad desde este tema.</div>' : '');
      (t.respuestas || []).forEach(function (r) { h += '<div class="dato">Respondiste (' + esc(r.momento.slice(0, 10)) + (r.canal === 'tanda' ? '' : ', por el ' + esc(r.canal)) + '):</div><pre>' + esc(r.palabras) + '</pre>'; });
      h += '<textarea class="respuesta" placeholder="Tu respuesta (no cierra el tema)"></textarea><div class="opciones"><button class="aprobar" data-responder="1">responder</button></div>';
      h += '<textarea class="motivo" placeholder="Por qu\xE9 lo descartas (obligatorio para descartar)"></textarea><div class="opciones"><button class="rechazar" data-descartar="1">descartar la idea</button></div><div class="resultado"></div></div>';
      return h;
    };
    (datos.grupos || [{ titulo: 'Temas', resumen: '', temas: datos.temas.map(function (t) { return { id: t.id, intencion: [] }; }) }]).forEach(function (g, i) {
      h += '<details data-lista data-k="grupo:' + esc(g.id || g.titulo) + '"' + (i === 0 ? ' open' : '') + '><summary><b>' + esc(g.titulo) + '</b> \xB7 ' + esc(g.resumen) + '</summary>';
      g.temas.forEach(function (x) { if (porId[x.id]) h += carta(porId[x.id], x.intencion); });
      h += '</details>';
    });
  }
  if (datos.fuera.length) h += '<h2>Se deciden en el chat</h2>' + datos.fuera.map(function (f) { return '<div class="carta dato">' + esc(f) + '</div>'; }).join('');
  if (datos.hechos.length) h += '<h2>Decidido por delegaci\xF3n</h2>' + datos.hechos.map(function (f) { return '<div class="carta dato">' + esc(f) + '</div>'; }).join('');
  return h;
}
function pintarHistorial() {
  if (!datos.historial.length) return '<p class="vacio">Todav\xEDa no hay decisiones.</p>';
  var h = '<table><thead><tr><th>Cu\xE1ndo</th><th>Unidad</th><th>Tema</th><th>Resultado</th><th>Canal</th></tr></thead><tbody>';
  datos.historial.forEach(function (d) { h += '<tr><td>' + esc(d.at ? d.at.slice(0, 16).replace('T', ' ') : '\u2014') + '</td><td>' + esc(d.unidad) + '</td><td>' + esc(d.tema) + '</td><td>' + esc(d.resultado) + (d.nota ? '<div class="dato">' + esc(d.nota) + '</div>' : '') + '</td><td>' + esc(d.canal) + (d.motivo ? ' <span class="dato">(' + esc(d.motivo) + ')</span>' : '') + (d.quien ? '<div class="dato">' + esc(d.quien) + '</div>' : '') + '</td></tr>'; });
  return h + '</tbody></table>';
}
function pintarIntegraciones() {
  var m = datos.integraciones;
  if (!m || !m.cuentas.boundaries) return '<p class="vacio">Todav\xEDa no hay boundaries declarados: se declaran al cerrar cada unidad.</p>';
  var h = '';
  m.lineas.forEach(function (l) {
    if (l === '') return;
    if (/^ /.test(l) || !/:$/.test(l) && !/^MAPA/.test(l)) h += '<div class="dato">' + esc(l.trim()) + '</div>';
    else h += '<h2>' + esc(l) + '</h2>';
  });
  return h;
}
function pintarPrd() {
  var p = datos.prd;
  if (!p || !p.lineas.length) return '<p class="vacio">Todav\xEDa no hay requisitos vigentes: los trae el PRD de una unidad.</p>';
  var h = '<p class="dato">' + esc(p.cabecera) + '</p>';
  p.lineas.forEach(function (l) {
    if (/^\xAB/.test(l)) h += '<h2>' + esc(l) + '</h2>';
    else h += '<div class="dato">' + esc(l.trim()) + '</div>';
  });
  return h;
}
function pintar() {
  if (!datos) return;
  document.getElementById('titulo').textContent = 'Arketum \xB7 ' + datos.estado.nombre;
  document.getElementById('sub').textContent = datos.estado.lineaDeProgreso + ' \xB7 se actualiza solo';
  var m = document.getElementById('main');
  var html = vista === 'estado' ? pintarEstado() : vista === 'pendientes' ? pintarPendientes() : vista === 'integraciones' ? pintarIntegraciones() : vista === 'prd' ? pintarPrd() : pintarHistorial();
  // Otra vista: se pinta de nuevo y vuelven sus borradores. La misma: solo lo que cambi\xF3.
  if (m.getAttribute('data-vista') !== vista) {
    m.innerHTML = '';
    m.setAttribute('data-vista', vista);
    conciliar(m, html);
    devolverBorradores(m, borradores[vista]);
  } else conciliar(m, html);
}
var cargando = false;
function cargar() {
  if (cargando || document.hidden) return;
  cargando = true;
  fetch('/api/estado', { headers: { 'x-arketum-token': token } }).then(function (r) { return r.json(); }).then(function (d) {
    cargando = false;
    if (d.error) { document.getElementById('sub').textContent = d.error; return; }
    var firma = JSON.stringify(d);
    // Con un bloque marcado, se vuelve a conciliar aunque no haya nada nuevo: quiz\xE1 la persona ya vaci\xF3 lo suyo.
    if (firma !== ultimo) { ultimo = firma; datos = d; pintar(); }
    else if (document.querySelector('#main [data-viejo]')) pintar();
  }).catch(function () { cargando = false; document.getElementById('sub').textContent = 'Sin conexi\xF3n con el panel.'; });
}
function enviar(caja, cuerpo) {
  var res = caja.querySelector('.resultado');
  res.textContent = 'Registrando\u2026';
  fetch('/api/decidir', { method: 'POST', headers: { 'content-type': 'application/json', 'x-arketum-token': token }, body: JSON.stringify(cuerpo) })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      res.textContent = d.error || d.linea;
      if (/DECISI\xD3N REGISTRADA|registrada|no lo entendi\xF3|APROBADO/.test(d.linea || '')) { caja.querySelectorAll('textarea').forEach(function (t) { t.value = ''; }); caja.querySelectorAll('input').forEach(function (x) { x.checked = false; }); }
      setTimeout(function () { ultimo = ''; cargar(); }, 800);
    })
    .catch(function () { res.textContent = 'No se pudo registrar: sin conexi\xF3n con el panel.'; });
}
document.querySelector('nav').addEventListener('click', function (ev) {
  var b = ev.target.closest('button'); if (!b) return;
  borradores[vista] = guardarBorradores(document.getElementById('main'));
  vista = b.dataset.vista;
  document.querySelectorAll('nav button').forEach(function (x) { x.classList.toggle('activa', x === b); });
  pintar();
});
document.addEventListener('visibilitychange', function () { if (!document.hidden) cargar(); });
document.getElementById('main').addEventListener('click', function (ev) {
  var b = ev.target.closest('button'); if (!b) return;
  if (b.id === 'guardarSoy') {
    fetch('/api/identidad', { method: 'POST', headers: { 'content-type': 'application/json', 'x-arketum-token': token }, body: JSON.stringify({ soy: document.getElementById('soy').value }) })
      .then(function () { ultimo = ''; cargar(); });
    return;
  }
  var caja = b.closest('.carta');
  if (b.dataset.responder) {
    var palabras = (caja.querySelector('textarea.respuesta') || {}).value || '';
    var resp = caja.querySelector('.resultado');
    if (!palabras.trim()) { resp.textContent = 'Escribe tu respuesta.'; return; }
    resp.textContent = 'Registrando\u2026';
    fetch('/api/tema', { method: 'POST', headers: { 'content-type': 'application/json', 'x-arketum-token': token }, body: JSON.stringify({ id: caja.dataset.tema, respuesta: palabras }) })
      .then(function (r) { return r.json(); })
      .then(function (d) { resp.textContent = d.error || d.linea; if (!d.error) caja.querySelector('textarea.respuesta').value = ''; setTimeout(function () { ultimo = ''; cargar(); }, 800); })
      .catch(function () { resp.textContent = 'No se pudo registrar: sin conexi\xF3n con el panel.'; });
    return;
  }
  if (b.dataset.descartar) {
    var motivo = (caja.querySelector('textarea.motivo') || {}).value || '';
    var res = caja.querySelector('.resultado');
    if (!motivo.trim()) { res.textContent = 'Escribe por qu\xE9 lo descartas.'; return; }
    res.textContent = 'Registrando\u2026';
    fetch('/api/tema', { method: 'POST', headers: { 'content-type': 'application/json', 'x-arketum-token': token }, body: JSON.stringify({ id: caja.dataset.tema, motivo: motivo }) })
      .then(function (r) { return r.json(); })
      .then(function (d) { res.textContent = d.error || d.linea; if (!d.error) caja.querySelector('textarea.motivo').value = ''; setTimeout(function () { ultimo = ''; cargar(); }, 800); })
      .catch(function () { res.textContent = 'No se pudo registrar: sin conexi\xF3n con el panel.'; });
    return;
  }
  var p = JSON.parse(caja.dataset.p);
  var comentario = (caja.querySelector('textarea') || {}).value || '';
  if (b.dataset.telemetria) {
    var rt = caja.querySelector('.resultado');
    rt.textContent = 'Registrando\u2026';
    fetch('/api/telemetria', { method: 'POST', headers: { 'content-type': 'application/json', 'x-arketum-token': token }, body: JSON.stringify({ acepta: b.dataset.telemetria === 'si', comentario: comentario }) })
      .then(function (r) { return r.json(); })
      .then(function (d) { rt.textContent = d.error || d.linea; if (!d.error) caja.querySelector('textarea').value = ''; setTimeout(function () { ultimo = ''; cargar(); }, 800); })
      .catch(function () { rt.textContent = 'No se pudo registrar: sin conexi\xF3n con el panel.'; });
    return;
  }
  if (b.dataset.eleccion) return enviar(caja, { tipo: 'gate', unidad: p.unidad, gate: p.gate, huella: p.huella, eleccion: b.dataset.eleccion, comentario: comentario });
  if (b.dataset.delegacion) return enviar(caja, { tipo: 'delegacion', unidad: p.unidad, huella: p.huella, hasta: p.hasta, eleccion: b.dataset.delegacion, comentario: comentario });
  if (b.dataset.confirma) return enviar(caja, { tipo: 'declaracion', unidad: p.unidad, requisito: p.requisito, huella: p.huella, confirma: b.dataset.confirma === '1', comentario: comentario });
  if (b.dataset.confirmar) {
    var v = {}; caja.querySelectorAll('input:checked').forEach(function (x) { v[x.dataset.f] = x.value; });
    if (Object.keys(v).length < p.funcionales.length) { caja.querySelector('.resultado').textContent = 'Responde cada uno.'; return; }
    return enviar(caja, { tipo: 'confirmacion', unidad: p.unidad, huella: p.huella, veredictos: v, comentario: comentario });
  }
});
cargar();
setInterval(cargar, 5000);
</script>
</body>
</html>
`;
var j = "uso: arketum-panel [ra\xEDz] [--puerto N] | arketum-panel --servidor | arketum-panel --detener\n";
function k() {
  const ac = ab, p2 = zd(join(yN(), ac(259), "panel.log"));
  spawn(process[ac(354)], [fileURLToPath(new URL(ac(281), import.meta.url)), ac(341)], { "detached": !![], "windowsHide": !![], "stdio": ["ignore", p2, p2], "env": process[ac(318)] })[ac(257)]();
}
async function l2() {
  const ad = ab, p2 = l(await g());
  await r();
  try {
    const q = await h({ "puerto": p2, "raizDe": t, "huella": await w(), "detener": { "clave": async () => (await g()["catch"](() => ({ "proyectos": [] })))["clave"], "alDetener": () => void q[ad(315)]()[ad(344)](() => process["exit"](0)) } });
  } catch (r2) {
    if (r2["code"] === ad(263)) return process["stderr"]["write"](ad(286) + p2 + ad(326)), 1;
    throw r2;
  }
  return process[ad(282)]["write"]((/* @__PURE__ */ new Date())["toISOString"]() + ad(248) + p2 + "/ (pid " + process[ad(262)] + "). Solo responde en esta m\xE1quina.\n"), await new Promise(() => void 0);
}
var m = async () => l(await g()[ab(277)](() => ({ "proyectos": [] })));
async function n(r2) {
  const ae = ab, s = r2 ?? await m(), t2 = await u(s);
  if (t2["estado"] !== ae(253)) return process["stdout"]["write"](t2["estado"] === "libre" ? ae(317) + s + ".\n" : ae(280) + s + " responde otro programa, no el panel: no se toca.\n"), 0;
  if (!await x(s)[ae(277)](() => ![])) return process[ae(245)]["write"](ae(306) + s + " (pid " + t2["salud"][ae(262)] + ") no acept\xF3 detenerse: la clave de `~/.arketum/panel.yaml` no es la suya o el registro no se puede leer. Ci\xE9rralo con la herramienta del sistema.\n"), 1;
  return process["stdout"]["write"](ae(287) + t2["salud"]["pid"] + ").\n"), 0;
}
async function o(p2) {
  const af = ab;
  if (p2[af(268)] === 1 && p2[0] === "--servidor") return l2();
  if (p2[af(268)] === 1 && p2[0] === "--detener") return n();
  let q, s;
  for (let v = 0; v < p2[af(268)]; v++) {
    const w2 = p2[v];
    if (w2 === af(353)) {
      const x2 = p2[++v] ?? "", y = /^\d+$/[af(352)](x2) ? Number(x2) : NaN;
      if (!Number[af(265)](y) || y < 1 || y > 65535) return process[af(245)][af(325)](af(346)), 2;
      s = y;
    } else {
      if (w2[af(250)]("-") || q !== void 0) return process[af(245)]["write"](j), 2;
      else q = resolve(w2);
    }
  }
  q ??= process[af(347)]();
  if (!xU(q)) return process["stderr"]["write"](af(298) + q + " no hay un proyecto de Arketum (`.arketum/proyecto.yaml`). L\xE1nzalo desde la carpeta del proyecto.\n"), 2;
  if (s !== void 0) {
    const z2 = await m();
    if (z2 !== s && (await u(z2))[af(312)] === af(253)) await n(z2);
    await p(s), process["env"]["ARKETUM_PANEL_PUERTO"] !== void 0 && Number(process[af(318)][af(300)]) !== s && process["stderr"]["write"](af(286) + s + " queda fijado, pero `ARKETUM_PANEL_PUERTO` (" + process[af(318)]["ARKETUM_PANEL_PUERTO"] + af(323));
  }
  const t2 = await z(q, { "lanzar": k, "huella": await w() });
  if (af(356) in t2) return process[af(245)][af(325)](af(288) + t2["problema"] + "\n"), 1;
  const u2 = t2["como"] === "ya_corria" ? af(331) : t2[af(332)] === "relanzado" ? af(305) : af(333);
  return process["stdout"]["write"](af(320) + q + " (" + u2 + af(260) + t2["url"] + "\nSolo responde en esta m\xE1quina. Queda corriendo aparte; `arketum-panel --detener` lo cierra.\n"), 0;
}
function a() {
  const ah = ["ktOkica", "ue9tva", "CgLK", "ruferfjjtLvtrq", "zMfSDgeGzwWGDg9Rzw4GzgvSihbHBMvSlcbVig5VigvZigvSigrLig5PBMFdUM4GChjVEwvJDg8GzguGzxn0ysbTW6fXDwLUyq", "AxnjBNrLz2vY", "zMfSDgeGBgeGy2XHDMuGzgvSihbHBMvS", "BM8GzxmGsLnptG", "BgvUz3rO", "Cg9YDa", "Aw5JBhvKzxm", "DxjS", "yw50zxmSigrPihf1ACoPBIbLCMvZicHHCNjPyMePoIbKzxnJyxj0yxiGDw5HigLKzweGDMeGysb0DsbUB21ICMu", "BwvZC2fNzq", "mZaXntiZneLHCuXmAq", "C295", "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", "y2f0y2G", "zgvTyxnPywrVigDYyw5Kzq", "z2f0zq", "rw4GzwWGChvLCNrVia", "lI9Wyw5LBc1JBgKUANm", "C3rKB3v0", "l2fWAs90zw1H", "Dg9mB3DLCKnHC2u", "Bwv0Ag9K", "yxjRzxr1Bs1Wyw5LBdOGzwWGChvLCNrVia", "ugfUzwWGzgv0zw5Pzg8GkhbPzca", "yxjRzxr1Bs1Wyw5LBdOG", "BwfUAwzPzxn0BW", "AhvLBgXH", "zgvJBgfYywnPB24", "y3vLBNrHCW", "y29UzMLYBwe", "Cgf0Ag5HBwu", "ignHCMfJDgvYzxm", "ntKYmtyXvMfkBMnu", "BgLZDgvU", "yxjRzxr1Bs1Wyw5LBdOGzw4G", "l3nHBhvK", "qvjlrvrvtv9qqu5ftf9qvuvsve8", "ote4ntbVq3zWAwW", "BMvNyxrPDMe", "mtuXmtnuvLrvAvi", "Bw90AxzV", "CMvSyw56ywrVignVBIbLC3rHihzLCNnPW7nUigrLiefYA2v0Dw0", "yxjRzxr1Bs1Wyw5LBdOGzwWGCgfUzwWGzgvSihb1zxj0BYa", "DMfSDwvZ", "l2fWAs9KzwnPzgLY", "DgLWBW", "zw5K", "ywrKCMvZCW", "zxn0ywrV", "C3rYAw5N", "y29Tzw50yxjPBW", "y2vYCMfY", "zw50CMLLCW", "tM8GAgf5ihvUihbHBMvSignVCNjPzw5KBYbLBIbLBcbWDwvYDg8G", "zw52", "z2v0", "ugfUzwWGzguGqxjRzxr1BsbWyxjHia", "C2XPy2u", "zwXPz2uGWQS", "ksbTyw5KysbTAwvUDhjHCYbLC3tdQsbKzwzPBMLKys4k", "mJmXntyYogjiwuvpCq", "D3jPDgu", "ihLHigvZDmoHigvUihvZBZSGzwXPz2uGB3rYBYbJB24GygfYA2v0Dw0TCgfUzwWGls1WDwvYDg8Gpg4+yc4k", "D3jPDgvizwfK", "zgvMyxvSDc1ZCMmGj3nLBgyNoYbZDhLSzs1ZCMmGj3vUC2fMzs1PBMXPBMuNoYbZy3jPChqTC3jJicD1BNnHzMuTAw5SAw5LjW", "CgfUzwWT", "zgv0zw5LCG", "EweGy29YCSoTysbLBIbLC3rHig3dOxf1Aw5H", "y29TBW", "Bgv2yw50ywrV", "mteZmtjItMDdzfe", "AgvHzgvYCW", "DhjPBq", "C2LNDwu", "C3rYAw5NAwz5", "BwfWyq", "r0vu", "ls1Zzxj2AwrVCG", "CMvZChvLC3rH", "WRSGBYdcQW", "DgHLBG", "zwXLy2nPB24", "yxjRzxr1Bs1Wyw5LBdOGyc0TChvLCNrVycbUzwnLC2L0ysb1BIbUW7PTzxjVigrLihb1zxj0BY4k", "y3DK", "l2fWAs9LC3rHzg8", "C2vHCMnOugfYyw1Z", "BgLUzwfZ", "odGYmJyWnuPquwPdqW", "DgvZDa", "ls1WDwvYDg8", "zxHLy1bHDgG", "Ahr0CdOVlW", "ChjVyMXLBwe", "Dg9ju09tDhjPBMC", "BM8TC3rVCMu", "B2jQzwn0", "C3rKzxjY", "mty5ndi5nLHIAhPsva", "zxnJCMLIzsb0DsbUB21ICMuGBYb0DsbJB3jYzw8", "ifbHBMvSigrLiefYA2v0Dw0Gzw4GAhr0CdOVlZeYnY4WlJaUmtO", "y2XVC2vbBgXdB25Uzwn0Aw9UCW", "C3rHCNrZv2L0Aa", "Ec1HCMTLDhvTlxrVA2vU", "CgfYC2u", "yxjRzxr1Bq", "yM9VBgvHBG", "CgfYysbKzxnJyxj0yxiGDw4GDgvTysWGzxnJCMLIzsbWB3iGCxxdQq", "ChvLCNrV", "Dw5Yzwy", "CgfUzwW", "lMfYA2v0Dw0"];
  a = function() {
    return ah;
  };
  return a();
}
o(process["argv"]["slice"](2))["then"]((p2) => {
  process["exitCode"] = p2;
}, (p2) => {
  const ag = ab;
  process[ag(245)][ag(325)](ag(288) + (p2 instanceof Error ? p2["message"] : String(p2)) + "\n"), process["exitCode"] = 1;
});
