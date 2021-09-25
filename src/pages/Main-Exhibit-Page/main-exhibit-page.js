import React from 'react'
import Navbar from '../../components/Navbar/navbar'

import {
    ExibitContainer,
    Banner,
} from './main-exhibit-sytles'
const MainExhibitPage = () => {
    return (
        <ExibitContainer>
            <Navbar/>
            <Banner>
                <h1>Exhibit</h1>
            </Banner>
        </ExibitContainer>
    )
}

export default MainExhibitPage
