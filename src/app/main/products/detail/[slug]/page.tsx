"use client";
import { getProductById, updateProduct } from "@/app/utils/product";
import Link from "next/link";
import React, { useEffect } from "react";

function Page({ params }: { params: { slug: string } }) {
  const [newName, setNewname] = React.useState("");
  const [newDescription, setNewdescription] = React.useState("");
  const [newCharacteristic, setNewcharacteristic] = React.useState("");

  function editProduct() {
    if (!newName || !newDescription || !newCharacteristic) return;
    const newProduct: any = {
      name: newName,
      description: newDescription,
      charateristic: newCharacteristic,
    };

    updateProduct(params.slug, newProduct).then((data) => {
      data.status && console.log("editado");
      !data.status && console.log("error producto");
    });
  }

  useEffect(() => {
    async function getProductData() {
      const product: any = await getProductById("product", params.slug);
      console.log("Producto: ", await product);
      setNewname(product.name);
      setNewcharacteristic(product.charateristic);
      setNewdescription(product.description);
    }
    getProductData();
  }, [params.slug]);

  return (
    <section className="my-10 mx-5">
      <h1 className="text-black font-semibold text-xl mb-10">Editar producto: {params.slug} </h1>
      <input
        value={newName}
        onChange={(e) => setNewname(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Nombre"
      />
      <input
        value={newDescription}
        onChange={(e) => setNewdescription(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Descripcion"
      />
      <input
        value={newCharacteristic}
        onChange={(e) => setNewcharacteristic(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Caracteristica"
      />
      <button className="bg-primary text-white p-4 mr-2" onClick={editProduct}>
        Editar
      </button>
      <Link href={"/main/products"}>
        <button className="bg-gray text-white p-4">Atrás</button>
      </Link>
    </section>
  );
}

export default Page;
