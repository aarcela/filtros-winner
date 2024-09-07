"use client";
import React, { useEffect, useState } from "react";

import { searchDocumentsByProperty } from "../../utils/product";
import { addHeavyDuty, getAllHeavyDuty, updateHeavyDuty } from "@/app/utils/heavyDuty";
import { HeavyDuty, HeavyDutyList } from "@/models/heavy-duty";
import { getAllElements } from "@/app/utils/firebaseConnections";
import Link from "next/link";
import Table from "@/app/components/Table";

function Page() {
    const tableHeaderHeavyDuty = [
        "Marca",
        "Modelo",
        "Motor",
        "HP",
        "Cil",
        "Inicio",
        "Fin",
        "Aceite",
        "Aired Primario",
        "Aired Secundario",
        "Cabina",
        "Gas Primario",
        "Gas Secundario",
        "Gas Separador",
        "Hidraulico",
        "Secante",
        "Refrigerante",
        "Categoría ",
        "Acción",
    ];
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
    const [newCategory, setNewCategory] = useState("");

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
            category: newCategory,
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
        <section className="my-5 mx-5 overflow-x-auto">
            <h1 className="text-black font-semibold text-3xl mb-5">Heavy Duty</h1>
            <Link href={"/main/heavy-duty/detail"}>
                <button className="bg-primary text-white p-4 mr-2 mb-2">Agregar</button>
            </Link>
            <Table props={tableHeaderHeavyDuty}>
                <tr>
                    <td className="px-4 py-2">
                        <input
                            value={newBrand}
                            onChange={(e) => setNewBrand(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newModel}
                            onChange={(e) => setNewModel(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newMotor}
                            onChange={(e) => setNewMotor(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newHp}
                            onChange={(e) => setNewHp(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newCil}
                            onChange={(e) => setNewCil(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>

                    <td className="px-4 py-2">
                        <input
                            value={newStart}
                            onChange={(e) => setNewStart(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newFinish}
                            onChange={(e) => setNewFinish(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newOil}
                            onChange={(e) => setNewOil(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newAir}
                            onChange={(e) => setNewAir(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newSecondAir}
                            onChange={(e) => setNewSecondAir(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newCabine}
                            onChange={(e) => setNewCabine(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newGas}
                            onChange={(e) => setNewGas(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newSecondGas}
                            onChange={(e) => setNewSecondGas(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newSeparatorGas}
                            onChange={(e) => setNewSeparatorGas(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newHidraulic}
                            onChange={(e) => setNewHidraulic(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newSecante}
                            onChange={(e) => setNewSecante(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <input
                            value={newRefrigerant}
                            onChange={(e) => setNewRefrigerant(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2">
                        <select
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            className="bg-white"
                        >
                            <option value="">Seleccione...</option>
                            <option value="Heavy_Duty_Aceite">Heavy Duty Aceite</option>
                            <option value="Aire_Industrial">Aire Industrial</option>
                            <option value="Heavy_Duty_Comb">Heavy Duty Comb</option>
                            <option value="Hidraulico">Hidráulico</option>
                            <option value="Secante_Frenos">Secante Frenos</option>
                            <option value="Refrigerante">Refrigerante</option>
                        </select>
                    </td>
                    <td className="px-4 py-2">
                        <button className="text-primary font-light" onClick={addNewVehicle}>
                            Agregar
                        </button>
                    </td>
                </tr>
                {data.map((vehicle: HeavyDutyList, index) => (
                    <>
                        <tr key={index}>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.brand}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.model}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.motor}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">{vehicle.data.hp}</td>
                            <td className="px-4 py-2 bg-gray font-light">{vehicle.data.cil}</td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.start}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.finish}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">{vehicle.data.oil}</td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.primary_air}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.secondary_air}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.cabine}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.primary_gas}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.secondary_gas}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.separator_gas}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.hydraulic}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.secante}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.refrigerant}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                {vehicle.data.category}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light">
                                <Link href={`/main/heavy-duty/detail/${vehicle.id}`}>
                                    <button className="text-primary font-light">Editar</button>
                                </Link>
                            </td>
                        </tr>
                    </>
                ))}
            </Table>
        </section>
    );
}

export default Page;
