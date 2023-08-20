import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></Image>
        <Dropdown pointing="top left" text='userName'>
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
