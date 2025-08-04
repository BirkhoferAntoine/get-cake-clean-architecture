import {notFound} from 'next/navigation';
import type { Metadata } from 'next';
import ProductPresenter from "@/interface-adapters/presenters/ProductPresenter";
import {FC} from "react";

type ProductPageParamsType = {
    params: Promise<{id: string}>;
}

export async function generateMetadata({ params }: ProductPageParamsType): Promise<Metadata> {
    const {id} = await params;
    return {
        title: `Cake #${id} • GetCake`,
        description: `Details for cake ${id}`,
    };
}
const ProductPage: FC<ProductPageParamsType> = async ({params}) => {
    const {id} = await params;
    if (!id || Array.isArray(id)) {
        notFound();
    }

    return <ProductPresenter productId={id} />;
};

export default ProductPage;