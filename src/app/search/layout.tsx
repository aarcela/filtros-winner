import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomSearchBox } from "../components/SearchBox";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="bg-white">
            <nav className="bg-primary flex items-center py-5 gap-80 px-20">
                <Link href="/">
                    <Image src="/assets/winner_logo.svg" alt="logo" width={277} height={53} />
                </Link>
                <CustomSearchBox />
                <div className="flex gap-2">
                    <Link href="https://www.instagram.com/winnerfiltros/">
                        <Image
                            className="p-2 bg-white rounded-full"
                            src="/assets/icons/instagram.svg"
                            height={32}
                            width={32}
                            alt=""
                        />
                    </Link>
                    <Link href="https://www.facebook.com/p/Winner-Filtros-100031039042106/">
                        <Image
                            className="p-2 bg-white rounded-full"
                            src="/assets/icons/facebook.svg"
                            height={35}
                            width={35}
                            alt=""
                        />
                    </Link>
                    <Image
                        className="p-2 bg-white rounded-full"
                        src="/assets/icons/whatsapp.svg"
                        height={32}
                        width={32}
                        alt=""
                    />
                </div>
            </nav>
            <div className="">{children}</div>
            <nav className="bg-primary text-center flex items-center justify-between px-4 py-2">
                <h3 className="text-white ">Filtros Winner - Todos los derechos reservados</h3>
            </nav>
        </section>
    );
}
