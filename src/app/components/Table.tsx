"use client";
export default function Table({
    children,
    props,
}: {
    children: React.ReactNode;
    props?: React.PropsWithChildren<any[]>;
}) {
    return (
        <table className="table-auto shadow-md mt-5 w-full">
            <thead className="bg-primary">
                <tr className="bg-gray-800 text-white">
                    {props?.map((element: any, index: any) => {
                        return (
                            <th key={index} className="px-4 text-left">
                                {element}
                            </th>
                        );
                    })}

                    {/* {*/}
                    {/* <th className="px-4 text-left">Modelo</th>
                    <th className="px-4 text-left">Motor</th>
                    <th className="px-4 text-left">HP</th>
                    <th className="px-4 text-left">Cil</th>
                    <th className="px-4 text-left">Inicio</th>
                    <th className="px-4 text-left">Fin</th>
                    <th className="px-4 text-left">Aceite</th>
                    <th className="px-4 text-left">Aire</th>
                    <th className="px-4 text-left">Gas</th>
                    <th className="px-4 text-left">Cabina</th> */}
                </tr>
            </thead>
            <tbody className="text-black">{children}</tbody>
        </table>
    );
}
