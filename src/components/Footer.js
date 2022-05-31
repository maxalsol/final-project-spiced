import React from "react";
import {
    FacebookIcon,
    TwitterIcon,
    RedditIcon,
    LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Maxclusive Solutions</p>
                        </div>
                        <div className="d-flex">
                            <p>+49 1525 843 2598</p>
                        </div>
                        <div className="d-flex">
                            <p>info@maxclusive-solutions.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link
                                    smooth={true}
                                    to="home"
                                    className="footer-nav"
                                    href="#"
                                >
                                    Home{" "}
                                    <span className="sr-only">(current)</span>
                                </Link>{" "}
                                <br />
                                <Link
                                    smooth={true}
                                    to="about"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    About
                                </Link>
                                <br />
                                <Link
                                    smooth={true}
                                    to="services"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    Services
                                </Link>{" "}
                            </div>
                            <div className="col">
                                <Link
                                    smooth={true}
                                    to="experience"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    Experience
                                </Link>{" "}
                                <br />
                                <Link
                                    smooth={true}
                                    to="portfolio"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    Portfolio
                                </Link>{" "}
                                <br />
                                <Link
                                    smooth={true}
                                    to="contacts"
                                    offset={-110}
                                    className="footer-nav"
                                    href="#"
                                >
                                    Contact
                                </Link>{" "}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <a
                                href="https://www.facebook.com/maxclusivesolutions"
                                target="_blank"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </a>
                            <a href="#" target="_blank">
                                <TwitterIcon className="mx-3" size={36} />
                            </a>
                            <a href="#" target="_blank">
                                <RedditIcon className="mx-3" size={36} />
                            </a>
                            <a href="#" target="_blank">
                                <LinkedinIcon className="mx-3" size={36} />
                            </a>
                        </div>
                        <p className="pt-3 text-center">
                            Maxclusive Solutions &copy;{" "}
                            {new Date().getFullYear()}&nbsp;| All Rights
                            Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
