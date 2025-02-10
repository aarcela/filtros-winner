"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Referece, RefereceList } from "@/models/reference";
import { addElement, getAllElements } from "@/app/utils/firebaseConnections";
import Table from "@/app/components/Table";

function Page() {
    const tableHeaderReference = ["Código Winner", "Código Referencia", "Marca", "Acciones"];
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const [newBrand, setNewBrand] = useState("");
    const [newCode, setNewCode] = useState("");
    const [newCodeReference, setNewCodeReference] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    function addNewReference() {
        const newReference: Referece = {
            code: newCode,
            code_reference: newCodeReference,
            brand: newBrand,
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
            data.sort((a: any, b: any) => a.data.brand.localeCompare(b.data.brand));
            setData(data);
        } catch (error: any) {
            setError(error);
        }
    }

    function cleanNewCells() {
        setNewBrand("");
        setNewCode("");
        setNewCodeReference("");
    }

    return (
        <section className="w-full my-5 mx-5 bg-white h-full">
            <h1 className="text-black font-semibold text-3xl mb-5">Referencias</h1>
            <Link href={"/products/add"}></Link>
            <Table props={tableHeaderReference}>
                <tr>
                    <td className="px-4 py-2 ">
                        <input
                            value={newCode}
                            placeholder="Nuevo Cod Winner"
                            onChange={(e) => setNewCode(e.target.value)}
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newCodeReference}
                            placeholder="Nuevo Cod Referencia"
                            onChange={(e) => setNewCodeReference(e.target.value)}
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newBrand}
                            placeholder="Nueva Marca"
                            onChange={(e) => setNewBrand(e.target.value)}
                        />
                    </td>
                    <td className="px-4 py-2">
                        <button className="text-primary font-light" onClick={addNewReference}>
                            Agregar
                        </button>
                    </td>
                </tr>
                {data.map((reference: RefereceList, index) => (
                    <tr key={reference.id}>
                        <td className="px-4 py-2 bg-gray font-light">{reference.data.code}</td>
                        <td className="px-4 py-2 bg-gray font-light">
                            {reference.data.code_reference}
                        </td>
                        <td className="px-4 py-2 bg-gray font-light">{reference.data.brand}</td>
                        <td className="px-4 py-2 bg-gray font-light">
                            <Link href={`/main/products/detail/${reference.id}`}>
                                <button className="text-primary font-light">Editar</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </Table>
        </section>
    );
}

export default Page;
