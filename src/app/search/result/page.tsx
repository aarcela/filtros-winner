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
    const id = searchParams.id;
    const [vehicleData, setVehicleData] = useState<any>();

    const fetchVehicle = async () => {
        const vehicleData = await getElementById("vehicle", id);
        setVehicleData(vehicleData);
        console.log(vehicleData);
    };

    useEffect(() => {
        console.log(id);
        fetchVehicle();
    }, []);

    return (
        <section className="h-screen overflow-x-auto w-full">
            <ApplicationFilter />
            <div className="m-10">
                <h3>Resultados para:</h3>
                <h2 className="font-bold text-xl">{vehicleData?.model}</h2>
                <Table props={tableVehicleHeader}>
                    <tr>
                        <td className="px-4 py-2">{vehicleData.brand}</td>
                        <td className="px-4 py-2">{vehicleData.model}</td>
                        <td className="px-4 py-2">{vehicleData.motor}</td>
                        <td className="px-4 py-2">{vehicleData.hp}</td>
                        <td className="px-4 py-2">{vehicleData.cil}</td>
                        <td className="px-4 py-2">{vehicleData.start}</td>
                        <td className="px-4 py-2">{vehicleData.finish}</td>
                        <td className="px-4 py-2">{vehicleData.oil}</td>
                        <td className="px-4 py-2">{vehicleData.air}</td>
                        <td className="px-4 py-2">{vehicleData.gas}</td>
                        <td className="px-4 py-2">{vehicleData.cabine}</td>
                        <td className="px-4 py-2">{vehicleData.category}</td>
                    </tr>
                </Table>
            </div>
        </section>
    );
}
