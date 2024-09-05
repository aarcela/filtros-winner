"use client";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import {
    Hits,
    InstantSearch,
    SearchBox,
    Configure,
    useInstantSearch,
} from "react-instantsearch";
import { Hit } from "./Hit";

const searchClient = algoliasearch("9CMC95YXY9", "6b2c55fb4ddd322a18592ebff004c31a");

export const CustomSearchBox = () => {
    return (
        <InstantSearch searchClient={searchClient} indexName="filtro-winner">
            <Configure hitsPerPage={5} />
            <div className="ais-InstantSearch">
                <SearchBox />
                <EmptyQueryBoundary fallback={null}>
                    <Hits hitComponent={Hit} />
                </EmptyQueryBoundary>
            </div>
        </InstantSearch>
    );
};

function EmptyQueryBoundary({ children, fallback }: any) {
    const { indexUiState } = useInstantSearch();

    if (!indexUiState.query) {
        return (
            <>
                {fallback}
                <div hidden>{children}</div>
            </>
        );
    }

    return children;
}
