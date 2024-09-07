"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Page from "./search/home/page";
import { CustomSearchBox } from "./components/SearchBox";

function HomePage() {
    return (
        <>
            <section className="bg-white min-h-screen flex flex-col justify-between">
                <nav className="bg-primary flex items-center justify-around px-4 py-10 gap-4">
                    <Link href="/search/home">
                        <Image
                            src="/assets/winner_logo.svg"
                            alt="logo"
                            width={277}
                            height={53}
                        />
                    </Link>
                    <CustomSearchBox />
                </nav>
                <Page />
                <nav className="bg-primary text-center flex items-center justify-between px-4 py-2  ">
                    <h3 className="text-white ">
                        Filtros Winner - Todos los derechos reservados
                    </h3>
                </nav>
            </section>
        </>
    );
}

export default HomePage;
