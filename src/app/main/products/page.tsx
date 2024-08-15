"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { getAllProducts } from "../../utils/product";
import { ProductList } from "@/models/product";

function Page() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [activateEdit, setActivateEdit] = React.useState("");
  const [updateName, setUpdatename] = React.useState("");
  const [updateDescription, setUpdatedescription] = React.useState("");
  const [updateCharacteristic, setUpdatecharacteristic] = React.useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    setError(null);

    try {
      const data: any = await getAllProducts();
      console.log("ProductsList: ", data);
      setData(data);
    } catch (error: any) {
      setError(error);
    }
  }

  // async function editProduct(product: Product) {
  //   const editedProduct: any = {
  //     name: updateName,
  //     description: updateDescription,
  //     charateristic: updateCharacteristic,
  //   };

  //   const collectionId = await searchDocumentsByProperty(product);
  //   console.log(collectionId);

  //   updateProduct(collectionId, editedProduct).then((data: any) => {
  //     data.status && fetchData(), setActivateEdit("");
  //     !data.status && console.log("error producto");
  //   });
  // }

  return (
    <section className="my-10 mx-5">
      <h1 className="text-black font-semibold text-xl mb-10">Productos</h1>
      <Link href={"/main/products/detail"}>
        <button className="bg-primary text-white p-4 mr-2 mb-2">Agregar</button>
      </Link>
      <Link href={"/products/add"}></Link>
      <table className="table-auto w-full shadow-md">
        <thead className="bg-primary">
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Descripcion</th>
            <th className="px-4 py-2 text-left">Caracteristica</th>
            <th className="px-4 py-2 text-left">Accion</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {data.map((product: ProductList, index) => (
            <>
              <tr key={product.id}>
                <td className="px-4 py-2">{product.data.name}</td>
                <td className="px-4 py-2">{product.data.description}</td>
                <td className="px-4 py-2">{product.data.charateristic}</td>
                <td className="px-4 py-2">
                  <Link href={`/main/products/detail/${product.id}`}>
                    <button>Editar</button>
                  </Link>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Page;
