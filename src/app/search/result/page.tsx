"use client";
import ApplicationFilter from "@/app/components/ApplicationFilter";
import ImageProductLink from "@/app/components/ImageProductLink";
import Table from "@/app/components/Table";
import {
    getElementsByProperty,
    getExactElementByProperty,
} from "@/app/utils/firebaseConnections";
import Image from "next/image";
import Link from "next/link";
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
        "Combustible",
        "Cabina",
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
        "Combustible Primario",
        "Combustible Secundario",
        "Combustible Separador",
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
    }, [id]);

    const fetchVehicle = async () => {
        try {
            const data = await getElementsByProperty(
                "vehicle",
                "model",
                id.trim(),
                "brand",
                brand.trim()
            );
            console.log("Vehicle: ", data);
            const promises = data.map(async (element) => {
                const products = ["oil", "air", "gas", "cabine"];
                const imagePromises = products.map(async (product) => {
                    const productData = await getExactElementByProperty(
                        "product",
                        "name",
                        element.data[product]
                    );
                    if (productData && productData.length > 0 && productData[0]?.data.images) {
                        element.data[`${product}Image`] = productData[0].data.images[0];
                    }
                });
                await Promise.all(imagePromises);
            });

            await Promise.all(promises);
            const sortedVehicle = data.sort((a: any, b: any) => {
                if (a.data.start < b.data.start) {
                    return -1;
                }
                if (a.data.start > b.data.start) {
                    return 1;
                }
                return 0;
            });
            setVehicleData(sortedVehicle);
        } catch (error) {
            console.error("Error fetching vehicle data:", error);
        }
    };

    const fetchHeavyDuty = async () => {
        try {
            const data = await getElementsByProperty(
                "heavy-duty",
                "model",
                id.trim(),
                "brand",
                brand.trim()
            );
            console.log("HD: ", data);
            const promises = data.map(async (element) => {
                const products = [
                    "oil",
                    "primary_air",
                    "primary_fuel",
                    "refrigerant",
                    "secondary_air",
                    "secondary_gas",
                    "separator_gas",
                ];
                const imagePromises = products.map(async (product) => {
                    const productData = await getExactElementByProperty(
                        "product",
                        "name",
                        element.data[product]
                    );
                    if (productData && productData.length > 0 && productData[0]?.data.images) {
                        element.data[`${product}Image`] = productData[0].data.images[0];
                    }
                });
                await Promise.all(imagePromises);
            });

            await Promise.all(promises);

            const sortedHeavyDuty = data.sort((a: any, b: any) => {
                if (a.data.start < b.data.start) {
                    return -1;
                }
                if (a.data.start > b.data.start) {
                    return 1;
                }
                return 0;
            });
            setheavyDutyData(sortedHeavyDuty);
        } catch (error) {
            console.error("Error fetching heavy-duty data:", error);
        }
    };

    return (
        <section className="overflow-x-auto w-full bg-white">
            <ApplicationFilter />
            <div className="m-10 bg-white">
                <h3>
                    Resultados para: {brand} - {id}
                </h3>
                <h2 className="font-bold text-xl">{vehicleData?.model}</h2>
                <div className="w-full overflow-x-auto bg-white">
                    {vehicleData?.length > 0 && (
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
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.oil}
                                            productImage={element?.data?.oilImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.air}
                                            productImage={element?.data?.airImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.gas}
                                            productImage={element?.data?.gasImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.cabine}
                                            productImage={element?.data?.cabineImage}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </Table>
                    )}
                    {heavyDutyData?.length > 0 && (
                        <Table props={tableHeavyDutyHeader}>
                            {heavyDutyData?.map((element: any, index: any) => (
                                <tr key={index}>
                                    <td className="px-4 py-2">
                                        {element?.data?.motor} {element?.data?.Motor}
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.hp} {element?.data?.HP}
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.cil} {element?.data?.Cil}
                                    </td>
                                    <td className="px-4 py-2">{element?.data?.start}</td>
                                    <td className="px-4 py-2">{element?.data?.finish}</td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.oil}
                                            productImage={element?.data?.oilImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.primary_air}
                                            productImage={element?.data?.airImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.secondary_air}
                                            productImage={element?.data?.airImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.cabine}
                                            productImage={element?.data?.cabineImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.primary_fuel}
                                            productImage={element?.data?.gasImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.secondary_gas}
                                            productImage={element?.data?.gasImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.separator_gas}
                                            productImage={element?.data?.gasImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.oil}
                                            productImage={element?.data?.oilImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.secante}
                                            productImage={element?.data?.secanteImage}
                                        />
                                    </td>
                                    <td className="px-4 py-2">
                                        <ImageProductLink
                                            productName={element?.data?.refrigerant}
                                            productImage={element?.data?.refrigerantImage}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </Table>
                    )}
                </div>
            </div>
        </section>
    );
}
