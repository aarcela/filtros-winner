"use client";
import { useState } from "react";
import { getElementsByProperty } from "../utils/firebaseConnections";
import { useRouter } from "next/navigation";

function ApplicationFilter() {
    const router = useRouter();
    const [vehicleList, setVehicleList] = useState<any>([]);
    const [secondSelect, setSecondSelect] = useState("");
    const handleFirstSelectVehicle = async (event: any) => {
        const vehiclesFound = await getElementsByProperty(
            "vehicle",
            "category",
            event.target.value
        );
        setVehicleList(vehiclesFound);
        console.log(vehicleList);
    };
    const searchApplication = async () => {
        router.push(`/search/result?id=${secondSelect}`);
    };

    return (
        <section className="w-full bg-gray h-auto p-4">
            <h3 className="font-bold text-3xl mb-4">Búsqueda por aplicación</h3>
            <select className="mr-4 p-4">
                <option onClick={(e) => handleFirstSelectVehicle(e)} value="Aceite_Automotriz">
                    Aceite Automotriz
                </option>
                <option onClick={(e) => handleFirstSelectVehicle(e)} value="Aire_Panel">
                    Aire Panel
                </option>
                <option onClick={(e) => handleFirstSelectVehicle(e)} value="Carburado">
                    Carburado
                </option>
                <option onClick={(e) => handleFirstSelectVehicle(e)} value="Gasolina">
                    Gasolina
                </option>
                <option onClick={(e) => handleFirstSelectVehicle(e)} value="Cabina">
                    Cabina
                </option>
                <option value="Heavy_Duty_Aceite">Heavy Duty Aceite</option>
                <option value="Aire_Industrial">Aire Industrial</option>
                <option value="Heavy_Duty_Comb">Heavy Duty Comb</option>
                <option value="Hidraulico">Hidráulico</option>
                <option value="Secante_Frenos">Secante Frenos</option>
                <option value="Refrigerante">Refrigerante</option>
            </select>
            <select className="mr-4 p-4" onChange={(e) => setSecondSelect(e.target.value)}>
                <option value="">Seleccione...</option>
                {vehicleList.length > 0 &&
                    vehicleList?.map((vehicle: any) => {
                        return (
                            <option key={vehicle.id} value={vehicle.id}>
                                {vehicle.data.model}
                            </option>
                        );
                    })}
            </select>
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
