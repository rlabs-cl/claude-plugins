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
} from "./comun-XQYDVJEK.js";
import {
  AS,
  AU,
  Bg,
  Bh,
  Bi,
  Bj,
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
  zd
} from "./comun-EUTJM7FK.js";

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
      const s = parseInt(a1(571)) / 1 + parseInt(a1(505)) / 2 + parseInt(a1(557)) / 3 + parseInt(a1(522)) / 4 + parseInt(a1(579)) / 5 + parseInt(a1(491)) / 6 + -parseInt(a1(528)) / 7;
      if (s === q) break;
      else r2["push"](r2["shift"]());
    } catch (t2) {
      r2["push"](r2["shift"]());
    }
  }
})(a, 113881);
function b(c2, d2) {
  c2 = c2 - 481;
  const e2 = a();
  let f2 = e2[c2];
  if (b["kZvMkg"] === void 0) {
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
    b["AEKOMI"] = g3, b["LxXQYV"] = {}, b["kZvMkg"] = !![];
  }
  const h2 = e2[0], i2 = c2 + h2, j2 = b["LxXQYV"][i2];
  return !j2 ? (f2 = b["AEKOMI"](f2), b["LxXQYV"][i2] = f2) : f2 = j2, f2;
}
var c = 64 * 1024;
var d = 4e3;
function e(p2) {
  return new Promise((q, r2) => {
    const a2 = b;
    let s = "";
    p2["setEncoding"](a2(487)), p2["on"]("data", (t2) => {
      const a3 = a2;
      s += t2, s[a3(543)] > c && (p2[a3(563)](a3(518)), r2(new Error("demasiado grande")));
    }), p2["on"](a2(484), () => q(s)), p2["on"]("error", r2);
  });
}
var f = (p2, q, r2) => {
  const a4 = b;
  p2[a4(548)](q, { "content-type": a4(584), "cache-control": a4(508) }), p2[a4(484)](JSON[a4(595)](r2));
};
function a() {
  const ai = ["l2fWAs90zw1H", "CMvTB3zLqwXStgLZDgvUzxjZ", "ls1WDwvYDg8", "z2v0", "yxjRzxr1Bs1Wyw5LBdOGzwWGChvLCNrVia", "C3rYAw5N", "ksbTyw5KysbTAwvUDhjHCYbLC3tdQsbKzwzPBMLKys4k", "y2f0y2G", "zxnJCMLIzsb0DsbUB21ICMuGBYb0DsbJB3jYzw8", "mJiZmJmZze5Rwuvi", "C3rKzxjY", "Ec1HCMTLDhvTlwnSyxzL", "C2vHCMnOugfYyw1Z", "AhvLBgXH", "Dg9ju09tDhjPBMC", "C2XPy2u", "ks4k", "odu3mdaWqxbjvgTv", "CMvZChvLC3rH", "y29UzMLYBwfJAw9U", "yxjRzxr1Bq", "ifbHBMvSigrLiefYA2v0Dw0Gzw4GAhr0CdOVlZeYnY4WlJaUmtO", "yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa", "icHWAwqG", "BgeGCMvZChvLC3rHigvZigrLBwfZAwfKBYbSyxjNytOG", "Dw5Yzwy", "Cgf0Ag5HBwu", "ChjVyMXLBwe", "CgfYysbKzxnJyxj0yxiGDw4GDgvTysWGzxnJCMLIzsbWB3iGCxxdQq", "ihLHigvZDmoHigvUihvZBZSGzwXPz2uGB3rYBYbJB24GygfYA2v0Dw0TCgfUzwWGls1WDwvYDg8Gpg4+yc4k", "ugfUzwWGzgv0zw5Pzg8GkhbPzca", "qvjlrvrvtv9qqu5ftf9qvuvsve8", "l3nHBhvK", "C3rYAw5NAwz5", "Bw90AxzV", "C3rKB3v0", "ugfUzwWGzguGqxjRzxr1BsbWyxjHia", "CgLK", "BwfUAwzPzxn0BW", "zw5K", "ls1Zzxj2AwrVCG", "zxHPDenVzgu", "DxrMoa", "C295", "Bg9JywXOB3n0oG", "mti3lJaUmc4X", "ndCYmJu0BfD4zfbh", "Dg9tDhjPBMC", "BwvZC2fNzq", "BgeGCMvZChvLC3rHigvZigrLBwfZAwfKBYbNCMfUzgu", "CgfYC2u", "Aw5JBhvKzxm", "Ag9ZDa", "ywnLChrH", "zxHPDa", "l2rLDgvUzxi", "l2fWAs90zwXLBwv0CMLH", "zxjYB3i", "zgv0zw5LCG", "DhjPBq", "mJm2ntzYrxz3A0y", "y2vYCMfY", "yxjRzxr1Bs1Wyw5LBdOGyc0TChvLCNrVycbUzwnLC2L0ysb1BIbUW7PTzxjVigrLihb1zxj0BY4k", "BM8TC3rVCMu", "CMv2B2nHCG", "BwfWyq", "ihjLC3bVBMrLig90CM8GChjVz3jHBweSig5VigvSihbHBMvSoIbUBYbZzsb0B2nHlGO", "BM8GzxmGsLnptG", "WRSGBYdcQW", "yw50zxmSigrPihf1ACoPBIbLCMvZicHHCNjPyMePoIbKzxnJyxj0yxiGDw5HigLKzweGDMeGysb0DsbUB21ICMu", "zgvTyxnPywrVigDYyw5Kzq", "BgLUzwfZ", "pcfKB2n0ExbLigH0BwW+cJXODg1SigXHBMC9iMvZiJ4kpgHLywq+cJXTzxrHignOyxjZzxq9iNv0zI04iJ4kpg1LDgeGBMfTzt0IDMLLD3bVCNqIignVBNrLBNq9iNDPzhrOpwrLDMLJzs13Awr0AcWGAw5PDgLHBc1Zy2fSzt0XiJ4kphrPDgXLpKfYA2v0Dw0GWRCGCgfUzwW8l3rPDgXLpGO8C3r5Bgu+cJPYB290ihSGls1MB25KBZOJzJDMn2y1oYaTlwnHCNrHoInMzMy7ic0TDgv4Dg86iZfKmwqXyJSGls1ZDwf2ztOJnMi2yJy2oYaTlwjVCMrLoInLmMuYzgm7ic0TywnLBNrVoImYzJvKoge7ic0TB2S6iZjLn2q0zJSGls1HDMLZBZOJytu2nJbIoYaTlw1HBdOJytmZytnHoYb9cKbTzwrPysaOChjLzMvYCY1JB2XVCI1Zy2HLBwu6igrHCMSPihSGoNjVB3qGEYaTlwzVBMrVoImXnJe2mtu7ic0Ty2fYDge6iZiWmJaXztSGls10zxH0BZOJzwnLy2u4oYaTlxn1yxzLoInHm2eZowm7ic0TyM9Yzgu6iZm0mZqYzJSGls1Hy2vUDg86iZDMyJbLmdSGls1VAZOJnMnJmdKZoYaTlwf2AxnVoInLmge2nge7ic0TBwfSoInLmdDHn2e7ih0GFqOQihSGyM94lxnPEMLUzZOGyM9YzgvYlwjVEdSGFqPIB2r5ihSGBwfYz2LUoJa7igjHy2TNCM91BMq6DMfYkc0TzM9Uzg8PoYbJB2XVCJP2yxiOls10zxH0BYK7igzVBNq6mtvWEc8XlJuGC3LZDgvTlxvPlcaTyxbWBguTC3LZDgvTlcaIu2vNB2uGvuKIlcbZyw5ZlxnLCMLMoYb9cMHLywrLCIb7ihbHzgrPBMC6mtzWEcaYmhb4ida7ig1HEc13Awr0AdO5nJbWEdSGBwfYz2LUoJaGyxv0BZSGFqPOmsb7igzVBNqTC2L6ztOYmhb4oYbTyxjNAw46mcaWidrWEdSGFqOUC3vIihSGy29SB3i6DMfYkc0TC3vHDMuPoYbMB250lxnPEMu6mtnWEdSGFqPUyxyGEYbKAxnWBgf5oMzSzxG7igDHCdO4ChG7ig1HCMDPBJOXnhb4idaGmdSGyM9YzgvYlwjVDhrVBtOXChGGC29SAwqGDMfYkc0TyM9YzguPoYb9cM5HDIbIDxr0B24GEYbIywnRz3jVDw5KoM5VBMu7igjVCMrLCJOWoYbIB3jKzxiTyM90Dg9ToJjWEcbZB2XPzcb0CMfUC3bHCMvUDdSGCgfKzgLUzZO4ChGGmtbWEdSGy29SB3i6DMfYkc0TC3vHDMuPoYbMB250oMLUAgvYAxq7ign1CNnVCJPWB2LUDgvYoYb9cM5HDIbIDxr0B24Uywn0AxzHihSGy29SB3i6DMfYkc0TDgv4Dg8PoYbIB3jKzxiTyM90Dg9TlwnVBg9YoNzHCIGTlwfJzw50BYK7ih0kBwfPBIb7ig1HEc13Awr0AdO5nJbWEdSGBwfYz2LUoJaGyxv0BZSGCgfKzgLUzZOXnNb4idiWChGGndbWEdSGFqOUy2fYDgeGEYbIywnRz3jVDw5KoNzHCIGTlwnHCNrHktSGyM9YzgvYoJfWEcbZB2XPzcb2yxiOls1IB3jKzsK7igjVCMrLCI1YywrPDxm6mtbWEdSGCgfKzgLUzZOXnhb4ide2ChG7ig1HCMDPBJOWidaGmtjWEdSGFqOUy2LMCMfZihSGzgLZCgXHEtPMBgv4oYbMBgv4lxDYyxa6D3jHCdSGz2fWoJeYChG7ih0klMnPzNjHihSGzMXLEdOXideGmtqWChG7igjHy2TNCM91BMq6DMfYkc0Ty2fYDgePoYbIB3jKzxi6mxb4ihnVBgLKihzHCIGTlwjVCMrLktSGyM9YzgvYlxjHzgL1CZOXmhb4oYbWywrKAw5NoJeYChGGmtrWEdSGFqOUy2LMCMeGyIb7igrPC3bSyxK6yMXVy2S7igzVBNqTC2L6ztOYnhb4oYb9cI5JAwzYysbZCgfUihSGy29SB3i6DMfYkc0TC3vHDMuPoYbMB250lxnPEMu6mtnWEdSGFqOUyxzHBMnLigiGEYbMB250lxnPEMu6ndbWEdSGFqPOmIb7igzVBNqTC2L6ztOXnxb4oYbTyxjNAw46mtHWEcaWidHWEdSGFqOUCxvPzw4GEYbMB250lxDLAwDODdO2mda7ih0klMrHDg8GEYbJB2XVCJP2yxiOls1ZDwf2zsK7igzVBNqTC2L6ztOXm3b4oYb9cNbYzsb7ihDOAxrLlxnWywnLoNbYzs13CMfWoYbIywnRz3jVDw5KoNzHCIGTlwzVBMrVktSGyM9YzgvYoJfWEcbZB2XPzcb2yxiOls1IB3jKzsK7igjVCMrLCI1YywrPDxm6ohb4oYbWywrKAw5NoJeWChG7igzVBNq6mtnWEc8XlJq1ihvPlw1VBM9ZCgfJzsWGtwvUBg8Sig1VBM9ZCgfJztSGBwfYz2LUoJHWEcaWoYb9cI5VCgnPB25LCYb7igrPC3bSyxK6zMXLEdSGzMXLEc13CMfWoNDYyxa7igDHCdO4ChG7ig1HCMDPBJO4ChGGmdSGFqOUB3bJAw9UzxmGyNv0Dg9UihSGzM9UDdPPBMHLCML0oYbWywrKAw5NoJzWEcaXmNb4oYbIB3jKzxiTCMfKAxvZoJHWEdSGyM9YzgvYoJfWEcbZB2XPzcb2yxiOls1IB3jKzsK7igjHy2TNCM91BMq6DMfYkc0Ty2fYDgePoYbJB2XVCJP2yxiOls10zxH0BYK7ign1CNnVCJPWB2LUDgvYoYb9cI5VCgnPB25LCYbIDxr0B24UyxbYB2jHCIb7igjVCMrLCI1JB2XVCJP2yxiOls1VAYK7ignVBg9YoNzHCIGTlw9RktSGFqOUB3bJAw9UzxmGyNv0Dg9UlNjLy2HHEMfYihSGyM9YzgvYlwnVBg9YoNzHCIGTlw1HBcK7ignVBg9YoNzHCIGTlw1HBcK7ih0kDgv4DgfYzweGEYb3Awr0AdOXmdaLoYbTAw4TAgvPz2H0oJu2ChG7igzVBNq6Aw5OzxjPDdSGCgfKzgLUzZO4ChG7igjVCMrLCI1YywrPDxm6ohb4oYbIB3jKzxi6mxb4ihnVBgLKihzHCIGTlwjVCMrLktSGyMfJA2DYB3vUzdP2yxiOls1Jyxj0ysK7ignVBg9YoNzHCIGTlxrLEhrVktSGFqOUzxrPCxvLDgeGEYbKAxnWBgf5oMLUBgLUzs1IBg9JAZSGzM9UDc1ZAxPLoJeYChG7ihbHzgrPBMC6mxb4idHWEdSGyM9YzgvYlxjHzgL1CZO5otLWEdSGyM9YzgvYoJfWEcbZB2XPzcb2yxiOls1IB3jKzsK7ignVBg9YoNzHCIGTlxn1yxzLktSGBwfYz2LUlwXLzNq6nNb4oYb9cI5Yzxn1BhrHzg8GEYbTyxjNAw4TDg9WoJzWEdSGzM9UDc1ZAxPLoJeZChG7ih0kDgfIBguGEYb3Awr0AdOXmdaLoYbIB3jKzxiTy29SBgfWC2u6y29SBgfWC2u7igzVBNqTC2L6ztOXm3b4oYb9cNrOlcb0zcb7ihrLEhqTywXPz246BgvMDdSGCgfKzgLUzZO2ChGGohb4oYbIB3jKzxiTyM90Dg9ToJfWEcbZB2XPzcb2yxiOls1IB3jKzsK7ihzLCNrPy2fSlwfSAwDUoNrVCdSGFqP0Acb7ignVBg9YoNzHCIGTlxn1yxzLktSGzM9UDc13zwLNAhq6ntaWoYb9cI52ywnPBYb7ignVBg9YoNzHCIGTlxn1yxzLktSGFqOUzxjYB3iGEYbJB2XVCJP2yxiOls1TywWPoYb9cI5Jyw1IAw8GEYbJB2XVCJP2yxiOls1HDMLZBYK7ig1HCMDPBJOWidaGnNb4oYb9cKbTzwrPysaOBwf4lxDPzhrOoIa2mdbWEcKGEYbOzwfKzxiSig1HAw4GEYbWywrKAw5NlwXLzNq6mtzWEdSGCgfKzgLUzY1YAwDODdOXnNb4oYb9ihrHyMXLihSGzM9UDc1ZAxPLoJeYChG7ih0GFqO8l3n0EwXLpGO8l2HLywq+cJXIB2r5pGO8AgvHzgvYpGOGidXOmsbPzd0IDgL0DwXViJ5bCMTLDhvTpc9Omt4kica8zgL2ignSyxnZpsjZDwiIigLKpsjZDwiIpKnHCMDHBMrV4OcMpc9KAxy+cIaGpg5HDJ4kicaGidXIDxr0B24Gzgf0ys12Axn0yt0Izxn0ywrViIbJBgfZCZ0Iywn0AxzHiJ5fC3rHzg88l2j1DhrVBJ4kicaGidXIDxr0B24Gzgf0ys12Axn0yt0ICgvUzgLLBNrLCYi+ugvUzgLLBNrLCZWVyNv0Dg9UpGOGicaGpgj1DhrVBIbKyxrHlxzPC3rHpsjOAxn0B3jPywWIpKHPC3rVCMLHBdWVyNv0Dg9UpGOGicaGpgj1DhrVBIbKyxrHlxzPC3rHpsjPBNrLz3jHy2LVBMvZiJ5jBNrLz3jHy2LVBMvZpc9IDxr0B24+cIaGica8yNv0Dg9UigrHDgeTDMLZDge9iNbYzci+ufjepc9IDxr0B24+cIaGpc9Uyxy+cJWVAgvHzgvYpGO8BwfPBIbPzd0IBwfPBIi+pc9TywLUpGO8C2nYAxb0pGP2yxiGDg9Rzw4GpsbUzxCGvvjmu2vHCMnOugfYyw1ZkgXVy2f0Aw9UlNnLyxjJAcKUz2v0kcD0jYKGFhWGjYC7cNzHCIb2Axn0ysa9icDLC3rHzg8NoWOVlYbmB3mGBM9TyNjLCYbKzsbSyxmGB3bJAw9UzxmGzguGDw4Gz2f0zsWGBg9Zig1PC21VCYbKzsbSysb0yw5Kysb5igvSignOyxqGkhrKlwyWmIKUcNzHCIbot01cuKvtid0G", "zgf0yq", "oWOVlYbmyxmGzg9ZihjLC3b1zxn0yxmGzguGBgeGDgvSzw1LDhldRweSigXHCYbTAxnTyxmGzguGBgeGDgfUzgeGkhrSlwyWmsKUcNzHCIburuXftuvuuKLbid0G", "y2XVC2u", "CMvSyw56ywrVignVBIbLC3rHihzLCNnPW7nUigrLiefYA2v0Dw0", "nte4ntq4sM5os0DR", "Dw5PzgfK", "zgvJBgfYywnPB24", "CMvXDwLZAxrV", "DgvZDa", "AgfZDge", "ndK0mdqYnwrNBMToqq", "C3rHCNrZv2L0Aa", "ywrKCMvZCW", "CgfUzwW", "lI9Wyw5LBc1JBgKUANm", "Bwv0Ag9K", "zwXLy2nPB24", "zxn0ywrV", "zw50CMLLCW", "l2fWAs9KzwnPzgLY", "D3jPDgu", "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", "rw4GzwWGChvLCNrVia", "EweGy29YCSoTysbLBIbLC3rHig3dOxf1Aw5H", "y29Tzw50yxjPBW", "BgvUz3rO", "z2f0zq", "zw52", "r0vu", "ue9tva", "D3jPDgvizwfK", "ig5VigHHEsb1BIbWCM95zwn0BYbKzsbbCMTLDhvTicHGlMfYA2v0Dw0VChjVEwvJDg8UEwfTBgaPlIbmW6fUEMfSBYbKzxnKzsbSysbJyxjWzxrHigrLBcbWCM95zwn0BY4k", "zxHLy1bHDgG", "B2jQzwn0", "C2LNDwu", "BM8GzxHPC3rL", "ignHCMfJDgvYzxm", "tM8GAgf5ihvUihbHBMvSignVCNjPzw5KBYbLBIbLBcbWDwvYDg8G", "Ec1HCMTLDhvTlxrVA2vU", "nJe0ntq3rMritKzv", "CMvSyw56ywrV", "DgLWBW", "ruferfjjtLvtrq", "BMvNyxrPDMe"];
  a = function() {
    return ai;
  };
  return a();
}
function g2(p2) {
  const a5 = b;
  if (typeof p2 !== "object" || p2 === null) return void 0;
  const q = p2, s = (z2) => typeof q[z2] === "string" && q[z2]["trim"]() !== "" ? q[z2]["trim"]() : void 0, t2 = s(a5(523)), u2 = s(a5(575)), w2 = s(a5(542));
  if (t2 === void 0 || u2 === void 0) return void 0;
  const y = w2 === void 0 ? {} : { "comentario": w2 };
  if (q[a5(559)] === "gate") {
    const z2 = s(a5(544)), A = q["eleccion"];
    if (z2 === void 0 || !tg[a5(496)](A)) return void 0;
    const B = A;
    if (ti["includes"](B) && w2 === void 0) return void 0;
    return { "tipo": "gate", "unidad": t2, "gate": z2, "huella": u2, "eleccion": B, ...y };
  }
  if (q[a5(559)] === "confirmacion") {
    const C = q["veredictos"];
    if (typeof C !== a5(551) || C === null) return void 0;
    const D = {};
    for (const [E, F] of Object[a5(536)](C)) {
      if (F !== "si" && F !== "no" && F !== "despues") return void 0;
      D[E] = F;
    }
    if (Object["keys"](D)[a5(543)] === 0 || Object["values"](D)[a5(496)]("no") && w2 === void 0) return void 0;
    return { "tipo": a5(581), "unidad": t2, "huella": u2, "veredictos": D, ...y };
  }
  if (q["tipo"] === "delegacion") {
    const G = s(a5(527)), H = q[a5(534)];
    if (G === void 0 || H !== a5(552) && H !== a5(509)) return void 0;
    return { "tipo": "delegacion", "unidad": t2, "huella": u2, "hasta": G, "eleccion": H, ...y };
  }
  if (q["tipo"] === a5(524)) {
    const I = s(a5(525));
    if (I === void 0 || typeof q["confirma"] !== "boolean") return void 0;
    return { "tipo": "declaracion", "unidad": t2, "requisito": I, "huella": u2, "confirma": q["confirma"], ...y };
  }
  return void 0;
}
async function h(p2) {
  const a6 = b, q = "panel-" + randomBytes(4)[a6(492)]("hex");
  let r2 = 0;
  const s = createServer((t2, u2) => {
    const a8 = a6;
    void (async () => {
      const a7 = b, v = (t2["headers"][a7(497)] ?? "")["toLowerCase"]();
      if (v !== "127.0.0.1:" + r2 && v !== a7(489) + r2) return f(u2, 403, { "error": "solo desde esta m\xE1quina" });
      const w2 = new URL(t2["url"] ?? "/", "http://" + v);
      if (t2[a7(533)] === "GET" && w2[a7(588)] === "/") {
        u2[a7(548)](200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "content-security-policy": "default-src 'self'; style-src 'unsafe-inline'; script-src 'unsafe-inline'" }), u2[a7(484)](i);
        return;
      }
      if (t2[a7(533)] === "GET" && w2[a7(588)] === a7(594)) {
        const C = { "arketum": a7(531), "huella": p2["huella"] ?? "", "pid": process["pid"] };
        return f(u2, 200, C);
      }
      if (t2[a7(533)] === a7(547) && w2["pathname"] === a7(500)) {
        const D = p2["detener"] === void 0 ? void 0 : await p2["detener"]["clave"]();
        if (p2[a7(503)] === void 0 || D === void 0 || D === "" || t2["headers"][a7(573)] !== D) return f(u2, 401, { "error": "falta la clave del panel" });
        f(u2, 200, { "detenido": !![] }), setImmediate(p2[a7(503)]["alDetener"]);
        return;
      }
      const x2 = typeof t2["headers"][a7(556)] === "string" ? t2["headers"][a7(556)] : void 0, y = x2 ?? (t2["method"] === "GET" ? w2[a7(574)][a7(565)]("t") ?? void 0 : void 0), z2 = y === void 0 || y === "" ? void 0 : await p2["raizDe"](y);
      if (z2 === void 0) return f(u2, 401, { "error": "falta el token del panel, o no es el de ning\xFAn proyecto de esta m\xE1quina" });
      const A = await vO(z2);
      if (A !== void 0) return f(u2, 409, { "error": A });
      const B = await yP(z2);
      if (B === null) return f(u2, 404, { "error": "aqu\xED no hay un proyecto de Arketum (`.arketum/proyecto.yaml`)" });
      if (a7(561) in B) return f(u2, 500, { "error": B["negativa"] });
      if (t2[a7(533)] === a7(546) && w2["pathname"] === "/api/estado") {
        const [E, F, G, H, I] = await yr(() => Promise["all"]([dE(z2, B[a7(483)], (/* @__PURE__ */ new Date())[a7(576)]()), eD(z2, B["manifiesto"]), dJ(z2), cK(z2, B["manifiesto"]), cU(z2, B[a7(483)])])), J = Bi(await Bg()), K = Bj();
        return f(u2, 200, { "estado": E, ...F, "historial": G, "integraciones": { "cuentas": H[a7(510)]["cuentas"], "lineas": H[a7(516)] }, "prd": I, ...J === void 0 ? {} : { "identidad": J }, ...K === void 0 ? {} : { "propuesta": K } });
      }
      if (t2[a7(533)] === "POST" && w2["pathname"] === "/api/identidad") {
        let L;
        try {
          L = JSON[a7(495)](await e(t2));
        } catch {
          return f(u2, 400, { "error": "no es JSON" });
        }
        const M = typeof L[a7(488)] === a7(567) ? L["soy"][a7(504)]()["slice"](0, 200) : "";
        if (M === "") return f(u2, 400, { "error": a7(570) });
        const N = M["includes"]("@") && !/\s/[a7(526)](M) ? { "correo": M } : { "nombre": M };
        return await Bh(N), f(u2, 200, { "identidad": Bi(N) });
      }
      if (t2[a7(533)] === a7(547) && w2["pathname"] === a7(501)) {
        let O;
        try {
          O = JSON[a7(495)](await e(t2));
        } catch {
          return f(u2, 400, { "error": "no es JSON" });
        }
        if (typeof O[a7(498)] !== "boolean") return f(u2, 400, { "error": "elige \xAB" + mj["si"] + a7(513) + mj["no"] + "\xBB" });
        const P = typeof O["comentario"] === "string" ? O[a7(542)]["trim"]()[a7(577)](0, 2e3) : "";
        if (await AS() === void 0) return f(u2, 200, { "linea": "  \xB7 telemetr\xEDa: ya estaba decidida (o est\xE1 apagada en esta m\xE1quina); no se registra." });
        const Q = await AU(O["acepta"], P === "" ? void 0 : P, Bi(await Bg()), a7(531));
        return f(u2, 200, { "linea": Q });
      }
      if (t2[a7(533)] === a7(547) && w2["pathname"] === a7(562)) {
        let R;
        try {
          R = JSON[a7(495)](await e(t2));
        } catch {
          return f(u2, 400, { "error": a7(512) });
        }
        const S = typeof R["id"] === a7(567) ? R["id"]["trim"]() : "";
        if (R[a7(580)] !== void 0) {
          const W = typeof R[a7(580)] === "string" ? R[a7(580)][a7(504)]() : "";
          if (S === "" || W === "") return f(u2, 400, { "error": "escribe tu respuesta" });
          if (W[a7(543)] > d) return f(u2, 400, { "error": a7(586) + W[a7(543)] + " de " + d + a7(554) });
          const X = await cz(z2, q, S, W, Bi(await Bg()));
          return f(u2, "error" in X ? 400 : 200, X);
        }
        const T = typeof R["motivo"] === "string" ? R[a7(596)]["trim"]()[a7(577)](0, 2e3) : "";
        if (S === "" || T === "") return f(u2, 400, { "error": a7(590) });
        const U = Bi(await Bg());
        if (U === void 0) return f(u2, 400, { "error": a7(514) });
        const V = await cG(z2, q, S, T, U);
        return f(u2, a7(502) in V ? 400 : 200, V);
      }
      if (t2["method"] === a7(547) && w2["pathname"] === a7(537)) {
        let Y;
        try {
          Y = JSON["parse"](await e(t2));
        } catch (a0) {
          return f(u2, a0["message"] === "demasiado grande" ? 413 : 400, { "error": a0[a7(493)] === a7(515) ? a7(494) : "no es JSON" });
        }
        const Z = g2(Y);
        if (Z === void 0) return f(u2, 400, { "error": "la respuesta no est\xE1 completa (con \xABajustar\xBB o \xABrechazar\xBB, y con un \xABno\xBB, hace falta el comentario)" });
        return f(u2, 200, await eE(z2, B[a7(483)], q, Z));
      }
      f(u2, 404, { "error": a7(553) });
    })()["catch"]((v) => f(u2, 500, { "error": v instanceof Error ? v[a8(493)] : String(v) }));
  });
  return await new Promise((t2, u2) => {
    const a9 = a6;
    s["once"]("error", u2), s["listen"](p2["puerto"], a9(490), () => t2());
  }), r2 = s[a6(530)]()["port"], { "puerto": r2, "cerrar": () => new Promise((t2) => {
    const aa = a6;
    s[aa(520)](() => t2()), s["closeAllConnections"]();
  }) };
}
var i = ab(517) + JSON["stringify"](th) + ab(519) + JSON[ab(595)](mj) + ab(539) + JSON["stringify"](lb) + `;
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
  const ac = ab, p2 = zd(join(yN(), ".arketum", "panel.log"));
  spawn(process[ac(550)], [fileURLToPath(new URL(ac(532), import.meta.url)), ac(485)], { "detached": !![], "windowsHide": !![], "stdio": ["ignore", p2, p2], "env": process[ac(545)] })[ac(587)]();
}
async function l2() {
  const ad = ab, p2 = l(await g());
  await r();
  try {
    const q = await h({ "puerto": p2, "raizDe": t, "huella": await w(), "detener": { "clave": async () => (await g()[ad(569)](() => ({ "proyectos": [] })))["clave"], "alDetener": () => void q[ad(506)]()["then"](() => process[ad(499)](0)) } });
  } catch (r2) {
    if (r2["code"] === ad(560)) return process["stderr"][ad(538)](ad(566) + p2 + ad(591)), 1;
    throw r2;
  }
  return process[ad(597)]["write"]((/* @__PURE__ */ new Date())["toISOString"]() + ad(583) + p2 + "/ (pid " + process["pid"] + "). Solo responde en esta m\xE1quina.\n"), await new Promise(() => void 0);
}
var m = async () => l(await g()[ab(569)](() => ({ "proyectos": [] })));
async function n(r2) {
  const ae = ab, s = r2 ?? await m(), t2 = await u(s);
  if (t2["estado"] !== "arketum") return process[ae(597)][ae(538)](t2[ae(535)] === "libre" ? ae(555) + s + ".\n" : ae(540) + s + ae(511)), 0;
  if (!await x(s)["catch"](() => ![])) return process["stderr"][ae(538)]("arketum-panel: el panel del puerto " + s + ae(585) + t2["salud"]["pid"] + ") no acept\xF3 detenerse: la clave de `~/.arketum/panel.yaml` no es la suya o el registro no se puede leer. Ci\xE9rralo con la herramienta del sistema.\n"), 1;
  return process[ae(597)][ae(538)](ae(592) + t2["salud"][ae(482)] + ae(578)), 0;
}
async function o(p2) {
  const af = ab;
  if (p2[af(543)] === 1 && p2[0] === af(485)) return l2();
  if (p2[af(543)] === 1 && p2[0] === "--detener") return n();
  let q, s;
  for (let v = 0; v < p2["length"]; v++) {
    const w2 = p2[v];
    if (w2 === af(564)) {
      const x2 = p2[++v] ?? "", y = /^\d+$/["test"](x2) ? Number(x2) : NaN;
      if (!Number["isInteger"](y) || y < 1 || y > 65535) return process["stderr"]["write"](af(507)), 2;
      s = y;
    } else {
      if (w2[af(529)]("-") || q !== void 0) return process[af(572)][af(538)](j), 2;
      else q = resolve(w2);
    }
  }
  q ??= process["cwd"]();
  if (!xU(q)) return process[af(572)][af(538)]("arketum-panel: en " + q + af(549)), 2;
  if (s !== void 0) {
    const z2 = await m();
    if (z2 !== s && (await u(z2))[af(535)] === af(582)) await n(z2);
    await p(s), process["env"]["ARKETUM_PANEL_PUERTO"] !== void 0 && Number(process[af(545)]["ARKETUM_PANEL_PUERTO"]) !== s && process["stderr"][af(538)]("arketum-panel: el puerto " + s + " queda fijado, pero `ARKETUM_PANEL_PUERTO` (" + process["env"][af(593)] + af(568));
  }
  const t2 = await z(q, { "lanzar": k, "huella": await w() });
  if (af(589) in t2) return process["stderr"][af(538)]("arketum-panel: " + t2[af(589)] + "\n"), 1;
  const u2 = t2["como"] === "ya_corria" ? af(541) : t2["como"] === af(558) ? af(521) : "levantado";
  return process["stdout"][af(538)](af(481) + q + " (" + u2 + "):\n  " + t2["url"] + "\nSolo responde en esta m\xE1quina. Queda corriendo aparte; `arketum-panel --detener` lo cierra.\n"), 0;
}
o(process["argv"]["slice"](2))["then"]((p2) => {
  const ag = ab;
  process[ag(486)] = p2;
}, (p2) => {
  const ah = ab;
  process["stderr"][ah(538)]("arketum-panel: " + (p2 instanceof Error ? p2["message"] : String(p2)) + "\n"), process["exitCode"] = 1;
});
