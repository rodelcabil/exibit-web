import styled from 'styled-components';
import {Container} from '../../globalStyles'

export const Nav =  styled.nav`
background: #30408D;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
font-size: 17px;
position: fixed;
top: 0;
z-index: 999;
width: 100%;
margin: auto;

@media screen and (max-width: 910px){
    width: 100%;

}

`;

export const NavbarContainer =  styled(Container)`
height: 60px;
display: flex;
padding: 0 30px 0 30px;
margin: auto;
max-width: 1500px;
justify-content: space-between;
${Container}


@media (min-width: 250px) and (max-width: 910px){
    padding: 0;

}
`;