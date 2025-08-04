'use client'

import ProductsListPresenter from "@/interface-adapters/presenters/ProductsListPresenter";
import HomeView from "@/presentation/views/home/HomeView";

const HomePresenter = () => {
    return <HomeView>
        <ProductsListPresenter />
    </HomeView>;
};

export default HomePresenter;