import React, { useState } from 'react';
import './header.css'
import Instagramm from '@/icons/instagram';
import { Link } from 'react-router-dom';
import Backpack from '@/icons/backpack';
import Cake from '@/icons/cake';


const lifeStates = [
    {
        icon: Backpack,
        text: 'Open to work'
    },
    {
        icon: Cake,
        text: 'November 16th'
    },
]

const Header = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        fetch('https://dolphin-app-cbjj4.ondigitalocean.app/users/misha/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
    }
    return (
        <header className='header_info'>
            <img className='guitar_photo' src='/photos/hello.png' alt='hello' width='824' height='125' />
            <div className='info_about_myself'>
                <div className='photos_container'>
                    <img className='my_photo' src='/photos/me.jpg' alt='me' width='86' height='86' />
                    <Link to='https://www.instagram.com/misha_mch/?hl=ru' target="_blank"><button className='follow_inst_btn'><span>Follow</span> <Instagramm /></button></Link>
                </div>
                <h3 className='my_name'>Mikhail Matusevich</h3>
                <p className='text_about_me'>Brings ideas to life with code! ✨</p>
                <p className='text_about_me'>Front-end developer. Third-year MCB student. </p>
                <div className='info_with_icon_container'>
                    {
                        lifeStates.map(state => {
                            return (
                                <div key={state.text} className='info_with_icon'> <state.icon /><p> {state.text}</p></div>
                            )
                        })
                    }
                </div>
                <div className='send_message_to_me'>
                    <p className='contact_me_here'>Keep up to date with my latest projects and adventures!</p>
                    <form onSubmit={handleSubmit} className='send_message_form'>
                        <input value={email} onChange={(event) => { setEmail(event.target.value) }} placeholder='Email Addres' className='send_message_input' type='email' required />
                        <button type='submit' className='send_message_btn'>Subscribe!</button>
                    </form>
                </div>
            </div>

        </header>
    )
}

export default Header