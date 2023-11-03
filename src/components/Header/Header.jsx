import React from 'react'
import './Header.scss'


export default function Header() {
    return (
        <header id='Header'>
            <div className="container">
                <div className="header__content">
                    <img src="/logo-hls.png" height={'100px'} alt="HLS Logo" className='header__content--logo' />
                    <div className="header__content--user">
                        <div className="user__info">
                            <p className="user__info--title ">Handicrafted by</p>
                            <p className="user__info--fullname">Jim HLS</p>
                        </div>
                        <div className="user__img">
                            <img src="/img-flower.jpg" alt="" className='user__img' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
