// import React from 'react';

import ApplicationTitle from "../../screen/dashboard/companyApplication/ApplicationTitle";
import AuditorInformation from "../../screen/dashboard/companyApplication/AuditorInformation";
import CompanyInformation from "../../screen/dashboard/companyApplication/CompanyInformation";
import Director from "../../screen/dashboard/companyApplication/Director";
import DirectorInformation from "../../screen/dashboard/companyApplication/DIrectorInformation";
import SelectCountry from "../../screen/dashboard/companyApplication/SelectCountry";
import ShareCapital from "../../screen/dashboard/companyApplication/ShareCapital";
import Shareholder from "../../screen/dashboard/companyApplication/Shareholder";
import ShareholderInformation from "../../screen/dashboard/companyApplication/ShareholderInformation";


const SideNavList = [<SelectCountry />, <ApplicationTitle />, <CompanyInformation/>, <ShareCapital/>, <Shareholder/>,
     <ShareholderInformation/>, <Director/>, <DirectorInformation/>, <AuditorInformation/>];

export default SideNavList;

