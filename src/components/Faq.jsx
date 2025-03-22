import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-[0px_10px_30px_0px_rgba(0,0,0,0.05)] mb-4 overflow-hidden">
      <div
        className="p-6 flex justify-between items-center cursor-pointer"
        onClick={onClick}>
        <h3 className="text-[#070b13] text-lg font-bold font-['Roboto'] tracking-tight">
          {question}
        </h3>
        <TiArrowSortedDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="px-6 pb-6 text-[#838383] text-base font-normal font-['Inter'] leading-7">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Mengapa harus belajar bahasa Inggris itu penting?",
      answer:
        "Belajar bahasa Inggris penting karena merupakan bahasa international digunakan berbagai negara bahkan di indonesia sebagai bahasa ke 2 dalam bidang bisnis, pendidikan, dan teknologi, kedokteran, media masa, presenter TV, dan penerjemah",
    },
    {
      question:
        "Bagaimana kami meningkatkan potensi anda dalam bahasa Inggris?",
      answer:
        "Materi disesuaikan dengan kebutuhan dan tingkat kemampuan peserta belajar sesuai hasil pretest calon siswa. Setiap kelas akan dibimbing oleh pengajar berpengalaman dan bersertifikat. sebagian tenaga pengajar pernah tinggal di luar negeri sehingga memahami tentang budaya luar negeri. karena belajar bahasa juga belajar budaya karena satu kesatuan",
    },
    {
      question:
        "Usia berapa saja bisa belajar bahasa Inggris di International Language Professional(ILP)?",
      answer:
        "Kami menerima peserta dari berbagai usia, mulai dari SD, SMP, SMA, Mahasiswa, Karyawan serta level Manajer",
    },
    {
      question:
        "Seperti apa metode dan materi pembelajaran yang digunakan International Language Professional?",
      answer:
        "Kami menggunakan metode praktis, interaktif dan komunikatif.",
    },
    {
      question: "Berapa lama sesi kelas akan berlangsung?",
      answer: "Setiap sesi berlangsung selama 90 menit/pertemuan",
    },
    {
      question:
        "Bagaimana sistem pembayaran & metode pembayaran yang tersedia di International Language Professional?",
      answer:
        "Kami menyediakan berbagai metode pembayaran transfer dan tunai.",
    },
  ];

  return (
    <div className="w-full h-auto px-4 lg:px-[198px] pb-[60px] flex justify-center items-center">
      <div className="w-full max-w-[1440px] flex flex-col justify-start items-center">
        {/* Judul */}
        <h1 className="w-full lg:w-[695px] text-center text-[#070b13] text-3xl lg:text-5xl font-bold font-['Merriweather'] mb-10">
          Frequently Ask Questions
        </h1>

        {/* Daftar FAQ */}
        <div className="w-full lg:w-[1043px]">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
