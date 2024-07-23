"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { addProduct, getAllProducts, searchDocumentsByProperty, updateProduct } from "../../utils/product";
import { Product } from "@/models/product";

function Page() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [newID, setNewID] = React.useState("");
  const [newName, setNewname] = React.useState("");
  const [newDescription, setNewdescription] = React.useState("");
  const [newCharacteristic, setNewcharacteristic] = React.useState("");

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

  function addNewProduct() {
    if (!newID || !newName || !newDescription || !newCharacteristic) return;
    const newProduct: Product = {
      id: newID,
      name: newName,
      description: newDescription,
      charateristic: newCharacteristic,
      created_at: new Date().toString(),
    };

    addProduct(newProduct).then((data) => {
      data.status && fetchData(), cleanNewCells();
      !data.status && console.log("error producto");
    });
  }

  function setEditProductValues(product: Product) {
    setActivateEdit(product.id);
    setUpdatename(product.name);
    setUpdatedescription(product.description);
    setUpdatecharacteristic(product.charateristic);
  }

  async function editProduct(product: Product) {
    const editedProduct: any = {
      id: product.id,
      name: updateName,
      description: updateDescription,
      charateristic: updateCharacteristic,
    };

    const collectionId = await searchDocumentsByProperty(product.id);
    console.log(collectionId);

    updateProduct(collectionId, editedProduct).then((data: any) => {
      data.status && fetchData(), setActivateEdit("");
      !data.status && console.log("error producto");
    });
  }

  function cleanNewCells() {
    setNewID("");
    setNewcharacteristic("");
    setNewdescription("");
    setNewname("");
  }

  return (
    <section className="my-10 mx-5">
      <h1 className="text-black font-semibold text-xl mb-10">Productos</h1>
      <Link href={"/products/add"}></Link>
      <table className="table-auto w-full shadow-md">
        <thead className="bg-primary">
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Descripcion</th>
            <th className="px-4 py-2 text-left">Caracteristica</th>
            <th className="px-4 py-2 text-left">Accion</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {data.map((product: Product, index) => (
            <>
              {activateEdit === product.id ? (
                <tr key={product.id}>
                  <td className="px-4 py-2">
                    <input value={product.id} disabled />
                  </td>
                  <td className="px-4 py-2">
                    <input value={updateName} onChange={(e) => setUpdatename(e.target.value)} />
                  </td>
                  <td className="px-4 py-2">
                    <input value={updateDescription} onChange={(e) => setUpdatedescription(e.target.value)} />
                  </td>
                  <td className="px-4 py-2">
                    <input value={updateCharacteristic} onChange={(e) => setUpdatecharacteristic(e.target.value)} />
                  </td>
                  <td className="px-4 py-2">
                    <button onClick={() => editProduct(product)}>Aceptar</button>
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  <td className="px-4 py-2">{product.id}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.description}</td>
                  <td className="px-4 py-2">{product.charateristic}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => setEditProductValues(product)}>Editar</button>
                  </td>
                </tr>
              )}
            </>
          ))}
          <tr>
            <td className="px-4 py-2">
              <input value={newID} onChange={(e) => setNewID(e.target.value)} placeholder="Nuevo ID" />
            </td>
            <td className="px-4 py-2">
              <input value={newName} onChange={(e) => setNewname(e.target.value)} placeholder="Nuevo Nombre" />
            </td>
            <td className="px-4 py-2">
              <input value={newDescription} onChange={(e) => setNewdescription(e.target.value)} placeholder="Nueva descripcion" />
            </td>
            <td className="px-4 py-2">
              <input value={newCharacteristic} onChange={(e) => setNewcharacteristic(e.target.value)} placeholder="Nueva caracteristica" />
            </td>
            <td className="px-4 py-2">
              <button onClick={addNewProduct}>Agregar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Page;
