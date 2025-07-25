'use client'

import ProductsListPresenter from "@/presenters/ProductsListPresenter";
import HomeView from "@/views/home/HomeView";

const HomePresenter = () => {
    return <HomeView>
        <ProductsListPresenter />
    </HomeView>;
};

export default HomePresenter;