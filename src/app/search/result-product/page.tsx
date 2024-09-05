"use client";
import Table from "@/app/components/Table";
import TableRowHeavyDuty from "@/app/components/TableRowHeavyDuty";
import TableRowVehicle from "@/app/components/TableRowVehicle";
import { getElementsByProperty } from "@/app/utils/firebaseConnections";
import { HeavyDutyList } from "@/models/heavy-duty";
import { Vehicle, VehicleList } from "@/models/vehicle";
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
        <section className="w-full  h-screen p-4">
            <div className="w-full">
                <h3 className="text-primary">Categoría:</h3>
                <h1 className="text-7xl font-bold">{data.name}</h1>
                <table className="table-auto w-full shadow-md mt-5">
                    <thead className="bg-primary">
                        <tr className="bg-gray-800 text-white">
                            <th className="p-2 bg-gray-800 text-white">
                                Expecificaciones Técnicas
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>Modelo</tr>
                    </tbody>
                </table>
            </div>
            <div className="w-full mt-9">
                <h3 className="text-3xl">Tabla de aplicaciones vehículo</h3>
            </div>
            <div className="w-full">
                {vehicleData && (
                    <Table props={tableVehicleHeader}>
                        {vehicleData.map((element: VehicleList, index: any) => (
                            <TableRowVehicle key={index} props={element}></TableRowVehicle>
                        ))}
                    </Table>
                )}
            </div>
            <div className="w-full mt-9">
                <h3 className="text-3xl">Tabla de aplicaciones vehículo</h3>
            </div>
            <div className="w-full">
                {heavyDutyData && (
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
