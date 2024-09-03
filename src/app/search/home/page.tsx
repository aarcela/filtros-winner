"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
    return (
        <section className="flex bg-search-bg bg-no-repeat bg-cover bg-center bg-black bg-opacity-70 w-full h-screen justify-stretch items-center bg-blend-darken px-7">
            <div>
                <h1 className="text-white text-8xl font-bold">¡Somos poder de filtración!</h1>
                <Link href={"/"}>
                    <button className="bg-primary text-white p-4 mr-2 mb-2 font-bold">
                        Ir a nuestra web principal
                    </button>
                </Link>
            </div>
            <Image
                className="self-right"
                src="/assets/search-main-image.png"
                alt="search-main-image"
                width={796}
                height={581}
            ></Image>
        </section>
    );
}

export default Page;
