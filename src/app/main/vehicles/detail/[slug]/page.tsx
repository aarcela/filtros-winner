"use client";
import { getElementById, getElementsByProperty, updateElement } from "@/app/utils/firebaseConnections";
import { Vehicle } from "@/models/vehicle";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page({ params }: { params: { slug: string } }) {
  const [newBrand, setNewBrand] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newHp, setNewHp] = useState("");
  const [newCil, setNewCil] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newFinish, setNewFinish] = useState("");
  const [newOil, setNewOil] = useState("");
  const [newAir, setNewAir] = useState("");
  const [newCabine, setNewCabine] = useState("");
  const [newGas, setNewGas] = useState("");
  const [newMotor, setNewMotor] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [productName, setProductName] = useState("");

  function editVehicle() {
    const updateVehicle: Vehicle = {
      brand: newBrand,
      model: newModel,
      motor: newMotor,
      hp: newHp,
      cil: newCil,
      start: newStart,
      finish: newFinish,
      oil: newOil,
      air: newAir,
      cabine: newCabine,
      gas: newGas,
      product_id: selectedOption,
    };

    updateElement("vehicle", params.slug, updateVehicle).then((data) => {
      data.status && console.log("editado: ", data.doc);
      !data.status && console.log("error producto: ", data.doc);
    });
  }

  useEffect(() => {
    async function getProductData() {
      const vehicle: any = await getElementById("vehicle", params.slug);
      console.log("Vehicle: ", await vehicle);
      setNewBrand(vehicle.brand),
        setNewModel(vehicle.model),
        setNewHp(vehicle.hp),
        setNewCil(vehicle.cil),
        setNewStart(vehicle.start),
        setNewFinish(vehicle.finish),
        setNewOil(vehicle.oil),
        setNewAir(vehicle.air),
        setNewCabine(vehicle.cabine),
        setNewGas(vehicle.gas);
      setNewMotor(vehicle.motor);
      searchProductName(vehicle.product_id);
    }
    getProductData();
  }, [params.slug]);

  async function handleSearch(event: any) {
    setSearchTerm(event.target.value);
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const elements = await getElementsByProperty("product", "name", searchTerm);
      setSearchResults(elements);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function handleOptionSelected(event: any) {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  }

  async function searchProductName(productId: string) {
    if (!productId) return;
    const productName = await getElementById("product", productId);
    console.log(productName);
    if (!productName) return "";
    setProductName(productName?.name);
  }

  return (
    <section className="my-10 mx-5">
      <h1 className="text-black font-semibold text-xl mb-10">Editar vehiculo: {params.slug} </h1>
      <input
        value={newBrand}
        onChange={(e) => setNewBrand(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Nombre"
      />
      <input
        value={newModel}
        onChange={(e) => setNewModel(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Model"
      />
      <input
        value={newMotor}
        onChange={(e) => setNewMotor(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Motor"
      />
      <input
        value={newHp}
        onChange={(e) => setNewHp(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="HP"
      />
      <input
        value={newCil}
        onChange={(e) => setNewCil(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Cil"
      />
      <input
        value={newStart}
        onChange={(e) => setNewStart(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Start"
      />
      <input
        value={newFinish}
        onChange={(e) => setNewFinish(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Finish"
      />
      <input
        value={newOil}
        onChange={(e) => setNewOil(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Oil"
      />
      <input
        value={newAir}
        onChange={(e) => setNewAir(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Air"
      />
      <input
        value={newCabine}
        onChange={(e) => setNewCabine(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Cabine"
      />
      <input
        value={newGas}
        onChange={(e) => setNewGas(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Gas"
      />
      <span className="text-black">Producto: {productName}</span>
      <input
        onChange={handleSearch}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Búsqueda de producto"
      />
      <select onChange={handleOptionSelected}>
        {searchResults.map((result) => (
          <option key={result.id} value={result.id}>
            {result.data.name}
          </option>
        ))}
      </select>
      <button className="bg-primary text-white p-4 mr-2" onClick={editVehicle}>
        Editar
      </button>
      <Link href={"/main/vehicles"}>
        <button className="bg-gray text-white p-4">Atrás</button>
      </Link>
    </section>
  );
}

export default Page;
