import React from "react";

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
function Footer() {
    const copyrightYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright { copyrightYear } </p>
        </footer>
    )
}

export default Footer;