import React, { useEffect, useState } from 'react'
import './JokeContent.scss'
import VoteButton from '../VoteButton/VoteButton'
import { jokeList } from '../../data/jokes'
import { useCookies } from 'react-cookie'

export default function JokeContent() {
    const [jokes, setJokes] = useState([])
    const [index, setIndex] = useState(0)
    const [cookies, setCookie] = useCookies(['voted']);

    useEffect(() => {
        const voted = JSON.parse(localStorage.getItem("voted"))

        if (!voted) {
            localStorage.setItem("voted", JSON.stringify({
                JokeId: [],
                like: [],
                dislike: [],
            }))
            // Fake Get jokeList From API
            setJokes(pre => (pre = [...jokeList]))
        } else {
            const newJokeList = jokeList.filter(joke => !voted.JokeId.includes(joke.id))
            // Fake Get jokeList From API
            setJokes(pre => (pre = [...newJokeList]))
        }

    }, [])

    const HandleVoteSimple = (vote) => {
        if (currentJoke < fakeGetJokeListFromApi.length - 1) {
            setCurrentJoke(pre => pre + 1)
        } else {
            console.log('it end')
            console.log(currentJoke)
            console.log(fakeGetJokeListFromApi.length)
        }
    }
    const HandleVote = (vote) => {
        setIndex(pre => pre + 1)
        if (vote === 'like') {
            let temp = JSON.parse(localStorage.getItem("voted"))
            localStorage.setItem("voted", JSON.stringify({
                ...temp,
                JokeId: [...temp.JokeId, jokes[index].id],
                like: [...temp.like, jokes[index]],
            }))

            setCookie("voted", {
                ...temp,
                JokeId: [...temp.JokeId, jokes[index].id],
                like: [...temp.like, jokes[index]],
            });
        } else {
            let temp = JSON.parse(localStorage.getItem("voted"))
            localStorage.setItem("voted", JSON.stringify({
                ...temp,
                JokeId: [...temp.JokeId, jokes[index].id],
                dislike: [...temp.dislike, jokes[index]],
            }))
        }
        console.log(JSON.parse(localStorage.getItem("voted")))
    }
    return (
        <div id='JokeContent'>
            <div className="container">
                {jokes[index]
                    ? (<div className='joke'>
                        <div className='joke__content'>
                            <p>
                                {jokes[index].content}
                            </p>
                        </div>
                        <div id='VoteButton'>
                            <button className='btn like-btn' onClick={() => HandleVote('like')}>This is Funny!</button>
                            <button className='btn dislike-btn' onClick={() => HandleVote('dislike')}>This is not funny.</button>
                        </div>
                    </div>)
                    : <h2>There Nothing to Show</h2>
                }


            </div>

        </div>
    )
}
