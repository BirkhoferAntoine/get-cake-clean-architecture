import React, {type FC} from "react";
import {ProductType} from "@/contexts/products.context";
import {Box, Paper, Skeleton, Typography} from "@mui/material";
import {sxStyles} from "@/views/productsList/productsListView.styles";
import ProductItemPresenter from "@/presenters/ProductItemPresenter";

type ProductsListViewProps = {
    isLoading: boolean;
    error: Error | null;
    data: ProductType[];
}
const ProductsListView: FC<ProductsListViewProps> = ({ isLoading, error, data }) => {

    let content: React.ReactNode;

    if (isLoading) {
        content = <Box sx={sxStyles.productList}>
            {[...Array(6)].map((_, i) => (
                <Skeleton key={'product-skeleton-'+i} variant="rectangular" width={240} height={320} />
            ))}
        </Box>;
    } else if (error) {
        content = <Typography role="alert">Error while fetching data</Typography>;
    } else if (data.length === 0) {
        content = <Typography>No cakes available.</Typography>;
    } else {
        content = (
            <Box sx={sxStyles.productList}>
                {data.map(productItem => {
                    return <ProductItemPresenter
                        product={productItem}
                        key={'product-item-' + productItem.id}
                    />;
                })}
            </Box>
        );
    }

    return (
        <Paper sx={sxStyles.productListContainer} elevation={4}>
            <Box sx={sxStyles.header}>
                <Typography variant={'h2'} color={'primary.main'}>
                    Our Cakes
                </Typography>
            </Box>
            {content}
        </Paper>
    );
};

export default ProductsListView;