import React from 'react'
import Navbar from '../../components/Navbar/navbar'

import {
    ExibitContainer,
    Banner,
    DescriptionContainer,
    Result,
    Description,
    SortContainer
} from './main-exhibit-sytles'
const MainExhibitPage = () => {
    return (
        <ExibitContainer>
            <Navbar/>
            <Banner>
                <h1>Exhibit</h1>
            </Banner>
            <DescriptionContainer>
                <Result>
                    <h1>Exhibit</h1>
                    <span>Showing 3 Results</span>
                </Result>
                <Description>
                    <span>Exhibit Description</span>
                </Description>
            </DescriptionContainer>
            <SortContainer>
               <div className="sort-wrapper">
                    <span>Sort by</span>
                    <select name="year" id="year" className="select_dd">
                    <option value="" disabled selected hidden>Year & Term</option>
                    <option value="2021">2021</option>
                    
                </select>
               </div>
               <p>gago</p>
               
            </SortContainer>
        
        </ExibitContainer>
    )
}

export default MainExhibitPage
