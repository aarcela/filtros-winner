"use client";
import ApplicationFilter from "@/app/components/ApplicationFilter";
import React from "react";

function Page() {
    return (
        <>
            <ApplicationFilter />
            <section className=" flex flex-auto bg-search-bg-mobile sm:bg-search-bg bg-no-repeat bg-center bg-cover h-auto  w-full items-center bg-blend-darken sm:px-20 flex-col sm:flex-row order-1 sm:order-2">
                <div>
                    {/* <h1 className="text-white text-2xl sm:text-8xl font-bold mt-5 sm:mt-0">
                        ¡Somos poder de filtración!
                    </h1> */}
                    {/* <Link href="https://filtroswinner.com/" target="_blank">
                        <button className="bg-primary text-white p-4 mr-2 mb-2 font-bold hidden sm:visible">
                            Ir a nuestra web principal
                        </button>
                    </Link> */}
                </div>
                {/* <Image
                    className="self-right"
                    src="/assets/search-main-image.png"
                    alt="search-main-image"
                    width={796}
                    height={581}
                ></Image> */}
            </section>
        </>
    );
}

export default Page;
