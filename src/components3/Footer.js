import React from "react";
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div>
            {/* footer */}
            <footer className="blog-footer" >
                <p>Refferences <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                <p>
                    <Link href="/Home">Back to top</Link>
                </p>
            </footer>
        </div>
    )
}
export default Footer;