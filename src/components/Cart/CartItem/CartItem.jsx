import { Typography, Button, Card, CardActions, CardContent, CardMedia, Box } from "@mui/material"

import classes from './styles'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <Card sx={classes.root}>
        <CardMedia image={item.image.url} alt={item.name} sx={classes.media} />
        <CardContent sx={classes.cardContent}>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions sx={classes.cardActions}>
            <Box sx={classes.buttons}>
                <Button type="button" size='small' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size='small' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
            </Box>
            <Button variant="contained" type='button' color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem