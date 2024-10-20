"use client";
import { addImages } from "@/app/utils/firebaseConnections";
import { addProduct } from "@/app/utils/product";
import { Product } from "@/models/product";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
    const [newName, setNewname] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const specificationList = [
        "Especificacion",
        "OD",
        "H",
        "TH",
        "GS OD",
        "GS ID",
        "By Pass Valve",
        "Anti Drain",
        "Descripción Técnica",
        "Diámetro Externo",
        "Altura",
        "Dimensiones Rosca",
        "Diametro Externoempacadura",
        "Diametro Interno Empacadura",
        "Válvula de Alivio",
        "Válvula Antidrenaje",
    ];
    const [OD, setOD] = useState("");
    const [H, setH] = useState("");
    const [TH, setTH] = useState("");
    const [gsOD, setGsOD] = useState("");
    const [gsID, setGsID] = useState("");
    const [byPass, setByPass] = useState("");
    const [antiDrain, setAntiDrain] = useState("");
    const [description, setDescription] = useState("");
    const [diameter, setDiameter] = useState("");
    const [internalDiameter, setInternalDiameter] = useState("");
    const [height, setHeight] = useState("");
    const [rosca, setRosca] = useState("");
    const [externoempacadura, setExternoempacadura] = useState("");
    const [internoempacadura, setInternoempacadura] = useState("");
    const [alivio, setAlivio] = useState("");
    const [antidrenaje, setAntidrenaje] = useState("");
    const [longuitud, setLonguitud] = useState("");

    async function addNewProduct() {
        if (!newName || !newCategory) return;
        const newProduct: Product = {
            name: newName,
            category: newCategory,
            OD: OD,
            H: H,
            TH: TH,
            GS_OD: gsOD,
            GS_ID: gsID,
            by_pass_valve: byPass,
            anti_drain: antiDrain,
            descripción_tecnica: description,
            diametro_externo: diameter,
            diametro_interno: internalDiameter,
            altura: height,
            dimensiones_rosca: rosca,
            diametro_externoempacadura: externoempacadura,
            diametro_interno_empacadura: internoempacadura,
            valvula_de_alivio: alivio,
            valvula_anti_drenaje: antiDrain,
            longuitud: longuitud,
            created_at: new Date().toString(),
        };

        addProduct(newProduct).then((data) => {
            data.status && console.log("agregado");
            !data.status && console.log("error producto");
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
                <option value="Filtro Aire Cilindrico">Filtro Aire Cilíndrico</option>
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

            <div className="flex flex-wrap px-10 mb-5">
                {newCategory ===
                    ("Filtro Aceite Spin On" ||
                        "Filtro Aceite Elemento" ||
                        "Filtro Aceite Centrifugo" ||
                        "Filtro Aire Cilindrico" ||
                        "Filtro Combustible In-Line / In-Tank / Regulador / Modulo" ||
                        "Filtro Combustible Spin On" ||
                        "Filtro Combustible Cartucho / CAV" ||
                        "Filtro Secante Spin On" ||
                        "Filtro Hidraulico Spin On" ||
                        "Filtro Hidraulico Elemento" ||
                        "Filtro Refrigerante Spin On") && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">OD</span>
                            <input
                                onChange={(e) => setOD(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory ===
                    ("Filtro Aceite Spin On" ||
                        "Filtro Aceite Elemento" ||
                        "Filtro Aceite Centrifugo" ||
                        "Filtro Aire Panel" ||
                        "Filtro Aire Cilindrico" ||
                        "Filtro Combustible In-Line / In-Tank / Regulador / Modulo" ||
                        "Filtro Secante Spin On" ||
                        "Filtro Combustible Cartucho / CAV" ||
                        "Filtro Cabina Panel" ||
                        "Filtro Secante Spin On" ||
                        "Filtro Hidraulico Elemento" ||
                        "Filtro Hidraulico Vaso" ||
                        "Filtro Refrigerante Spin On") && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">H</span>
                            <input
                                onChange={(e) => setH(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory ===
                    ("Filtro Aceite Spin On" ||
                        "Filtro Combustible Spin On" ||
                        "Filtro Secante Spin On" ||
                        "Filtro Hidraulico Spin On" ||
                        "Filtro Refrigerante Spin On") && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">TH</span>
                            <input
                                onChange={(e) => setTH(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory === "Filtro Aceite Spin On" && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">GS OD</span>
                            <input
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
                                onChange={(e) => setAntiDrain(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory ===
                    ("Filro Aceite Spin On" ||
                        "Filtro Aceite Elemento" ||
                        "Filtro Aceite Centrifugo" ||
                        "Filtro Aire Cilindrico" ||
                        "Filtro Refrigerante Spin On" ||
                        "Filtro Aire Toroide Rect. o Elip") && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Diámetro Externo</span>
                            <input
                                onChange={(e) => setDiameter(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory ===
                    ("Filtro Aire Toroide Rect. o Elip" ||
                        "Filtro Aire Cilindrico" ||
                        "Filtro Aceite Elemento" ||
                        "Filtro Combustible Cartucho / CAV") && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Diámetro Interno</span>
                            <input
                                onChange={(e) => setInternalDiameter(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}

                {newCategory ===
                    ("Filtro Refrigerante Spin On" ||
                        "Filtro Hidraulico Spin On" ||
                        "FIltro Hidraulico Spin" ||
                        "Filtro Secante Spin On" ||
                        "Filtro Combustible Spin On") && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Dimensiones Rosca</span>
                            <input
                                onChange={(e) => setRosca(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory === "Filtro Aceite Spin On" && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Diámetro Externoempacadura</span>
                            <input
                                onChange={(e) => setExternoempacadura(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}

                {newCategory === "Filtro Aceite Spin On" && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Diámetro Interno Empacadura</span>
                            <input
                                onChange={(e) => setInternoempacadura(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory === "Filtro Aceite Spin On" && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Válvula de Alivio</span>
                            <input
                                onChange={(e) => setAlivio(e.target.value)}
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
                                onChange={(e) => setAntiDrain(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
                {newCategory ===
                    ("Filtro Aire Panel" ||
                        "Filtro Aire Toroide Rect. o Elip." ||
                        "Filtro Cabina Panel") && (
                    <div className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">Longuitud</span>
                            <input
                                onChange={(e) => setLonguitud(e.target.value)}
                                type="text"
                                className="bg-gray border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                )}
            </div>

            <h1 className="text-gray font-semibold text-2xl mb-5">Imágenes</h1>
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
 