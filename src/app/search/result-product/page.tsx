"use client";
import Table from "@/app/components/Table";
import TableRowHeavyDuty from "@/app/components/TableRowHeavyDuty";
import TableRowVehicle from "@/app/components/TableRowVehicle";
import { getElementsByProperty } from "@/app/utils/firebaseConnections";
import { HeavyDutyList } from "@/models/heavy-duty";
import { VehicleList } from "@/models/vehicle";
import { debug } from "console";
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
    }, [itemId]);

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
        if (productData.category.includes("Aire")) {
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
            const sortedVehicle = data.sort((a: any, b: any) => {
                if (a.data.brand < b.data.brand) {
                    return -1;
                }
                if (a.data.brand > b.data.brand) {
                    return 1;
                }
                return 0;
            });
            setVehicleData(sortedVehicle);
        });
    };

    const fetchHeavyDuty = async (productData: any) => {
        let productColumn = "";
        if (productData.category.includes("Aire")) {
            productColumn = "primary_air";
        } else if (productData.category.includes("Aceite")) {
            productColumn = "oil";
        } else if (productData.category.includes("Combustible")) {
            productColumn = "primary_fuel";
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
            const sortedVehicle = data.sort((a: any, b: any) => {
                if (a.data.brand < b.data.brand) {
                    return -1;
                }
                if (a.data.brand > b.data.brand) {
                    return 1;
                }
                return 0;
            });
            setHeavyDutyData(sortedVehicle);
        });
    };

    return (
        <section className="w-full p-5 sm:p-16 bg-white">
            <div className="flex flex-col justify-evenly gap-10 mt-10 sm:flex-row">
                <Image
                    src={
                        data?.images !== undefined ? data?.images[0] : "/assets/test_filter.png"
                    }
                    width={537}
                    height={340}
                    alt="filter-winner"
                />
                <div className="flex flex-col w-96">
                    <h3 className="text-primary font-bold">Categoría: {data.category}</h3>
                    <h1 className="text-3xl sm:text-7xl font-bold">{data.name}</h1>
                    <table className="table-auto mt-5 ">
                        <thead className="bg-primary">
                            <tr>
                                <th className="p-2 bg-gray-800 text-white">
                                    Especificaciones Técnicas
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {data?.["anti-drain"] && (
                                    <td>Anti-drain: {data?.["anti-drain"]}</td>
                                )}
                            </tr>
                            <tr>
                                {data?.["By Pass Valve"] && (
                                    <td>By Pass Valve: {data?.["by_pass_valve"]}</td>
                                )}
                            </tr>
                            <tr>{data?.["drain"] && <td>Drain: {data?.["drain"]}</td>}</tr>
                            <tr>{data?.["gs-id"] && <td>GS-ID: {data?.["gs-id"]}</td>}</tr>
                            <tr>{data?.["gs-od"] && <td>GS-OD: {data?.["gs-od"]}</td>}</tr>
                            <tr>{data?.["h"] && <td>H: {data?.["h"]}</td>}</tr>
                            <tr>{data?.["id"] && <td>ID: {data?.["id"]}</td>}</tr>
                            <tr>{data?.["id2"] && <td>ID2: {data?.["id2"]}</td>}</tr>
                            <tr>{data?.["in"] && <td>IN: {data?.["in"]}</td>}</tr>
                            <tr>{data?.["l"] && <td>L: {data?.["l"]}</td>}</tr>
                            <tr>{data?.["li"] && <td>Li: {data?.["li"]}</td>}</tr>
                            <tr>{data?.["od"] && <td>OD: {data?.["od"]}</td>}</tr>
                            <tr>{data?.["out"] && <td>OUT: {data?.["out"]}</td>}</tr>
                            <tr>{data?.["th"] && <td>TH: {data?.["th"]}</td>}</tr>
                            <tr>{data?.["w"] && <td>W: {data?.["w"]}</td>}</tr>
                            <tr>{data?.["we"] && <td>We: {data?.["we"]}</td>}</tr>
                            <tr>{data?.["wi"] && <td>Wi: {data?.["wi"]}</td>}</tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex w-100 h-auto gap-1 mt-2">
                {data.images !== undefined &&
                    data?.images.map((img: any, index: any) => (
                        <Image
                            key={index}
                            src={img}
                            alt="preview"
                            width="100"
                            height="100"
                        ></Image>
                    ))}
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
