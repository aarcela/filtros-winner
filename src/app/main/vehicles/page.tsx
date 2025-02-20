"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Vehicle, VehicleList } from "@/models/vehicle";
import { addElement, getAllElements, getElementById, getElementsByProperty } from "@/app/utils/firebaseConnections";
import { DocumentData } from "firebase/firestore";
import { VehicleCategory } from "@/enums/category";
import Table from "@/app/components/Table";
import Autocomplete from "@/app/components/AutocompleteInput";

function Page() {
    const tableVehicleHeader = [
        "Marca",
        "Modelo",
        "Motor",
        "HP",
        "Cil",
        "Inicio",
        "Fin",
        "Aceite",
        "Aire",
        "Combustible",
        "Cabina",
        "Acción",
    ];
    const [data, setData] = React.useState([]);
    const [productList, setProductList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const [newBrand, setNewBrand] = React.useState("");
    const [newModel, setNewModel] = useState("");
    const [newHp, setNewHp] = useState("");
    const [newCil, setNewCil] = useState("");
    const [newStart, setNewStart] = useState("");
    const [newFinish, setNewFinish] = useState("");
    const [newMotor, setNewMotor] = useState("");
    const [newOil, setNewOil] = useState("");
    const [newAir, setNewAir] = useState("");
    const [newCabine, setNewCabine] = useState("");
    const [newGas, setNewGas] = useState("");
    const [newCategory, setnewCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        fetchData();
        fetchProducts();
    }, []);

    async function fetchData() {
        setIsLoading(true);
        setError(null);

        try {
            const data: any = await getAllElements("vehicle");
            data.map(
                async (element: any) =>
                    (element.data.productName = await searchProductName(element.data.product_id))
            );
            data.sort(
                (a: any, b: any) =>
                    a.data.brand.localeCompare(b.data.brand) ||
                    a.data.model.localeCompare(b.data.model)
            );

            setData(data);
        } catch (error: any) {
            setError(error);
        }
    }

    async function fetchProducts() {
        try {
            const data: any = await getAllElements("product");
            setProductList(data);
        } catch (error: any) {
            setError(error);
        }
    }

    function addNewVehicle() {
        const newVehicle: Vehicle = {
            brand: newBrand,
            model: newModel,
            motor: newMotor,
            hp: newHp,
            cil: newCil,
            start: newStart,
            finish: newFinish,
            oil: newOil,
            air: newAir,
            gas: newGas,
            cabine: newCabine,
            category: newCategory,
            product_id: selectedOption,
            created_at: new Date().toString(),
        };
        console.log(newVehicle);

        addElement("vehicle", newVehicle).then((data) => {
            data.status && (cleanNewCells(), fetchData());
        });
    }

    async function searchProductName(productId: string) {
        if (!productId) return "";
        const productName = await getElementById("product", productId);
        if (productName) return productName?.name;
        else return "";
    }

    function cleanNewCells() {
        setNewBrand("");
        setNewModel("");
        setNewHp("");
        setNewCil("");
        setNewMotor("");
        setNewStart("");
        setNewFinish("");
        setNewOil("");
        setNewAir("");
        setNewCabine("");
        setNewGas("");
    }

    return (
        <section className="my-5 mx-5 overflow-x-auto bg-white h-full">
            <h1 className="text-black font-semibold text-3xl mb-5">Vehiculos</h1>
            {/* <Link href={"/main/vehicles/detail"}>
                <button className="bg-primary text-white p-4 mr-2 mb-2">Agregar</button>
            </Link> */}
            <Table props={tableVehicleHeader}>
                <tr>
                    <td className="px-4 py-2 font-light ">
                        <input
                            value={newBrand}
                            onChange={(e) => setNewBrand(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2 font-light ">
                        <input
                            value={newModel}
                            onChange={(e) => setNewModel(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2  font-light ">
                        <input
                            value={newMotor}
                            onChange={(e) => setNewMotor(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2  font-light ">
                        <input
                            value={newHp}
                            onChange={(e) => setNewHp(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2 font-light ">
                        <input
                            value={newCil}
                            onChange={(e) => setNewCil(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2 font-light ">
                        <input
                            value={newStart}
                            onChange={(e) => setNewStart(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2 font-light ">
                        <input
                            value={newFinish}
                            onChange={(e) => setNewFinish(e.target.value)}
                            placeholder="Nuevo"
                        />
                    </td>
                    <td className="px-4 py-2 font-light ">
                        {/* <input
                            value={newOil}
                            onChange={(e) => setNewOil(e.target.value)}
                            placeholder="Nuevo"
                        /> */}
                        <Autocomplete
                            props={productList}
                            value={newOil}
                            onSelectedProduct={(value: any) => setNewOil(value)}
                        />
                    </td>
                    <td className="px-4 py-2  font-light ">
                        <input
                            value={newAir}
                            onChange={(e) => setNewAir(e.target.value)}
                            placeholder="Nuevo"
                        />
                        {/* <Autocomplete
                            props={productList}
                            value={newAir}
                            onSelectedProduct={(value: any) => setNewAir(value)}
                        /> */}
                    </td>
                    <td className="px-4 py-2 font-light ">
                        <input
                            value={newGas}
                            onChange={(e) => setNewGas(e.target.value)}
                            placeholder="Nuevo"
                        />
                        {/* <Autocomplete
                            props={productList}
                            value={newGas}
                            onSelectedProduct={(value: any) => setNewGas(value)}
                        /> */}
                    </td>
                    <td className="px-4 py-2  font-light ">
                        <input
                            value={newCabine}
                            onChange={(e) => setNewCabine(e.target.value)}
                            placeholder="Nuevo"
                        />
                        {/* <Autocomplete
                            props={productList}
                            value={newCabine}
                            onSelectedProduct={(value: any) => setNewCabine(value)}
                        /> */}
                    </td>
                    {/* <td className="px-4 py-2  font-light ">
                        <select
                            value={newCategory}
                            className="bg-white"
                            onChange={(e) => setnewCategory(e.target.value)}
                        >
                            <option value="" className="bg-white">
                                Seleccione...
                            </option>
                            <option value="Aceite_Automotriz">Aceite Automotriz</option>
                            <option value="Aire_Panel">Aire Panel</option>
                            <option value="Carburado">Carburado</option>
                            <option value="Gasolina">Gasolina</option>
                            <option value="Cabina">Cabina</option>
                        </select>
                    </td> */}
                    <td className="px-4 py-2 bg-gray font-light ">
                        <button className="text-primary" onClick={addNewVehicle}>
                            Agregar
                        </button>
                    </td>
                </tr>
                {data.map((vehicle: any, index) => (
                    <>
                        <tr key={index}>
                            <td className="px-4 py-2 bg-gray font-light ">
                                {vehicle.data.brand}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light ">
                                {vehicle.data.model}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light ">
                                {vehicle.data.motor}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light ">{vehicle.data.hp}</td>
                            <td className="px-4 py-2 bg-gray font-light ">{vehicle.data.cil}</td>
                            <td className="px-4 py-2 bg-gray font-light ">
                                {vehicle.data.start}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light ">
                                {vehicle.data.finish}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light ">
                                {vehicle.data.oil}{" "}
                            </td>
                            <td className="px-4 py-2 bg-gray font-light ">{vehicle.data.air}</td>
                            <td className="px-4 py-2 bg-gray font-light ">{vehicle.data.gas}</td>
                            <td className="px-4 py-2 bg-gray font-light ">
                                {vehicle.data.cabine}
                            </td>
                            {/* <td className="px-4 py-2 bg-gray font-light ">
                                {vehicle.data.category}
                            </td> */}
                            <td className="px-4 py-2 bg-gray font-light ">
                                <Link href={`/main/vehicles/detail/${vehicle.id}`}>
                                    <button className="text-primary">Editar</button>
                                </Link>
                            </td>
                        </tr>
                    </>
                ))}
            </Table>
        </section>
    );
}

export default Page;
