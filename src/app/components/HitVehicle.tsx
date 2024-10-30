"use client";
import { Highlight } from "react-instantsearch";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const HitVehicle = ({ hit }: any) => {
    const router = useRouter();

    function handleHitClick(item: any) {
        console.log(item);
        router.push(`/search/result/?id=${item.model}&brand=${item.brand}`);
    }
    return (
        <div onClick={() => handleHitClick(hit)}>
            {/* <Image src={hit.image_1} /> */}
            <div className="hit-name">
                <Highlight attribute="brand" hit={hit} />
            </div>
            <div className="hit-charateristic">
                <Highlight attribute="model" hit={hit} />
            </div>
        </div>
    );
};
