"use client";
import { addImages } from "@/app/utils/firebaseConnections";
import { addProduct } from "@/app/utils/product";
import { Product } from "@/models/product";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
    const [newName, setNewname] = React.useState("");
    const [newCategory, setNewCategory] = useState("");
    const specificationList = [
        "especificacion",
        "OD",
        "H",
        "TH",
        "GS_OD",
        "GS_ID",
        "by_pass_valve",
        "anti_drain",
        "descripción_tecnica",
        "diámetro_externo",
        "altura",
        "dimensiones_rosca",
        "diametro_externoempacadura",
        "diametro_interno_empacadura",
        "valvula_de_alivio",
        "valvula_anti_drenaje",
    ];

    async function addNewProduct() {
        if (!newName || !newCategory) return;
        const newProduct: Product = {
            name: newName,
            category: newCategory,
            product_specification: {
                especificacion: "",
            },
            created_at: new Date().toString(),
        };

        addProduct(newProduct).then((data) => {
            data.status && console.log("agregado");
            !data.status && console.log("error producto");
        });
    }

    return (
        <section className="my-5 mx-5 h-full">
            <h1 className="text-black font-semibold text-3xl my-5">Agregar nuevo producto</h1>
            <input
                onChange={(e) => setNewname(e.target.value)}
                className="w-full bg-gray text-white border-none px-4 py-3 mb-5 focus:outline-none"
                placeholder="Nombre / Código del producto"
            />
            <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full bg-gray text-white border-none px-4 py-3 mb-5  focus:outline-none"
            >
                <option value="" className="text-gray">
                    Seleccione categoría del producto
                </option>
                <option value="Filtro Aceite Spin On">Filtro Aceite Spin On</option>
                <option value="Filtro Aceite Elemento">Filtro Aceite Elemento</option>
                <option value="Filtro Aceite Centrífugo">Filtro Aceite Centrífugo</option>
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
                <option value="Filtro Hidraúlico Spin On">Filtro Hidraúlico Spin On</option>
                <option value="Filtro Hidraúlico Elemento">Filtro Hidraúlico Elemento</option>
                <option value="Filtro Hidraúlico Vaso">Filtro Hidraúlico Vaso</option>
                <option value="Filtro Refrigerante Spin On">Filtro Refrigerante Spin On</option>
            </select>
            <h1 className="text-gray font-semibold text-2xl mb-5">Especificaciones Técnicas</h1>

            <div className="flex flex-wrap px-10 mb-5">
                {specificationList.map((value, index) => (
                    <div key={index} className="w-1/2 mb-1">
                        <div className="flex">
                            <span className="w-1/3">{value}</span>
                            <input
                                type="text"
                                id="username"
                                className="bg-gray text-white border-none px-4 py-2 focus:outline-none basis-1/2"
                            />
                        </div>
                    </div>
                ))}
            </div>

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
