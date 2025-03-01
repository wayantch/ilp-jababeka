import React from "react";

const Footer = () => {
    return (
        <div className="w-full h-auto lg:h-[777px] px-4 lg:px-[267px] flex justify-center items-center">
            <div className="w-full max-w-[1440px] flex flex-col justify-start items-center gap-10">
                {/* Logo */}
                <div className="relative">
                    <img src="assets/images/Logo.png" alt="Logo" />
                </div>

                {/* Konten Utama */}
                <div className="w-full flex flex-col justify-start items-center gap-10">
                    {/* Google Maps Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!3m2!1sid!2sid!4v1740811228548!5m2!1sid!2sid!6m8!1m7!1sorT71NjWRYOgpfdA5oi0ww!2m2!1d-6.277704651652797!2d107.1829005520907!3f35.008491280932475!4f-6.334912367770471!5f0.7820865974627469"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        // allowFullScreen
                        // loading="lazy"
                        // referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Embed"
                    ></iframe>

                    {/* Konten Teks dan Ikon */}
                    <div className="w-full flex flex-col justify-start items-center gap-8">
                        {/* Ikon Facebook */}
                        <div className="flex gap-6">
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
                                <img
                                    key={index}
                                    src={item.img}
                                    alt="Ikon Facebook"
                                />
                            ))}
                        </div>

                        {/* Teks Footer */}
                        <div className="w-full text-center">
                            <p className="opacity-70 text-[#070b13] text-sm font-light font-['Roboto'] tracking-tight">
                                © 2025 Copyright by International Language
                                Professional
                            </p>
                            <p className="opacity-70 text-[#070b13] text-sm font-light font-['Roboto'] tracking-tight">
                                Ronda Sant Pere 52, 08010 Barcelona,
                            </p>
                            <p className="opacity-70 text-[#070b13] text-sm font-light font-['Roboto'] tracking-tight">
                                Inscripción en el Registro Mercantil de
                                Barcelona. Tomo 46606, Folio 37, Hoja 525271.
                            </p>
                        </div>

                        {/* Dua Kolom Teks */}
                        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
                            <div className="w-full lg:w-[400px] opacity-70 text-[#070b13] text-sm font-light font-['Roboto'] tracking-tight">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                                <br />
                                El funcionamiento de la plataforma es muy
                                sencillo. Se debe completar la solicitud, ésta
                                información se envía a las entidades financieras
                                a tiempo real con el fin de que la herramienta
                                compare, negocie y escanee las mejores ofertas.
                                Una vez aceptada la propuesta, se ingresa el
                                dinero directamente en la cuenta del cliente.
                            </div>
                            <div className="w-full lg:w-[400px] opacity-70 text-[#070b13] text-sm font-light font-['Roboto'] tracking-tight">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                                <br />
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
