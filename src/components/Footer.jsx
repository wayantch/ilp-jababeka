import React from "react";

const Footer = () => {
    return (
      <div
        id="kontak"
        className="w-full h-auto pb-10 px-4 lg:px-[267px] flex justify-center items-center">
        <div className="w-full max-w-[1440px] flex flex-col justify-start items-center gap-10">
          {/* Logo */}
          <div className="relative">
            {/* <img src="assets/images/Logo.png" alt="Logo" /> */}
            <h1 className="text-primary text-3xl font-bold font-['Roboto']">
              International Language Professional
            </h1>
          </div>

          {/* Konten Utama */}
          <div className="w-full flex flex-col justify-start items-center gap-10">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.893697204601!2d107.1829005520907!3d-6.277704651652797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6984b196d0bf83%3A0xe772c26444e2fde3!2sRuko%20Pinangsia!5e0!3m2!1sid!2sid!4v1740843823539!5m2!1sid!2sid"
              width="100%"
              height="200"></iframe>

            {/* Konten Teks dan Ikon */}
            <div className="w-full flex flex-col justify-start items-center gap-8">
              {/* <div className="flex gap-6">
                {[
                  { img: "assets/icons/logos_facebook.svg" },
                  {
                    img: "assets/icons/logos_whatsapp-icon-footer.svg",
                  },
                  {
                    img: "assets/icons/skill-icons_instagram.svg",
                  },
                  {
                    img: "assets/icons/devicon_linkedin.svg",
                  },
                  { img: "assets/icons/logos_twitter.svg" },
                ].map((item, index) => (
                  <img key={index} src={item.img} alt="Ikon Facebook" />
                ))}
              </div> */}

              {/* Teks Footer */}
              <div className="w-full text-center">
                <p className="opacity-70 text-[#070b13] text-sm font-light font-['Roboto'] tracking-tight">
                  © 2025 Copyright by International Language Professional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;
