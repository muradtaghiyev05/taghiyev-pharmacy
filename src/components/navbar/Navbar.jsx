import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Box } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import MedicineLogo from '../../assets/images/medicine.svg'
import { Link, useLocation } from "react-router-dom"

import classes from './styles'

const Navbar = ({ totalItems }) => {

    const location = useLocation();

  return (
    <>
        <AppBar position="fixed" sx={classes.AppBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to='/' variant='h6' sx={classes.title} color='inherit'>
                    <img src={MedicineLogo} alt='commerce' height='25px' style={classes.image} />
                    Taghiyev Pharmacy
                </Typography>
                <Box sx={classes.grow} />
                {location.pathname === '/' ? (
                <Box>
                    <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Box> ) : null }
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar