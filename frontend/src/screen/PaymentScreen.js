import React, {useState} from 'react'
import {Col, Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../Components/CheckoutSteps'


const PaymentScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart 

    const dispatch = useDispatch()

    if(!shippingAddress) {
        history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const submitHandler = (e) => {
    // Dispatch Peyment Method
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')    
    }

    return (
        <>
        <CheckoutSteps step1 step2 step3/>
          <h1>Payment Method</h1>
          
          <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>
            </Form.Group>
            <Col>
            <Form.Check 
            type='radio' 
            label='PayPal or Credit Card' 
            id='PayPal' 
            name='paymentMethod' 
            value='PayPal' checked 
            onChange={(e) => setPaymentMethod(e.target.value)}>

            </Form.Check>
            </Col>

            <Button type='submit' variant='primary'>
              Continue
            </Button>

          </Form>  
        </>
    )
}

export default PaymentScreen
