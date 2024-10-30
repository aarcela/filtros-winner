"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addElement, getAllElements } from "@/app/utils/firebaseConnections";
import { HeavyDuty } from "@/models/heavy-duty";

function Page() {
  const [newBrand, setNewBrand] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newHp, setNewHp] = useState("");
  const [newMotor, setNewMotor] = useState("");
  const [newCil, setNewCil] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newFinish, setNewFinish] = useState("");
  const [newOil, setNewOil] = useState("");
  const [newPrimaryAir, setNewPrimaryAir] = useState("");
  const [newPrimaryGas, setNewPrimaryGas] = useState("");
  const [newHydraulic, setNewHydraulic] = useState("");
  const [newSecante, setNewSecante] = useState("");
  const [newRefrigerant, setNewRefrigerant] = useState("");

  function addNewHeavyDuty() {
    const newVehicle: HeavyDuty = {
        brand: newBrand,
        model: newModel,
        motor: newMotor,
        hp: newHp,
        cil: newCil,
        start: newStart,
        finish: newFinish,
        oil: newOil,
        primary_air: newPrimaryAir,
        primary_gas: newPrimaryGas,
        hydraulic: newHydraulic,
        secante: newSecante,
        refrigerant: newRefrigerant,
        created_at: new Date().toString(),
    };

    addElement("heavy-duty", newVehicle).then((data) => data.status && console.log("Agregado vehiculo"));
  }

  return (
      <section className="my-10 mx-5">
          <h1 className="text-black font-semibold text-xl mb-10">Agregar Heavy Duty</h1>
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
              onChange={(e) => setNewHp(e.target.value)}
              placeholder="Nuevo HP"
          />
          <input
              className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
              onChange={(e) => setNewMotor(e.target.value)}
              placeholder="Nuevo Motor"
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
              onChange={(e) => setNewPrimaryAir(e.target.value)}
              placeholder="Nuevo Air"
          />
          <input
              className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
              onChange={(e) => setNewPrimaryGas(e.target.value)}
              placeholder="Nuevo Combustible"
          />
          <input
              className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
              onChange={(e) => setNewHydraulic(e.target.value)}
              placeholder="Nuevo Hidraulic"
          />
          <input
              className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
              onChange={(e) => setNewSecante(e.target.value)}
              placeholder="Nuevo Secante"
          />
          <input
              className="w-full bg-gray text-gray-700 border-none  px-4 py-2 my-2 h-10 focus:outline-none"
              onChange={(e) => setNewRefrigerant(e.target.value)}
              placeholder="Nuevo Refrigerante"
          />
          <button className="bg-primary text-white p-4 mr-2" onClick={addNewHeavyDuty}>
              Guardar
          </button>
          <Link href={"/main/heavy-duty"}>
              <button className="bg-gray text-white p-4">Atrás</button>
          </Link>
      </section>
  );
}

export default Page;
