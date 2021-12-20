import React, {useState} from 'react'
import Sidebar_Org from '../../components/organism/sidebar-org/Sidebar_Org'
import '../../components/organism/sidebar-org/Sidebar_Org.css'
import Main_Org from '../../components/organism/main-org/Main_Org'
import '../../components/organism/main-org/Main_Org.css'
import First_Popup from '../../components/organism/first-popup/First_Popup'

const Dashboard = () => {
    const [popup, setPopup]=useState(true);
    return (
        <div>
            {/* <First_Popup/> */}
            <Sidebar_Org/>
            <Main_Org/>
        </div>
    )
}

export default Dashboard
