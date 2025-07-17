"use strict";
// Definisi fungsi-fungsi array versi Jawa Latin
Object.defineProperty(exports, "__esModule", { value: true });
exports.gabungke = gabungke;
exports.goleki = goleki;
exports.golekiAkhir = golekiAkhir;
exports.saben = saben;
exports.reduksi = reduksi;
exports.reduksiMundur = reduksiMundur;
exports.indeksGolek = indeksGolek;
function gabungke() {
    return this.concat();
}
function goleki(item) {
    return this.indexOf(item);
}
function golekiAkhir(item) {
    return this.lastIndexOf(item);
}
function ngemot(item) {
    return this.includes(item);
}
function saben(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
function reduksi(callback, awal) {
    let akumulasi = awal !== undefined ? awal : this[0];
    for (let i = awal !== undefined ? 0 : 1; i < this.length; i++) {
        akumulasi = callback(akumulasi, this[i], i, this);
    }
    return akumulasi;
}
function reduksiMundur(callback, awal) {
    let akumulasi = awal !== undefined ? awal : this[this.length - 1];
    for (let i = this.length - 2; i >= 0; i--) {
        akumulasi = callback(akumulasi, this[i], i, this);
    }
    return akumulasi;
}
function indeksGolek(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
            return i;
    }
    return -1;
}
// Tambahkan ke prototype array
Array.prototype.gabungke = gabungke;
Array.prototype.goleki = goleki;
Array.prototype.golekiAkhir = golekiAkhir;
Array.prototype.ngemot = ngemot;
Array.prototype.saben = saben;
Array.prototype.reduksi = reduksi;
Array.prototype.reduksiMundur = reduksiMundur;
Array.prototype.indeksGolek = indeksGolek;
//# sourceMappingURL=array.js.map