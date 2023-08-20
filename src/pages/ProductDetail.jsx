import React, { useState, useEffect } from 'react'
import ProductService from '../services/productService'
import { useParams } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'

export default function ProductDetail() {
  let { productId } = useParams()
  const [productDetails, setProductDetails] = useState({})

  useEffect(() => {
    let productService = new ProductService()
    productService.getProductDetails(productId).then(result => setProductDetails(result.data))
  })

  return (
    <div>
  <Card.Group>
    <Card fluid>
      <Card.Content>
        <Card.Header>{productDetails.name}</Card.Header>
        <Card.Description> {productDetails.unitPrice}$</Card.Description>
        <Card.Description> {productDetails.unitsInStock}</Card.Description>
        <Card.Description> {productDetails.quantityPerUnit}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button positive>Sepete Ekle</Button>
          <Button primary style={{marginLeft: '0.5em'}}>Favorilere Ekle</Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
    </div>
  )
}
