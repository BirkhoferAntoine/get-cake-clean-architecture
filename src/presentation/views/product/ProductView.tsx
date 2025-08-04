import React, {type FC} from "react";
import { Box, Button, Container, Paper, Typography, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import CakeModelPresenter from "@/interface-adapters/presenters/CakeModelPresenter";
import CakeModelFallbackView from "@/presentation/views/cakeModel/CakeModelFallbackView";
import { sxStyles } from "./productView.styles";
import {ProductType} from "@/entities/models/product";

type ProductViewProps = {
    loading?: boolean;
    error?: boolean;
    product?: ProductType;
    handleAddToCart?: () => void;
};

type FeedbackProps = {
    loading?: boolean;
    error?: boolean;
    product?: ProductType;
};
const Feedback: FC<FeedbackProps> = ({ loading, error, product }) => {
    if (loading)   return <Typography>Loading…</Typography>
    if (error)     return <Typography role="alert">Error!</Typography>
    if (!product)  return <Typography>Product not found</Typography>
    return null
}
const ProductView: FC<ProductViewProps> = (
    {product, handleAddToCart, loading, error}
) => {

    const model = product?.model ? <CakeModelPresenter folder={product.model} /> : null;

    return (
        <Container>
            <Link href={'/public'} style={sxStyles.linkBack}>
                <ArrowBackIcon />Go back
            </Link>
            <Box sx={sxStyles.canvasContainer}>
                {loading ? <CakeModelFallbackView /> : model}
            </Box>
            <Box sx={sxStyles.infoBox}>
                <Typography>Click to drag and move around, mousewheel to zoom</Typography>
            </Box>
            <Paper sx={sxStyles.detailsPaper}>
                <Stack sx={sxStyles.detailsBox} spacing={1} alignItems="center">
                    <Feedback loading={loading} error={error} product={product} />
                    {product &&
                        <>
                            <Typography variant="body1" color="primary.main">{product.title}</Typography>
                            <Typography>{product.rating}/5 from {product.ratingCount} reviews</Typography>
                            <Typography color="text.secondary">{product.description}</Typography>
                            <Typography color="text.secondary">{product.price}€</Typography>
                            <Button onClick={handleAddToCart} variant={'contained'} sx={sxStyles.addToCartBtn}>
                                Get Cake
                            </Button>
                        </>
                    }
                </Stack>
            </Paper>
        </Container>
    );
};

export default ProductView;