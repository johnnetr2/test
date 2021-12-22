import React, { useState, useEffect } from 'react'
import Sidebar_Org from '../../components/organism/sidebar-org/Sidebar_Org'
import '../../components/organism/sidebar-org/Sidebar_Org.css'
import Main_Org from '../../components/organism/main-org/Main_Org'
import '../../components/organism/main-org/Main_Org.css'
import Start_Popup from '../../components/molecule/start-popup/Start_Popup'
import End_Popup from '../../components/molecule/end-popup/End_Popup'


const Dashboard = () => {
    const [display, setDisplay] = useState(false);
    const [secdis, setSecdis] = useState(false);



    useEffect(() => {
        setDisplay(true)
    }, [])

    const submitFunc = (data) => {
        setDisplay(false)
        setSecdis(true)
    }

    return (
        <div> 
            <Start_Popup showPopup = {display} hidePopup = {() => setDisplay(false)} submit = {submitFunc} />
            <End_Popup showPopup = {secdis} hidePopup = {() => setSecdis(false)} submit = {() => setSecdis(false)} />
            <Sidebar_Org />
            <Main_Org />
        </div>
    )
}

export default Dashboard
