import React from 'react'
import './Home.scss'
import Section from '../../components/Section/Section'
import JokeContent from '../../components/JokeContent/JokeContent'


export default function Home() {
    return (
        <div id='Home'>
            <Section />
            <JokeContent />
        </div>
    )
}
