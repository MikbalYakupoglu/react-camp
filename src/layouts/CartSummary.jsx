import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text="Sepetiniz">
                <Dropdown.Menu>
                    <Dropdown.Item>Laptop 1</Dropdown.Item>
                    <Dropdown.Item>Laptop 2</Dropdown.Item>
                    <Dropdown.Item>Laptop 3</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
