"use client";
import ApplicationFilter from "@/app/components/ApplicationFilter";
import Table from "@/app/components/Table";
import { getElementById, getElementsByProperty } from "@/app/utils/firebaseConnections";
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
        "Gas",
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
        getElementsByProperty("vehicle", "model", id.trim()).then((data) => {
            setVehicleData(data);
        });
    };

    const fetchHeavyDuty = async () => {
        // const data = await getElementById("heavy-duty", id);
        getElementsByProperty("heavy-duty", "model", id.trim()).then((data) => {
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
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
                                        {element?.data?.primary_gas && (
                                            <Image
                                                src="/assets/test_filter.png"
                                                width={93}
                                                height={62}
                                                alt="filter"
                                            ></Image>
                                        )}
                                        <Link
                                            className="text-primary underline"
                                            href={
                                                "/search/result-product/?item=" +
                                                element?.data?.primary_gas
                                            }
                                        >
                                            {element?.data?.primary_gas}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2">
                                        {element?.data?.secondary_gas && (
                                            <Image
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
                                                src="/assets/test_filter.png"
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
