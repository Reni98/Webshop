import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="py-5 bg-white">
            <div className="container">
                <div className="row gy-4">
                    
                    <div className="col-12 col-lg-4">
                        <div className="d-flex align-items-center mb-3">
                            {}
                            <img 
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" 
                                alt="Postcrafts" 
                                style={{ height: '32px' }}
                            />
                            <span className="ms-2 fs-4 fw-bold text-dark">Postcrafts</span>
                        </div>
                        <p className="text-secondary mb-4" style={{ fontSize: '15px', lineHeight: '1.6', maxWidth: '350px' }}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                            Velit officia consequat duis enim velit mollit.
                        </p>
                        
                        {/* Közösségi ikonok */}
                        <div className="d-flex gap-2">
                            {socialIcons.map((icon, index) => (
                                <a key={index} href="#" className="social-circle">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d={icon.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {}
                    <div className="col-6 col-md-3 col-lg-2 offset-lg-1">
                        <h6 className="text-uppercase fw-bold text-muted mb-4" style={{ fontSize: '12px', letterSpacing: '1px' }}>Company</h6>
                        <ul className="list-unstyled">
                            <li className="mb-3"><a href="#" className="footer-link">About</a></li>
                            <li className="mb-3"><a href="#" className="footer-link">Features</a></li>
                            <li className="mb-3"><a href="#" className="footer-link">Works</a></li>
                            <li className="mb-3"><a href="#" className="footer-link">Career</a></li>
                        </ul>
                    </div>

                    {/* Help oszlop */}
                    <div className="col-6 col-md-3 col-lg-2">
                        <h6 className="text-uppercase fw-bold text-muted mb-4" style={{ fontSize: '12px', letterSpacing: '1px' }}>Help</h6>
                        <ul className="list-unstyled">
                            <li className="mb-3"><a href="#" className="footer-link">Customer Support</a></li>
                            <li className="mb-3"><a href="#" className="footer-link">Delivery Details</a></li>
                            <li className="mb-3"><a href="#" className="footer-link">Terms & Conditions</a></li>
                            <li className="mb-3"><a href="#" className="footer-link">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h6 className="text-uppercase fw-bold text-muted mb-4" style={{ fontSize: '12px', letterSpacing: '1px' }}>Subscribe to newsletter</h6>
                        <form>
                            <input 
                                type="email" 
                                className="form-control mb-3 py-2 px-3 shadow-none border-light-subtle" 
                                placeholder="Enter your email"
                                style={{ borderRadius: '8px', fontSize: '14px' }}
                            />
                            <button 
                                type="submit" 
                                className="btn btn-primary w-100 py-2 fw-bold"
                                style={{ backgroundColor: '#2563eb', border: 'none', borderRadius: '8px' }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {}
            <style>{`
                .footer-link {
                    text-decoration: none;
                    color: #111;
                    font-size: 15px;
                    transition: 0.2s;
                }
                .footer-link:hover {
                    color: #2563eb;
                }
                .social-circle {
                    width: 32px;
                    height: 32px;
                    background-color: #1f2937;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    transition: 0.2s;
                }
                .social-circle:hover {
                    background-color: #2563eb;
                    color: white;
                }
            `}</style>
        </footer>
    );
};

const socialIcons = [
    { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
    { name: 'Facebook', path: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.627h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z' },
    { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z' },
    { name: 'Github', path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
];

export default Footer;