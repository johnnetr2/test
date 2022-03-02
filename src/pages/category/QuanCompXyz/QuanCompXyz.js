import React from 'react'
import QuanCompXyzOrg from '../../../components/organism/QuanCompXyzOrg/QuanCompXyzOrg'
import Sidebar from '../../../components/organism/SidebarOrg/SidebarOrg'
import { useLocation } from 'react-router-dom'

const Quan_Comp_X = () => {
    
    const params = useLocation()
    const prevData = params.state.item

    return (
        <div>
            <Sidebar/>
            <QuanCompXyzOrg item={prevData}/>
        </div>
    )
}

export default Quan_Comp_X
