import './Contact.css'

const Contact = () => {
    return (
    
        <div className="contact-container">
            <h1>Contact Us</h1>
        <div className="contact-content">
                               
            <section className="contact-us">
                <label>Name: </label>
                <input type="text" />
                <label>Email:</label>
                <input type="text" />
                <label >Phone:</label>
                <input type="phone" />
                <label>Message:</label>
                <input type="textarea" />
                <button>Send</button>
            </section>
            <section className="shop-contact">
                <div className="1">
                    <h3>🏠 Addres</h3>
                    <p>6767 Szeged</p>
                    <p>Király u. 22. 3/7</p>
                </div>
                <div className="2">
                    <h3>📱 Phone</h3>
                    <p>+36 40 455 2345</p>
                </div>
                <div className="3">
                    <h3>📪 Email</h3>
                    <p>webshop@gmail.com</p>
                </div>
            </section>
        </div>
        </div>

    )
}

export default Contact