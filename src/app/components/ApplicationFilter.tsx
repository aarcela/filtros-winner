"use client";
import { useState } from "react";
import { getElementsByProperty } from "../utils/firebaseConnections";
import { useRouter } from "next/navigation";

function ApplicationFilter() {
    const router = useRouter();
    const [vehicleList, setVehicleList] = useState<any>([]);
    const [secondSelect, setSecondSelect] = useState("");
    const [isVehicle, setIsVehicle] = useState<boolean>();
    const handleFirstSelectVehicle = async (event: any) => {
        const vehiclesFound = await getElementsByProperty(
            "vehicle",
            "brand",
            event.target.value
        );
        setIsVehicle(true);
        setVehicleList(vehiclesFound);
        console.log(vehicleList);
    };
    const searchApplication = async () => {
        console.log(secondSelect);
        secondSelect && router.push(`/search/result?id=${secondSelect}&type=${isVehicle}`);
    };

    return (
        <section className="w-full bg-gray h-auto p-4 pl-20">
            <h3 className="font-bold text-3xl mb-4">Búsqueda por aplicación</h3>
            <div className="flex w-full">
                <select className="mr-4 p-4 w-1/3">
                    <option value="">Seleccione la marca</option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="Marca 1">
                        Marca 1
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="Marca 2">
                        Marca 2
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="Marca 3">
                        Marca 3
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="Ford">
                        Ford
                    </option>
                </select>
                <select
                    className="mr-4 p-4 w-1/3"
                    onChange={(e) => setSecondSelect(e.target.value)}
                >
                    <option value="">Seleccione el modelo</option>
                    <option value="Modelo 1">Modelo 1</option>
                    <option value="KA">KA</option>
                    <option value="Focus">Focus</option>
                </select>
                <button
                    className="bg-primary text-white p-4 mr-2 w-1/3"
                    onClick={() => searchApplication()}
                >
                    Buscar Filtro
                </button>
            </div>
        </section>
    );
}

export default ApplicationFilter;
