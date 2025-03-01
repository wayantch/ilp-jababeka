import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full bg-white rounded-lg shadow-[0px_10px_30px_0px_rgba(0,0,0,0.05)] mb-4 overflow-hidden">
            <div
                className="p-6 flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
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
    const faqData = [
        {
            question: "Kenapa belajar bahasa Inggris itu penting?",
            answer: "Belajar bahasa Inggris penting karena merupakan bahasa internasional yang digunakan dalam berbagai bidang seperti bisnis, pendidikan, dan teknologi.",
        },
        {
            question:
                "Apa bedanya kursus di tempat kami yaitu International Language Professional dengan tempat kursus yang lain?",
            answer: "Kami menawarkan metode pembelajaran yang interaktif dan pengajar yang berpengalaman serta bersertifikat internasional.",
        },
        {
            question:
                "Bagaimana cara kami International Language Professional meningkatkan potensi kamu dalam bahasa Inggris?",
            answer: "Materi pembelajaran yang disesuaikan dengan kebutuhan dan tingkat kemampuan peserta belajar. Setiap kelas akan dibimbing oleh pengajar berpengalaman dan tersertifikasi internasional.",
        },
        {
            question:
                "Usia berapa saja bisa kursus bahasa Inggris di International Language Professional?",
            answer: "Kami menerima peserta dari berbagai usia, mulai dari anak-anak hingga dewasa.",
        },
        {
            question:
                "Seperti apa metode dan materi pembelajaran yang digunakan International Language Professional?",
            answer: "Kami menggunakan metode pembelajaran yang interaktif dan materi yang dirancang khusus untuk meningkatkan kemampuan bahasa Inggris Anda.",
        },
        {
            question: "Berapa lama sesi kelas akan berlangsung?",
            answer: "Setiap sesi kelas berlangsung selama 90 menit.",
        },
        {
            question:
                "Bagaimana sistem pembayaran & metode pembayaran yang tersedia di International Language Professional?",
            answer: "Kami menyediakan berbagai metode pembayaran, termasuk transfer bank dan pembayaran online.",
        },
    ];

    return (
        <div className="w-full h-auto lg:h-[924px] px-4 lg:px-[198px] pb-[60px] flex justify-center items-center">
            <div className="w-full max-w-[1440px] flex flex-col justify-start items-center">
                {/* Judul */}
                <h1 className="w-full lg:w-[695px] text-center text-[#070b13] text-3xl lg:text-5xl font-bold font-['Merriweather'] mb-10">
                    Frequently Asking Questions
                </h1>

                {/* Daftar FAQ */}
                <div className="w-full lg:w-[1043px]">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
