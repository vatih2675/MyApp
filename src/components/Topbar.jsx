import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Topbar() {
    const [tanggalHariIni, setTanggalHariIni] = useState("");
    const [jamBerjalan, setJamBerjalan] = useState("");

    useEffect(() => {
      setInterval(() => {
        let waktu = new Date();
        let hr = waktu.getDay();
        const namaHari = [
          "Minggu",
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
          "Minggu",
        ];
        let hari = namaHari[hr];
        let tgl =
          waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
        let bln = waktu.getMonth();
        const namaBulan = [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember",
        ];
        let bulan = namaBulan[bln];
        let thn = waktu.getFullYear();
        let jam =
          waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
        let menit =
          waktu.getMinutes() < 10
            ? "0" + waktu.getMinutes()
            : waktu.getMinutes();
        let detik =
          waktu.getSeconds() < 10
            ? "0" + waktu.getSeconds()
            : waktu.getSeconds();
        setTanggalHariIni(`${hari}, ${tgl} ${bulan} ${thn}`);
        setJamBerjalan(`${jam}:${menit}:${detik} WITA`);
        // setTahun(waktu.getFullYear());
      }, 1);
    }, []);

  return (
    <nav className="w-full shadow bg-white px-10 sticky top-0 flex justify-between items-center z-10">
      <h1 className="font-bold text-xl cursor-pointer">My App</h1>
      <div className="flex justify-center items-center navlink text-xs">
        <NavLink to="/" className="py-3 px-4 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">Beranda</NavLink>
        {/* <NavLink to="/weather" className="py-3 px-4 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer">Cuaca</NavLink> */}
        <NavLink to="/gold" className="py-3 px-4 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer">Emas</NavLink>
        <NavLink to="/nik" className="py-3 px-4 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer">NIK</NavLink>
        <NavLink to="/address" className="py-3 px-4 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer">Alamat</NavLink>
        <NavLink to="/zodiak" className="py-3 px-4 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer">Zodiak</NavLink>
        <NavLink to="/nationality" className="py-3 px-4 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer">Nasional</NavLink>
        <NavLink to="/school" className="py-3 px-4 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer">Sekolah</NavLink>
        <NavLink to="/bmkg" className="py-3 px-4 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer">BMKG</NavLink>
        <NavLink to="/qr" className="py-3 px-4 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer">QR Code</NavLink>
        <NavLink to="/ftp" className="py-3 px-4 hover:bg-black/70 hover:text-white transition-all duration-300 cursor-pointer">FTP</NavLink>
      </div>
      <div className="flex flex-col justify-center items-end text-xs text-gray-800 font-mono cursor-default">
        <div><i className="bi-calendar3 me-1"></i><span>{tanggalHariIni}</span></div>
        <div><i className="bi-clock me-1"></i><span>{jamBerjalan}</span></div>
      </div>
    </nav>
  )
}


