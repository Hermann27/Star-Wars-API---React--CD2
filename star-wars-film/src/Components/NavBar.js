import React  from "react";
import {Menu, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <Menu>
            <Container>
            <Link to='/'>
                 <Menu.Item name="Search Character"/>
            </Link>
            <Link to='/FilmList'>
                 <Menu.Item name="Films"/>
            </Link>
            <Link to='/Characters'>
                 <Menu.Item name="Characters"/>
            </Link>   
        </Container>
        </Menu>
    )
}