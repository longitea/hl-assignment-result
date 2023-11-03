import React from 'react'
import './VoteButton.scss'


export default function VoteButton() {
    return (
        <div id='VoteButton'>
            <button className='btn like-btn'>This is Funny!</button>
            <button className='btn dislike-btn'>This is not funny.</button>
        </div>
    )
}
