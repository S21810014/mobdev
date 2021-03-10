//Timothy Merfry Tiwow

//1 Class

/* a. Buatlah sebuah class bernama orang */
class orang {
    /*  b. Buatlah constructor yang memiliki parameter
        berupa properti yaitu nama dan umur, di dalam
        constructor assign parameter nama ke dalam
        variabel nama dengan keyword this di depan
        variabelnya */
    constructor(nama, umur) {this.nama = nama; this.umur = umur;}

    /*  c. Buatlah method bernama bekerja di luar blok
        kode constructor yang mengembalikan data string
        `${this.nama} sedang bekerja seperti biasa` */
    bekerja() {return `${this.nama} sedang bekerja seperti biasa`;}
}

/*  d. Di luar blok kode class, buatlah sebuah objek bernama
    user1 sebagai instance dari class Orang.
    
    Isi argumen parameter nama dan umur, sesuai dengan 
    nama dan umur anda*/
let user1 = new orang("Timothy Merfry Tiwow", 20);

/*  e. Lakukan console.log() pada method bekerja() melalui
    objek user1 yang telah dibuat sebelumnya.
    
    Cek pada tab Console untuk melihat data*/
console.log(user1.bekerja());

//2 Inheritance

/*  a. Buatlah sebuah class bernama Orang */
class Orang {
    /*  a. Buatlah constructor yang memiliki parameter berupa
        properti yaitu nama dan umur.
        
        Di dalam constructor, assign parameter nama ke dalam
        variabel nama dengan keyword this di depan
        variabelnya. Lalu assign parameter umur ke dalam
        variabel umur dengan keyword this di depan
        variabelnya.*/
    constructor(nama, umur) {this.nama = nama; this.umur = umur;}

    /*  b. Buatlah method bernama tidur di luar blok kode
        constructor yang mengembalikan data string
        `${this.nama} sedang tidur`. */
    tidur() {return `${this.nama} sedang tidur`;}

    /*  b. Buatlah method bernama makan di luar blok kode
        constructor yang mengembalikan data string 
        `${this.nama} sedang makan`. */
    makan() {return `${this.nama} sedang makan`;}
}

/*  c. Buatlah class Pelajar yang meng-extends dari class Orang */
class Pelajar extends Orang {
    /*  d. Buatlah constructor yang memiliki parameter nama,
        umur, dan namaSekolah.
        
        e. Di dalam constructor, tambahkan kode method super()
        yang memiliki argumen nama dan umur.
        
        f. Buatlah properti namaSekolah menggunakkan keyword
        this.
        
        g. Assign properti namaSekolah dengan parameter
        namaSekolah yang dimiliki oleh constructor. */
    constructor(nama, umur, namaSekolah) {
        super(nama, umur); 
        this.namaSekolah=namaSekolah;
    }

    /*  h. Di luar blok kode constructor, buatlah method bernama
        belajar yang mengembalikan nilai string `${this.nama}
        belajar di ${this.namaSekolah}` */
    belajar() {return `${this.nama} belajar di ${this.namaSekolah}`;}
}

/*  i. Di luar blok kode class, buatlah instance objek dari class
    Pelajar bernama user. Berikan argumen "John", 17, dan
    "Unklab". */
let user = new Pelajar("John", 17, "Unklab");

/*  j. Lakukan console.log() pada variabel user. Cek pada tab
    Console untuk melihat data. */
console.log(user)