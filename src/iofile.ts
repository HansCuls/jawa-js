import readline from 'readline';
import fs from 'fs-extra';
import chalk from 'chalk';


// newline global
(global as any).end = '\n';

// tulis() → untuk input dari user
export const tulis = async (pertanyaan = ""): Promise<string> => {
  const rl = readline.createInterface({
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
  kuning: 'yellow',
  ireng: 'black',
  ungu: 'magenta',
  abuAbu: 'gray',
  putih: 'white',
  biru: 'blue',
  ciyan: 'cyan'
};

function gaweWerna(path: string[] = []): any {
  const handler: ProxyHandler<any> = {
    get(_, prop: string) {
      const kabeh = { ...warnaJawa, ...gayaJawa };
      return gaweWerna([...path, kabeh[prop]]);
    }
    return (teks: string) => {
      const fungsi = path.reduce((c, p) => c[p], chalk);
      return fungsi(teks);
    }
  };
  return new Proxy({}, handler);
}

// ✅ Type untuk tampilna
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

// ✅ Type untuk cara
interface Cara {
  minggat: typeof process.exit;
  saiki: typeof process.cwd;
  kahanan: NodeJS.ProcessEnv;
  daftarke: string[];
}

// ✅ Type untuk kulo
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

// console.log lan bebature
export const tampilna: Tampilna = {
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
export const cara: Cara = {
  minggat: process.exit,
  saiki: process.cwd,
  kahanan: process.env,
  daftarke: process.argv,
};

// fs-extra lan bebature
export const kulo: Kulo = {
  // Gawe file
  macaFile: fs.readFile,
  nulisFile: fs.writeFile,
  gaweFile: fs.ensureFile,
  hapus: fs.unlink,
  hapusNoKabeh: fs.remove,
  gaweFolder: fs.mkdir,
  macaFolder: fs.readdir,
  nyalin: fs.copy,
  mindah: fs.move,
  gaweknoFolder: fs.ensureDir,
  kosongkeFolder: fs.emptyDir,

  macaFileSync: fs.readFileSync,
  nulisFileSync: fs.writeFileSync,
  hapusSync: fs.unlinkSync,
  hapusNoKabehSync: fs.removeSync,
  gaweFolderSync: fs.mkdirSync,
  macaFolderSync: fs.readdirSync,
  gaweFileSync: fs.ensureFileSync,
  gaweknoFolderSync: fs.ensureDirSync,
  kosongkeFolderSync: fs.emptyDirSync,

  macaJson: fs.readJson,
  nulisJson: fs.writeJson,
  nulisJsonSync: fs.writeJsonSync,
  macaJsonSync: fs.readJsonSync,
  tulisnoJson: fs.outputJson,
  tulisnoJsonSync: fs.outputJsonSync,
};

export const werna = gaweWerna();
export const wernaHex = (teks: string, hex: string) => chalk.hex(hex)(teks);
export const latarHex = (teks: string, hex: string) => chalk.bgHex(hex)(teks);

// taruh di global
(globalThis as any).tampilna = tampilna;
(globalThis as any).tulis = tulis;
(globalThis as any).cara = cara;
(globalThis as any).kulo = kulo;
(globalThis as any).ngenteniRek = setTimeout;
(globalThis as any).baleniRek = setInterval;
(globalThis as any).pragatRek = clearTimeout;
(globalThis as any).wisRek = clearInterval;
(globalThis as any).werna = werna;
(globalThis as any).wernaHex = wernaHex;
(globalThis as any).latarHex = latarHex;