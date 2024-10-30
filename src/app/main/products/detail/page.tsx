"use client";
import ImageUpload from "@/app/components/ImageUpload";
import {
    validCategoriesDiametroInterno,
    validCategoriesGSOD,
    validCategoriesH,
    validCategoriesOD,
    validCategoriesTH,
} from "@/app/constants";
import { addElement, addImages } from "@/app/utils/firebaseConnections";
import { addProduct } from "@/app/utils/product";
import { Product } from "@/models/product";
import Link from "next/link";
import React, { useEffect, useState } from "react";
//AGREGAR
function Page() {
    const [newName, setNewname] = React.useState("");
    const [byPass, setByPass] = useState("");
    const [newCategory, setNewCategory] = React.useState("");
    const [newDescription, setNewdescription] = React.useState("");
    const [antiDrain, setAntiDrain] = useState("");
    const [gsID, setGsID] = useState("");
    const [gsOD, setGsOD] = useState("");
    const [H, setH] = useState("");
    const [id, setId] = useState("");
    const [id2, setId2] = useState("");
    const [inn, setIn] = useState("");
    const [l, setL] = useState("");
    const [le, setLe] = useState("");
    const [li, setLi] = useState("");
    const [od, setOd] = useState("");
    const [od2, setOd2] = useState("");
    const [outt, setOut] = useState("");
    const [th, setTh] = useState("");
    const [w, setW] = useState("");
    const [we, setWe] = useState("");
    const [wi, setWi] = useState("");
    const [images, setImages] = useState([]);
    const handleImagesUploaded = (urls: any) => {
        setImages(urls);
    };

    async function addNewProduct() {
        if (!newName || !newCategory) return;
        const newProduct: any = {
            name: newName,
            byPass,
            category: newCategory,
            description: newDescription,
            antiDrain,
            gsID,
            gsOD,
            H,
            id,
            id2,
            inn,
            l,
            le,
            li,
            od,
            od2,
            outt,
            th,
            w,
            we,
            wi,
            images,
        };
        //HzOvkWWrHCSMd8RJOH6P
        //LRGo2BCHOizUju4Go5Kq

        addElement("product", newProduct).then((data) => {
            data.status && alert("Producto agregado");
            !data.status && alert("Error subiendo producto");
        });
    }

    return (
        <section className="my-5 mx-5 h-screen bg-white w-full">
            <h1 className="text-black font-semibold text-3xl my-5">Agregar nuevo producto</h1>
            <input
                onChange={(e) => setNewname(e.target.value)}
                className="w-full bg-gray border-none px-4 py-3 mb-5 focus:outline-none"
                placeholder="Nombre / Código del producto"
            />
            <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full bg-gray border-none px-4 py-3 mb-5  focus:outline-none"
            >
                <option value="" className="text-gray">
                    Seleccione categoría del producto
                </option>
                <option value="Filtro Aceite Spin On">Filtro Aceite Spin On</option>
                <option value="Filtro Aceite Elemento">Filtro Aceite Elemento</option>
                <option value="Filtro Aceite Centrifugo">Filtro Aceite Centrífugo</option>
                <option value="Filtro Aire Panel">Filtro Aire Panel</option>
                <option value="Filtro Aire Cilíndrico">Filtro Aire Cilíndrico</option>
                <option value="Filtro Aire Toroide Rect. o Elip">
                    Filtro Aire Toroide Rect. o Elip.
                </option>
                <option value="Filtro Combustible In-Line / In-Tank / Regulador / Modulo">
                    Filtro Combustible In-Line / In-Tank / Regulador / Modulo
                </option>
                <option value="Filtro Combustible Spin On">Filtro Combustible Spin On</option>
                <option value="Filtro Combustible Cartucho / CAV">
                    Filtro Combustible Cartucho / CAV
                </option>
                <option value="Filtro Cabina Pane">Filtro Cabina Panel</option>
                <option value="Filtro Secante Spin On">Filtro Secante Spin On</option>
                <option value="Filtro Hidraulico Spin On">Filtro Hidraúlico Spin On</option>
                <option value="Filtro Hidraulico Elemento">Filtro Hidraúlico Elemento</option>
                <option value="Filtro Hidraulico Vaso">Filtro Hidraúlico Vaso</option>
                <option value="Filtro Refrigerante Spin On">Filtro Refrigerante Spin On</option>
            </select>
            <h1 className="text-gray font-semibold text-2xl mb-5">Especificaciones Técnicas</h1>
            <div className="flex flex-wrap px-10 mb-10">
                {validCategoriesOD.includes(newCategory) && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">OD</span>
                            <input
                                value={od}
                                onChange={(e) => setOd(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {validCategoriesH.includes(newCategory) && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">H</span>
                            <input
                                value={H}
                                onChange={(e) => setH(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {validCategoriesTH.includes(newCategory) && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">TH</span>
                            <input
                                value={th}
                                onChange={(e) => setTh(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {validCategoriesGSOD.includes(newCategory) && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">GS OD</span>
                            <input
                                value={gsOD}
                                onChange={(e) => setGsOD(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory === "Filtro Aceite Spin On" && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">GS ID</span>
                            <input
                                value={gsID}
                                onChange={(e) => setGsID(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory === "Filtro Aceite Spin On" && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">By Pass Valve</span>
                            <input
                                value={byPass}
                                onChange={(e) => setByPass(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory === "Filtro Aceite Spin On" && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Anti Drain</span>
                            <input
                                value={antiDrain}
                                onChange={(e) => setAntiDrain(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {validCategoriesDiametroInterno.includes(newCategory) && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Diámetro Interno</span>
                            <input
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {validCategoriesDiametroInterno.includes(newCategory) && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Diámetro Interno</span>
                            <input
                                value={id2}
                                onChange={(e) => setId2(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory === "Filtro Aceite Spin On" && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Válvula Antidrenaje</span>
                            <input
                                value={antiDrain}
                                onChange={(e) => setAntiDrain(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
            </div>

            <h1 className="text-gray font-semibold text-2xl mb-2">Agregar Imágenes</h1>
            <ImageUpload onImagesUploaded={handleImagesUploaded} prevImages={images} />
            <div className="w-full">
                <button
                    className="bg-primary text-white p-4 my-2 float-end"
                    onClick={addNewProduct}
                >
                    Guardar
                </button>
                <Link href={"/main/products"}>
                    <button className="bg-gray text-white p-4 my-2 float-end">Atrás</button>
                </Link>
            </div>
        </section>
    );
}

export default Page;
 