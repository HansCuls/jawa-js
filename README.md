
### @enzoxavier/jawascript

Gunakake JavaScript nganggo **basa Jawa**

---

## Fungsi Array (Fungsi Saka Larik)

### `gabung` – Nggabungake array
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const hasil = arr1.gabung(arr2); // [1, 2, 3, 4, 5, 6]
```

### `goleki` – Goleki indeks item
```javascript
const arr = [10, 20, 30, 40];
const indeks = arr.goleki(30); // 2
```

### `indeksAkhir` – Goleki saka mburi
```javascript
const arr = [1, 2, 3, 2];
const indeks = arr.indeksAkhir(2); // 3
```

### `ngemot` – Periksa item ana apa ora
```javascript
arr.ngemot(40); // true
```

### `sabenIndex` – ForEach versi Jawa
```javascript
arr.sabenIndex((nilai, indeks) => {
  console.log(indeks, nilai);
});
```

### `reduksi` – Reduce biasa
```javascript
const jumlah = arr.reduksi((a, b) => a + b, 0);
```

### `reduksiMundur` – Reduce saka mburi
```javascript
const hasil = arr.reduksiMundur((a, b) => a + b);
```

### `golekIndeks` – Temokake indeks sesuai kondisi
```javascript
arr.golekIndeks(x => x > 25); // 2
```

---

## Fungsi String (Fungsi Tali Teks)

### `tulisan` – Ubah dadi string
```javascript
const teks = tulisan(123); // "123"
```

### `lambahi` – Ambil panjang string
```javascript
'halo'.lambahi(); // 4
```

### `jodho` – Gabung teks
```javascript
'halo'.jodho(' dunia'); // 'halo dunia'
```

### `subteks` – Ambil substring
```javascript
'hello'.subteks(1, 3); // 'el'
```

### `goleki` – Cari posisi teks
```javascript
'halo dunia'.goleki('dunia'); // 5
```

### `golekiAkhir` – Cari dari belakang
```javascript
'halo dunia dunia'.golekiAkhir('dunia'); // 10
```

### `ngandhut` – Apakah mengandung substring
```javascript
'teks contoh'.ngandhut('contoh'); // true
```

### `diwiwi` – Dimulai dengan
```javascript
'teks'.diwiwi('te'); // true
```

### `pungkasi` – Diakhiri dengan
```javascript
'contoh.js'.pungkasi('.js'); // true
```

### `hurufGedhe` – Ubah ke huruf gedhe
```javascript
'halo'.hurufGedhe(); // 'HALO'
```

### `hurufCilik` – Ubah ke huruf cilik
```javascript
'HALO'.hurufCilik(); // 'halo'
```

### `resikiAwal` – Trim awal
```javascript
'   teks'.resikiAwal(); // 'teks'
```

### `resikiAkhir` – Trim akhir
```javascript
'teks   '.resikiAkhir(); // 'teks'
```

### `ganti` – Ganti teks pisanan
```javascript
'halo dunia'.ganti('dunia', 'jagat'); // 'halo jagat'
```

### `gantiKabeh` – Ganti kabeh match
```javascript
'halo halo'.gantiKabeh(/halo/g, 'hi'); // 'hi hi'
```

### `karakter` – Ambil karakter
```javascript
'teks'.karakter(2); // 'k'
```

### `kodeKarakter` – ASCII kode karakter
```javascript
'A'.kodeKarakter(0); // 65
```

### `bandhingTeks` – Bandingake string
```javascript
'abc'.bandhingTeks('abd'); // -1
```

### `tampilna` – Podo koyo console.log
```javascript
async function prosesData() {
  try {
    tampilna.rek('Proses dimulai!');
    const data = await tulis('Masukkan sesuatu rek: ');
    if (data === '') {
      throw new Error('Input kosong, rek!');
    }
    tampilna.rek(`Data: ${data}`);
  } catch (error) {
    tampilna.kliru(`Kliru rek! ${error}`);
  } finally {
    tampilna.elingo('Proses selesai rek, elingo ojo lali!');
  }
}

prosesData();
```

### `werna` – Warna dasar chalk
```javascript
tampilna.rek(werna.abang.kandel('Hidup jawa')); // Sama seperti chalk.red.bold
```

---

## Tujuan Proyek

Proyek iki digawe kanggo ndhukung **JavaScript nganggo basa Jawa**, supaya sinau coding luwih nyenengake lan luwih deket karo budaya lokal.

---

## Instalasi

```bash
npm install @enzoxavier/jawascript
```

---

## Conto Lain

Cek Channel kulo kanggo deleng contoh rek.

---

## Kontribusi

Pengin mbantu? Monggo kontribusi liwat GitHub utawa hubungi:

- Telegram: [My Telegram](https://t.me/enzo_not_found)  
- Saluran WhatsApp: [My Channel](https://whatsapp.com/channel/0029VawjME90bIdmb6KiSB1n)

---

## Lisensi

Lisensi: [MIT](https://opensource.org/license/mit/)  
Digawe nganggo ati ing Indonesia.
