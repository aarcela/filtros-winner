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
        <section className="w-full bg-gray h-auto p-4">
            <h3 className="font-bold text-3xl mb-4">Búsqueda por aplicación</h3>
            <select className="mr-4 p-4">
                <option value="">Seleccione la marca</option>
                <option onClick={(e) => handleFirstSelectVehicle(e)} value="Marca_1">
                    Marca 1
                </option>
                <option onClick={(e) => handleFirstSelectVehicle(e)} value="Marca_2">
                    Marca 2
                </option>
                <option onClick={(e) => handleFirstSelectVehicle(e)} value="Carburado">
                    Marca 3
                </option>
            </select>
            {/* <select className="mr-4 p-4" onChange={(e) => setSecondSelect(e.target.value)}>
                <option value="">Seleccione el modelo</option>
                <option value="Carburado">
                    Modelo 1
                </option>
            </select> */}
            <button
                className="bg-primary text-white p-4 mr-2"
                onClick={() => searchApplication()}
            >
                Buscar Filtro
            </button>
        </section>
    );
}

export default ApplicationFilter;
