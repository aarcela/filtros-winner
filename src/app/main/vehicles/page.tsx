"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Vehicle, VehicleList } from "@/models/vehicle";
import { addElement, getAllElements, getElementById, getElementsByProperty } from "@/app/utils/firebaseConnections";
import { DocumentData } from "firebase/firestore";

function Page() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [newBrand, setNewBrand] = React.useState("");
  const [newModel, setNewModel] = useState("");
  const [newHp, setNewHp] = useState("");
  const [newCil, setNewCil] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newFinish, setNewFinish] = useState("");
  const [newMotor, setNewMotor] = useState("");
  const [newOil, setNewOil] = useState("");
  const [newAir, setNewAir] = useState("");
  const [newCabine, setNewCabine] = useState("");
  const [newGas, setNewGas] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    setError(null);

    try {
      const data: any = await getAllElements("vehicle");
      data.map(async (element: any) => (element.data.productName = await searchProductName(element.data.product_id)));
      setData(data);
      console.log(data);
    } catch (error: any) {
      setError(error);
    }
  }

  function addNewVehicle() {
    const newVehicle: Vehicle = {
      brand: newBrand,
      model: newModel,
      motor: newMotor,
      hp: newHp,
      cil: newCil,
      start: newStart,
      finish: newFinish,
      oil: newOil,
      air: newAir,
      gas: newGas,
      cabine: newCabine,
      product_id: selectedOption,
      created_at: new Date().toString(),
    };

    addElement("vehicles", newVehicle).then((data) => {
      data.status && (cleanNewCells(), fetchData());
    });
  }

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
    setSelectedOption(event.target.value);
  }

  async function searchProductName(productId: string) {
    if (!productId) return "";
    const productName = await getElementById("product", productId);
    if (productName) return productName?.name;
    else return "";
  }

  function cleanNewCells() {
    setNewBrand("");
    setNewModel("");
    setNewHp("");
    setNewCil("");
    setNewMotor("");
    setNewStart("");
    setNewFinish("");
    setNewOil("");
    setNewAir("");
    setNewCabine("");
    setNewGas("");
  }

  return (
    <section className="my-10 mx-5 overflow-x-auto">
      <h1 className="text-black font-semibold text-xl mb-10">Vehiculos</h1>
      <Link href={"/main/vehicles/detail"}>
        <button className="bg-primary text-white p-4 mr-2 mb-2">Agregar</button>
      </Link>
      <table className="table-auto w-full shadow-md">
        <thead className="bg-primary">
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2 text-left">Marca</th>
            <th className="px-4 py-2 text-left">Modelo</th>
            <th className="px-4 py-2 text-left">Motor</th>
            <th className="px-4 py-2 text-left">HP</th>
            <th className="px-4 py-2 text-left">Cil</th>
            <th className="px-4 py-2 text-left">Inicio</th>
            <th className="px-4 py-2 text-left">Fin</th>
            <th className="px-4 py-2 text-left">Aceite</th>
            <th className="px-4 py-2 text-left">Aire</th>
            <th className="px-4 py-2 text-left">Gas</th>
            <th className="px-4 py-2 text-left">Cabina</th>
            <th className="px-4 py-2 text-left">Acción</th>
          </tr>
        </thead>
        <tbody className="text-black">
          <tr>
            <td className="px-4 py-2">
              <input value={newBrand} onChange={(e) => setNewBrand(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newModel} onChange={(e) => setNewModel(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newMotor} onChange={(e) => setNewMotor(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newHp} onChange={(e) => setNewHp(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newCil} onChange={(e) => setNewCil(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newStart} onChange={(e) => setNewStart(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newFinish} onChange={(e) => setNewFinish(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newOil} onChange={(e) => setNewOil(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newAir} onChange={(e) => setNewAir(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newGas} onChange={(e) => setNewGas(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newCabine} onChange={(e) => setNewCabine(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <button onClick={addNewVehicle}>Agregar</button>
            </td>
          </tr>
          {data.map((vehicle: any, index) => (
            <>
              <tr key={index}>
                <td className="px-4 py-2">{vehicle.data.brand}</td>
                <td className="px-4 py-2">{vehicle.data.model}</td>
                <td className="px-4 py-2">{vehicle.data.hp}</td>
                <td className="px-4 py-2">{vehicle.data.cil}</td>
                <td className="px-4 py-2">{vehicle.data.start}</td>
                <td className="px-4 py-2">{vehicle.data.finish}</td>
                <td className="px-4 py-2">{vehicle.data.oil}</td>
                <td className="px-4 py-2">{vehicle.data.air}</td>
                <td className="px-4 py-2">{vehicle.data.cabine}</td>
                <td className="px-4 py-2">{vehicle.data.gas}</td>
                <td className="px-4 py-2">{vehicle.data.productName}</td>
                <td className="px-4 py-2">
                  <Link href={`/main/vehicles/detail/${vehicle.id}`}>
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
