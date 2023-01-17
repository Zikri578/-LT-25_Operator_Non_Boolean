// membuat variabel person yang valuenya bernilai objek
let person = {
    firstname: "Alexander",
    lastname: "Haposan",
}

// membuat sebuah variabel nama untuk memanggil variabel person yang sudah dibuat
// penjelasan dibawah ini, ketika objek diatas memiliki value nilai ada semua maka yang akan dipanggil yaitu yang value yang pertama, maka output ini akan menampilkan : Alexander
let nama = person.firstname || person.lastname;

// menampilkan output di console
console.info(nama);


/*
*   Falsy   
*/
// membuat variabel anggota yang valuenya bernilai objek
let anggota = {
    namadepan: "",
    namabelakang: "Picasso",
}

// membuat sebuah variabel hasil untuk memanggil variabel person yang sudah dibuat
// penjelasan dibawah ini, ketika objek diatas ada string kosong maka akan diambil data kedua, maka output ini akan menampilkan : Picasso
let hasil = anggota.namadepan || anggota.namabelakang;
console.info(hasil);

/*
*   Nullish_Coalesting_Operator  
*/
// membuat variabel orang yang valuenya bernilai objek
let orang = {
    depan: "",
    belakang: "hahaha",
}

// membuat sebuah variabel result untuk memanggil variabel orang yang sudah dibuat
// penjelasan dibawah ini, ketika objek diatas memakai nullish coalesting operator yaitu : ??, maka output ini akan menampilkan : (tidak ada) 
let result = orang.depan ?? orang.belakang;
console.info(result);

/*
*   Truthy
*/
// membuat sebuah variabel peope yang valuenya bernilai objek
let people = {
    name: "",
    born: "australia",
};

// membuat sebuah variabel penduduk untuk memanggil variabel people yang sudah dibuat
// penjelasan dibawah ini, ketika objek diatas menggunakan metode truthy dan and, maka output ini akan menampilkan : string kosong (tidak ada)
let penduduk = people.name && people.born;
console.info(penduduk);


// dalam operator non boolean ini lanjutan dari materi sebelumnya yaitu ; Truthy and Falsy, didalam console ini string yang ada nilainya yaitu: Hello dengan string yang nilainya kosong
// ketika dalam operasi aritmatika and etika benar bertemu benar maka yang akan ditampilkan yaitu benar. maka output ini akan menampilkan string kosong (tidak ada). 
console.info("hello" && "");

// dalam operator non boolean ini lanjutan dari materi sebelumnya yaitu ; Truthy and Falsy, didalam console ini string yang tidak  ada nilainya yaitu: '' dan array kosong []
// berdasarkan hasil ini, ketika string kosong bertemu dengan array kosong, maka data yang akan ditampilkan yaitu : string kosong (tidak ada)
console.info('' && []);

// didalam materi truthy and falsy ini, dimana truthy akan bernilai benar ketika ada valuenya : "hello", 1, objek kosong atau {}, dan array kosong atau []
// berdarkan hasil ini ketika ada data yang string kosong dan string value, maka data yang akan ditampilkan yaitu : NOL
console.info("0" && "NOL");