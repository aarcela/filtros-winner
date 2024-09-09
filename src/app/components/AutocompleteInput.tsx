import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

const Autocomplete = ({ props, onSelectedProduct, value }: any) => {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState([]);

    function filterProduct(event: any) {
        const filteredItems = props.filter((item: any) =>
            item.data.name.toLowerCase().includes(event.toLowerCase())
        );
        setQuery(filteredItems);
        console.log(filteredItems);
    }

    function handleClick(item: string) {
        onSelectedProduct(item);
        setQuery([]);
    }

    return (
        <>
            <input
                value={value}
                type="text"
                onChange={(e) => filterProduct(e.target.value)}
                placeholder="Búsqueda"
            />
            {query.length > 0 && (
                <ul className="bg-white p-4 z-10">
                    {query.map((item: any, index: any) => (
                        <li
                            key={index}
                            className="mb-2"
                            onClick={() => handleClick(item.data.name)}
                        >
                            {item.data.name}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Autocomplete;
