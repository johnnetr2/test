import React from 'react'
import './dropdown.css'
import useWindowDimensions from '../../molecule/WindowDimensions/dimension'

function Dropdown(props) {
    const { height, width } = useWindowDimensions();

    return (
        <div className='result_popup'
            onClick={() => props.onClick()}
            style={{ marginRight: width > 900 ? '34.15%' : '4.4%', marginTop: width > 900 ? '4.4%' : '9%' }}
        >SE resultat
            <div className='popup' ></div>
        </div>
    )
}

export default Dropdown