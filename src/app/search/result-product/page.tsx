"use-client";
import Table from "@/app/components/Table";
import Image from "next/image";

function Page() {
    return (
        <section className="flex ">
            <div>
                <Image
                    src="/public/assets/search-main-image.png"
                    alt="filter-image"
                    width={450}
                    height={450}
                ></Image>
                <div>
                    <h3 className="text-primary">Categoría:</h3>
                    <h1 className="text-3xl">PH-2808</h1>
                    <table>
                        <thead>Expecificaciones Técnicas</thead>
                        <tbody>
                            <ul>
                                <li>Modelo: PH-2808</li>
                                <li>Marca: Philips</li>
                                <li>Altura total</li>
                                <li>Altura total</li>
                                <li>Altura total</li>
                            </ul>
                        </tbody>
                    </table>
                </div>
            </div>
            <Table>
                <></>
            </Table>
        </section>
    );
}
