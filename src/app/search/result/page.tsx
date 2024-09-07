"use client";

import ApplicationFilter from "@/app/components/ApplicationFilter";
import Table from "@/app/components/Table";
import { getElementById } from "@/app/utils/firebaseConnections";
import { useEffect, useState } from "react";

export default function Page({ searchParams }: any) {
    const tableVehicleHeader = [
        "Marca",
        "Modelo",
        "Motor",
        "HP",
        "Cil",
        "Start",
        "Finish",
        "Aceite",
        "Aire",
        "Gas",
        "Cabina",
        "Categoría",
    ];
    const tableHeavyDutyHeader = [
        "Marca",
        "Modelo",
        "Motor",
        "HP",
        "Cil",
        "Start",
        "Finish",
        "Aceite",
        "Aire Primario",
        "Aire Secundario",
        "Cabina",
        "Gas Primario",
        "Gas Secundario",
        "Gas Separador",
        "Hidraulico",
        "Secante",
        "Refrigerante",
    ];
    const id = searchParams.id;
    const isVehicle = searchParams.type;
    const [vehicleData, setVehicleData] = useState<any>();

    useEffect(() => {
        searchParams.type == "true" ? fetchVehicle() : fetchHeavyDuty();
    }, [id]);

    const fetchVehicle = async () => {
        const data = await getElementById("vehicle", id);
        setVehicleData(data);
    };

    const fetchHeavyDuty = async () => {
        const data = await getElementById("heavy-duty", id);
        console.log(data);
        setVehicleData(data);
    };

    return (
        // <></>
        <section className="h-screen overflow-x-auto w-full">
            <ApplicationFilter />
            <div className="m-10">
                <h3>Resultados para:</h3>
                <h2 className="font-bold text-xl">{vehicleData?.model}</h2>
                <Table props={isVehicle ? tableVehicleHeader : tableHeavyDutyHeader}>
                    {isVehicle && (
                        <tr>
                            <td className="px-4 py-2">{vehicleData?.brand}</td>
                            <td className="px-4 py-2">{vehicleData?.model}</td>
                            <td className="px-4 py-2">{vehicleData?.motor}</td>
                            <td className="px-4 py-2">{vehicleData?.hp}</td>
                            <td className="px-4 py-2">{vehicleData?.cil}</td>
                            <td className="px-4 py-2">{vehicleData?.start}</td>
                            <td className="px-4 py-2">{vehicleData?.finish}</td>
                            <td className="px-4 py-2">{vehicleData?.oil}</td>
                            <td className="px-4 py-2">{vehicleData?.air}</td>
                            <td className="px-4 py-2">{vehicleData?.gas}</td>
                            <td className="px-4 py-2">{vehicleData?.cabine}</td>
                            <td className="px-4 py-2">{vehicleData?.category}</td>
                        </tr>
                    )}
                    {!isVehicle && (
                        <tr>
                            <td className="px-4 py-2">{vehicleData?.brand}</td>
                            <td className="px-4 py-2">{vehicleData?.model}</td>
                            <td className="px-4 py-2">{vehicleData?.hp}</td>
                            <td className="px-4 py-2">{vehicleData?.cil}</td>
                            <td className="px-4 py-2">{vehicleData?.start}</td>
                            <td className="px-4 py-2">{vehicleData?.finish}</td>
                            <td className="px-4 py-2">{vehicleData?.oil}</td>
                            <td className="px-4 py-2">{vehicleData?.primary_air}</td>
                            <td className="px-4 py-2">{vehicleData?.secondary_air}</td>
                            <td className="px-4 py-2">{vehicleData?.cabine}</td>
                            <td className="px-4 py-2">{vehicleData?.primary_gas}</td>
                            <td className="px-4 py-2">{vehicleData?.secondary_gas}</td>
                            <td className="px-4 py-2">{vehicleData?.separator_gas}</td>
                            <td className="px-4 py-2">{vehicleData?.hydraulic}</td>
                            <td className="px-4 py-2">{vehicleData?.secante}</td>
                            <td className="px-4 py-2">{vehicleData?.refrigerant}</td>
                            <td className="px-4 py-2">{vehicleData?.category}</td>
                        </tr>
                    )}
                </Table>
            </div>
        </section>
    );
}
