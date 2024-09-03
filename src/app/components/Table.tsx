"use client";
export default function Table({ children }: { children: React.ReactNode }) {
    return (
        <table className="table-auto w-full shadow-md mt-5">
            <thead className="bg-primary">
                <tr className="bg-gray-800 text-white">
                    <th className="px-4 py-2 text-left">Marca</th>
                    <th className="px-4 py-2 text-left">Modelo</th>
                    <th className="px-4 py-2 text-left">Motor</th>
                    <th className="px-4 py-2 text-left">HP</th>
                    <th className="px-4 py-2 text-left">Cil</th>
                    <th className="px-4 py-2 text-left">Inicio</th>
                    <th className="px-4 py-2 text-left">Fin</th>
                    <th className="px-4 py-2 text-left">Aceite</th>
                    <th className="px-4 py-2 text-left">Aire</th>
                    <th className="px-4 py-2 text-left">Gas</th>
                    <th className="px-4 py-2 text-left">Cabina</th>
                    <th className="px-4 py-2 text-left">Acción</th>
                </tr>
            </thead>
            <tbody className="text-black">{children}</tbody>
        </table>
    );
}
