//
import React from 'react';
// import { ReactDOM } from 'react';
function Footer() {

    const date = new Date()
    const fullYear = date.getFullYear()

    return <footer>
        <p>Copyright © {fullYear}</p>
    </footer>

}

export default Footer;