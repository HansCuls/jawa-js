"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dawa = dawa;
exports.tulisan = tulisan;
exports.gabung = gabung;
exports.subteks = subteks;
exports.indeksAkhir = indeksAkhir;
exports.ngemot = ngemot;
exports.diwiwiti = diwiwiti;
exports.diakhiri = diakhiri;
exports.hurufGedhe = hurufGedhe;
exports.hurufCilik = hurufCilik;
exports.potongAwal = potongAwal;
exports.potongAkhir = potongAkhir;
exports.ganti = ganti;
exports.gantiKabeh = gantiKabeh;
exports.karakter = karakter;
exports.kodeKarakter = kodeKarakter;
exports.bandhingTulisan = bandhingTulisan;
function dawa() {
    return this.length;
}
function tulisan() {
    return this.toString();
}
function gabung(...teks) {
    return this.concat(...teks);
}
function subteks(awal, akhir) {
    return this.substring(awal, akhir);
}
function goleki(teks) {
    return this.indexOf(teks);
}
function indeksAkhir(teks) {
    return this.lastIndexOf(teks);
}
function ngemot(teks) {
    return this.includes(teks);
}
function diwiwiti(teks) {
    return this.startsWith(teks);
}
function diakhiri(teks) {
    return this.endsWith(teks);
}
function hurufGedhe() {
    return this.toUpperCase();
}
function hurufCilik() {
    return this.toLowerCase();
}
function potongAwal() {
    return this.trimStart();
}
function potongAkhir() {
    return this.trimEnd();
}
function ganti(lawas, anyar) {
    return this.replace(lawas, anyar);
}
function gantiKabeh(lawas, anyar) {
    return this.replace(lawas, anyar);
}
function karakter(posisi) {
    return this.charAt(posisi);
}
function kodeKarakter(posisi) {
    return this.charCodeAt(posisi);
}
function bandhingTulisan(teks) {
    return this.localeCompare(teks);
}
// Pasang ke prototype
String.prototype.dawa = dawa;
String.prototype.tulisan = tulisan;
String.prototype.gabung = gabung;
String.prototype.subteks = subteks;
String.prototype.goleki = goleki;
String.prototype.indeksAkhir = indeksAkhir;
String.prototype.ngemot = ngemot;
String.prototype.diwiwiti = diwiwiti;
String.prototype.diakhiri = diakhiri;
String.prototype.hurufGedhe = hurufGedhe;
String.prototype.hurufCilik = hurufCilik;
String.prototype.potongAwal = potongAwal;
String.prototype.potongAkhir = potongAkhir;
String.prototype.ganti = ganti;
String.prototype.gantiKabeh = gantiKabeh;
String.prototype.karakter = karakter;
String.prototype.kodeKarakter = kodeKarakter;
String.prototype.bandhingTulisan = bandhingTulisan;
//# sourceMappingURL=string.js.map