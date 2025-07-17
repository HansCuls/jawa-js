"use strict";
// Fungsi kanggo ngowahi nilai dadi tipe tartamtu
Object.defineProperty(exports, "__esModule", { value: true });
exports.larik = exports.biner = exports.pecahan = exports.utuh = void 0;
// Konversi dadi integer
exports.utuh = parseInt;
// Konversi dadi string
const tulisan = String;
// Konversi dadi float (pecahan)
exports.pecahan = parseFloat;
// Konversi dadi boolean
exports.biner = Boolean;
// Konversi dadi array
const larik = function (nilai) {
    return Array.isArray(nilai) ? nilai : [nilai];
};
exports.larik = larik;
// Pasang ke global supaya bisa langsung dipakai
global.utuh = exports.utuh;
global.tulisan = tulisan;
global.pecahan = exports.pecahan;
global.biner = exports.biner;
global.larik = exports.larik;
//# sourceMappingURL=typechange.js.map