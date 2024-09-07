"use client";
export default function Table({
    children,
    props,
}: {
    children: React.ReactNode;
    props?: React.PropsWithChildren<any[]>;
}) {
    return (
        <table className="table-auto w-full shadow-md mt-5 border-separate border-spacing-0.5">
            <thead className="bg-primary">
                <tr className="bg-gray-800 text-white">
                    {props?.map((element: any, index: any) => {
                        return (
                            <th key={index} className="p-4 text-left">
                                {element}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody className="text-black">{children}</tbody>
        </table>
    );
}
