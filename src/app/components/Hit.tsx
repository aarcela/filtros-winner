"use client";
import { Highlight } from "react-instantsearch";
import { useRouter } from "next/navigation";
import { getPropertyByPath } from "instantsearch.js/es/lib/utils";
import Image from "next/image";

export const Hit = ({ hit }: any) => {
    const router = useRouter();

    function handleHitClick(item: any) {
        router.push(`/search/result-product/?item=${item.name}`);
    }
    return (
        <article>
            <div onClick={() => handleHitClick(hit)}>
                {/* <Image src={hit.image_1} /> */}
                <div className="hit-name">
                    <Highlight attribute="name" hit={hit} />
                </div>
                <div className="hit-charateristic">
                    <Highlight attribute="charateristic" hit={hit} />
                </div>
            </div>
        </article>
    );
};
