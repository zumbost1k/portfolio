import React from 'react';
import './footer.css'
import Github from '@/icons/github';
import CodePen from '@/icons/codepen';
import { Link } from 'react-router-dom';
import InstagrammFooter from '@/icons/footer_inst';
import Telegram from '@/icons/telegram';

const contactIcons = [
    {
        text: 'GitHub',
        icon: Github,
        path: 'https://github.com/zumbost1k'
    },
    {
        text: 'CodePen',
        icon: CodePen,
        path: 'https://codepen.io/zumbost1k'
    },
    {
        text: 'Instagramm',
        icon: InstagrammFooter,
        path: 'https://www.instagram.com/misha_mch/?hl=ru'
    },
    {
        text: 'Telegramm',
        icon: Telegram,
        path: 'https://web.telegram.org/k/#@zumbost1k'
    },
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='contact_icons'>
                {contactIcons.map(currentIcon => {
                    return (
                        <Link className='footer_link' key={currentIcon.text} to={currentIcon.path}><currentIcon.icon /></Link>
                    )
                })}
            </div>
            <p className='footer_text'>Misha © 2023</p>
        </footer>
    )

}

export default Footer