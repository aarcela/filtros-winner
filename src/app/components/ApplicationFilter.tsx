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
            "category",
            event.target.value
        );
        setIsVehicle(true);
        setVehicleList(vehiclesFound);
        console.log(vehicleList);
    };
    const handleFirstSelectHeavyDuty = async (event: any) => {
        const heavyDutyFound = await getElementsByProperty(
            "heavy-duty",
            "category",
            event.target.value
        );
        setIsVehicle(false);
        setVehicleList(heavyDutyFound);
        console.log(heavyDutyFound);
    };
    const searchApplication = async () => {
        console.log(secondSelect);
        secondSelect && router.push(`/search/result?id=${secondSelect}&type=${isVehicle}`);
    };

    return (
        <section className="w-full bg-gray h-auto p-4">
            <h3 className="font-bold text-3xl mb-4">Búsqueda por aplicación</h3>
            <select className="mr-4 p-4">
                <option value="">Seleccione...</option>
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
                <option value="Heavy_Duty_Aceite" onClick={(e) => handleFirstSelectHeavyDuty(e)}>
                    Heavy Duty Aceite
                </option>
                <option value="Aire_Industrial" onClick={(e) => handleFirstSelectHeavyDuty(e)}>
                    Aire Industrial
                </option>
                <option value="Heavy_Duty_Comb" onClick={(e) => handleFirstSelectHeavyDuty(e)}>
                    Heavy Duty Comb
                </option>
                <option value="Hidraulico" onClick={(e) => handleFirstSelectHeavyDuty(e)}>
                    Hidráulico
                </option>
                <option value="Secante_Frenos" onClick={(e) => handleFirstSelectHeavyDuty(e)}>
                    Secante Frenos
                </option>
                <option value="Refrigerante" onClick={(e) => handleFirstSelectHeavyDuty(e)}>
                    Refrigerante
                </option>
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
