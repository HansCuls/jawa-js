export declare function dawa(this: string): number;
export declare function tulisan(this: string): string;
export declare function gabung(this: string, ...teks: string[]): string;
export declare function subteks(this: string, awal: number, akhir: number): string;
export declare function indeksAkhir(this: string, teks: string): number;
export declare function ngemot(this: string, teks: string): boolean;
export declare function diwiwiti(this: string, teks: string): boolean;
export declare function diakhiri(this: string, teks: string): boolean;
export declare function hurufGedhe(this: string): string;
export declare function hurufCilik(this: string): string;
export declare function potongAwal(this: string): string;
export declare function potongAkhir(this: string): string;
export declare function ganti(this: string, lawas: string, anyar: string): string;
export declare function gantiKabeh(this: string, lawas: string | RegExp, anyar: string): string;
export declare function karakter(this: string, posisi: number): string;
export declare function kodeKarakter(this: string, posisi: number): number;
export declare function bandhingTulisan(this: string, teks: string): number;
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
