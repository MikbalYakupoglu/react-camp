import React from 'react'
import { Button, Dropdown, Label } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify'

export default function CartSummary() {
    const {cartItems} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    
    function handleRemoveFromCart(product){
        dispatch(removeFromCart(product));
        toast.success(`${product.name} sepetten silindi.`);
    }

    return (
        <div>
            <Dropdown item text="Sepetiniz">
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem) => (
                            <Dropdown.Item key={cartItem.product.id}>
                            <Label>{cartItem.quantity}</Label>
                                {cartItem.product.name}
                                <Button negative onClick={() => handleRemoveFromCart(cartItem.product)}>X</Button>
                            </Dropdown.Item>
                        ))
                    }                   
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
