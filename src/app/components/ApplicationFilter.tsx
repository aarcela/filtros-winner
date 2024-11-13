"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { brands, modelList } from "../constants";

function ApplicationFilter() {
    const router = useRouter();
    const [secondSelect, setSecondSelect] = useState("");
    const [brandSelect, setBrandSelect] = useState("");
    const [filteredModels, setFilteredModels] = useState<any>();
    const handleFirstSelect = async (event: any) => {
        const selectedBrand = event.target.value.trim();
        setBrandSelect(selectedBrand);
        const filtered = modelList.filter((model) => model.brand === selectedBrand);
        setFilteredModels(filtered);
    };
    const handleModelSelection = (event: any) => {
        setSecondSelect(event.target.value);
    };
    const searchApplication = async () => {
        console.log(secondSelect);
        secondSelect && router.push(`/search/result?id=${secondSelect}&brand=${brandSelect}`);
    };

    return (
        <section className="w-full bg-gray h-auto pl-5 py-4 sm:pl-20 order-3 sm:order-2 flex flex-col">
            <h3 className="font-bold text-3xl mb-4">Búsqueda por aplicación</h3>
            <div className="flex w-full flex-col sm:flex-row gap-3 sm:gap-1">
                <select className="mr-4 p-4 sm:w-1/3" onChange={handleFirstSelect}>
                    <option value="">Seleccione la marca</option>
                    {brands.map((element, index) => {
                        return (
                            <option key={index} value={element}>
                                {element}
                            </option>
                        );
                    })}
                </select>
                {brandSelect && (
                    <>
                        <select
                            id="model-select"
                            className="mr-4 p-4 sm:w-1/3"
                            onChange={handleModelSelection}
                        >
                            <option value="">Selecciona el modelo</option>
                            {filteredModels.map((model: any, index: number) => (
                                <option key={index} value={model.model}>
                                    {model.model}
                                </option>
                            ))}
                        </select>
                    </>
                )}
                <button
                    className="bg-primary text-white p-4 mr-5 sm:w-1/3"
                    onClick={() => searchApplication()}
                >
                    Buscar Filtro
                </button>
            </div>
        </section>
    );
}

export default ApplicationFilter;
