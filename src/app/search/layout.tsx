import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomSearchBox } from "../components/SearchBox";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section className="bg-white flex flex-col justify-between h-screen">
                <nav className="bg-primary  px-5 py-1 flex sm:gap-10 sm:items-center sm:px-20 sm:flex-row flex-col">
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
                                target="_blank">
                                <Image
                                    className="p-2 bg-white rounded-full"
                                    src="/assets/icons/instagram.svg"
                                    height={55}
                                    width={55}
                                    alt=""
                                />
                            </Link>
                            <Link
                                href="https://www.facebook.com/p/Winner-Filtros-100031039042106/"
                                target="_blank">
                                <Image
                                    className="p-2 bg-white rounded-full"
                                    src="/assets/icons/facebook.svg"
                                    height={55}
                                    width={55}
                                    alt=""
                                />
                            </Link>
                            <Link href="" target="_blank">
                                <Image
                                    className="p-2 bg-white rounded-full"
                                    src="/assets/icons/whatsapp.svg"
                                    height={55}
                                    width={55}
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                    <CustomSearchBox />
                    <div className=" gap-2 hidden sm:order-3 sm:flex sm:visible">
                        <Link href="https://www.instagram.com/winnerfiltros/" target="_blank">
                            <Image
                                className="p-2 bg-white rounded-full"
                                src="/assets/icons/instagram.svg"
                                height={55}
                                width={55}
                                alt=""
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com/p/Winner-Filtros-100031039042106/"
                            target="_blank">
                            <Image
                                className="p-2 bg-white rounded-full"
                                src="/assets/icons/facebook.svg"
                                height={55}
                                width={55}
                                alt=""
                            />
                        </Link>
                        <Link href="" target="_blank">
                            <Image
                                className="p-2 bg-white rounded-full"
                                src="/assets/icons/whatsapp.svg"
                                height={55}
                                width={55}
                                alt=""
                            />
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
