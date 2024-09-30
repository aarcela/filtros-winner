"use client";

import { VehicleList } from "@/models/vehicle";

export default function TableRowVehicle({
    props,
}: {
    props: React.PropsWithChildren<VehicleList>;
}) {
    return (
        <tr>
            <td className="px-4 py-2 text-black">{props.data.brand}</td>
            <td className="px-4 py-2 text-black">{props.data.model}</td>
            <td className="px-4 py-2 text-black">{props.data.motor} </td>
            <td className="px-4 py-2 text-black">{props.data.hp}</td>
            <td className="px-4 py-2 text-black">{props.data.cil}</td>
            <td className="px-4 py-2 text-black">{props.data.start}</td>
            <td className="px-4 py-2 text-black">{props.data.finish}</td>
        </tr>
    );
}
