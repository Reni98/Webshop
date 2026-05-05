import { Link } from 'react-router-dom';
import './HomePage.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero szekció - Az első dolog, amit a vásárló meglát */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Üdvözöljük a <span className="highlight">WebShop</span>-ban!</h1>
                    <p>Találja meg a legjobb minőségű termékeket nálunk, kedvező áron, villámgyors szállítással.</p>
                    <div className="hero-buttons">
                        <Link to="/products" className="btn-primary">Vásárlás most</Link>
                        <Link to="/login" className="btn-outline">Bejelentkezés</Link>
                    </div>
                </div>
            </header>

            {/* Kiemelt kategóriák vagy előnyök */}
            <section className="features-grid">
                <div className="feature-item">
                    <div className="icon">🚚</div>
                    <h3>Gyors szállítás</h3>
                    <p>Akár 24 órán belül házhoz szállítjuk rendelését.</p>
                </div>
                <div className="feature-item">
                    <div className="icon">🛡️</div>
                    <h3>Biztonságos fizetés</h3>
                    <p>Titkosított rendszerünk garantálja adatai védelmét.</p>
                </div>
                <div className="feature-item">
                    <div className="icon">⭐</div>
                    <h3>Kiváló minőség</h3>
                    <p>Csak válogatott, ellenőrzött forrásból származó áruk.</p>
                </div>
            </section>

            {/* CTA (Call to Action) kártya */}
            <section className="cta-banner">
                <h2>Érdekli az adminisztráció?</h2>
                <p>Próbálja ki termékkezelő felületünket a raktárkezeléshez!</p>
                <Link to="/admin" className="admin-link-btn">Admin Panel megnyitása</Link>
            </section>
        </div>
    );
};

export default Home;