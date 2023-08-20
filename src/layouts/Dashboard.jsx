import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import CartDetails from '../pages/CartDetails'

import { Grid, Container } from 'semantic-ui-react'
import { Routes, Route } from 'react-router'

export default function Dashboard() {
    return (
        <div>
            <Container>
                <Grid>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Routes >
                            <Route exact path="/" element={<ProductList/>} />
                            <Route exact path="/products" element={<ProductList/>} />
                            <Route path= "/products/:productId" element={<ProductDetail/>} />
                            <Route path= "/cart" element={<CartDetails/>} />
                        </Routes>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
