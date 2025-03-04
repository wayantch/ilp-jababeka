import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <div className="w-full h-[85px] px-4 lg:px-[34px] py-[18px] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] flex justify-between items-center">
        {/* Logo */}
        <div className="relative">
          {/* <img src="assets/images/Logo.png" width={200} alt="" /> */}
          <h1 className="text-primary text-3xl font-bold font-['Roboto']">ILP</h1>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <TiThMenu className="w-6 h-6 cursor-pointer" />
        </div>

        {/* Menu Navigasi (Desktop) */}
        <div className="hidden lg:flex lg:items-center lg:gap-10">
          <div className="flex items-center gap-10">
            <a href="#tentang" className="p-2">
              <div className="text-black text-lg font-normal font-['Roboto'] tracking-tight hover:text-primary">
                Tentang Kami
              </div>
            </a>
            <a href="#branding" className="p-2">
              <div className="text-black text-lg font-normal font-['Roboto'] tracking-tight hover:text-primary">
                Kursus
              </div>
            </a>
            <a href="#pilihan" className="p-2">
              <div className="text-black text-lg font-normal font-['Roboto'] tracking-tight hover:text-primary">
                Pilihan Kursus
              </div>
            </a>
            <a href="#kontak" className="p-2">
              <div className="text-black text-lg font-normal font-['Roboto'] tracking-tight hover:text-primary">
                Kontak
              </div>
            </a>
          </div>
          <a href="#daftar" className="px-12 py-3.5 bg-primary rounded-2xl justify-center items-center flex">
            <div className="text-[#ecf0f8] text-lg font-bold font-['Roboto'] tracking-tight hover:text-primary">
              Daftar Sekarang
            </div>
          </a>
        </div>

        {/* Menu Navigasi (Mobile) */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[85px] left-0 w-full bg-white shadow-lg z-50">
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="p-2">
                <div className="text-black text-lg font-normal font-['Roboto'] tracking-tight hover:text-primary">
                  Kursus
                </div>
              </div>
              <div className="p-2">
                <div className="text-black text-lg font-normal font-['Roboto'] tracking-tight hover:text-primary">
                  Tentang Kami
                </div>
              </div>
              <div className="p-2">
                <div className="text-black text-lg font-normal font-['Roboto'] tracking-tight hover:text-primary">
                  Pilihan Kursus
                </div>
              </div>
              <div className="p-2">
                <div className="text-black text-lg font-normal font-['Roboto'] tracking-tight hover:text-primary">
                  Kontak
                </div>
              </div>
              <div className="px-12 py-3.5 bg-primary rounded-lg justify-center items-center flex">
                <div className="text-[#ecf0f8] text-lg font-bold font-['Roboto'] tracking-tight hover:text-primary">
                  Daftar Sekarang
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default Navbar;
