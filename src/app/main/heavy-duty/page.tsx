"use client";
import React, { useEffect, useState } from "react";

import { searchDocumentsByProperty } from "../../utils/product";
import { addHeavyDuty, getAllHeavyDuty, updateHeavyDuty } from "@/app/utils/heavyDuty";
import { HeavyDuty, HeavyDutyList } from "@/models/heavy-duty";
import { getAllElements } from "@/app/utils/firebaseConnections";
import Link from "next/link";

function Page() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [newID, setNewID] = React.useState("");
  const [newBrand, setNewBrand] = React.useState("");
  const [newModel, setNewModel] = useState("");
  const [newHp, setNewHp] = useState("");
  const [newCil, setNewCil] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newFinish, setNewFinish] = useState("");
  const [newOil, setNewOil] = useState("");
  const [newAir, setNewAir] = useState("");
  const [newSecondAir, setNewSecondAir] = useState("");
  const [newCabine, setNewCabine] = useState("");
  const [newGas, setNewGas] = useState("");
  const [newSeparatorGas, setNewSeparatorGas] = useState("");
  const [newSecondGas, setNewSecondGas] = useState("");
  const [newHidraulic, setNewHidraulic] = useState("");
  const [newSecante, setNewSecante] = useState("");
  const [newRefrigerant, setNewRefrigerant] = useState("");
  const [newMotor, setNewMotor] = useState("");

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
      const data: any = await getAllElements("heavy-duty");
      console.log("HD: ", data);
      setData(data);
    } catch (error: any) {
      setError(error);
    }
  }

  function addNewVehicle() {
    const newVehicle: HeavyDuty = {
      brand: newBrand,
      model: newModel,
      hp: newHp,
      motor: newMotor,
      cil: newCil,
      start: newStart,
      finish: newFinish,
      oil: newOil,
      primary_air: newAir,
      secondary_air: newAir,
      cabine: newCabine,
      primary_gas: newGas,
      secondary_gas: newGas,
      separator_gas: newSeparatorGas,
      hydraulic: newHidraulic,
      secante: newSecante,
      refrigerant: newRefrigerant,
      created_at: new Date().toString(),
    };

    addHeavyDuty(newVehicle).then((data: any) => {
      data.status && fetchData(), cleanNewCells();
      !data.status && console.log("error HD");
    });
  }

  function cleanNewCells() {
    setNewBrand("");
    setNewModel("");
    setNewHp("");
    setNewCil("");
    setNewStart("");
    setNewFinish("");
    setNewOil("");
    setNewAir("");
    setNewCabine("");
    setNewGas("");
  }

  return (
    <section className="my-10 mx-5 overflow-x-auto">
      <h1 className="text-black font-semibold text-xl mb-10">Heavy Duty</h1>
      <Link href={"/main/heavy-duty/detail"}>
        <button className="bg-primary text-white p-4 mr-2 mb-2">Agregar</button>
      </Link>
      <table className="table-auto w-full shadow-md">
        <thead className="bg-primary">
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2 text-left">Marca</th>
            <th className="px-4 py-2 text-left">Modelo</th>
            <th className="px-4 py-2 text-left">HP</th>
            <th className="px-4 py-2 text-left">Motor</th>
            <th className="px-4 py-2 text-left">Cil</th>
            <th className="px-4 py-2 text-left">Inicio</th>
            <th className="px-4 py-2 text-left">Fin</th>
            <th className="px-4 py-2 text-left">Aceite</th>
            <th className="px-4 py-2 text-left">Aired Primario</th>
            <th className="px-4 py-2 text-left">Aired Secundario</th>
            <th className="px-4 py-2 text-left">Cabina</th>
            <th className="px-4 py-2 text-left">Gas Primario</th>
            <th className="px-4 py-2 text-left">Gas Secundario</th>
            <th className="px-4 py-2 text-left">Gas Separador</th>
            <th className="px-4 py-2 text-left">Hidraulico</th>
            <th className="px-4 py-2 text-left">Secante</th>
            <th className="px-4 py-2 text-left">Refrigerante</th>
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
              <input value={newHp} onChange={(e) => setNewHp(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newCil} onChange={(e) => setNewCil(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newMotor} onChange={(e) => setNewMotor(e.target.value)} placeholder="Nuevo" />
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
              <input value={newSecondAir} onChange={(e) => setNewSecondAir(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newCabine} onChange={(e) => setNewCabine(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newGas} onChange={(e) => setNewGas(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newSecondGas} onChange={(e) => setNewSecondGas(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newSeparatorGas} onChange={(e) => setNewSeparatorGas(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newHidraulic} onChange={(e) => setNewHidraulic(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newSecante} onChange={(e) => setNewSecante(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <input value={newRefrigerant} onChange={(e) => setNewRefrigerant(e.target.value)} placeholder="Nuevo" />
            </td>
            <td className="px-4 py-2">
              <button onClick={addNewVehicle}>Agregar</button>
            </td>
          </tr>
          {data.map((vehicle: HeavyDutyList, index) => (
            <>
              <tr key={index}>
                <td className="px-4 py-2">{vehicle.data.brand}</td>
                <td className="px-4 py-2">{vehicle.data.model}</td>
                <td className="px-4 py-2">{vehicle.data.hp}</td>
                <td className="px-4 py-2">{vehicle.data.cil}</td>
                <td className="px-4 py-2">{vehicle.data.start}</td>
                <td className="px-4 py-2">{vehicle.data.finish}</td>
                <td className="px-4 py-2">{vehicle.data.oil}</td>
                <td className="px-4 py-2">{vehicle.data.primary_air}</td>
                <td className="px-4 py-2">{vehicle.data.secondary_air}</td>
                <td className="px-4 py-2">{vehicle.data.cabine}</td>
                <td className="px-4 py-2">{vehicle.data.primary_gas}</td>
                <td className="px-4 py-2">{vehicle.data.secondary_gas}</td>
                <td className="px-4 py-2">{vehicle.data.separator_gas}</td>
                <td className="px-4 py-2">{vehicle.data.hydraulic}</td>
                <td className="px-4 py-2">{vehicle.data.secante}</td>
                <td className="px-4 py-2">{vehicle.data.refrigerant}</td>
                <td className="px-4 py-2">
                  <Link href={`/main/heavy-duty/detail/${vehicle.id}`}>
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
