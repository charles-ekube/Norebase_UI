import React from 'react';
import SideNav from '../../../components/nav/SideNav';
import SelectCountry from './SelectCountry';
import './CompanyStyles.css';
import SideNavList from '../../../components/nav/SideNavList';


const CompanyApplication = () => {
    return (
        <>
        <main >
          <SideNav slides={SideNavList}/> 
          {/* <SelectCountry/> */}
        </main>
        
        </>
    )
}

export default CompanyApplication
