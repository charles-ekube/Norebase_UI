import React from 'react';
import SideNav from '../../../components/nav/SideNav';
import SelectCountry from './SelectCountry';
import './CompanyStyles.css';
import SideNavList from '../../../components/nav/SideNavList';
import SideTabList from '../../../components/nav/SideTabList';


const CompanyApplication = () => {
    return (
        <>
        <main >
          <SideNav slides={SideNavList} tabList={SideTabList}/> 
          {/* <SelectCountry/> */}
        </main>
        
        </>
    )
}

export default CompanyApplication
