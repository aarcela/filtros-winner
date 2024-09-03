import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomSearchBox from "../components/SearchBox";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="bg-white">
            <nav className="bg-primary flex items-center justify-between px-4 py-10">
                <Link href="/search">
                    <Image src="/assets/winner_logo.svg" alt="logo" width={277} height={53} />
                </Link>
                {/* <CustomSearchBox></CustomSearchBox> */}
            </nav>
            <div className="">{children}</div>
            <nav className="bg-primary text-center flex items-center justify-between px-4 py-2">
                <h3 className="text-white ">Filtros Winner - Todos los derechos reservados</h3>
            </nav>
        </section>
    );
}
