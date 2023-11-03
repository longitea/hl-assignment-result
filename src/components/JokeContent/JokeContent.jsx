import React from 'react'
import './JokeContent.scss'
import VoteButton from '../VoteButton/VoteButton'

export default function JokeContent() {
    return (
        <div id='JokeContent'>
            <div className="container">
                <div className='joke__content'>
                    <p className='joke__content1'>A child asked his father, "How were people born?"
                        So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."

                        The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."

                        The child ran back to his father and said, "You lied to me!"
                        His father replied, "No, your mom was talking about her side of the family."
                    </p>
                </div>
                <VoteButton />
            </div>

        </div>
    )
}
