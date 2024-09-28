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
    const tableVehicleHeader = ["Motor", "HP", "Cil", "Start", "Finish"];
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
    const itemId = searchParams.item;
    const [data, setData] = useState<any>({} as any);
    const [vehicleData, setVehicleData] = useState<any>([] as any);
    const [heavyDutyData, setHeavyDutyData] = useState<any>([] as any);

    useEffect(() => {
        if (itemId) {
            fetchData(itemId);
        }
    });

    const fetchData = async (id: any) => {
        const fetchData = await getElementsByProperty("product", "name", id);
        try {
            setData(fetchData[0].data);
            if (fetchData[0].data) {
                await fetchVehicle(fetchData[0].data);
                await fetchHeavyDuty(fetchData[0].data);
            }
        } catch {}
    };

    const fetchVehicle = async (productData: any) => {
        let productColumn = "";
        if (productData.category.includes("Air")) {
            productColumn = "air";
        } else if (productData.category.includes("Aceite")) {
            productColumn = "oil";
        } else if (productData.category.includes("Combustible")) {
            productColumn = "gas";
        } else if (productData.category.includes("Hidraúlico")) {
            productColumn = "hydraulic";
        } else if (productData.category.includes("Cabina")) {
            productColumn = "cabine";
        } else if (productData.category.includes("Secante")) {
            productColumn = "secante";
        } else {
            return;
        }
        getElementsByProperty("vehicle", productColumn, productData.name).then((data) => {
            setVehicleData(data);
        });
    };

    const fetchHeavyDuty = async (productData: any) => {
        let productColumn = "";
        if (productData.category.includes("Air")) {
            productColumn = "air";
        } else if (productData.category.includes("Aceite")) {
            productColumn = "oil";
        } else if (productData.category.includes("Combustible")) {
            productColumn = "gas";
        } else if (productData.category.includes("Hidraúlico")) {
            productColumn = "hydraulic";
        } else if (productData.category.includes("Cabina")) {
            productColumn = "cabine";
        } else if (productData.category.includes("Secante")) {
            productColumn = "secante";
        } else {
            return;
        }
        getElementsByProperty("heavy-duty", productColumn, productData.name).then((data) => {
            setHeavyDutyData(data);
        });
    };

    return (
        <section className="w-full p-5 sm:p-16">
            <div className="flex flex-col justify-evenly gap-10 mt-10 sm:flex-row">
                <Image
                    src={"/assets/test_filter.png"}
                    width={537}
                    height={340}
                    alt="filter-winner"
                />
                <div className="flex flex-1 flex-col">
                    <h3 className="text-primary font-bold">Categoría: {data.category}</h3>
                    <h1 className="text-3xl sm:text-7xl font-bold">{data.name}</h1>
                    <table className="table-auto w-full mt-5 ">
                        <thead className="bg-primary">
                            <tr>
                                <th className="p-2 bg-gray-800 text-white">
                                    Especificaciones Técnicas
                                </th>
                                <th className="p-2 bg-gray-800 text-white"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="p-4">
                                {data?.["Anti-drain"] && (
                                    <td>Anti-drain: {data?.["Anti-drain"]}</td>
                                )}
                                {data?.["By Pass Valve"] && (
                                    <td>By Pass Valve: {data?.["By Pass Valve"]}</td>
                                )}
                            </tr>
                            <tr>
                                {data?.["Drain"] && <td>Drain: {data?.["Drain"]}</td>}
                                {data?.["GS-ID"] && <td>GS-ID: {data?.["GS-ID"]}</td>}
                            </tr>
                            <tr>
                                {data?.["GS-OD"] && <td>GS-OD: {data?.["GS-OD"]}</td>}
                                {data?.["H"] && <td>H: {data?.["H"]}</td>}
                            </tr>
                            <tr>
                                {data?.["ID"] && <td>ID: {data?.["ID"]}</td>}
                                {data?.["ID2"] && <td>ID2: {data?.["ID2"]}</td>}
                            </tr>
                            <tr>
                                {data?.["IN"] && <td>IN: {data?.["IN"]}</td>}
                                {data?.["L"] && <td>L: {data?.["L"]}</td>}
                            </tr>
                            <tr>
                                {data?.["Li"] && <td>Li: {data?.["Li"]}</td>}
                                {data?.["OD"] && <td>OD: {data?.["OD"]}</td>}
                            </tr>
                            <tr>
                                {data?.["OUT"] && <td>OUT: {data?.["OUT"]}</td>}
                                {data?.["TH"] && <td>TH: {data?.["TH"]}</td>}
                            </tr>
                            <tr>
                                {data?.["W"] && <td>W: {data?.["W"]}</td>}
                                {data?.["We"] && <td>We: {data?.["We"]}</td>}
                            </tr>
                            <tr>{data?.["Wi"] && <td>Wi: {data?.["Wi"]}</td>}</tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full mt-10">
                <h3 className="text-2xl sm:text-4xl font-bold">Tabla de aplicaciones</h3>
            </div>
            <div className="w-full overflow-x-auto">
                {vehicleData?.length > 0 && (
                    <Table props={tableVehicleHeader}>
                        {vehicleData.map((element: VehicleList, index: any) => (
                            <TableRowVehicle key={index} props={element}></TableRowVehicle>
                        ))}
                    </Table>
                )}
            </div>
            <div className="w-full">
                {heavyDutyData?.length > 0 && (
                    <Table props={tableHeavyDutyHeader}>
                        {heavyDutyData.map((element: HeavyDutyList, index: any) => (
                            <TableRowHeavyDuty key={index} props={element}></TableRowHeavyDuty>
                        ))}
                    </Table>
                )}
            </div>
        </section>
    );
}
