"use client";
import { Highlight } from "react-instantsearch";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Hit = ({ hit }: any) => {
    const router = useRouter();

    function handleHitClick(item: any) {
        router.push(`/search/result-product/?item=${item.name}`);
    }
    return (
        <div onClick={() => handleHitClick(hit)}>
            {/* <Image src={hit.image_1} /> */}
            Producto
            <div className="hit-name">
                <Highlight attribute="name" hit={hit} />
            </div>
            <div className="hit-charateristic">
                <Highlight attribute="category" hit={hit} />
            </div>
        </div>
    );
};
