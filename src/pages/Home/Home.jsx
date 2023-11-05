import React from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import Section from '../../components/Section/Section'
import JokeContent from '../../components/JokeContent/JokeContent'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <div id='Home'>
            {/* <Header /> */}
            <Section />
            <JokeContent />
            {/* <img src="/mobile.png" alt="" className='deleteme' /> */}
        </div>
    )
}
