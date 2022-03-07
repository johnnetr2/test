// import React, { useState, useEffect } from 'react'
// import MainOrg from '../../components/organism/MainOrg/MainOrg'
// import Start_Popup from '../../components/molecule/StartPopup/StartPopup'
// import End_Popup from '../../components/molecule/EndPopup/EndPopup'
// import Sidebar from '../../components/organism/SidebarOrg/SidebarOrg'


// const Dashboard = () => {
//     const [display, setDisplay] = useState(false);
//     const [secdis, setSecdis] = useState(false);



//     useEffect(() => {
//         setDisplay(true)
//     }, [])

//     const submitFunc = (data) => {
//         setDisplay(false)
//         setSecdis(true)
//     }

//     return (
//         <div> 
//             <Start_Popup showPopup = {display} hidePopup = {() => setDisplay(false)} submit = {submitFunc} />
//             <End_Popup showPopup = {secdis} hidePopup = {() => setSecdis(false)} submit = {() => setSecdis(false)} />
//             <Sidebar/>
//             <MainOrg/>
//         </div>
//     )
// }

// export default Dashboard
