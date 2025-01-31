"use client";
export default function Table({
    children,
    props,
}: {
    children: React.ReactNode;
    props?: React.PropsWithChildren<any[]>;
}) {
    return (
        <table className="table-auto w-full bg-white mt-5 border-separate border-spacing-0.5">
            <thead className="bg-primary">
                <tr className=" text-white">
                    {props?.map((element: any, index: any) => {
                        return (
                            <td key={index} className="p-4 text-left">
                                {element}
                            </td>
                        );
                    })}
                </tr>
            </thead>
            <tbody className="text-black">{children}</tbody>
        </table>
    );
}
