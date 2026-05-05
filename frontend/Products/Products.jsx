import  { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';

const API_URL = 'http://localhost:3000/products';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        stock: '',
        description: ''
    });

    // 1. Betöltés közvetlenül a useEffect-ben
    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Hiba a letöltésnél:", error);
            });
    }, []); // Az üres tömb miatt csak egyszer fut le betöltéskor

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 2. Mentés és azonnali frissítés
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(API_URL, formData);
            if (res.status === 201 || res.status === 200) {
                alert("Sikeres mentés!");
                setFormData({ name: '', category: '', price: '', stock: '', description: '' });
                
                // Frissítés: újra lekérjük a listát a mentés után
                const refresh = await axios.get(API_URL);
                setProducts(refresh.data);
            }
        } catch (error) {
            alert("Hiba történt! Ellenőrizd a konzolt.");
            console.error(error);
        }
    };

    // 3. Törlés és azonnali frissítés
    const handleDelete = async (id) => {
        if (window.confirm("Törlöd?")) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                // Frissítés: újra lekérjük a listát törlés után
                const refresh = await axios.get(API_URL);
                setProducts(refresh.data);
            } catch (error) {
                console.error("Törlési hiba:", error);
            }
        }
    };

    return (
        <div className="product-container">
            <h1>Termék Kezelő</h1>
            
            <form className="product-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Név" value={formData.name} onChange={handleChange} required />
                <input type="text" name="category" placeholder="Kategória" value={formData.category} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Ár" value={formData.price} onChange={handleChange} required />
                <input type="number" name="stock" placeholder="Készlet" value={formData.stock} onChange={handleChange} />
                <textarea name="description" placeholder="Leírás" value={formData.description} onChange={handleChange}></textarea>
                <button type="submit" className="add-btn">Mentés</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Név</th>
                        <th>Ár</th>
                        <th>Művelet</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.price} Ft</td>
                            <td>
                                <button onClick={() => handleDelete(p.id)} className="delete-btn">X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Product;
