"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addVehicle, getAllVehicles, updateVehicle } from "../../utils/vehicles";
import { Vehicle } from "@/models/vehicle";
import { searchDocumentsByProperty } from "../../utils/product";

function Page() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [newID, setNewID] = React.useState("");
  const [newBrand, setNewBrand] = React.useState("");
  const [newModel, setNewModel] = useState("");
  const [newHp, setNewHp] = useState("");
  const [newCil, setNewCil] = useState("");
  const [newStart, setNewStart] = useState(0);
  const [newFinish, setNewFinish] = useState(0);
  const [newOil, setNewOil] = useState("");
  const [newAir, setNewAir] = useState("");
  const [newCabine, setNewCabine] = useState("");
  const [newGas, setNewGas] = useState("");

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
      const data: any = await getAllVehicles();
      console.log("ProductsList: ", data);
      setData(data);
    } catch (error: any) {
      setError(error);
    }
  }

  function addNewVehicle() {
    const newVehicle: Vehicle = {
      id: newID,
      brand: newBrand,
      model: newModel,
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

    addVehicle(newVehicle).then((data: any) => {
      data.status && fetchData(), cleanNewCells();
      !data.status && console.log("error vehiculo");
    });
  }

  function setEditProductValues(vehicle: Vehicle) {
    setActivateEdit(vehicle.id);
  }

  async function editVehicle(vehicle: Vehicle) {
    const editedVehicle: any = {
      id: vehicle.id,
      name: updateName,
      description: updateDescription,
      charateristic: updateCharacteristic,
    };

    const collectionId = await searchDocumentsByProperty(vehicle.id);
    console.log(collectionId);

    updateVehicle(collectionId, editedVehicle).then((data: any) => {
      data.status && fetchData(), setActivateEdit("");
      !data.status && console.log("error producto");
    });
  }

  function cleanNewCells() {
    setNewBrand("");
    setNewModel("");
    setNewHp("");
    setNewCil("");
    setNewStart(0);
    setNewFinish(0);
    setNewOil("");
    setNewAir("");
    setNewCabine("");
    setNewGas("");
  }

  return (
    <section className="my-10 max-w-screen-xl mx-5 overflow-x-auto">
      <h1 className="text-black font-semibold text-xl mb-10">Vehiculos</h1>
      <table className="table-auto w-full shadow-md overflow-x-auto">
        <thead className="bg-primary">
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Marca</th>
            <th className="px-4 py-2 text-left">Modelo</th>
            <th className="px-4 py-2 text-left">HP</th>
            <th className="px-4 py-2 text-left">Cil</th>
            <th className="px-4 py-2 text-left">Inicio</th>
            <th className="px-4 py-2 text-left">Fin</th>
            <th className="px-4 py-2 text-left">Aceite</th>
            <th className="px-4 py-2 text-left">Aire</th>
            <th className="px-4 py-2 text-left">Cabina</th>
            <th className="px-4 py-2 text-left">Gas</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {data.map((vehicle: Vehicle, index) => (
            <>
              {activateEdit === vehicle.id ? (
                <tr key={vehicle.id}>
                  <td className="px-4 py-2">
                    <input value={vehicle.id} disabled />
                  </td>
                  <td className="px-4 py-2">
                    <input value={updateName} onChange={(e) => setUpdatename(e.target.value)} />
                  </td>
                  <td className="px-4 py-2">
                    <input value={updateDescription} onChange={(e) => setUpdatedescription(e.target.value)} />
                  </td>
                  <td className="px-4 py-2">
                    <input value={updateCharacteristic} onChange={(e) => setUpdatecharacteristic(e.target.value)} />
                  </td>
                  <td className="px-4 py-2">
                    <button onClick={() => editVehicle(vehicle)}>Aceptar</button>
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  <td className="px-4 py-2">{vehicle.id}</td>
                  <td className="px-4 py-2">{vehicle.brand}</td>
                  <td className="px-4 py-2">{vehicle.model}</td>
                  <td className="px-4 py-2">{vehicle.hp}</td>
                  <td className="px-4 py-2">{vehicle.cil}</td>
                  <td className="px-4 py-2">{vehicle.start}</td>
                  <td className="px-4 py-2">{vehicle.finish}</td>
                  <td className="px-4 py-2">{vehicle.oil}</td>
                  <td className="px-4 py-2">{vehicle.air}</td>
                  <td className="px-4 py-2">{vehicle.cabine}</td>
                  <td className="px-4 py-2">{vehicle.gas}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => setEditProductValues(vehicle)}>Editar</button>
                  </td>
                </tr>
              )}
            </>
          ))}
          <tr>
            <td className="px-4 py-2">
              <input value={newID} onChange={(e) => setNewID(e.target.value)} placeholder="Nuevo ID" />
            </td>
            <td className="px-4 py-2">
              <input value={newBrand} onChange={(e) => setNewBrand(e.target.value)} placeholder="Nueva narca" />
            </td>
            <td className="px-4 py-2">
              <input value={newModel} onChange={(e) => setNewModel(e.target.value)} placeholder="Nuevo modelo" />
            </td>
            <td className="px-4 py-2">
              <input value={newHp} onChange={(e) => setNewHp(e.target.value)} placeholder="Nueva HP" />
            </td>
            <td className="px-4 py-2">
              <input value={newCil} onChange={(e) => setNewCil(e.target.value)} placeholder="Nueva HP" />
            </td>
            <td className="px-4 py-2">
              <input value={newStart} onChange={(e) => setNewStart(parseFloat(e.target.value))} placeholder="Nueva HP" />
            </td>
            <td className="px-4 py-2">
              <input value={newFinish} onChange={(e) => setNewFinish(parseFloat(e.target.value))} placeholder="Nueva HP" />
            </td>
            <td className="px-4 py-2">
              <input value={newOil} onChange={(e) => setNewOil(e.target.value)} placeholder="Nueva HP" />
            </td>
            <td className="px-4 py-2">
              <input value={newAir} onChange={(e) => setNewAir(e.target.value)} placeholder="Nueva HP" />
            </td>
            <td className="px-4 py-2">
              <input value={newCabine} onChange={(e) => setNewCabine(e.target.value)} placeholder="Nueva HP" />
            </td>
            <td className="px-4 py-2">
              <input value={newGas} onChange={(e) => setNewGas(e.target.value)} placeholder="Nueva HP" />
            </td>
            <td className="px-4 py-2">
              <button onClick={addNewVehicle}>Agregar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Page;
