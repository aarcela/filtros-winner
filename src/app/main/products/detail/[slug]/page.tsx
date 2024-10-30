"use client";
import ImageUpload from "@/app/components/ImageUpload";
import {
    validCategoriesDiametroExterno,
    validCategoriesDiametroInterno,
    validCategoriesDiametroRosca,
    validCategoriesGSOD,
    validCategoriesH,
    validCategoriesLonguitud,
    validCategoriesOD,
    validCategoriesTH,
} from "@/app/constants";
import { updateElement } from "@/app/utils/firebaseConnections";
import { getProductById, updateProduct } from "@/app/utils/product";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { storage } from "../../../../../../firebase";
import { deleteObject, ref } from "firebase/storage";
//EDITAR
function Page({ params }: { params: { slug: string } }) {
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

    const handleRemoveImage = (imageName: any) => {
        const userConfirmed = confirm("Desea eliminar la imagen");
        if (userConfirmed) {
            setImages(images.filter((img: any) => img !== imageName));
            const imageRef = ref(storage, `images/${imageName}`);
            deleteObject(imageRef);
        }
    };

    function editProduct() {
        if (!newName || !newDescription) return;
        const newProduct: any = {
            name: newName,
            byPass,
            cateogyr: newCategory,
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

        updateElement("product", params.slug, newProduct).then((data) => {
            data.status && alert("Producto Editado");
            !data.status && alert("Error editando producto");
        });
    }

    useEffect(() => {
        async function getProductData() {
            const product: any = await getProductById("product", params.slug);
            console.log("Producto: ", await product);

            setNewname(product.name);
            setByPass(product["by_pass_valve"]);
            setNewCategory(product.category);
            setNewdescription(product.description);
            setAntiDrain(product.drain);
            setGsID(product["gs-id"]);
            setGsOD(product["gs-od"]);
            setH(product.h);
            setId(product.id);
            setId2(product.id2);
            setIn(product.in);
            setL(product.l);
            setLe(product.le);
            setLi(product.li);
            setOd(product.od);
            setOd2(product.od2);
            setOut(product.out);
            setTh(product.th);
            setW(product.w);
            setWe(product.we);
            setWi(product.wi);
            setImages(product.images);
        }
        getProductData();
    }, [params.slug]);

    return (
        <section className="my-10 mx-5 bg-white h-screen w-full">
            <h1 className="text-black font-semibold text-xl mb-10">
                Editar producto: {params.slug}{" "}
            </h1>
            <input
                value={newName}
                onChange={(e) => setNewname(e.target.value)}
                className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
                placeholder="Nombre"
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
            <div className="mb-10">
                {images &&
                    images.map((img: any, index: any) => (
                        <Image
                            key={index}
                            src={img}
                            alt="preview"
                            width="100"
                            height="100"
                            onClick={() => handleRemoveImage(img)}
                        ></Image>
                    ))}
            </div>
            <h1 className="text-gray font-semibold text-2xl mb-2">Agregar Imágenes</h1>
            <ImageUpload onImagesUploaded={handleImagesUploaded} prevImages={images} />
            <h3 className="text-black text-xl mb-2">
                ** Recuerda subir las imagenes antes de terminar de editar el producto
            </h3>
            <button className="bg-primary text-white p-4 mr-2 mt-10" onClick={editProduct}>
                Editar
            </button>
            <Link href={"/main/products"}>
                <button className="bg-gray text-white p-4">Atrás</button>
            </Link>
        </section>
    );
}

export default Page;
