"use client";
import { Highlight } from "react-instantsearch";
import { useRouter } from "next/navigation";
import { getPropertyByPath } from "instantsearch.js/es/lib/utils";
import Image from "next/image";

export const HitReference = ({ hit }: any) => {
    const router = useRouter();

    function handleHitClick(item: any) {
        router.push(`/search/result-product/?item=${item.code}`);
    }
    return (
        <div onClick={() => handleHitClick(hit)}>
            {/* <Image src={hit.image_1} /> */}
            Reference
            <div className="hit-name">
                <Highlight attribute="code" hit={hit} />
            </div>
            <div className="hit-charateristic">
                <Highlight attribute="code_reference" hit={hit} />
            </div>
        </div>
    );
};
