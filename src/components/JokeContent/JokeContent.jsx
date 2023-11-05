import React, { useEffect, useState } from 'react'
import './JokeContent.scss'
import { jokeList } from '../../data/jokes'
import { useCookies } from 'react-cookie'

export default function JokeContent() {
    const [jokes, setJokes] = useState([])
    const [index, setIndex] = useState(0)
    const [cookies, setCookie] = useCookies(['votedCookie']);

    useEffect(() => {
        const isVoted = cookies.votedCookie

        if (!isVoted) {
            const voteObject = {
                JokeId: [],
                like: [],
                dislike: [],
            }
            setCookie('votedCookie', voteObject, { path: '/' });
            // Fake Get jokeList From API
            setJokes(pre => (pre = [...jokeList]))
        } else {
            const newJokeList = jokeList.filter(joke => !isVoted.JokeId.includes(joke.id))
            // Fake Get jokeList From API
            setJokes(pre => (pre = [...newJokeList]))
        }
    }, [])


    const HandleVote = (vote) => {
        // Set Next Joke Content
        setIndex(pre => pre + 1)

        let votedObject = cookies?.votedCookie
        if (vote === 'like') {
            // when user vote save object vote to cookie
            let likeObject = {
                ...votedObject,
                JokeId: [...votedObject.JokeId, jokes[index].id],
                like: [...votedObject.like, jokes[index]],
            }
            setCookie('votedCookie', likeObject, { path: '/' });

        } else {
            let dislikeObject = {
                ...votedObject,
                JokeId: [...votedObject.JokeId, jokes[index].id],
                dislike: [...votedObject.dislike, jokes[index]],
            }
            setCookie('votedCookie', dislikeObject, { path: '/' });
        }
    }
    return (
        <div id='JokeContent'>
            <div className="container">
                {jokes[index]
                    ? (<>
                        <div className='joke__content'>
                            <p>
                                {jokes[index].content}
                            </p>
                        </div>
                        <div id='VoteButton'>
                            <button className='btn like-btn' onClick={() => HandleVote('like')}>This is Funny!</button>
                            <button className='btn dislike-btn' onClick={() => HandleVote('dislike')}>This is not funny.</button>
                        </div>
                    </>)
                    : <h2 className='no-more-joke'>That's all the jokes for today! Come back another day!</h2>
                }
            </div>

        </div>
    )
}
