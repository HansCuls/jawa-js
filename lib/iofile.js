"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kulo = exports.cara = exports.tampilna = exports.tulis = void 0;
const readline_1 = __importDefault(require("readline"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const chalk_1 = __importDefault(require("chalk"));
exports.latarHex = exports.warnaHex = exports.werna = void 0;
// newline global
global.end = '\n';
// tulis() → untuk input dari user
const tulis = async (pertanyaan = "") => {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(pertanyaan, async (input) => {
            resolve(input.trim());
            rl.close();
        });
    });
};
exports.tulis = tulis;
// console.log lan bebature
exports.tampilna = {
    rek: console.log,
    kliru: console.error,
    elingo: console.warn,
    info: console.info,
    mriksa: console.debug,
    jejak: console.trace,
    tabel: console.table,
    njaen: console.assert,
    resik: console.clear,
    itung: console.count,
    kelompok: console.group,
    rampungKelompok: console.groupEnd,
};
// process.exit lan bebature
exports.cara = {
    minggat: process.exit,
    saiki: process.cwd,
    kahanan: process.env,
    daftarke: process.argv,
};
// fs-extra lan bebature
exports.kulo = {
    // Gawe file
    macaFile: fs_extra_1.default.readFile,
    nulisFile: fs_extra_1.default.writeFile,
    gaweFile: fs_extra_1.default.ensureFile,
    hapus: fs_extra_1.default.unlink,
    hapusNoKabeh: fs_extra_1.default.remove,
    gaweFolder: fs_extra_1.default.mkdir,
    macaFolder: fs_extra_1.default.readdir,
    nyalin: fs_extra_1.default.copy,
    mindah: fs_extra_1.default.move,
    gaweknoFolder: fs_extra_1.default.ensureDir,
    kosongkeFolder: fs_extra_1.default.emptyDir,
    macaFileSync: fs_extra_1.default.readFileSync,
    nulisFileSync: fs_extra_1.default.writeFileSync,
    hapusSync: fs_extra_1.default.unlinkSync,
    hapusNoKabehSync: fs_extra_1.default.removeSync,
    gaweFolderSync: fs_extra_1.default.mkdirSync,
    macaFolderSync: fs_extra_1.default.readdirSync,
    gaweFileSync: fs_extra_1.default.ensureFileSync,
    gaweknoFolderSync: fs_extra_1.default.ensureDirSync,
    kosongkeFolderSync: fs_extra_1.default.emptyDirSync,
    macaJson: fs_extra_1.default.readJson,
    nulisJson: fs_extra_1.default.writeJson,
    nulisJsonSync: fs_extra_1.default.writeJsonSync,
    macaJsonSync: fs_extra_1.default.readJsonSync,
    tulisnoJson: fs_extra_1.default.outputJson,
    tulisnoJsonSync: fs_extra_1.default.outputJsonSync,
};
// chalk
const gayaJawa = {
  kandel: 'bold',
  miring: 'italic',
  garis: 'underline',
  coret: 'strikethrough',
  terang: 'dim',
  transparan: 'hidden',
  kewalik: 'inverse'
};

const warnaJawa = {
  abang: 'red',
  ijo: 'green',
  ireng: 'black',
  ungu: 'magenta',
  abuAbu: 'gray',
  kuning: 'yellow',
  putih: 'white',
  biru: 'blue',
  ciyan: 'cyan',
};

function modifChalk(path = []) {
  const handler = {
    get(_, prop) {
      const kabeh = { ...warnaJawa, ...gayaJawa };
      if (kabeh[prop]) {
        return modifChalk([...path, kabeh[prop]])
      }
      return (teks) => {
        path.reduce((c, p) => c[p], chalk_1.default);
        return fungsi(teks)
      };
    }
  };
  return new Proxy({}, handler);
}

const werna = modifChalk();
exports.werna = werna;
const wernaHex = (teks, hex) => (0, chalk_1.default).hex(hex)(teks);
exports.wernaHex = wernaHex;
const latarHex = (teks, hex) => (0, chalk_1.default).bgHex(hex)(teks);
exports.latarHex = latarHex;

// taruh di global
globalThis.tampilna = exports.tampilna;
globalThis.tulis = exports.tulis;
globalThis.cara = exports.cara;
globalThis.kulo = exports.kulo;
globalThis.ngenteniRek = setTimeout;
globalThis.baleniRek = setInterval;
globalThis.pragatRek = clearTimeout;
globalThis.wisRek = clearInterval;
globalThis.werna = werna;
globalThis.wernaHex = wernaHex;
globalThis.latarHex = latarHex;
//# sourceMappingURL=iofile.js.map