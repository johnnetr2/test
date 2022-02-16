import React from 'react'
import Sidebar from '../../sidebar-org/Sidebar_Org'
import { Container } from '@mui/material'

const Courses_Main = () => {
    return (
        <div>
            <Container maxWidth="1200" maxHeight="500" sx={{ border: '1px solid #212121' }}>
                <Sidebar />
            </Container>
        </div>
    )
}

export default Courses_Main