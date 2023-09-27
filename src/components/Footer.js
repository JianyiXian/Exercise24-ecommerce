import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="mt-5" style={{ backgroundColor: "#fcd5ce" }}>
                <div className="container p-3">
                    <div className="row">
                        <div className="col-md-4">
                            <p style={{ color: "#919497" }}>Copyright Joe Down</p>
                        </div>
                        <div className="col-md-8">
                            <div className="row" style={{ color: "#919497" }}>
                                <div className="col-md">
                                    <h5 className=" fw-bold"><Link className="text-decoration-none" style={{ color: "#919497" }}
                                        to="/about">ABOUT
                                        US</Link></h5>
                                    <ul className="list-unstyled">
                                        <li>Our Story</li>
                                        <li>Careers</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div className="col-md">
                                    <h5 className="fw-bold"><Link className="text-decoration-none" style={{ color: "#919497" }}
                                        to="/contact">CONTACT
                                        US</Link></h5>
                                    <ul className="list-unstyled">NEED HELP?
                                        <li>Contact Us</li>
                                        <li>Shipping</li>
                                        <li>FAQs</li>
                                        <li>Terms & Conditions</li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h5 className="fw-bold">PARTNER WITH US</h5>
                                    <ul className="list-unstyled ">
                                        <li>Wholesale Accounts</li>
                                        <li>Become an Affiliate</li>
                                        <li>Become an Ambassador</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer;