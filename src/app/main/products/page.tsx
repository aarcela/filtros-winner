"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { getAllProducts } from "../../utils/product";
import { ProductList } from "@/models/product";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hits, InstantSearch, SearchBox, Highlight, Pagination } from "react-instantsearch";

const searchClient = algoliasearch("C5PVSYGZCS", "8dbd0582124b17e9da4f3ccc379dd0e2");

function Hit({ hit }: any) {
  return (
    <article>
      {/* <Image src={hit.image} alt={hit.name} /> */}
      <p>{hit.categories[0]}</p>
      <h1>
        <Highlight attribute="name" hit={hit} />
      </h1>
      <p>${hit.price}</p>
    </article>
  );
}

function Page() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

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

  return (
    <section className="my-10 mx-5">
      <h1 className="text-black font-semibold text-xl mb-10">Productos</h1>
      <Link href={"/main/products/detail"}>
        <button className="bg-primary text-white p-4 mr-2 mb-2">Agregar</button>
      </Link>
      <InstantSearch indexName="ecommerce" searchClient={searchClient}>
        <SearchBox />
        {/* <Hits hitComponent={Hit} /> */}
        {/* <Pagination /> */}
      </InstantSearch>
      <table className="table-auto w-full shadow-md mt-4">
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
              <tr key={index}>
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
