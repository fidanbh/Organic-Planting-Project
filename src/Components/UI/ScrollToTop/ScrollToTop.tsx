import React, { useState, useEffect } from 'react';
import { MdVerticalAlignTop } from 'react-icons/md';

import styles from './scroll.style.module.scss'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className={styles.btn_scrollTop} style={{display: isVisible ? 'block':'none'}} onClick={goTop}>
            <MdVerticalAlignTop/>
        </button>
    );
}

export default ScrollToTop;