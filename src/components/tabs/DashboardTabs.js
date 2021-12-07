import React, { useState } from "react";
import DisplayAllApplications from "../../screen/dashboard/DisplayAllApplications";
import DisplayCompanyApplications from "../../screen/dashboard/DisplayCompanyApplications";
import DisplayPatentApplications from "../../screen/dashboard/DisplayPatentApplications";
import DisplayTrademarkApplications from "../../screen/dashboard/DisplayTrademarkApplications";
import './TabsStyles.css';

const DashboardTabs = () => {
  const tabContent = [
    {
      id: 1,
      heading: "Logs",
      content: (heading) => <DisplayAllApplications />,
    },
    {
      id: 2,
      heading: "Company Incorporation",
      content: (heading) => <DisplayCompanyApplications />,
    },
    {
      id: 3,
      heading: "Trademark",
      content: (heading) => <DisplayTrademarkApplications />,
    },
    {
      id: 4,
      heading: "Patent",    
      content: (heading) => <DisplayPatentApplications />,
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [currentTab, setCurrentTab] = useState(tabContent[0]);

  function handleTabClick(currentTab) {
    setActiveTab(currentTab);
    const currentTabContent = tabContent.filter(
      (item) => item.id === currentTab
    );
    setCurrentTab(currentTabContent[0]);
  }

  console.log(currentTab.content(currentTab.heading));

  return <>
  
        <section>
            <div className='tabs'>
            {tabContent.map(item => {
                        return (
                            <div key={item.id} 
                                className={`
                                    ${activeTab === item.id && 'border-btm' }
                                `}
                                onClick={() => handleTabClick(item.id)}
                            >
                                <p className='tabs-header'>{item.heading}</p>
                            </div>
                        )
                    })}
            </div>
            <div className='tabs-content'>
            {currentTab.content().type(currentTab.heading)}
            </div>
        </section>
  </>;
};

export default DashboardTabs;
