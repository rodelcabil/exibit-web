import styled from 'styled-components';
import banner from '../../assets/NU-fast-facts.jpg'
export const ExibitContainer = styled.div`
   
    background: #fff;

    @media screen and (max-width: 600px){
        padding-left: 0;
    }
   
`;

export const Banner = styled.div`
   height: 400px;
   width: 100%;
   background-repeat: no-repeat;
   background-size: cover;
   background-clip: content-box;
   background-image: Linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${banner});
   display: flex;
   align-items: center;
   justify-content: center;

   h1{
       color: #fff;
       font-weight: 500;
       font-size: 70px;
       position: relative;

       &::after{
        content: '';
        background: #fff;
        width: 300px;
        height: 5px;
        border-radius: 2px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
   }
`;

