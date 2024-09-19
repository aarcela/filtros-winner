import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchBox } from "react-instantsearch";
import { CustomSearchBox } from "../components/SearchBox";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="bg-white">
            <nav className="bg-primary flex items-center  gap-3 px-4 py-2">
                <Link href="/">
                    <Image src="/assets/winner_logo.svg" alt="logo" width={198} height={38} />
                </Link>
                <CustomSearchBox />
                <ul className="flex gap-3">
                    <li>
                        <Link href="/main/products">
                            <span className="text-white hover:underline">Productos</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/main/vehicles">
                            <span className="text-white hover:underline">Vehículos</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/main/heavy-duty">
                            <span className="text-white hover:underline">HeavyDuty</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/main/reference">
                            <span className="text-white hover:underline">Referencias</span>
                        </Link>
                    </li>
                </ul>
                <button className="bg-blue-500 text-primary px-4 py-2 bg-gray hover:bg-blue-700 focus:outline-none">
                    Salir
                </button>
            </nav>
            <div className="pb-4 flex flex-1">{children}</div>
        </section>
    );
}
