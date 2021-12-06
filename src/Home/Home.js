import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { setForm } from '../action';

export default function Home() {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.setUserForm.name)
    const history = useHistory();
    const { name } = selector;

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(setForm({ ...selector, [event.target.name]: event.target.value }))
        history.push("/App")
        console.log(selector);
    }
    return (
        <>
            <div>
                <h1>User Name</h1>
                <form onSubmit={handleSubmit} >
                    <input type="text" name="name"
                        placeholder="enter your name" /><br /> <br />
                    <button type="submit" >Submit</button>
                </form>
            </div>

        </>

    )
}
