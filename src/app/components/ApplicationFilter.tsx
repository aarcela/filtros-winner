"use client";
import { useState } from "react";
import { getElementsByProperty } from "../utils/firebaseConnections";
import { useRouter } from "next/navigation";

function ApplicationFilter() {
    const router = useRouter();
    const [vehicleList, setVehicleList] = useState<any>([]);
    const [secondSelect, setSecondSelect] = useState("");
    const [brandSelect, setBrandSelect] = useState("");
    const handleFirstSelectVehicle = async (event: any) => {
        const vehiclesFound = await getElementsByProperty(
            "vehicle",
            "brand",
            event.target.value
        );
        setBrandSelect(event.target.value);
        setVehicleList(vehiclesFound);
        console.log(vehicleList);
    };
    const searchApplication = async () => {
        console.log(secondSelect);
        secondSelect && router.push(`/search/result?id=${secondSelect}&brand=${brandSelect}`);
    };

    return (
        <section className="w-full bg-gray h-auto pl-5 py-4 sm:pl-20">
            <h3 className="font-bold text-3xl mb-4">Búsqueda por aplicación</h3>
            <div className="flex w-full">
                <select className="mr-4 p-4 w-1/3">
                    <option value="">Seleccione la marca</option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="ACURA">
                        ACURA
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="ALFA ROMEO">
                        ALFA ROMEO
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="AMC">
                        AMC
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="ARO">
                        ARO
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="ASIA">
                        ASIA
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="AUDI">
                        AUDI
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="BMW">
                        BMW
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="HYUNDAI">
                        HYUNDAI
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="KIA">
                        KIA
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="MAZDA">
                        MAZDA
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="PEUGEOT">
                        PEUGEOT
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="TOYOTA">
                        TOYOTA
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="CHEVROLET">
                        CHEVROLET
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="ENCAVA">
                        ENCAVA
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="FORD">
                        FORD
                    </option>
                    <option onClick={(e) => handleFirstSelectVehicle(e)} value="MERCEDES BENZ">
                        MERCEDES BENZ
                    </option>
                </select>
                <select
                    className="mr-4 p-4 w-1/3"
                    onChange={(e) => setSecondSelect(e.target.value)}
                >
                    <option value="">Seleccione el modelo</option>
                    <option value="INTEGRA">INTEGRA</option>
                    <option value="VIGOR">VIGOR</option>
                    <option value="146 TI">146 Ti</option>
                    <option value="156">156 T</option>
                    <option value="HORNET">HORNET</option>
                    <option value="JAVELIN">JAVELIN</option>
                    <option value="BUFFALO">BUFFALO</option>
                    <option value="DAKTARI">DAKTARI</option>
                    <option value="RANGER">RANGER</option>
                    <option value="RINO PICK-UP">RINO PICK-UP </option>
                    <option value="TOWNER">TOWNER</option>
                    <option value="90">90</option>
                    <option value="100">100</option>
                    <option value="A3">A3</option>
                    <option value="A4">A4 </option>
                    <option value="A4">A4 </option>
                    <option value="A6">A6 </option>
                    <option value="A6">A6 </option>
                    <option value="S4">S4 </option>
                    <option value="RS4">RS4 </option>
                    <option value="S6">S6 </option>
                    <option value="RS6">RS6 </option>
                    <option value="TT">TT </option>
                    <option value="318i">318i</option>
                    <option value="320i">320i</option>
                    <option value="325i">325i</option>
                    <option value="525i">525i</option>
                    <option value="528i">528i</option>
                    <option value="530i">530i</option>
                    <option value="735i">735i</option>
                    <option value="ELANTRA">ELANTRA </option>
                    <option value="MATRIX">MATRIX </option>
                    <option value="TUCSON">TUCSON </option>
                    <option value="SPORTAGE">SPORTAGE</option>
                    <option value="6">6</option>
                    <option value="206">206 CC </option>
                    <option value="4">4 RUNNER </option>
                    <option value="AVALON">AVALON </option>
                    <option value="CAMRY">CAMRY </option>
                    <option value="COROLLA">COROLLA</option>
                    <option value="FJ">FJ CRUISER </option>
                    <option value="SIENNA">SIENNA </option>
                    <option value="YARIS">YARIS </option>
                    <option value="FVR">FVR 33K </option>
                    <option value="KODIAK 6500">KODIAK 6500</option>
                    <option value="KODIAK 7500">KODIAK 7500</option>
                    <option value="KODIAK 8500">KODIAK 8500</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                    <option value="3100">3100</option>
                    <option value="CARGO 1721">CARGO 1721 </option>
                    <option value="CARGO 1722">CARGO 1722 </option>
                    <option value="CARGO 1730">CARGO 1730 </option>
                    <option value="CARGO 2631">CARGO 2631 </option>
                    <option value="CARGO 2632">CARGO 2632 </option>
                    <option value="LS1634">LS1634</option>
                    <option value="LS1924">LS1924</option>
                    <option value="LS2638">LS2638</option>
                </select>
                <button
                    className="bg-primary text-white p-4 mr-5 w-1/3"
                    onClick={() => searchApplication()}
                >
                    Buscar Filtro
                </button>
            </div>
        </section>
    );
}

export default ApplicationFilter;
