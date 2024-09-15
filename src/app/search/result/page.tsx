"use client";

import ApplicationFilter from "@/app/components/ApplicationFilter";
import Table from "@/app/components/Table";
import { getElementById, getElementsByProperty } from "@/app/utils/firebaseConnections";
import { useEffect, useState } from "react";

export default function Page({ searchParams }: any) {
    const tableVehicleHeader = [
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
    const brand = searchParams.brand;
    const [vehicleData, setVehicleData] = useState<any>();
    const [heavyDutyData, setheavyDutyData] = useState<any>();

    useEffect(() => {
        fetchVehicle();
        fetchHeavyDuty();
    }, [id, vehicleData]);

    const fetchVehicle = async () => {
        // const data = await getElementById("vehicle", id);
        getElementsByProperty("vehicle", "model", id).then((data) => {
            setVehicleData(data);
            console.log(vehicleData);
        });
    };

    const fetchHeavyDuty = async () => {
        // const data = await getElementById("heavy-duty", id);
        getElementsByProperty("heavy-duty", "model", id).then((data) => {
            setheavyDutyData(data);
        });
    };

    return (
        <section className="overflow-x-auto w-full">
            <ApplicationFilter />
            <div className="m-10">
                <h3>
                    Resultados para: {brand} - {id}
                </h3>
                <h2 className="font-bold text-xl">{vehicleData?.model}</h2>
                <div className="w-full overflow-x-auto">
                    <Table props={tableVehicleHeader}>
                        {vehicleData?.map((element: any, index: any) => (
                            <tr key={index}>
                                <td className="px-4 py-2">
                                    {element?.data?.Motor} {element?.data?.motor}
                                </td>
                                <td className="px-4 py-2">{element?.data?.hp}</td>
                                <td className="px-4 py-2">
                                    {element?.data?.Cil}
                                    {element?.data?.cil}
                                </td>
                                <td className="px-4 py-2">{element?.data?.start}</td>
                                <td className="px-4 py-2">{element?.data?.finish}</td>
                                <td className="px-4 py-2">{element?.data?.oil}</td>
                                <td className="px-4 py-2">{element?.data?.air}</td>
                                <td className="px-4 py-2">{element?.data?.gas}</td>
                                <td className="px-4 py-2">{element?.data?.cabine}</td>
                                <td className="px-4 py-2">{element?.data?.category}</td>
                            </tr>
                        ))}
                    </Table>
                    <Table props={tableHeavyDutyHeader}>
                        {heavyDutyData?.map((element: any, index: any) => (
                            <tr key={index}>
                                <td className="px-4 py-2">
                                    {element?.data?.Motor} {element?.data?.motor}
                                </td>
                                <td className="px-4 py-2">{element?.data?.hp}</td>
                                <td className="px-4 py-2">{element?.data?.cil}</td>
                                <td className="px-4 py-2">{element?.data?.start}</td>
                                <td className="px-4 py-2">{element?.data?.finish}</td>
                                <td className="px-4 py-2">{element?.data?.oil}</td>
                                <td className="px-4 py-2">{element?.data?.primary_air}</td>
                                <td className="px-4 py-2">{element?.data?.secondary_air}</td>
                                <td className="px-4 py-2">{element?.data?.cabine}</td>
                                <td className="px-4 py-2">{element?.data?.primary_gas}</td>
                                <td className="px-4 py-2">{element?.data?.secondary_gas}</td>
                                <td className="px-4 py-2">{element?.data?.separator_gas}</td>
                                <td className="px-4 py-2">{element?.data?.hydraulic}</td>
                                <td className="px-4 py-2">{element?.data?.secante}</td>
                                <td className="px-4 py-2">{element?.data?.refrigerant}</td>
                            </tr>
                        ))}
                    </Table>
                </div>
            </div>
        </section>
    );
}
