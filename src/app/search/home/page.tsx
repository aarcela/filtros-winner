"use client";
import ApplicationFilter from "@/app/components/ApplicationFilter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
    return (
        <>
            <ApplicationFilter />
            <section className="flex flex-1 bg-search-bg bg-no-repeat bg-cover bg-center bg-black bg-opacity-70 w-full  justify-stretch items-center bg-blend-darken px-20">
                <div>
                    <h1 className="text-white text-8xl font-bold">
                        ¡Somos poder de filtración!
                    </h1>
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
        </>
    );
}

export default Page;
