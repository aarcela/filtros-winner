import React from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";
const searchClient = algoliasearch("C5PVSYGZCS", "8dbd0582124b17e9da4f3ccc379dd0e2");

export default function CustomSearchBox() {
    return (
        <InstantSearch indexName="ecommerce" searchClient={searchClient}>
            {/* <SearchBox /> */}
            {/* <Hits hitComponent={Hit} /> */}
            {/* <Pagination /> */}
        </InstantSearch>
    );
}
