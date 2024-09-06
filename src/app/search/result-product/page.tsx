"use client";
import Table from "@/app/components/Table";
import TableRowHeavyDuty from "@/app/components/TableRowHeavyDuty";
import TableRowVehicle from "@/app/components/TableRowVehicle";
import { getElementsByProperty } from "@/app/utils/firebaseConnections";
import { HeavyDutyList } from "@/models/heavy-duty";
import { VehicleList } from "@/models/vehicle";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page({ searchParams }: any) {
    const tableVehicleHeader = ["Marca", "Modelo", "Motor", "HP", "Cil", "Start", "Finish"];
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
    const itemId = searchParams.item;
    const [data, setData] = useState<any>({} as any);
    const [vehicleData, setVehicleData] = useState<any>([] as any);
    const [heavyDutyData, setHeavyDutyData] = useState<any>([] as any);

    useEffect(() => {
        if (itemId) {
            fetchData();
        }
    }, [itemId]);

    const fetchData = async () => {
        const fetchData = await getElementsByProperty("product", "name", itemId);
        setData(fetchData[0].data);
        if (fetchData[0].id) {
            const vehicleData = await getElementsByProperty(
                "vehicle",
                "product_id",
                fetchData[0].id
            );
            setVehicleData(vehicleData);
            const heavyDutyData = await getElementsByProperty(
                "heavy-duty",
                "product_id",
                fetchData[0].id
            );
            setHeavyDutyData(heavyDutyData);
        }
    };

    return (
        <section className="w-full  h-screen p-16">
            <div className="flex justify-evenly gap-10 mt-10">
                <Image
                    src={"/assets/test_filter.png"}
                    width={537}
                    height={340}
                    alt="filter-winner"
                />
                <div className="">
                    <h3 className="text-primary font-bold">Categoría:</h3>
                    <h1 className="text-7xl font-bold">{data.name}</h1>
                    <table className="table-auto w-full shadow-md mt-5 ">
                        <thead className="bg-primary">
                            <th className="p-2 bg-gray-800 text-white">
                                Expecificaciones Técnicas
                            </th>
                            <th className="p-2 bg-gray-800 text-white"></th>
                        </thead>
                        <tbody>
                            <td className="p-4">
                                <tr>Diámetro Externo: 8.8 mm</tr>
                                <tr>Diámetro Interno: M20 x 1,5</tr>
                                <tr>Altura Total: 81,4</tr>
                                <tr>Empacadura Interna: 55,4</tr>
                            </td>
                            <td className="p-4">
                                <tr>Espesor de Empacadura: 8.8 mm</tr>
                                <tr>Altura de Empacadura: M20 x 1,5</tr>
                                <tr>Válvula de Alivio: 81,4</tr>
                                <tr>Válvula Anti-Drenaje: 55,4</tr>
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full mt-10">
                <h3 className="text-4xl font-bold">Tabla de aplicaciones</h3>
            </div>
            <div className="w-full">
                {vehicleData.lenght > 0 && (
                    <Table props={tableVehicleHeader}>
                        {vehicleData.map((element: VehicleList, index: any) => (
                            <TableRowVehicle key={index} props={element}></TableRowVehicle>
                        ))}
                    </Table>
                )}
            </div>
            <div className="w-full">
                {heavyDutyData.length > 0 && (
                    <Table props={tableHeavyDutyHeader}>
                        {vehicleData.map((element: HeavyDutyList, index: any) => (
                            <TableRowHeavyDuty key={index} props={element}></TableRowHeavyDuty>
                        ))}
                    </Table>
                )}
            </div>
        </section>
    );
}
