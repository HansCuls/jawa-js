import fs from 'fs-extra';
export declare const tulis: (pertanyaan?: string) => Promise<string>;
interface Tampilna {
    rek: typeof console.log;
    kliru: typeof console.error;
    elingo: typeof console.warn;
    info: typeof console.info;
    mriksa: typeof console.debug;
    jejak: typeof console.trace;
    tabel: typeof console.table;
    njaen: typeof console.assert;
    resik: typeof console.clear;
    itung: typeof console.count;
    kelompok: typeof console.group;
    rampungKelompok: typeof console.groupEnd;
}
interface Cara {
    minggat: typeof process.exit;
    saiki: typeof process.cwd;
    kahanan: NodeJS.ProcessEnv;
    daftarke: string[];
}
interface Kulo {
    macaFile: typeof fs.readFile;
    nulisFile: typeof fs.writeFile;
    gaweFile: typeof fs.ensureFile;
    hapus: typeof fs.unlink;
    hapusNoKabeh: typeof fs.remove;
    gaweFolder: typeof fs.mkdir;
    macaFolder: typeof fs.readdir;
    nyalin: typeof fs.copy;
    mindah: typeof fs.move;
    gaweknoFolder: typeof fs.ensureDir;
    kosongkeFolder: typeof fs.emptyDir;
    macaFileSync: typeof fs.readFileSync;
    nulisFileSync: typeof fs.writeFileSync;
    hapusSync: typeof fs.unlinkSync;
    hapusNoKabehSync: typeof fs.removeSync;
    gaweFolderSync: typeof fs.mkdirSync;
    macaFolderSync: typeof fs.readdirSync;
    gaweFileSync: typeof fs.ensureFileSync;
    gaweknoFolderSync: typeof fs.ensureDirSync;
    kosongkeFolderSync: typeof fs.emptyDirSync;
    macaJson: typeof fs.readJson;
    nulisJson: typeof fs.writeJson;
    nulisJsonSync: typeof fs.writeJsonSync;
    macaJsonSync: typeof fs.readJsonSync;
    tulisnoJson: typeof fs.outputJson;
    tulisnoJsonSync: typeof fs.outputJsonSync;
}
export declare const tampilna: Tampilna;
export declare const cara: Cara;
export declare const kulo: Kulo;
export declare const werna: any;
export declare const wernaHex: (teks: string, kodeHex: string) => string;
export declare const latarHex: (teks: string, kodeHex: string) => string;

declare global {
  var werna: any;
  var wernaHex: (teks: string, kodeHex: string) => string;
  var latarHex: (teks: string, kodeHex: string) => string;
}

export {};
