import React from 'react'
import { Row, Col } from "react-bootstrap";
import { productsArray } from '../productsStore';
import ProductCard from '../Components/ProductCard';

function Store() {
    return (
        <>
            <h1 align='center' className='p-3'>Welcome To Store</h1>
            <Row xs={1} md={3} className='g-4'>
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product = {product} />
                    </Col>

                ))}
            </Row>
        </>
    )
}

export default Store
