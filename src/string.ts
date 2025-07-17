export function dawa(this: string): number {
  return this.length;
}

export function tulisan(this: string): string {
  return this.toString();
}

export function gabung(this: string, ...teks: string[]): string {
  return this.concat(...teks);
}

export function subteks(this: string, awal: number, akhir: number): string {
  return this.substring(awal, akhir);
}

function goleki(this: string, teks: string): number {
  return this.indexOf(teks);
}

export function indeksAkhir(this: string, teks: string): number {
  return this.lastIndexOf(teks);
}

export function ngemot(this: string, teks: string): boolean {
  return this.includes(teks);
}

export function diwiwiti(this: string, teks: string): boolean {
  return this.startsWith(teks);
}

export function diakhiri(this: string, teks: string): boolean {
  return this.endsWith(teks);
}

export function hurufGedhe(this: string): string {
  return this.toUpperCase();
}

export function hurufCilik(this: string): string {
  return this.toLowerCase();
}

export function potongAwal(this: string): string {
  return this.trimStart();
}

export function potongAkhir(this: string): string {
  return this.trimEnd();
}

export function ganti(this: string, lawas: string, anyar: string): string {
  return this.replace(lawas, anyar);
}

export function gantiKabeh(this: string, lawas: string | RegExp, anyar: string): string {
  return this.replace(lawas, anyar);
}

export function karakter(this: string, posisi: number): string {
  return this.charAt(posisi);
}

export function kodeKarakter(this: string, posisi: number): number {
  return this.charCodeAt(posisi);
}

export function bandhingTulisan(this: string, teks: string): number {
  return this.localeCompare(teks);
}

// Tambahkan metode-metode ke prototype String
declare global {
  interface String {
    dawa(): number;
    tulisan(): string;
    gabung(...teks: string[]): string;
    subteks(awal: number, akhir: number): string;
    goleki(teks: string): number;
    indeksAkhir(teks: string): number;
    ngemot(teks: string): boolean;
    diwiwiti(teks: string): boolean;
    diakhiri(teks: string): boolean;
    hurufGedhe(): string;
    hurufCilik(): string;
    potongAwal(): string;
    potongAkhir(): string;
    ganti(lawas: string, anyar: string): string;
    gantiKabeh(lawas: string | RegExp, anyar: string): string;
    karakter(posisi: number): string;
    kodeKarakter(posisi: number): number;
    bandhingTulisan(teks: string): number;
  }
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