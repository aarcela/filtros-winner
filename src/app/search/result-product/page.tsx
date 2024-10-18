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
    const tableHeavyDutyHeader = ["Marca", "Modelo", "Motor", "HP", "Cil", "Start", "Finish"];
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
                                {data?.["anti-drain"] && (
                                    <td>Anti-drain: {data?.["anti-drain"]}</td>
                                )}
                                {data?.["By Pass Valve"] && (
                                    <td>By Pass Valve: {data?.["by_pass_valve"]}</td>
                                )}
                            </tr>
                            <tr>
                                {data?.["drain"] && <td>Drain: {data?.["drain"]}</td>}
                                {data?.["gs-id"] && <td>GS-ID: {data?.["gs-id"]}</td>}
                            </tr>
                            <tr>
                                {data?.["gs-od"] && <td>GS-OD: {data?.["gs-od"]}</td>}
                                {data?.["h"] && <td>H: {data?.["h"]}</td>}
                            </tr>
                            <tr>
                                {data?.["id"] && <td>ID: {data?.["id"]}</td>}
                                {data?.["id2"] && <td>ID2: {data?.["id2"]}</td>}
                            </tr>
                            <tr>
                                {data?.["in"] && <td>IN: {data?.["in"]}</td>}
                                {data?.["l"] && <td>L: {data?.["l"]}</td>}
                            </tr>
                            <tr>
                                {data?.["li"] && <td>Li: {data?.["li"]}</td>}
                                {data?.["od"] && <td>OD: {data?.["od"]}</td>}
                            </tr>
                            <tr>
                                {data?.["out"] && <td>OUT: {data?.["out"]}</td>}
                                {data?.["th"] && <td>TH: {data?.["th"]}</td>}
                            </tr>
                            <tr>
                                {data?.["w"] && <td>W: {data?.["w"]}</td>}
                                {data?.["we"] && <td>We: {data?.["we"]}</td>}
                            </tr>
                            <tr>{data?.["wi"] && <td>Wi: {data?.["wi"]}</td>}</tr>
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
