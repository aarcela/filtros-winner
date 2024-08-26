"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Vehicle, VehicleList } from "@/models/vehicle";
import { addElement, getAllElements } from "@/app/utils/firebaseConnections";

function Page() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [newBrand, setNewBrand] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newHp, setNewHp] = useState("");
  const [newCil, setNewCil] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newFinish, setNewFinish] = useState("");
  const [newOil, setNewOil] = useState("");
  const [newMotor, setNewMotor] = useState("");
  const [newAir, setNewAir] = useState("");
  const [newCabine, setNewCabine] = useState("");
  const [newGas, setNewGas] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    setError(null);

    try {
      const data: any = await getAllElements("Vehicles");
      console.log("ElementList: ", data);
      setData(data);
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
      cabine: newCabine,
      gas: newGas,
      created_at: new Date().toString(),
    };

    addElement("vehicles", newVehicle).then((data) => data.status && console.log("Agregado vehiculo"));
  }

  return (
    <section className="my-10 mx-5 overflow-x-auto">
      <h1 className="text-black font-semibold text-xl mb-10">Editar vehículo</h1>
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewBrand(e.target.value)}
        placeholder="Nuevo Brand"
      />
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewModel(e.target.value)}
        placeholder="Nuevo model"
      />
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewMotor(e.target.value)}
        placeholder="Nuevo model"
      />
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewHp(e.target.value)}
        placeholder="Nuevo HP"
      />
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewCil(e.target.value)}
        placeholder="Nuevo Cil"
      />
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewStart(e.target.value)}
        placeholder="Nuevo Start"
      />
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewFinish(e.target.value)}
        placeholder="Nuevo Finish"
      />
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewOil(e.target.value)}
        placeholder="Nuevo Oil"
      />
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewAir(e.target.value)}
        placeholder="Nuevo Air"
      />
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewCabine(e.target.value)}
        placeholder="Nuevo Cabine"
      />
      <input
        className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
        onChange={(e) => setNewGas(e.target.value)}
        placeholder="Nuevo Gas"
      />
      <button className="bg-primary text-white p-4 mr-2" onClick={addNewVehicle}>
        Guardar
      </button>
      <Link href={"/main/vehicles"}>
        <button className="bg-gray text-white p-4">Atrás</button>
      </Link>
    </section>
  );
}

export default Page;
