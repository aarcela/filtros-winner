import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImageProductLinkProps {
    productName: string;
    productImage: string;
}

const ImageProductLink: React.FC<ImageProductLinkProps> = ({ productName, productImage }) => {
    return (
        <>
            {productName ? (
                <Image
                    src={productImage !== undefined ? productImage : "/assets/test_filter.png"}
                    width={93}
                    height={62}
                    alt="filter"
                />
            ) : (
                <Image src={"/assets/winner-guion.png"} width={93} height={62} alt="not found" />
            )}
            <Link
                className="text-primary underline"
                href={"/search/result-product/?item=" + productName}>
                {productName}
            </Link>
        </>
    );
};

export default ImageProductLink;
