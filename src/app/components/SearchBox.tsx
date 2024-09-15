"use client";

import { liteClient as algoliasearch } from "algoliasearch/lite";
// import {algoliasearch} from "algoliasearch";
import "instantsearch.css/themes/satellite.css";
import {
    Hits,
    InstantSearch,
    SearchBox,
    Configure,
    useInstantSearch,
    Pagination,
    Index,
} from "react-instantsearch";
import { Hit } from "./Hit";
import { useState } from "react";
import { HitVehicle } from "./HitVehicle";
import { HitReference } from "./HitReference";

const searchClient = algoliasearch("9CMC95YXY9", "6b2c55fb4ddd322a18592ebff004c31a");
export const CustomSearchBox = () => {
    return (
        <section className="w-80 sm:w-full pt-4">
            <InstantSearch searchClient={searchClient}>
                <Configure hitsPerPage={5} />
                <SearchBox placeholder="Búsqueda por código referencia o aplicación" />
                <EmptyQueryBoundary fallback={null}>
                    <div className="absolute">
                        <Index indexName="filtro-winner">
                            <Hits hitComponent={Hit} />
                        </Index>
                        <Index indexName="prod_VEHICLES">
                            <Hits hitComponent={HitVehicle} />
                        </Index>
                        <Index indexName="prod_HEAVYDUTY">
                            <Hits hitComponent={HitVehicle} />
                        </Index>
                        <Index indexName="prod_REFERENCES">
                            <Hits hitComponent={HitReference} />
                        </Index>
                    </div>
                    {/* <Pagination /> */}
                </EmptyQueryBoundary>
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
