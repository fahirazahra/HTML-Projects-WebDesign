/*Membuat Halaman Web dengan HTML & Javascript*/

/*JUDUL*/
document.writeln("<center>");
document.writeln("<hr width=600 color=cyan>");
document.writeln("<h4><u>Universitas Sebelas Maret <i>Proudly Present</i></u></h4>");
document.writeln("<h1>UNS FESTIVAL 2021</h1>");
document.writeln("<h3>26-29 Mei 2021</h3>");
document.writeln("<hr width=600 color=cyan>");
document.writeln("<h3>Selamat Datang!</h3>");
document.writeln("<h4>Laman ini adalah formulir pendaftaran untuk perlombaan 'UNS FEST 2021'<br>yang diadakan oleh Universitas Sebelas Maret, Surakarta.<br><br>Acara perlombaan dikhususkan untuk Mahasiswa dan<br>Mahasiswi Univesitas Sebelas Maret angkatan tahun 2018-2020.<br><br><b>!SELAIN MAHASISWA/I UNS DILARANG UNTUK MENDAFTARKAN DIRI!</b><br><br>Harap lengkapi biodata dibawah ini untuk registrasi perlombaan.</h4>");
document.writeln("<hr width=600 color=lawngreen>");
document.writeln("<hr width=600 color=darkorange>");
document.writeln("<hr width=600 color=fuchsia>");
document.writeln("</center>");

/*FORMULIR*/
function data(){
    var namalengkap = (document.dform.namalengkap.value);
    document.dform.onamalengkap.value = namalengkap;

    var jeniskelamin = (document.dform.jeniskelamin.value);
    document.dform.ojeniskelamin.value = jeniskelamin;

    var nim = (document.dform.nim.value);
    document.dform.onim.value = nim;

    var tempatlahir = (document.dform.tempatlahir.value);
    document.dform.otempatlahir.value = tempatlahir;

    var tgllahir = (document.dform.tgllahir.value);
    document.dform.otgllahir.value = tgllahir;

    var fakultas = (document.dform.fakultas.value);
    document.dform.ofakultas.value = fakultas;

    var prodi = (document.dform.prodi.value);
    document.dform.oprodi.value = prodi;

    var lomba = (document.dform.lomba.value);
    document.dform.olomba.value = lomba

    var kelompok = (document.dform.kelompok.value);
    document.dform.okelompok.value = kelompok;
}