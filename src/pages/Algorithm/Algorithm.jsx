import React, { useState } from 'react'

import './Algorithm.scss'
export default function Algorithm() {
    const [inputValue, setInputValue] = useState('')
    const [result, setResult] = useState({
        minSum: 0,
        maxSum: 0
    })
    const [errorMessage, setErrorMessage] = useState('');

    const HandleChange = (e) => {
        const regex = /^[0-9\s]+$/;
        const isValid = regex.test(e.target.value);
        if (!isValid) {
            setErrorMessage('Please enter the correct format, 5 digits separated by spaces')
        } else {
            setErrorMessage('')
        }
        setInputValue(e.target.value)
    }

    const HandleClick = () => {
        setErrorMessage('')
        setResult({
            minSum: 0,
            maxSum: 0
        })

        // Validate First
        let numbers = inputValue.trim().split(' ')
        console.log(numbers);
        if (numbers.length !== 5) {
            setErrorMessage('Please enter 5 space-separated numbers.');
            return;
        } else if (numbers.includes('')) {
            setErrorMessage('Please enter only one space between numbers');
            return;
        }

        // change type to num
        numbers = numbers.map(num => Number(num));
        const isValidInput = numbers.every((num) => Number.isInteger(num) && num >= 0);
        if (!isValidInput) {
            setErrorMessage('Please enter positive integers only.');
            return;
        }
        // Sort Mảng Trước để dễ tính toán
        numbers.sort((a, b) => a - b);

        const minSum = numbers[0] + numbers[1] + numbers[2] + numbers[3];
        const maxSum = numbers[1] + numbers[2] + numbers[3] + numbers[4];

        setResult({
            minSum: minSum,
            maxSum: maxSum
        });
    };

    return (
        <div id='Algorithm'>
            <div className="alg_title">
                <h1>Mini-Max Sum App</h1>
                <p>Find the minimum and maximum svalue entered by the user using a 5-digit number</p>
            </div>

            <label htmlFor='baisc'>Please input five positive integers separated by <b>space</b>:</label>
            {errorMessage && <h2 style={{ color: 'red' }}>{errorMessage}</h2>}
            <div className='alg__submit'>
                <input className='alg__btn' type="text" id="inputValues" value={inputValue} onKeyUp={e => e.keyCode === 13 && HandleClick()} onChange={e => HandleChange(e)} />
                <button className='alg__btn' onClick={HandleClick}>Calculate</button>
            </div>

            <h3>{"Minimum Sum: " + result?.minSum}</h3>
            <h3>{"Maximum Sum: " + result?.maxSum}</h3>
        </div>
    )
}
