// Fungsi kanggo ngowahi nilai dadi tipe tartamtu

// Konversi dadi integer
export const utuh = parseInt;

// Konversi dadi string
const tulisan = String;

// Konversi dadi float (pecahan)
export const pecahan = parseFloat;

// Konversi dadi boolean
export const biner = Boolean;

// Konversi dadi array
export const larik = function (nilai: any): any[] {
  return Array.isArray(nilai) ? nilai : [nilai];
};

// Pasang ke global supaya bisa langsung dipakai
(global as any).utuh = utuh;
(global as any).tulisan = tulisan;
(global as any).pecahan = pecahan;
(global as any).biner = biner;
(global as any).larik = larik;