"use client";
import { getElementById, getElementsByProperty, updateElement } from "@/app/utils/firebaseConnections";
import { HeavyDuty } from "@/models/heavy-duty";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page({ params }: { params: { slug: string } }) {
  const [newBrand, setNewBrand] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newHp, setNewHp] = useState("");
  const [newCil, setNewCil] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newFinish, setNewFinish] = useState("");
  const [newMotor, setNewMotor] = useState("");
  const [newOil, setNewOil] = useState("");
  const [newPrimaryAir, setNewPrimaryAir] = useState("");
  const [newSecondaryAir, setNewSecondaryAir] = useState("");
  const [newCabine, setNewCabine] = useState("");
  const [newPrimaryGas, setNewPrimaryGas] = useState("");
  const [newSeparatorGas, setNewSeparatorGas] = useState("");
  const [newSecondaryGas, setNewSecondaryGas] = useState("");
  const [newHydraulic, setNewHydraulic] = useState("");
  const [newSecante, setNewSecante] = useState("");
  const [newRefrigerant, setNewRefrigerant] = useState("");
  const [productName, setProductName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState("");

  function editHeavyDuty() {
    const updateHeavyDuty: HeavyDuty = {
      brand: newBrand,
      model: newModel,
      hp: newHp,
      motor: newMotor,
      cil: newCil,
      start: newStart,
      finish: newFinish,
      oil: newOil,
      primary_air: newPrimaryAir,
      secondary_air: newSecondaryAir,
      cabine: newCabine,
      primary_gas: newPrimaryGas,
      secondary_gas: newSecondaryGas,
      separator_gas: newSeparatorGas,
      hydraulic: newHydraulic,
      secante: newSecante,
      refrigerant: newRefrigerant,
      product_id: selectedOption,
    };

    updateElement("heavy-duty", params.slug, updateHeavyDuty).then((data) => {
      data.status && console.log("editado: ", data.doc);
      !data.status && console.log("error producto: ", data.doc);
    });
  }

  useEffect(() => {
    async function getProductData() {
      const heavyDuty: any = await getElementById("heavy-duty", params.slug);
      console.log("HEAVY DUTY: ", await heavyDuty);
      setNewBrand(heavyDuty.brand);
      setNewModel(heavyDuty.model);
      setNewHp(heavyDuty.hp);
      setNewCil(heavyDuty.cil);
      setNewMotor(heavyDuty.motor);
      setNewStart(heavyDuty.start);
      setNewFinish(heavyDuty.finish);
      setNewOil(heavyDuty.oil);
      setNewPrimaryAir(heavyDuty.primary_air);
      setNewSecondaryAir(heavyDuty.secondary_air);
      setNewCabine(heavyDuty.cabine);
      setNewPrimaryGas(heavyDuty.primary_gas);
      setNewSecondaryGas(heavyDuty.secondary_air);
      setNewSeparatorGas(heavyDuty.separator_gas);
      setNewHydraulic(heavyDuty.hydraulic);
      setNewSecante(heavyDuty.secante);
      setNewRefrigerant(heavyDuty.refrigerant);
      searchProductName(heavyDuty.product_id);
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
      <h1 className="text-black font-semibold text-xl mb-10">Editar Heavy Duty: {params.slug} </h1>
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
        value={newHp}
        onChange={(e) => setNewHp(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="HP"
      />
      <input
        value={newMotor}
        onChange={(e) => setNewMotor(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Motor"
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
        value={newPrimaryAir}
        onChange={(e) => setNewPrimaryAir(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Air"
      />
      <input
        value={newSecondaryAir}
        onChange={(e) => setNewSecondaryAir(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Second Air"
      />
      <input
        value={newCabine}
        onChange={(e) => setNewCabine(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Cabine"
      />
      <input
        value={newPrimaryGas}
        onChange={(e) => setNewPrimaryGas(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Primary Gas"
      />
      <input
        value={newSecondaryGas}
        onChange={(e) => setNewSecondaryGas(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Secondary Gas"
      />
      <input
        value={newSeparatorGas}
        onChange={(e) => setNewSeparatorGas(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Separator Gas"
      />
      <input
        value={newHydraulic}
        onChange={(e) => setNewHydraulic(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Hidraulic"
      />
      <input
        value={newSecante}
        onChange={(e) => setNewSecante(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Secante"
      />
      <input
        value={newRefrigerant}
        onChange={(e) => setNewRefrigerant(e.target.value)}
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        placeholder="Refrigerant"
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
      <button className="bg-primary text-white p-4 mr-2" onClick={editHeavyDuty}>
        Editar
      </button>
      <Link href={"/main/heavy-duty"}>
        <button className="bg-gray text-white p-4">Atrás</button>
      </Link>
    </section>
  );
}

export default Page;
