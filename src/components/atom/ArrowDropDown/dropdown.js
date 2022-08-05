import React from 'react'
import './dropdown.css'
import useWindowDimensions from '../../molecule/WindowDimensions/dimension'

function Dropdown(props) {
    const { height, width } = useWindowDimensions();

    // return (
    //     <div>
    //         <Tooltip open={open} title="SE result" arrow>
    //             <Button>Arrow</Button>
    //         </Tooltip>
    //         <Button onClick={() => setOpen(!open)}>click here</Button>
    //     </div>
    // );

    return (
        <div className='result_popup'
            onClick={() => props.onClick()}
            // style={{ marginRight: width > 900 ? '34.15%' : '4.4%', marginTop: width > 900 ? '4.4%' : '9%' }}
        >
            <div className='popup' ></div>
            <div style={{position: 'relative' }}>
                SE resultat
            </div>
            
        </div>
    )
}

export default Dropdown