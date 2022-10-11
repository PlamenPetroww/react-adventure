import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
    return (
        <div className='footer__container'>
            <section className='footer__subscription'>
                <p className='footer__subcscription__heading'>
                    Join the Adventure newsletter to receive out best vacation deals
                </p>
                <p className='footer__subscription__text'>
                    You can unsubscrible at any time.
                </p>
                <div className='input__areas'>
                    <form>
                        <input type="email" name="email" placeholder='Your Email' className='footer__input' />
                        <Button buttonStyle="btn__outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer__links'>
                <div className="footer__link__wrapper">
                    <div className='footer__link__items'>
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                    <div className='footer__link__items'>
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>
                <div className="footer__link__wrapper">
                    <div className='footer__link__items'>
                        <h2>Videos</h2>
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className='footer__link__items'>
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social__media'>
                <div className='social__media__wrap'>
                    <div className='footer__logo'>
                        <Link to="/" className='social__logo'>
                            TRVL <i className='fab fa-typo3'></i>
                        </Link>
                    </div>
                    <small className='website__rights'>PetrowwP 2022</small>
                    <div className='social__icons'>
                        <Link class='social__icon__link facebook'
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i class='fab fa-facebook'></i>
                        </Link>
                        <Link class='social__icon__link instagram'
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i class='fab fa-instagram'></i>
                        </Link>
                        <Link class='social__icon__link yotube'
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i class='fab fa-twitter'></i>
                        </Link>
                        <Link class='social__icon__link twitter'
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i class='fab fa-facebook'></i>
                        </Link>
                        <Link class='social__icon__link linkedin'
                            to="/"
                            target="_blank"
                            aria-label="Linkedin"
                        >
                            <i class='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;