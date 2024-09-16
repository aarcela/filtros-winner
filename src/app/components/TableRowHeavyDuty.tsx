"use client";

import { HeavyDutyList } from "@/models/heavy-duty";

export default function TableRowVehicle({
    props,
}: {
    props: React.PropsWithChildren<HeavyDutyList>;
}) {
    return (
        <tr>
            <td className="px-4 py-2 text-black">{props.data.brand}</td>
            <td className="px-4 py-2 text-black">{props.data.model}</td>
            <td className="px-4 py-2 text-black">{props.data.motor}</td>
            <td className="px-4 py-2 text-black">{props.data.hp}</td>
            <td className="px-4 py-2 text-black">{props.data.cil}</td>
            <td className="px-4 py-2 text-black">{props.data.start}</td>
            <td className="px-4 py-2 text-black">{props.data.finish}</td>
            <td className="px-4 py-2 text-black">{props.data.oil}</td>
            <td className="px-4 py-2 text-black">{props.data.primary_air}</td>
            {/* <td className="px-4 py-2 text-black">{props.data.cabine}</td> */}
            <td className="px-4 py-2 text-black">{props.data.primary_gas}</td>
            <td className="px-4 py-2 text-black">{props.data.hydraulic}</td>
            <td className="px-4 py-2 text-black">{props.data.secante}</td>
            <td className="px-4 py-2 text-black">{props.data.refrigerant}</td>
        </tr>
    );
}
