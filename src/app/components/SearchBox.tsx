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
import { HitVehicle } from "./HitVehicle";
import { HitReference } from "./HitReference";
import { useRef } from "react";
import ReactDOM from "react-dom";

const searchClient = algoliasearch("9CMC95YXY9", "6b2c55fb4ddd322a18592ebff004c31a");
export const CustomSearchBox = () => {
    const emptyQueryStringOnClicked = () => {
        console.log("clicked");
        const inputElement = document.querySelector(
            ".ais-SearchBox-reset"
        ) as HTMLInputElement | null;
        if (inputElement) {
            inputElement.click();
        }
    };
    return (
        <section className="w-90 sm:w-full pt-4 order-last sm:order-2">
            <InstantSearch searchClient={searchClient}>
                <Configure hitsPerPage={3} />
                <SearchBox placeholder="Búsqueda por código, referencia o aplicación" />
                <EmptyQueryBoundary fallback={null}>
                    <div className="absolute overflow-y-auto h-3/4">
                        <Index indexName="prod_PRODUCT">
                            <Hits hitComponent={Hit} onClick={emptyQueryStringOnClicked} />
                        </Index>
                        <Index indexName="prod_VEHICLE">
                            <Hits
                                hitComponent={HitVehicle}
                                onClick={emptyQueryStringOnClicked}
                            />
                        </Index>
                        <Index indexName="prod_HEAVYDUTY">
                            <Hits
                                hitComponent={HitVehicle}
                                onClick={emptyQueryStringOnClicked}
                            />
                        </Index>
                        <Index indexName="prod_REFERENCE">
                            <Hits
                                hitComponent={HitReference}
                                onClick={emptyQueryStringOnClicked}
                            />
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
