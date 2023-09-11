import React, { useRef, useState } from 'react';
import './navigate.css'
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    {
        labelText: 'My news',
        path: '/news',
        id: 'news'
    },
    {
        labelText: 'About',
        path: '/about',
        id: 'about'
    },
    {
        labelText: 'Content',
        path: '/content',
        id: 'content'
    },]

const NavigateLinks = () => {
    const inputRefs = useRef([]);
    const location = useLocation();
    const content = location.pathname.substring(1);
    const [labelCheked, setLabelChecked] = useState(content);
    const handleClick = (index) => {
        inputRefs.current[index].click();
        setLabelChecked(index)
    };
    return (
        <nav className='nav_links_container'>
            {navLinks.map(link => {
                return (
                    <Link onClick={() => handleClick(link.id)} to={link.path} className='link_container'>
                        <input checked={link.id === labelCheked} ref={(element) => (inputRefs.current[link.id] = element)} className='nav_link_radio' type='radio' name='link_nav' id={link.id} />
                        <label className='nav_link_label' htmlFor={link.id}>{link.labelText}</label>
                    </Link>
                )
            })}
        </nav>
    )

}

export default NavigateLinks