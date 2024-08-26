"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../utils/product";
import { ProductList } from "@/models/product";
import { Referece, RefereceList } from "@/models/reference";
import { addElement, getAllElements } from "@/app/utils/firebaseConnections";

function Page() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [newBrand, setNewBrand] = useState("");
  const [newCode, setNewCode] = useState("");
  const [newType, setNewType] = useState("");
  const [newCodeReference, setNewCodeReference] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function addNewReference() {
    const newReference: Referece = {
      brand: newBrand,
      code: newCode,
      code_reference: newCodeReference,
      type: newType,
      created_at: new Date().toString(),
    };

    addElement("reference", newReference).then((data) => {
      data.status && (cleanNewCells(), fetchData());
    });
  }

  async function fetchData() {
    setIsLoading(true);
    setError(null);

    try {
      const data: any = await getAllElements("reference");
      console.log("RefereceList: ", data);
      setData(data);
    } catch (error: any) {
      setError(error);
    }
  }

  function cleanNewCells() {
    setNewBrand("");
    setNewBrand("");
    setNewType("");
  }

  return (
    <section className="my-10 mx-5">
      <h1 className="text-black font-semibold text-xl mb-10">Referencias</h1>
      <Link href={"/products/add"}></Link>
      <table className="table-auto w-full shadow-md">
        <thead className="bg-primary">
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2 text-left">Código Winner</th>
            <th className="px-4 py-2 text-left">Código Referencia</th>
            <th className="px-4 py-2 text-left">Marca</th>
            <th className="px-4 py-2 text-left">Tipo</th>
            <th className="px-4 py-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-black">
          <tr>
            <td className="px-4 py-2">
              <input value={newBrand} placeholder="Cod Winner" onChange={(e) => setNewBrand(e.target.value)} />
            </td>
            <td className="px-4 py-2">
              <input
                value={newCodeReference}
                placeholder="Cod Reference"
                onChange={(e) => setNewCodeReference(e.target.value)}
              />
            </td>
            <td className="px-4 py-2">
              <input value={newCode} placeholder="Marca" onChange={(e) => setNewCode(e.target.value)} />
            </td>
            <td className="px-4 py-2">
              <input value={newType} placeholder="Tipo" onChange={(e) => setNewType(e.target.value)} />
            </td>
            <td className="px-4 py-2">
              <button onClick={addNewReference}>Agregar</button>
            </td>
          </tr>
          {data.map((reference: RefereceList, index) => (
            <tr key={reference.id}>
              <td className="px-4 py-2">{reference.data.code}</td>
              <td className="px-4 py-2">{reference.data.code_reference}</td>
              <td className="px-4 py-2">{reference.data.brand}</td>
              <td className="px-4 py-2">{reference.data.type}</td>
              <td className="px-4 py-2">
                <Link href={`/main/products/detail/${reference.id}`}>
                  <button>Editar</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Page;
