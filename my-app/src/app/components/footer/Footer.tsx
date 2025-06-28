import React from "react";

function Footer() {
    return (
        <>
            <footer className="footer sm:footer-horizontal footer-center bg-gray-900 text-white p-4">
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right
                        reserved by Community Hub Ltd
                    </p>
                </aside>
            </footer>
        </>
    );
}

export default Footer;
