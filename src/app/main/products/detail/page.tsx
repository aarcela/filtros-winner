"use client";
import { addImages } from "@/app/utils/firebaseConnections";
import { addProduct } from "@/app/utils/product";
import { Product } from "@/models/product";
import Link from "next/link";
import React, { useEffect } from "react";

function Page() {
  const [newName, setNewname] = React.useState("");
  const [newDescription, setNewdescription] = React.useState("");
  const [newCharacteristic, setNewcharacteristic] = React.useState("");
  const [imageUrl1, setImageUrl1] = React.useState("");
  const [imageUrl2, setImageUrl2] = React.useState("");
  const [imageUrl3, setImageUrl3] = React.useState("");
  const [imageBase1, setImageBase1] = React.useState([]);
  const [imageBase2, setImageBase2] = React.useState();
  const [imageBase3, setImageBase3] = React.useState();

  async function addNewProduct() {
    // if (imageBase1 || imageBase2 || imageBase3) {
    //   const imageUrl = await addImages(imageBase1[0], "Imagen1");
    //   setImageUrl1(imageUrl);
    //   console.log(imageUrl1);
    // }
    if (!newName || !newDescription || !newCharacteristic) return;
    const newProduct: Product = {
      name: newName,
      description: newDescription,
      charateristic: newCharacteristic,
      image_1: imageUrl1,
      created_at: new Date().toString(),
    };

    addProduct(newProduct).then((data) => {
      data.status && console.log("agregado");
      !data.status && console.log("error producto");
    });
  }

  function handleImage(event: any) {
    console.log(event);
    setImageBase1(event.target.files);
  }

  return (
    <section className="my-10 mx-5">
      <h1 className="text-black font-semibold text-xl mb-10">Agregar nuevo producto</h1>
      <input
        onChange={(e) => setNewname(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Nuevo nombre"
      />
      <input
        onChange={(e) => setNewdescription(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Nueva descripcion"
      />
      <input
        onChange={(e) => setNewcharacteristic(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Nueva caracteristica"
      />
      {/* <input
        onChange={(e) => handleImage(e)}
        type="file"
        className=" bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Imagen 1"
      /> */}
      <div className="w-full">
        <button className="bg-primary text-white p-4 mr-2" onClick={addNewProduct}>
          Guardar
        </button>
        <Link href={"/main/products"}>
          <button className="bg-gray text-white p-4">Atrás</button>
        </Link>
      </div>
    </section>
  );
}

export default Page;
