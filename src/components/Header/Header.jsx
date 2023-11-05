import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header id='Header'>
            <div className='sub-header'>
                <Link to={'/'}>PC View</Link>
                <Link to={'/algorithm'}>Algorithm Result</Link>
            </div>
            <div className="container">
                <div className="header__content">
                    <Link to={'/'}>
                        <img src="/logo-hls.png" height={'100px'} alt="HLS Logo" className='header__content--logo' />
                    </Link>
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
