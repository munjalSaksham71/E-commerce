import React, { useEffect} from 'react';
import { Row, Col } from "react-bootstrap";
import Product from '../Components/Product';
import {useDispatch, useSelector} from 'react-redux'
import {listProducts } from '../actions/productActions'
import {loader} from '../Components/loader'
import {message} from '../Components/message'
const HomeScreens = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {

        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            
            <h1> LATEST PRODUCTS </h1>
                {loading?(<loader />): error? (<message />) : (
                     <Row>
                     {products.map((product) => (
                         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                             <h3><Product product={product} /></h3>
                         </Col>
                     )) }
                 </Row>
                  
                ) }
           

            
            
         </div>
    )
}

export default HomeScreens
