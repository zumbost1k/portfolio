import React, { useRef, useState } from 'react';
import './navigate.css'
import { Link } from 'react-router-dom';

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

const Navigate = () => {
    const inputRefs = useRef([]);
    const [labelCheked, setLabelChecked] = useState('news');
    const handleClick = (index) => {
        inputRefs.current[index].click();
        setLabelChecked(index)
    };
    return (
        <nav className='nav_links_container'>
            {navLinks.map(link => {
                return (
                    <div className='link_container'>
                        <input checked={link.id === labelCheked} ref={(element) => (inputRefs.current[link.id] = element)} className='nav_link_radio' type='radio' name='link_nav' id={link.id} />
                        <label onClick={() => handleClick(link.id)} className='nav_link_label' htmlFor={link.id}><Link to={link.path}>{link.labelText}</Link></label>
                    </div>
                )
            })}
        </nav>
    )
}

export default Navigate