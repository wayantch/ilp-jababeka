import React from "react";
import Navbar from "./components/Navbar";
import { TiArrowSortedDown } from "react-icons/ti";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";
import Gallery from "./components/Galery";

const App = () => {
  const REVIEWS = [
    {
      img: "assets/images/image1.jpeg",
    },
    {
      img: "assets/images/image2.jpeg",
    },
    {
      img: "assets/images/image3.jpeg",
    },
    {
      img: "assets/images/image4.jpeg",
    },
    {
      img: "assets/images/image5.jpeg",
    },
    {
      img: "assets/images/image6.jpeg",
    },
    {
      img: "assets/images/image-7.jpeg",
    },
    {
      img: "assets/images/image-8.jpeg",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-auto md:h-[677px] flex flex-col justify-center items-center relative overflow-hidden py-10 md:py-0">
        <img
          src="assets/images/Pattern.svg"
          className="absolute -z-10 w-full h-full object-cover"
          alt="Background Pattern"
        />
        <div className="h-auto md:h-[557px] flex flex-col justify-start items-center gap-6 md:gap-10 px-4 md:px-0">
          <div className="w-full md:w-[1287px] text-center">
            <span className="text-[#2c4cac] text-4xl md:text-[64px] font-bold font-['Merriweather']">
              THE MOST{" "}
            </span>
            <span className="text-[#ffb63f] text-4xl md:text-[64px] font-bold font-['Merriweather']">
              POWERFUL{" "}
            </span>
            <span className="text-[#2c4cac] text-4xl md:text-[64px] font-bold font-['Merriweather']">
              STUDY WITH <br />
              INTERNATIONAL LANGUAGE PROFESSIONAL
            </span>
          </div>
          <div className="w-full md:w-[470px] text-center text-[#838383] text-sm md:text-base font-normal font-['Roboto'] tracking-tight">
            "Program belajar bahasa dengan pendekatan praktis & interaktif.{" "}
            <br />
            Kuasai bahasa Inggris, Jepang & bahasa asing lainnya dengan efektif
            di ILP."
          </div>
          <div className="flex flex-col justify-start items-center mt-6 md:mt-10">
            <div className="w-full md:w-auto shadow-[0px_2px_12px_0px_rgba(0,0,0,0.14)] flex flex-col md:flex-row justify-center items-center">
              {/* <input
                type="email"
                placeholder="Masukkan email anda disini!"
                className="w-full md:w-[400px] px-4 py-3 md:pl-6 md:pr-[140px] md:py-5 bg-white rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none border border-[#aaaaaa]/40 text-center md:text-left text-[#aaaaaa] text-sm md:text-base font-normal font-['Roboto'] tracking-tight focus:outline-none"
              /> */}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4zsePoE3QVMrAfg5jFhyB6q8giEtRvu04i0KREeWVeKpwbw/viewform?usp=header_link">
                <button className="w-full md:w-80 px-6 py-3 md:py-5 bg-[#2c4cac] rounded-2xl text-[#ecf0f8] text-sm md:text-base font-normal font-['Roboto'] tracking-tight cursor-pointer">
                  Daftar Sekarang Disini
                </button>
              </a>
            </div>
            {/* <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-10 gap-3">
              <div className="flex -space-x-7">
                {REVIEWS.map((item, index) => (
                  <img
                    key={index}
                    className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-full shadow-[0px_8px_12px_0px_rgba(0,0,0,0.24)] border border-[#ecf0f8]/50"
                    src={item.img}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="flex items-center gap-2">
                  ⭐⭐⭐⭐⭐
                  <span className="text-black text-sm font-light font-['Roboto'] tracking-tight">
                    4,9
                  </span>
                </div>
                <span className="text-black text-sm font-light font-['Roboto'] tracking-tight">
                  from 200+ reviews
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Choose Section */}
      <div
        id="tentang"
        className="container w-full h-auto md:h-[266px] py-10 md:pt-[60px]  flex justify-center items-center">
        <div className="w-full md:w-[676px] flex flex-col justify-start items-center gap-6">
          <h1 className="text-black text-2xl md:text-[34px] font-bold font-['Merriweather'] text-center">
            Tentang ILP Jababeka Cikarang, Bekasi
          </h1>
          <p className="text-[#838383] text-sm md:text-base font-normal font-['Roboto'] text-center">
            Kami adalah International Language Professional (ILP) yang
            berkomitmen melayani siswa belajar bahasa Inggris dan Jepang
            berkualitas telah dirancang sedemikian rupa mudah dipahami mencapai
            tujuan. tempat belajar, kami menyediakan suasana interaktif dan
            inovatif dengan tenaga pengajar berpengalaman dan bersertifikat
            sesuai bidang dan jurusan keahliannya.
          </p>
        </div>
      </div>

      {/* Branding Section */}
      <div
        id="branding"
        className=" px-6 lg:px-20 w-full h-auto md:h-[760px] py-10 md:py-[60px] flex flex-col md:flex-row justify-center items-center gap-10 md:gap-10">
        <div className="w-full md:w-[650px] flex flex-col justify-start items-start gap-6 ">
          <div className="flex flex-col justify-start items-start gap-5">
            <h2 className="text-black text-2xl md:text-[34px] font-bold font-['Merriweather']">
              Mengapa harus belajar bahasa di ILP?
            </h2>
            <p className="text-[#838383] text-sm md:text-base font-normal font-['Roboto']">
              "Kemajuan teknologi dan era globalisasi bahwa bahasa asing bahasa
              inggris mutlak harus di pahami semua siswa, mahasiswa dan karyawan
              mengingat orang asia yang telah banyak belajar di negara luar
              khususnya negara eropa seperti australia, inggris, new zealand,
              prancis dan negara lainnya. sedangkan di negara asia khususnya
              indonesia di tuntut juga menguasai bahasa inggris sebagai
              presenter TV penerjemah, sekretaris terutama level Manajer
              lainnya"
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            {[
              "General English",
              "Bussiness English",
              "Special Conversation Class",
              "IELTS requirenment to study and work in overseas",
              "Native speaker di hadirkan pada waktu tertentu sesuai kebutuhan",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-3.5">
                <img src="assets/icons/check.svg" width={44} alt="Check Icon" />
                <span className="text-[#070b13] text-sm font-semibold font-['Open Sans']">
                  {text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4zsePoE3QVMrAfg5jFhyB6q8giEtRvu04i0KREeWVeKpwbw/viewform?usp=header"
              className="cursor-pointer">
              <button className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 bg-[#2c4cac] rounded-lg text-[#ecf0f8] text-sm md:text-lg font-bold font-['Roboto'] cursor-pointer">
                Daftarkan dirimu sekarang
              </button>
            </a>
            <a
              href="https://wa.me/6281803061157?text=Halo%20ILP%2C%20saya%20ingin%20konsultasi"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer">
              <button className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 bg-[#849fe4] rounded-lg flex items-center gap-2 text-[#ecf0f8] text-sm md:text-lg font-bold font-['Roboto'] cursor-pointer">
                <img
                  src="assets/icons/logos_whatsapp-icon.svg"
                  width={24}
                  alt="WhatsApp Icon"
                />
                Konsultasikan sekarang
              </button>
            </a>
          </div>
        </div>
        <img
          src="assets/images/images.png"
          alt="Branding Illustration"
          className="w-full md:w-auto mt-10 md:mt-0"
        />
      </div>
      {/* Branding Section */}

      <div className="my-20"></div>

      {/* Keunggulan Section */}
      <div className="container w-full h-auto lg:h-[564px] py-10 lg:py-[60px] flex justify-center items-center">
        <div className="w-full max-w-[1440px] flex flex-col justify-start items-start gap-5">
          {/* Judul */}
          <div className="w-full lg:w-[676px] text-black text-2xl lg:text-[34px] font-bold font-['Merriweather'] tracking-tight">
            Keunggulan belajar bahasa Inggris dan bahasa Jepang di Cikarang By
            International Language Professional
          </div>

          {/* Grid untuk Kartu Keunggulan */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kartu 1 */}
            <div className="p-3 bg-white rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] flex flex-col md:flex-row lg:flex-col justify-start items-start gap-3">
              <img src="assets/icons/lock.svg" alt="Lock Icon" />
              <div className="flex flex-col justify-start items-start gap-1">
                <div className="text-black text-base font-bold font-['Merriweather']">
                  Maksimalkan Potensi belajar mencapai tujuanmu
                </div>
                <div className="text-[#838383] text-sm font-light font-['Roboto'] tracking-tight">
                  "Raih keahlian bahasa dengan metode pembelajaran interaktif
                  yang telah terbukti efektif. Belajar bersama tutor profesional
                  untuk hasil maksimal!"
                </div>
              </div>
            </div>

            {/* Kartu 2 */}
            <div className="p-3 bg-white rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] flex flex-col md:flex-row lg:flex-col justify-start items-start gap-3">
              <img src="assets/icons/book.svg" alt="Book Icon" />
              <div className="flex flex-col justify-start items-start gap-1">
                <div className="text-black text-base font-bold font-['Merriweather']">
                  Bagaimana profil tenaga pengajar?
                </div>
                <div className="text-[#838383] text-sm font-light font-['Roboto'] tracking-tight">
                  “Pengajar telah berpengalaman lebih dari 15 tahun dengan
                  jurusan yang sama"
                </div>
              </div>
            </div>

            {/* Kartu 3 */}
            <div className="p-3 bg-white rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] flex flex-col md:flex-row lg:flex-col justify-start items-start gap-3">
              <img src="assets/icons/noted.svg" alt="Noted Icon" />
              <div className="flex flex-col justify-start items-start gap-1">
                <div className="text-black text-base font-bold font-['Merriweather']">
                  Daftarkan sekarang. Wujudkan rencana mu
                </div>
                <div className="text-[#838383] text-sm font-light font-['Roboto'] tracking-tight">
                  "Wujudkan impian berkarier di dunia global dengan menguasai
                  bahasa asing. Daftar sekarang dan ambil langkah pertama menuju
                  kesuksesan!"
                </div>
              </div>
            </div>

            {/* Kartu 4 */}
            <div className="p-3 bg-white rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] flex flex-col md:flex-row lg:flex-col justify-start items-start gap-3">
              <img src="assets/icons/learn.svg" alt="Learn Icon" />
              <div className="flex flex-col justify-start items-start gap-1">
                <div className="text-black text-base font-bold font-['Merriweather']">
                  Metode belajar inovatif & interaktif
                </div>
                <div className="text-[#838383] text-sm font-light font-['Roboto'] tracking-tight">
                  "Belajar kapan saja dan di mana saja dengan materi berkualitas
                  yang dirancang untuk semua level pembelajaran!"
                </div>
              </div>
            </div>

            {/* Kartu 5 */}
            <div className="p-3 bg-white rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] flex flex-col md:flex-row lg:flex-col justify-start items-start gap-3">
              <img src="assets/icons/student.svg" alt="Student Icon" />
              <div className="flex flex-col justify-start items-start gap-1">
                <div className="text-black text-base font-bold font-['Merriweather']">
                  Fleksibilitas Belajar: Online dan Offline
                </div>
                <div className="text-[#838383] text-sm font-light font-['Roboto'] tracking-tight">
                  "Belajar sesuai dengan kebutuhan! Pilih kelas online yang
                  praktis atau kelas offline dengan interaksi langsung untuk
                  pengalaman belajar yang lebih mendalam."
                </div>
              </div>
            </div>

            {/* Kartu 6 */}
            <div className="p-3 bg-white rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] flex flex-col md:flex-row lg:flex-col justify-start items-start gap-3">
              <img src="assets/icons/open-book.svg" alt="Open Book Icon" />
              <div className="flex flex-col justify-start items-start gap-1">
                <div className="text-black text-base font-bold font-['Merriweather']">
                  Tersedia sertifikat sesuai tingkatan
                </div>
                <div className="text-[#838383] text-sm font-light font-['Roboto'] tracking-tight">
                  "Buktikan kemampuan bahasamu dengan sertifikat professional
                  yang dapat meningkatkan peluang kerja dan pendidikan lebih
                  lanjut!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Keunggulan Section */}

      <div className="my-20"></div>

      {/* Biaya Section */}
      <div
        id="pilihan"
        className="w-full h-auto lg:h-[899px] px-4 lg:px-[34px] pt-10 lg:pt-[60px] pb-10 flex justify-center items-center">
        <div className="w-full max-w-[1440px] flex flex-col justify-start items-center gap-6 lg:gap-10">
          {/* Judul dan Deskripsi */}
          <div className="w-full lg:w-[674px] text-center">
            <h1 className="text-black text-2xl lg:text-[34px] font-bold font-['Merriweather'] tracking-tight">
              Biaya Kursus sangat Terjangkau di Jababeka Cikarang & Sekitarnya
            </h1>
            <p className="mt-4 text-[#838383] text-sm lg:text-base font-normal font-['Roboto'] tracking-tight">
              Harga yang anda keluarkan untuk belajar di kami ini lebih murah
              dibanding dengan kursus yang lain, raih lah masa depan anda
              bersama kami!
            </p>
          </div>

          {/* Konten Utama */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 lg:gap-0">
            {/* Kartu Kiri */}
            <div className="w-full lg:w-[314px] h-auto bg-[#2c4cac] rounded-xl p-6 lg:p-8 flex flex-col justify-start items-start gap-4">
              <h2 className="text-white text-2xl lg:text-[34px] font-bold font-['Merriweather'] tracking-tight">
                Mulai karir disini
              </h2>
              <h3 className="text-white text-xl lg:text-2xl font-bold font-['Merriweather']">
                International Language Professional
              </h3>
              <p className="text-neutral-200 text-sm font-light font-['Roboto'] tracking-tight">
                Tingkatkan keterampilan Bahasa Inggris dan Bahasa Jepang dengan
                karir yang lebih luas? ILP Jababeka Cikarang adalah pilihan
                tepat belajar bahasa dengan metode interaktif dan pengajar
                sampai dengan tingkat mahir. ILP menyediakan belajar bahasa pada
                semua tingkatan, dari pemula sampai tingkat mahir.
                <br />
                Bergabunglah sekarang juga dengan kami kembangkan karirmu dengan
                menguasai bahasa yang lebih baik. Daftar sekarang dan raih
                kesempatan emas untuk masa depan yang lebih cerah!
              </p>
            </div>

            {/* Kartu Kanan */}
            <div className="w-full lg:w-[982px] flex flex-col justify-start items-end gap-6 lg:gap-[129px]">
              {/* Kontak */}
              <div className="flex flex-col justify-center items-end gap-1.5">
                <p className="text-black text-sm lg:text-base font-normal font-['Roboto'] tracking-tight">
                  Ada yang ingin kamu tanyakan?
                </p>
                <a
                  href="#"
                  className="text-[#475ac0] text-sm font-light font-['Roboto'] tracking-tight hover:underline">
                  Kontak Kami
                </a>
              </div>

              {/* Grid Kartu Harga */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Kartu 1 */}
                <div className="w-full h-auto  bg-[#2c4cac] rounded-xl p-6 flex flex-col justify-start items-start gap-4">
                  <h3 className="text-[#ecf0f8] text-xl lg:text-2xl font-bold font-['Merriweather']">
                    Rp 500.000 / Bulan
                  </h3>
                  <p className="text-neutral-200 text-xl font-normal font-['Roboto'] leading-tight">
                    Diskon 10% s/d 20%
                  </p>
                  <p className="text-neutral-200 text-xs font-normal font-['Roboto'] leading-tight">
                    Kelas Reguler
                  </p>
                  <p className="text-[#ecf0f8] text-sm font-semibold font-['Open Sans'] leading-tight">
                    Apa yang anda dapatkan:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "4 x Pertemuan selama 1 bulan",
                      "Lama belajar/level 2-3 bulan",
                      "Sertifikat sesuai level",
                      "Modul gratis",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <img
                          src="assets/icons/openmoji_check-mark.svg"
                          alt="Check Icon"
                        />
                        <span className="text-neutral-200 text-sm font-light font-['Roboto'] tracking-tight">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <img src="/src/assets/images/buku.jpg" width={80} alt="" />
                  <a href="">
                    <button className="w-full px-8 py-2 bg-white rounded-lg text-black text-sm font-normal font-['Roboto'] tracking-tight mt-4 cursor-pointer">
                      Daftar sekarang
                    </button>
                  </a>
                </div>

                {/* Kartu 2 */}
                <div className="w-full h-auto  bg-[#6186e4] rounded-xl p-6 flex flex-col justify-start items-start gap-4">
                  <h3 className="text-[#ecf0f8] text-xl lg:text-2xl font-bold font-['Merriweather']">
                    Rp 700.000 / Bulan
                  </h3>
                  <p className="text-neutral-200 text-xl font-normal font-['Roboto'] leading-tight">
                    Diskon 10% s/d 20%
                  </p>
                  <p className="text-neutral-200 text-xs font-normal font-['Roboto'] leading-tight">
                    Kelas Reguler
                  </p>
                  <p className="text-[#ecf0f8] text-sm font-semibold font-['Open Sans'] leading-tight">
                    Apa yang anda dapatkan:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "8 x Pertemuan selama 1 bulan",
                      "Lama belajar/level 2-3 bulan",
                      "Sertifikat sesuai level",
                      "Modul gratis",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <img
                          src="assets/icons/openmoji_check-mark.svg"
                          alt="Check Icon"
                        />
                        <span className="text-neutral-200 text-sm font-light font-['Roboto'] tracking-tight">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <img src="/src/assets/images/buku.jpg" width={80} alt="" />
                  <a href="">
                    <button className="w-full px-8 py-2 bg-white rounded-lg text-black text-sm font-normal font-['Roboto'] tracking-tight mt-4 cursor-pointer">
                      Daftar sekarang
                    </button>
                  </a>
                </div>

                {/* Kartu 3 */}
                <div className="w-full h-auto  bg-[#2c4cac] rounded-xl p-6 flex flex-col justify-start items-start gap-4">
                  <h3 className="text-[#ecf0f8] text-xl lg:text-2xl font-bold font-['Merriweather']">
                    Rp 1.550.000 / Bulan
                  </h3>
                  <p className="text-neutral-200 text-xl font-normal font-['Roboto'] leading-tight">
                    Diskon 10% s/d 20%
                  </p>
                  <p className="text-neutral-200 text-xs font-normal font-['Roboto'] leading-tight">
                    Kelas Private
                  </p>
                  <p className="text-[#ecf0f8] text-sm font-semibold font-['Open Sans'] leading-tight">
                    Apa yang anda dapatkan:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "8 x Pertemuan selama 1 bulan",
                      "Lama belajar/level 2-3 bulan",
                      "Sertifikat sesuai level",
                      "Modul gratis",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <img
                          src="assets/icons/openmoji_check-mark.svg"
                          alt="Check Icon"
                        />
                        <span className="text-neutral-200 text-sm font-light font-['Roboto'] tracking-tight">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <img src="/src/assets/images/buku.jpg" width={80} alt="" />
                  <a href="">
                    <button className="w-full px-8 py-2 bg-white rounded-lg text-black text-sm font-normal font-['Roboto'] tracking-tight mt-4 cursor-pointer">
                      Daftar sekarang
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Biaya Section */}

      <div className="mt-20"></div>
      {/* FAQ Section */}
      <FAQSection />
      {/* FAQ Section */}

      {/* Galery */}
      <Gallery />
      {/* Galery */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  );
};

export default App;
