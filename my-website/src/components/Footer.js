import React from 'react'

import '../css/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div id="footer">
		<div id="footer-item">
			<p>&copy;<span>{currentYear}</span> by Omer Yanar</p>
		</div>
	</div>
    )
}

export default Footer;