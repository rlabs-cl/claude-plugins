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
} from "./comun-UTFPQNS4.js";
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
} from "./comun-7HOQALCI.js";

// arketum/dist/mcp/panel-cli.js
import { spawn } from "node:child_process";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";
import { createServer } from "node:http";
var a9 = b;
(function(p2, q) {
  const a1 = b, r2 = p2();
  while (!![]) {
    try {
      const s = parseInt(a1(539)) / 1 + parseInt(a1(442)) / 2 * (-parseInt(a1(476)) / 3) + -parseInt(a1(512)) / 4 * (parseInt(a1(486)) / 5) + parseInt(a1(508)) / 6 * (parseInt(a1(500)) / 7) + -parseInt(a1(446)) / 8 + -parseInt(a1(510)) / 9 + -parseInt(a1(451)) / 10 * (-parseInt(a1(499)) / 11);
      if (s === q) break;
      else r2["push"](r2["shift"]());
    } catch (t2) {
      r2["push"](r2["shift"]());
    }
  }
})(a, 588313);
function b(c2, d2) {
  c2 = c2 - 438;
  const e2 = a();
  let f2 = e2[c2];
  if (b["OWYXlU"] === void 0) {
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
    b["FTwpry"] = g3, b["RKCcTc"] = {}, b["OWYXlU"] = !![];
  }
  const h2 = e2[0], i2 = c2 + h2, j2 = b["RKCcTc"][i2];
  return !j2 ? (f2 = b["FTwpry"](f2), b["RKCcTc"][i2] = f2) : f2 = j2, f2;
}
var c = 64 * 1024;
var d = 4e3;
function e(p2) {
  return new Promise((q, r2) => {
    const a2 = b;
    let s = "";
    p2["setEncoding"]("utf8"), p2["on"](a2(490), (t2) => {
      const a3 = a2;
      s += t2, s[a3(462)] > c && (p2[a3(518)](a3(490)), r2(new Error("demasiado grande")));
    }), p2["on"](a2(530), () => q(s)), p2["on"](a2(482), r2);
  });
}
var f = (p2, q, r2) => {
  const a4 = b;
  p2["writeHead"](q, { "content-type": "application/json; charset=utf-8", "cache-control": a4(466) }), p2[a4(530)](JSON["stringify"](r2));
};
function g2(p2) {
  const a5 = b;
  if (typeof p2 !== "object" || p2 === null) return void 0;
  const q = p2, s = (z2) => typeof q[z2] === "string" && q[z2][a5(541)]() !== "" ? q[z2]["trim"]() : void 0, t2 = s("unidad"), u2 = s(a5(515)), w2 = s("comentario");
  if (t2 === void 0 || u2 === void 0) return void 0;
  const y = w2 === void 0 ? {} : { "comentario": w2 };
  if (q["tipo"] === "gate") {
    const z2 = s(a5(544)), A = q["eleccion"];
    if (z2 === void 0 || !tg["includes"](A)) return void 0;
    const B = A;
    if (ti[a5(520)](B) && w2 === void 0) return void 0;
    return { "tipo": a5(544), "unidad": t2, "gate": z2, "huella": u2, "eleccion": B, ...y };
  }
  if (q["tipo"] === a5(493)) {
    const C = q["veredictos"];
    if (typeof C !== a5(533) || C === null) return void 0;
    const D = {};
    for (const [E, F] of Object[a5(519)](C)) {
      if (F !== "si" && F !== "no" && F !== "despues") return void 0;
      D[E] = F;
    }
    if (Object[a5(547)](D)[a5(462)] === 0 || Object["values"](D)["includes"]("no") && w2 === void 0) return void 0;
    return { "tipo": "confirmacion", "unidad": t2, "huella": u2, "veredictos": D, ...y };
  }
  if (q[a5(495)] === a5(439)) {
    const G = s("hasta"), H = q[a5(456)];
    if (G === void 0 || H !== "sigue" && H !== a5(449)) return void 0;
    return { "tipo": a5(439), "unidad": t2, "huella": u2, "hasta": G, "eleccion": H, ...y };
  }
  if (q["tipo"] === a5(536)) {
    const I = s(a5(465));
    if (I === void 0 || typeof q["confirma"] !== a5(485)) return void 0;
    return { "tipo": a5(536), "unidad": t2, "requisito": I, "huella": u2, "confirma": q[a5(551)], ...y };
  }
  return void 0;
}
async function h(p2) {
  const a6 = b, q = a6(538) + randomBytes(4)["toString"]("hex");
  let r2 = 0;
  const s = createServer((t2, u2) => {
    void (async () => {
      const a7 = b, v = (t2["headers"]["host"] ?? "")[a7(524)]();
      if (v !== a7(457) + r2 && v !== a7(546) + r2) return f(u2, 403, { "error": a7(483) });
      const w2 = new URL(t2["url"] ?? "/", "http://" + v);
      if (t2[a7(548)] === a7(552) && w2["pathname"] === "/") {
        u2[a7(447)](200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "content-security-policy": "default-src 'self'; style-src 'unsafe-inline'; script-src 'unsafe-inline'" }), u2["end"](i);
        return;
      }
      if (t2["method"] === a7(552) && w2["pathname"] === "/salud") {
        const C = { "arketum": "panel", "huella": p2["huella"] ?? "", "pid": process["pid"] };
        return f(u2, 200, C);
      }
      if (t2[a7(548)] === a7(452) && w2["pathname"] === "/detener") {
        const D = p2["detener"] === void 0 ? void 0 : await p2["detener"]["clave"]();
        if (p2["detener"] === void 0 || D === void 0 || D === "" || t2[a7(526)][a7(534)] !== D) return f(u2, 401, { "error": a7(471) });
        f(u2, 200, { "detenido": !![] }), setImmediate(p2["detener"][a7(497)]);
        return;
      }
      const x2 = typeof t2[a7(526)][a7(453)] === "string" ? t2[a7(526)][a7(453)] : void 0, y = x2 ?? (t2["method"] === "GET" ? w2[a7(531)]["get"]("t") ?? void 0 : void 0), z2 = y === void 0 || y === "" ? void 0 : await p2[a7(445)](y);
      if (z2 === void 0) return f(u2, 401, { "error": a7(528) });
      const A = await vO(z2);
      if (A !== void 0) return f(u2, 409, { "error": A });
      const B = await yP(z2);
      if (B === null) return f(u2, 404, { "error": "aqu\xED no hay un proyecto de Arketum (`.arketum/proyecto.yaml`)" });
      if ("negativa" in B) return f(u2, 500, { "error": B["negativa"] });
      if (t2["method"] === "GET" && w2["pathname"] === "/api/estado") {
        const [E, F, G, H, I] = await yr(() => Promise["all"]([dE(z2, B["manifiesto"], (/* @__PURE__ */ new Date())[a7(478)]()), eD(z2, B[a7(549)]), dJ(z2), cK(z2, B[a7(549)]), cU(z2, B[a7(549)])])), J = zt(await zr()), K = zu();
        return f(u2, 200, { "estado": E, ...F, "historial": G, "integraciones": { "cuentas": H[a7(477)][a7(469)], "lineas": H["lineas"] }, "prd": I, ...J === void 0 ? {} : { "identidad": J }, ...K === void 0 ? {} : { "propuesta": K } });
      }
      if (t2[a7(548)] === "POST" && w2["pathname"] === "/api/identidad") {
        let L;
        try {
          L = JSON["parse"](await e(t2));
        } catch {
          return f(u2, 400, { "error": a7(472) });
        }
        const M = typeof L[a7(489)] === "string" ? L[a7(489)]["trim"]()[a7(487)](0, 200) : "";
        if (M === "") return f(u2, 400, { "error": a7(470) });
        const N = M["includes"]("@") && !/\s/["test"](M) ? { "correo": M } : { "nombre": M };
        return await zs(N), f(u2, 200, { "identidad": zt(N) });
      }
      if (t2[a7(548)] === a7(452) && w2[a7(448)] === "/api/telemetria") {
        let O;
        try {
          O = JSON[a7(527)](await e(t2));
        } catch {
          return f(u2, 400, { "error": a7(472) });
        }
        if (typeof O[a7(521)] !== a7(485)) return f(u2, 400, { "error": a7(440) + mj["si"] + a7(535) + mj["no"] + "\xBB" });
        const P = typeof O[a7(468)] === "string" ? O[a7(468)]["trim"]()["slice"](0, 2e3) : "";
        if (await B9() === void 0) return f(u2, 200, { "linea": "  \xB7 telemetr\xEDa: ya estaba decidida (o est\xE1 apagada en esta m\xE1quina); no se registra." });
        const Q = await Bb(O[a7(521)], P === "" ? void 0 : P, zt(await zr()), a7(460));
        return f(u2, 200, { "linea": Q });
      }
      if (t2[a7(548)] === a7(452) && w2["pathname"] === "/api/tema") {
        let R;
        try {
          R = JSON[a7(527)](await e(t2));
        } catch {
          return f(u2, 400, { "error": a7(472) });
        }
        const S = typeof R["id"] === "string" ? R["id"][a7(541)]() : "";
        if (R["respuesta"] !== void 0) {
          const W = typeof R["respuesta"] === "string" ? R["respuesta"][a7(541)]() : "";
          if (S === "" || W === "") return f(u2, 400, { "error": "escribe tu respuesta" });
          if (W[a7(462)] > d) return f(u2, 400, { "error": a7(514) + W[a7(462)] + " de " + d + a7(475) });
          const X = await cz(z2, q, S, W, zt(await zr()));
          return f(u2, "error" in X ? 400 : 200, X);
        }
        const T = typeof R["motivo"] === "string" ? R["motivo"]["trim"]()[a7(487)](0, 2e3) : "";
        if (S === "" || T === "") return f(u2, 400, { "error": "para descartar un tema, escribe por qu\xE9" });
        const U = zt(await zr());
        if (U === void 0) return f(u2, 400, { "error": "antes, di qui\xE9n eres (arriba): descartar una idea va a tu nombre" });
        const V = await cG(z2, q, S, T, U);
        return f(u2, a7(482) in V ? 400 : 200, V);
      }
      if (t2[a7(548)] === "POST" && w2["pathname"] === "/api/decidir") {
        let Y;
        try {
          Y = JSON["parse"](await e(t2));
        } catch (a0) {
          return f(u2, a0[a7(496)] === "demasiado grande" ? 413 : 400, { "error": a0[a7(496)] === a7(459) ? "la respuesta es demasiado grande" : "no es JSON" });
        }
        const Z = g2(Y);
        if (Z === void 0) return f(u2, 400, { "error": "la respuesta no est\xE1 completa (con \xABajustar\xBB o \xABrechazar\xBB, y con un \xABno\xBB, hace falta el comentario)" });
        return f(u2, 200, await eE(z2, B["manifiesto"], q, Z));
      }
      f(u2, 404, { "error": a7(503) });
    })()["catch"]((v) => f(u2, 500, { "error": v instanceof Error ? v["message"] : String(v) }));
  });
  return await new Promise((t2, u2) => {
    const a8 = a6;
    s[a8(467)]("error", u2), s["listen"](p2[a8(484)], "127.0.0.1", () => t2());
  }), r2 = s[a6(454)]()[a6(481)], { "puerto": r2, "cerrar": () => new Promise((t2) => {
    s["close"](() => t2()), s["closeAllConnections"]();
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
var NOMBRES = ` + JSON[a9(492)](th) + ";\n// Las dos respuestas de la telemetr\xEDa, las mismas de la tanda (tl-f01).\nvar TELEMETRIA = " + JSON["stringify"](mj) + `;
var datos = null;
var ultimo = '';
// SE TOCA SOLO LO QUE CAMBI\xD3 (pn-f06). Cada bloque lleva una clave estable (data-k; sin ella, su posici\xF3n) y la
// huella de su HTML: en cada refresco se agregan los nuevos, se quitan los que ya no est\xE1n y se reemplazan solo
// los que cambiaron. Un bloque con algo de la persona (texto, una opci\xF3n marcada, el cursor dentro) no se
// reemplaza ni se quita: se marca, y lo nuevo se ve cuando env\xEDa o vac\xEDa lo suyo. Un bloque con data-lista
// (un grupo de temas) no se reemplaza entero: se concilian sus hijos, y sigue abierto o cerrado como estaba.
function huella(t) { var h = 5381; for (var i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) | 0; return String(h); }
function claveDe(el, i) { return el.getAttribute('data-k') || ('#' + i + el.tagName); }
function conAlgoTuyo(el) {
  var a = document.activeElement;
  if (a && a !== document.body && el.contains(a) && /^(TEXTAREA|INPUT)$/.test(a.tagName)) return true;
  return Array.prototype.some.call(el.querySelectorAll('textarea'), function (t) { return t.value.trim() !== ''; }) ||
    el.querySelectorAll('input:checked').length > 0 ||
    Array.prototype.some.call(el.querySelectorAll('input:not([type=radio]):not([type=checkbox])'), function (x) { return x.value !== x.defaultValue; });
}
function marcar(el, texto) {
  el.setAttribute('data-viejo', '1');
  var m = el.firstElementChild && el.firstElementChild.classList.contains('cambio') ? el.firstElementChild : null;
  if (!m) { m = document.createElement('div'); m.className = 'cambio dato'; el.insertBefore(m, el.firstChild); }
  m.textContent = texto;
}
function conciliar(viejo, html) {
  var t = document.createElement('template');
  t.innerHTML = html;
  var nuevos = Array.prototype.slice.call(t.content.children);
  var antes = {};
  Array.prototype.forEach.call(viejo.children, function (el, i) { antes[claveDe(el, i)] = el; });
  var orden = [];
  nuevos.forEach(function (n, i) {
    var k = claveDe(n, i), h = huella(n.outerHTML), v = antes[k];
    delete antes[k];
    if (v && v.getAttribute('data-h') === h && !v.hasAttribute('data-viejo')) { orden.push(v); return; }
    if (v && n.hasAttribute('data-lista') && v.tagName === n.tagName) {
      conciliar(v, n.innerHTML);
      v.setAttribute('data-h', h);
      orden.push(v);
      return;
    }
    if (v && conAlgoTuyo(v)) { marcar(v, 'Esto cambi\xF3 mientras lo respond\xEDas: lo nuevo se ve cuando env\xEDas o vac\xEDas lo que escribiste.'); orden.push(v); return; }
    // Cambi\xF3 y no tiene nada de la persona: se reemplaza (el viejo sale; el nuevo entra en su sitio, abajo).
    if (v) v.remove();
    n.setAttribute('data-h', h);
    orden.push(n);
  });
  // Lo que ya no est\xE1 se quita, salvo que tenga algo de la persona: queda marcado donde estaba.
  Object.keys(antes).forEach(function (k) {
    var v = antes[k];
    if (conAlgoTuyo(v)) marcar(v, 'Esto ya no est\xE1 pendiente (quiz\xE1 se decidi\xF3 por otro canal): se quita cuando vac\xEDas lo que escribiste.');
    else v.remove();
  });
  // En el orden nuevo, moviendo solo lo que no est\xE1 en su sitio: lo que no se mueve no pierde el cursor.
  var pos = viejo.firstElementChild;
  orden.forEach(function (el) {
    while (pos && pos !== el && pos.hasAttribute('data-viejo') && orden.indexOf(pos) < 0) pos = pos.nextElementSibling;
    if (pos === el) { pos = pos.nextElementSibling; return; }
    viejo.insertBefore(el, pos);
  });
}
// Los borradores de cada vista, por la clave de su bloque: vuelven al cambiar de pesta\xF1a y regresar.
var borradores = {};
function guardarBorradores(m) {
  var b = {};
  m.querySelectorAll('[data-k]').forEach(function (el) {
    var campos = [];
    el.querySelectorAll('textarea, input').forEach(function (x, i) { campos.push(x.type === 'radio' || x.type === 'checkbox' ? x.checked : x.value); });
    b[el.getAttribute('data-k')] = { campos: campos, abierto: el.tagName === 'DETAILS' ? el.open : null };
  });
  return b;
}
function devolverBorradores(m, b) {
  if (!b) return;
  m.querySelectorAll('[data-k]').forEach(function (el) {
    var g = b[el.getAttribute('data-k')];
    if (!g) return;
    if (g.abierto !== null && el.tagName === 'DETAILS') el.open = g.abierto;
    if (el.hasAttribute('data-lista')) return;
    el.querySelectorAll('textarea, input').forEach(function (x, i) {
      if (i >= g.campos.length) return;
      if (x.type === 'radio' || x.type === 'checkbox') x.checked = g.campos[i];
      else x.value = g.campos[i];
    });
  });
}
function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function dias(d) { return d == null ? '' : d === 0 ? 'hoy' : d === 1 ? 'hace 1 d\xEDa' : 'hace ' + d + ' d\xEDas'; }
// C\xF3mo se ve una unidad viva (ec-f04): los mismos campos que la l\xEDnea del estado \u2014su frente (una abandonada no tiene), lo que espera de ti con su fecha, su \xFAltimo hecho y los d\xEDas\u2014, sin juzgar por un plazo.
function unidad(u) {
  var h = '<div class="carta"><div class="quien">' + esc(u.id) + '<span class="etiqueta">' + esc(u.estado) + '</span>' + (u.frente && FRENTES[u.frente] ? '<span class="etiqueta">' + esc(FRENTES[u.frente]) + '</span>' : '') + '</div>';
  if (u.bloqueo) h += '<div>Bloqueada: ' + esc(u.bloqueo.motivo) + ' <span class="dato">(desde ' + esc(u.bloqueo.desde.slice(0, 10)) + ', ' + dias(u.diasBloqueada) + ')</span></div>';
  if (u.esperando) h += '<div>Espera tu decisi\xF3n: ' + esc(u.esperando.gate) + ' \u2014 ' + esc(u.esperando.pregunta) + '</div>';
  // Como \xABlineaDeUnidad\xBB (ec-f04): las declaraciones que esperan su confirmaci\xF3n, con su fecha.
  if (u.declaraciones) h += '<div>' + esc(String(u.declaraciones)) + ' declaraci\xF3n(es) por confirmar (en la tanda o el panel)' + (u.declaracionesDesde ? ' <span class="dato">(desde ' + esc(u.declaracionesDesde.slice(0, 10)) + ')</span>' : '') + '</div>';
  if (u.ultimo) h += '<div class="dato">\xDAltimo hecho ' + esc(u.ultimo.momento.slice(0, 10)) + ' (' + dias(u.dias) + '): ' + esc(u.ultimo.texto) + '</div>';
  return h + '</div>';
}
function cajaDeIdentidad() {
  if (datos.identidad) return '';
  return '<div class="carta" data-k="identidad"><div class="quien">\xBFQui\xE9n eres?</div><div class="dato">Tu nombre o tu correo, una vez (sin login): va en cada decisi\xF3n tuya, para saber a qui\xE9n preguntar.</div>' +
    '<div class="opciones"><input id="soy" value="' + esc(datos.propuesta || '') + '" style="flex:1;font:inherit;padding:6px 8px;border-radius:8px;border:1px solid var(--borde);background:var(--carta);color:var(--texto)"><button id="guardarSoy">Guardar</button></div></div>';
}
// Los nombres de los frentes, los mismos del estado (ec-f04).
var FRENTES = ` + JSON["stringify"](lb) + a9(505);
var j = a9(517);
function a() {
  const af = ["Cgf0Ag5HBwu", "CMv2B2nHCG", "yxjRzxr1Bs1Wyw5LBdOGzwWGChvLCNrVia", "mtyZmteWBwLtExnU", "ue9tva", "Ec1HCMTLDhvTlxrVA2vU", "ywrKCMvZCW", "yxjRzxr1Bs1Wyw5LBdOG", "zwXLy2nPB24", "mti3lJaUmc4XoG", "CgLK", "zgvTyxnPywrVigDYyw5Kzq", "CgfUzwW", "yxjRzxr1Bs1Wyw5LBdOGyc0TChvLCNrVycbUzwnLC2L0ysb1BIbUW7PTzxjVigrLihb1zxj0BY4k", "BgvUz3rO", "lMfYA2v0Dw0", "ls1WDwvYDg8", "CMvXDwLZAxrV", "BM8TC3rVCMu", "B25Jzq", "y29Tzw50yxjPBW", "y3vLBNrHCW", "zxnJCMLIzsb0DsbUB21ICMuGBYb0DsbJB3jYzw8", "zMfSDgeGBgeGy2XHDMuGzgvSihbHBMvS", "BM8GzxmGsLnptG", "yxjRzxr1Bq", "ktOkica", "ignHCMfJDgvYzxm", "mJG0nZK1mwTvCwLrva", "BwfWyq", "Dg9ju09tDhjPBMC", "CMvSyw56ywrV", "yxjNDG", "Cg9YDa", "zxjYB3i", "C29SBYbKzxnKzsbLC3rHig3dOxf1Aw5H", "ChvLCNrV", "yM9VBgvHBG", "mtC1BwvHwenv", "C2XPy2u", "y29TBW", "C295", "zgf0yq", "BgLICMu", "C3rYAw5NAwz5", "y29UzMLYBwfJAw9U", "ugfUzwWGzguGqxjRzxr1BsbWyxjHia", "DgLWBW", "BwvZC2fNzq", "ywXezxrLBMvY", "C2fSDwq", "mtyYogXAEwjbsa", "n09vqNnXyq", "ls1Zzxj2AwrVCG", "C3rKzxjY", "BM8GzxHPC3rL", "y2f0y2G", "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y2XHC3m9iNf1AwvUiJ4NicSGzxnJkhaUDw5PzgfKksaRicCGWRCGjYaRigvZyYHWlMDHDguPicSGjZXZCgfUignSyxnZpsjLDgLXDwv0ysi+jYaRigvZyYHWlMnSyxnLid09psaNDgvJBMLJysCGpYaNDmoPy25Py2eNidOGCc5JBgfZzsKGkYaNpc9ZCgfUpJWVzgL2pIC7cIaGicaGigLMicHWlMrLC2rLksbOicS9icC8zgL2ignSyxnZpsjKyxrViJ5fC3bLCMfUzg8GzgvZzguGjYaRigvZyYHWlMrLC2rLlNnSAwnLkdaSideWksKGkYaNpc9KAxy+jZSkicaGicaGAwyGkhaUzxHWBgLJywnPB24PigGGkZ0GjZXKAxyGy2XHC3m9iMrHDg8IpLbLzgLZDguGDw5Higv4CgXPy2fJACoZBIbLBcaNicSGzxnJkhaUzxHWBgLJywnPB24UBw9Tzw50BY5ZBgLJzsGWlcaXmcKPicSGjZOGDguGBgeGzgeGzwWGywDLBNrLlJWVzgL2pIC7cIaGicaGigGGkZ0GjZXWCMu+jYaRigvZyYHWlNjLC3vTzw4PicSGjZWVChjLpJX0zxH0yxjLysbWBgfJzwHVBgrLCJ0Iq29Tzw50yxjPBYaOB2jSAwDHDg9YAw8GCgfYysbHANvZDgfYig8GCMvJAgf6yxiPiJ48l3rLEhrHCMvHpJXKAxyGy2XHC3m9iM9Wy2LVBMvZiJ4NoWOGicaGicbWlM9Wy2LVBMvZlMnVBMnHDcHBj25Vx2vUDgLLBMrVj10PlMzVCKvHy2GOzNvUy3rPB24Gkg8PihSGAcaRpsaNpgj1DhrVBIbJBgfZCZ0IjYaRig8GkYaNiIbKyxrHlwvSzwnJAw9UpsiNicSGBYaRicCIpICGkYbLC2mOke5ptujsrvnBB10GFhWGBYKGkYaOBYa9pt0Gj3jLy2HHEMfYjYaMjIbWlMfSuMvJAgf6yxiGpYaNicGNicSGCc5HBfjLy2HHEMfYicSGjYKNidOGjYCPksaRicC8l2j1DhrVBJ4NoYb9ktSkicaGicaGAcaRpsaNpc9KAxy+jZSkicaGih0GzwXZzsbPzIaOCc50AxbVid09psaNy29UzMLYBwfJAw9UjYKGEWOGicaGicbOicS9icC8zgL2ignSyxnZpsjXDwLLBIi+jYaR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", "icHWAwqG", "mJq4odqWnhvsCNvdwG", "EweGy29YCSoTysbLBIbLC3rHig3dOxf1Aw5H", "ndC2nZy2oxrxq2Xfza", "zxn0ywrV", "mti0mJa0weHvBLPh", "zxHPDa", "BgeGCMvZChvLC3rHigvZigrLBwfZAwfKBYbSyxjNytOG", "AhvLBgXH", "yxjRzxr1Bs1Wyw5LBdOGzw4G", "DxnVoIbHCMTLDhvTlxbHBMvSifTYyCoTEL0GwY0TChvLCNrVie5DihWGyxjRzxr1Bs1Wyw5LBcaTlxnLCNzPzg9YihWGyxjRzxr1Bs1Wyw5LBcaTlwrLDgvUzxik", "CMvTB3zLqwXStgLZDgvUzxjZ", "zw50CMLLCW", "Aw5JBhvKzxm", "ywnLChrH", "cLnVBg8GCMvZCg9UzguGzw4Gzxn0ysbTW6fXDwLUys4GuxvLzgeGy29YCMLLBMrVigfWyxj0ztSGygfYA2v0Dw0TCgfUzwWGls1KzxrLBMvYycbSBYbJAwvYCMeUcG", "ksbUBYbHy2vWDmoZigrLDgvUzxjZztOGBgeGy2XHDMuGzguGyh4VlMfYA2v0Dw0VCgfUzwWUEwfTBgaGBM8GzxmGBgeGC3v5ysbVigvSihjLz2LZDhjVig5VihnLihb1zwrLigXLzxiUienPW6LYCMfSBYbJB24GBgeGAgvYCMfTAwvUDgeGzgvSihnPC3rLBweUcG", "Dg9mB3DLCKnHC2u", "ugfUzwWGzgv0zw5Pzg8GkhbPzca", "AgvHzgvYCW", "CgfYC2u", "zMfSDgeGzwWGDg9Rzw4GzgvSihbHBMvSlcbVig5VigvZigvSigrLig5PBMFdUM4GChjVEwvJDg8GzguGzxn0ysbTW6fXDwLUyq", "DgHLBG", "zw5K", "C2vHCMnOugfYyw1Z", "qvjlrvrvtv9qqu5ftf9qvuvsve8", "B2jQzwn0", "Ec1HCMTLDhvTlwnSyxzL", "WRSGBYdcQW", "zgvJBgfYywnPB24", "yxjRzxr1Bs1Wyw5LBdOGzwWGCgfUzwWGzgvSihb1zxj0BYa", "CgfUzwWT", "nJK2ndu5wunYBwH1", "D3jPDgu", "DhjPBq", "tM8GAgf5ihvUihbHBMvSignVCNjPzw5KBYbLBIbLBcbWDwvYDg8G", "DgvZDa", "z2f0zq", "y29Kzq", "Bg9JywXOB3n0oG", "A2v5CW", "Bwv0Ag9K", "BwfUAwzPzxn0BW", "Bgv2yw50ywrV", "y29UzMLYBwe", "r0vu", "C3rHCNrZv2L0Aa", "zgvSzwDHy2LVBG", "zwXPz2uGWQS", "C3rKB3v0", "mKvHBNzosG", "Dw5Yzwy", "zw52", "CMfPEKrL", "mJK2oduYmfzZCMrJBq", "D3jPDgvizwfK"];
  a = function() {
    return af;
  };
  return a();
}
function k() {
  const aa = a9, p2 = zd(join(yN(), aa(463), "panel.log"));
  spawn(process["execPath"], [fileURLToPath(new URL("./panel-cli.js", import.meta.url)), "--servidor"], { "detached": !![], "windowsHide": !![], "stdio": ["ignore", p2, p2], "env": process[aa(444)] })[aa(443)]();
}
async function l2() {
  const ab = a9, p2 = l(await g());
  await r();
  try {
    const q = await h({ "puerto": p2, "raizDe": t, "huella": await w(), "detener": { "clave": async () => (await g()["catch"](() => ({ "proyectos": [] })))["clave"], "alDetener": () => void q["cerrar"]()[ab(529)](() => process[ab(513)](0)) } });
  } catch (r2) {
    if (r2[ab(545)] === "EADDRINUSE") return process[ab(502)][ab(540)]("arketum-panel: el puerto " + p2 + " ya est\xE1 en uso; elige otro con `arketum-panel --puerto <n>`.\n"), 1;
    throw r2;
  }
  return process["stdout"][ab(540)]((/* @__PURE__ */ new Date())[ab(478)]() + " Panel de Arketum en http://127.0.0.1:" + p2 + "/ (pid " + process[ab(458)] + "). Solo responde en esta m\xE1quina.\n"), await new Promise(() => void 0);
}
var m = async () => l(await g()["catch"](() => ({ "proyectos": [] })));
async function n(r2) {
  const ac = a9, s = r2 ?? await m(), t2 = await u(s);
  if (t2["estado"] !== ac(473)) return process["stdout"]["write"](t2[ac(511)] === ac(491) ? ac(542) + s + ".\n" : "En el puerto " + s + " responde otro programa, no el panel: no se toca.\n"), 0;
  if (!await x(s)[ac(504)](() => ![])) return process[ac(502)]["write"](ac(537) + s + ac(507) + t2[ac(498)]["pid"] + ac(523)), 1;
  return process[ac(441)][ac(540)](ac(525) + t2["salud"][ac(458)] + ").\n"), 0;
}
async function o(p2) {
  const ad = a9;
  if (p2["length"] === 1 && p2[0] === ad(501)) return l2();
  if (p2[ad(462)] === 1 && p2[0] === "--detener") return n();
  let q, s;
  for (let v = 0; v < p2[ad(462)]; v++) {
    const w2 = p2[v];
    if (w2 === ad(464)) {
      const x2 = p2[++v] ?? "", y = /^\d+$/[ad(543)](x2) ? Number(x2) : NaN;
      if (!Number["isInteger"](y) || y < 1 || y > 65535) return process[ad(502)]["write"](ad(461)), 2;
      s = y;
    } else {
      if (w2[ad(438)]("-") || q !== void 0) return process[ad(502)]["write"](j), 2;
      else q = resolve(w2);
    }
  }
  q ??= process["cwd"]();
  if (!xU(q)) return process[ad(502)]["write"](ad(516) + q + " no hay un proyecto de Arketum (`.arketum/proyecto.yaml`). L\xE1nzalo desde la carpeta del proyecto.\n"), 2;
  if (s !== void 0) {
    const z2 = await m();
    if (z2 !== s && (await u(z2))["estado"] === ad(473)) await n(z2);
    await p(s), process["env"][ad(532)] !== void 0 && Number(process[ad(444)][ad(532)]) !== s && process["stderr"][ad(540)](ad(450) + s + " queda fijado, pero `ARKETUM_PANEL_PUERTO` (" + process["env"][ad(532)] + ad(506));
  }
  const t2 = await z(q, { "lanzar": k, "huella": await w() });
  if ("problema" in t2) return process[ad(502)]["write"](ad(455) + t2["problema"] + "\n"), 1;
  const u2 = t2[ad(488)] === "ya_corria" ? ad(509) : t2[ad(488)] === ad(479) ? "relanzado con esta versi\xF3n de Arketum" : ad(550);
  return process["stdout"][ad(540)](ad(494) + q + " (" + u2 + ad(474) + t2["url"] + ad(522)), 0;
}
o(process[a9(480)][a9(487)](2))["then"]((p2) => {
  process["exitCode"] = p2;
}, (p2) => {
  const ae = a9;
  process["stderr"]["write"]("arketum-panel: " + (p2 instanceof Error ? p2[ae(496)] : String(p2)) + "\n"), process["exitCode"] = 1;
});
