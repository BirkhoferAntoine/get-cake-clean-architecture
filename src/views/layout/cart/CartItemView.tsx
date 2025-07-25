import {type FC} from "react";
import { CartItemType } from '@/store/cart-slice.ts';
import { Box, IconButton, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type CartItemViewProps = {
    product: CartItemType;
    onDelete: (id: string) => void;
};

const CartItemView: FC<CartItemViewProps> = ({product, onDelete}) => {
    return (
        <MenuItem>
            <IconButton onClick={() => onDelete(product.id)}><DeleteIcon/></IconButton>
            <Box>{product.title} x {product.quantity} = {product.price*product.quantity}€</Box>
        </MenuItem>
    );
};

export default CartItemView;