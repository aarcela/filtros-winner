"use client";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import {
    Hits,
    InstantSearch,
    SearchBox,
    Configure,
    useInstantSearch,
    Pagination,
} from "react-instantsearch";
import { Hit } from "./Hit";

const searchClient = algoliasearch("9CMC95YXY9", "6b2c55fb4ddd322a18592ebff004c31a");

export const CustomSearchBox = () => {
    return (
        <section className="w-1/3 pt-4">
            <InstantSearch searchClient={searchClient} indexName="filtro-winner">
                <Configure hitsPerPage={5} />
                <div className="ais-InstantSearch">
                    <SearchBox placeholder="Búsqueda por código referencia o aplicación" />
                    <EmptyQueryBoundary fallback={null}>
                        <Hits hitComponent={Hit} className="absolute" />
                        {/* <Pagination /> */}
                    </EmptyQueryBoundary>
                </div>
            </InstantSearch>
        </section>
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
