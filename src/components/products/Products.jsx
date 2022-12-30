import { Grid, Box } from "@mui/material";
import Product from './product/Product';

import classes from './styles'

const Products = ({ products, onAddToCart }) => {
  return (
    <Box sx={classes.content}>
        <Box sx={classes.toolbar} />
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product) => {
                return (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                )
            })}
        </Grid>
    </Box>
  )
}

export default Products