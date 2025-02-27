import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomSearchBox } from "../components/SearchBox";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section className="bg-white flex flex-col justify-between h-screen">
                <nav className="bg-primary  px-5 py-2 flex sm:gap-10 sm:items-center sm:px-20 sm:flex-row flex-col">
                    <div className="flex gap-10">
                        <Link href="/" className="order-first w-2/3 sm:w-full">
                            <Image
                                src="/assets/winner_logo.svg"
                                alt="logo"
                                width={277}
                                height={53}
                            />
                        </Link>
                        <div className="flex gap-2 sm:hidden w-1/3 mr-10">
                            <Link
                                href="https://www.instagram.com/winnerfiltros/"
                                target="_blank"
                                className="flex items-center justify-center w-7 h-7 border-2 border-black rounded-full hover:scale-110 transition-transform">
                                <FaInstagram size={10} />
                            </Link>
                            <Link
                                href="https://www.facebook.com/p/Winner-Filtros-100031039042106/"
                                target="_blank"
                                className="flex items-center justify-center w-7 h-7 border-2 border-black rounded-full hover:scale-110 transition-transform">
                                <FaFacebookF size={10} />
                            </Link>
                            <Link
                                href=""
                                target="_blank"
                                className="flex items-center justify-center w-7 h-7 border-2 border-black rounded-full hover:scale-110 transition-transform">
                                <FaWhatsapp size={10} />
                            </Link>
                        </div>
                    </div>
                    <CustomSearchBox />
                    <div className=" gap-2 hidden sm:order-3 sm:flex sm:visible">
                        <Link
                            href="https://www.instagram.com/winnerfiltros/"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 border-2 border-black rounded-full hover:scale-110 transition-transform">
                            <FaInstagram size={20} />
                        </Link>
                        <Link
                            href="https://www.facebook.com/p/Winner-Filtros-100031039042106/"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 border-2 border-black rounded-full hover:scale-110 transition-transform">
                            <FaFacebookF size={20} />
                        </Link>
                        <Link
                            href=""
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 border-2 border-black rounded-full hover:scale-110 transition-transform">
                            <FaWhatsapp size={20} />
                        </Link>
                    </div>
                </nav>
                <div className="flex flex-1">{children}</div>
                <nav className="bg-primary text-center flex items-center justify-between px-4 py-2  order-last">
                    <h3 className="text-white ">
                        Filtros Winner - Todos los derechos reservados
                    </h3>
                </nav>
            </section>
        </>
    );
}
