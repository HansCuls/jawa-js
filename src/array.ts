// Definisi fungsi-fungsi array versi Jawa Latin

export function gabungke<T>(this: T[]): T[] {
  return this.concat();
}

export function goleki<T>(this: T[], item: T): number {
  return this.indexOf(item);
}

export function golekiAkhir<T>(this: T[], item: T): number {
  return this.lastIndexOf(item);
}

function ngemot<T>(this: T[], item: T): boolean {
  return this.includes(item);
}

export function saben<T>(this: T[], callback: (nilai: T, indeks: number, array: T[]) => void): void {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

export function reduksi<T>(this: T[], callback: (akumulasi: T, nilai: T, indeks: number, array: T[]) => T, awal?: T): T {
  let akumulasi: any = awal !== undefined ? awal : this[0];
  for (let i = awal !== undefined ? 0 : 1; i < this.length; i++) {
    akumulasi = callback(akumulasi, this[i], i, this);
  }
  return akumulasi;
}

export function reduksiMundur<T>(this: T[], callback: (akumulasi: T, nilai: T, indeks: number, array: T[]) => T, awal?: T): T {
  let akumulasi: any = awal !== undefined ? awal : this[this.length - 1];
  for (let i = this.length - 2; i >= 0; i--) {
    akumulasi = callback(akumulasi, this[i], i, this);
  }
  return akumulasi;
}

export function indeksGolek<T>(this: T[], callback: (nilai: T, indeks: number, array: T[]) => boolean): number {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return i;
  }
  return -1;
}

// Deklarasi ke global interface Array<T>
declare global {
  interface Array<T> {
    gabungke(): T[];
    goleki(item: T): number;
    golekiAkhir(item: T): number;
    ngemot(item: T): boolean;
    saben(callback: (nilai: T, indeks: number, array: T[]) => void): void;
    reduksi(callback: (akumulasi: T, nilai: T, indeks: number, array: T[]) => T, awal?: T): T;
    reduksiMundur(callback: (akumulasi: T, nilai: T, indeks: number, array: T[]) => T, awal?: T): T;
    indeksGolek(callback: (nilai: T, indeks: number, array: T[]) => boolean): number;
  }
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