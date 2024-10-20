"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { getAllProducts } from "../../utils/product";
import { ProductList } from "@/models/product";
import { getAllElements } from "@/app/utils/firebaseConnections";
import Table from "@/app/components/Table";

function Page() {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const productTableHeader = ["Categoría", "Código", "Descripción", "Acción"];

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setIsLoading(true);
        setError(null);

        try {
            const data: any = await getAllElements("product");
            setData(data);
        } catch (error: any) {
            setError(error);
        }
    }

    return (
        <section className="mx-5 mt-5 bg-white h-full">
            <h1 className="text-black font-semibold text-3xl mb-5">Productos</h1>
            <Link href={"/main/products/detail"}>
                <button className="bg-primary text-white p-4 mr-2 mb-2">
                    Agregar nuevo producto
                </button>
            </Link>
            <Table props={productTableHeader}>
                {data.map((product: ProductList, index) => (
                    <tr key={index + product.id}>
                        <td className="px-4 py-2 bg-gray font-light">{product.data.category}</td>
                        <td className="px-4 py-2 bg-gray font-light">{product.data.name}</td>
                        <td className="px-4 py-2 bg-gray font-light">
                            {product.data.description}
                        </td>
                        <td className="px-4 py-2 bg-gray font-light">
                            <Link
                                href={`/main/products/detail/${product.id}`}
                                className="text-primary"
                            >
                                <button>Editar</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </Table>
        </section>
    );
}

export default Page;
