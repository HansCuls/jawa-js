export declare function gabungke<T>(this: T[]): T[];
export declare function goleki<T>(this: T[], item: T): number;
export declare function golekiAkhir<T>(this: T[], item: T): number;
export declare function saben<T>(this: T[], callback: (nilai: T, indeks: number, array: T[]) => void): void;
export declare function reduksi<T>(this: T[], callback: (akumulasi: T, nilai: T, indeks: number, array: T[]) => T, awal?: T): T;
export declare function reduksiMundur<T>(this: T[], callback: (akumulasi: T, nilai: T, indeks: number, array: T[]) => T, awal?: T): T;
export declare function indeksGolek<T>(this: T[], callback: (nilai: T, indeks: number, array: T[]) => boolean): number;
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
