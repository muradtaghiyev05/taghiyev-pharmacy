import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, Box } from "@mui/material"
import { useEffect, useState } from "react"
import classes from './styles'
import AddressForm from "../AddressForm"
import PaymentForm from "../PaymentForm"
import { commerce } from "../../../lib/commerce"
import { Link, useNavigate } from "react-router-dom"

const steps = ["Shipping Address", "Payment Details"]

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {

    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState([]);
    const [isFinished, setIsFinished] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
                console.log(token);
            } catch (error) {
                navigate('/');
            }
        }

        generateToken();
    }, [cart])

    const nextStep = () => setActiveStep(prevStep => prevStep + 1);
    const backStep = () => setActiveStep(prevStep => prevStep - 1);

    const next = (data) => {
        setShippingData(data);

        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000);
    }

    let Confirmation = () => (order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
                <Divider sx={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
    ) : isFinished ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase!</Typography>
                <Divider sx={classes.divider} />
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
    ) : (
        <div style={classes.spinner}>
            <CircularProgress />
        </div>
    ));

    // if (error) {
    //     Confirmation = () => (
    //         <>
    //             <Typography variant="h5">Error: {error}</Typography>
    //             <br />
    //             <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    //         </>
    //     );
    // }


    const Form = () => activeStep === 0 ? 
    <AddressForm checkoutToken={checkoutToken} next={next} /> : 
    <PaymentForm 
        backStep={backStep} 
        nextStep={nextStep} 
        checkoutToken={checkoutToken} 
        shippingData={shippingData} 
        onCaptureCheckout={onCaptureCheckout} 
        timeout={timeout} />

  return (
    <>
        <Box sx={classes.toolbar} />
        <Box sx={classes.layout}>
            <Paper sx={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} sx={classes.stepper}>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
            </Paper>
        </Box>
    </>
  )
}

export default Checkout