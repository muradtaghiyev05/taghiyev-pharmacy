import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import classes from './styles'

const Product = ({ product, onAddToCart }) => {

  return (
    <Card sx={classes.root}>
        <CardMedia sx={classes.media} image={product.image.url} title={product.name} />
        <CardContent>
            <div style={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h5'>
                    {product.price.formatted_with_symbol}
                </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color="GrayText" />
        </CardContent>
        <CardActions disableSpacing sx={classes.cardActions}>
            <IconButton aria-label='Add to cart' onClick={() => onAddToCart(product.id, 1)}>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product