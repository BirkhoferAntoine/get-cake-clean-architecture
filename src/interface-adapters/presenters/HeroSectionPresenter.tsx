'use client'

import HeroSectionView from "@/presentation/views/heroSection/HeroSectionView";
import CakeModelPresenter from "@/interface-adapters/presenters/CakeModelPresenter";
import React from "react";
import {useProductsContext} from "@/presentation/state/contexts/products.context";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}
const HeroSectionPresenter = () => {
    const {data} = useProductsContext();
    const product = data ? data[getRandomInt(data.length)] : null;
    const model = product?.model ? <CakeModelPresenter folder={product.model} /> : null;

    return <HeroSectionView Model={model} />
};

export default HeroSectionPresenter;