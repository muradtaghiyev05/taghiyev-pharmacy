import { Container, Typography, Grid, Button, Box } from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

import classes from './styles'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    if (!cart.line_items) return 'Loading...';

  return (
    <Container>
        <Box sx={classes.toolbar} />
        <Typography sx={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? (
            <Typography variant="subtitle1">There is no item in your cart, 
                <Link to='/' style={classes.link}> start adding some!</Link>
            </Typography>
        ) : (
            <>
                <Grid container spacing={3}>
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={classes.cartDetails}>
                    <Typography variant="h4">Subtotal: { cart.subtotal.formatted_with_symbol }</Typography>
                    <Box>
                        <Button sx={classes.emptyButton} size='large' type='button' variant="contained" color="secondary" onClick={handleEmptyCart}>
                            Empty Cart
                        </Button>
                        <Button sx={classes.checkoutButton} component={Link} to="/checkout" size='large' type='button' variant="contained" color="primary">
                            Checkout
                        </Button>
                    </Box>
                </Box>
            </>
        ) }
    </Container>
  )
}

export default Cart