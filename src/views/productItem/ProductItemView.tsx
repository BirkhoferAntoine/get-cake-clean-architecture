import { type FC } from 'react';
import { ProductType } from '@/contexts/products.context';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
//import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GradeIcon from '@mui/icons-material/Grade';
import Link from 'next/link';
import { sxStyles } from './productItemView.styles';
import CardMediaRotatorPresenter from "@/presenters/CardMediaRotatorPresenter";

type ProductItemViewProps = {
    product: ProductType,
    handleAddToCart: () => void,
}


const ProductItemPresenter: FC<ProductItemViewProps> = ({ product, handleAddToCart }) => {

    return (
        <Card sx={sxStyles.cardContainer} elevation={1}>
            <Link href={'/products/'+product.id}>

                <CardMediaRotatorPresenter
                    alt="A picture of the product"
                    image={product.image}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" color={'primary.highlight'} component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </Link>
            <Box sx={sxStyles.productInfoBox}>
                <Typography variant="body2" color="text.secondary">Price: {product.price}€</Typography>
                <Box sx={sxStyles.lowerCardBox}>
                    <Box sx={sxStyles.gradeBox}><GradeIcon/>{product.rating}</Box>
                    <CardActions sx={sxStyles.cardContent}>
                        {/*<Button size="small"><FavoriteIcon /></Button>*/}
                        <Button size="small" onClick={handleAddToCart}>
                            <ShoppingCartIcon />
                        </Button>
                    </CardActions>
                </Box>
            </Box>

        </Card>
    );
};

export default ProductItemPresenter;