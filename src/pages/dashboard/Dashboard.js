import React from 'react'
import Sidebar_Org from '../../components/organism/sidebar-org/Sidebar_Org'
import '../../components/organism/sidebar-org/Sidebar_Org.css'
import Main_Org from '../../components/organism/main-org/Main_Org'
import '../../components/organism/main-org/Main_Org.css'

const Dashboard = () => {
    return (
        <div>
            <Sidebar_Org/>
            <Main_Org/>
        </div>
    )
}

export default Dashboard
