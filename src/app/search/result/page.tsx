"use client";
import ApplicationFilter from "@/app/components/ApplicationFilter";
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
            const data = await getElementsByProperty("vehicle", "model", id.trim());
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
            const data = await getElementsByProperty("heavy-duty", "model", id.trim());
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
                                        {element?.data?.oil && (
                                            <Image
                                                src={
                                                    element?.data?.oilImage !== undefined
                                                        ? element?.data?.oilImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.oil
                                            }
                                        >
                                            {element?.data?.oil}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.air && (
                                            <Image
                                                src={
                                                    element?.data?.airImage !== undefined
                                                        ? element?.data?.airImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.air
                                            }
                                        >
                                            {element?.data?.air}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.gas && (
                                            <Image
                                                src={
                                                    element?.data?.gasImage !== undefined
                                                        ? element?.data?.gasImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.gas
                                            }
                                        >
                                            {element?.data?.gas}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.cabine && (
                                            <Image
                                                src={
                                                    element?.data?.cabineImage !== undefined
                                                        ? element?.data?.cabineImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.cabine
                                            }
                                        >
                                            {element?.data?.cabine}
                                        </Link>
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
                                        {element?.data?.oil && (
                                            <Image
                                                src={
                                                    element?.data?.oilImage !== undefined
                                                        ? element?.data?.oilImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.oil
                                            }
                                        >
                                            {element?.data?.oil}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.primary_air && (
                                            <Image
                                                src={
                                                    element?.data?.airImage !== undefined
                                                        ? element?.data?.airImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.primary_air
                                            }
                                        >
                                            {element?.data?.primary_air}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.secondary_air && (
                                            <Image
                                                src={
                                                    element?.data?.airImage !== undefined
                                                        ? element?.data?.airImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.secondary_air
                                            }
                                        >
                                            {element?.data?.secondary_air}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.cabine && (
                                            <Image
                                                src={
                                                    element?.data?.cabineImage !== undefined
                                                        ? element?.data?.cabineImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.cabine
                                            }
                                        >
                                            {element?.data?.cabine}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.primary_fuel && (
                                            <Image
                                                src={
                                                    element?.data?.gasImage !== undefined
                                                        ? element?.data?.gasImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.primary_fuel
                                            }
                                        >
                                            {element?.data?.primary_fuel}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.secondary_gas && (
                                            <Image
                                                src={
                                                    element?.data?.gasImage !== undefined
                                                        ? element?.data?.gasImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.secondary_gas
                                            }
                                        >
                                            {element?.data?.secondary_gas}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.separator_gas && (
                                            <Image
                                                src={
                                                    element?.data?.gasImage !== undefined
                                                        ? element?.data?.gasImage
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.separator_gas
                                            }
                                        >
                                            {element?.data?.separator_gas}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.hydraulic && (
                                            <Image
                                                src={
                                                    element?.data?.images !== undefined
                                                        ? element?.data?.images[0]
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.hydraulic
                                            }
                                        >
                                            {element?.data?.hydraulic}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.secante && (
                                            <Image
                                                src={
                                                    element?.data?.images !== undefined
                                                        ? element?.data?.images[0]
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.secante
                                            }
                                        >
                                            {element?.data?.secante}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.refrigerant && (
                                            <Image
                                                src={
                                                    element?.data?.images !== undefined
                                                        ? element?.data?.images[0]
                                                        : "/assets/test_filter.png"
                                                }
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.refrigerant
                                            }
                                        >
                                            {element?.data?.refrigerant}
                                        </Link>
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
