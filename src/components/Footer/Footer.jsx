import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <div id='Footer'>
            <div className="container">
                <div className='footer__content'>
                    <p>This website is created as part of Hlsolutions program. The materials contained on this website are provided for general</p>
                    <p>information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and</p>
                    <p>accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.</p>
                </div>
                <p className='footer__copyright'>Copyright 2021 HLS</p>
            </div>
        </div>
    )
}
