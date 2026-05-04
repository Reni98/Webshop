import { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [editData, setEditData] = useState({ username: '', email: '' });
    const API_URL = 'http://localhost:3000/users';

    // --- ADATOK LEKÉRÉSE ---
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(API_URL);
                setUsers(res.data);
            } catch (error) {
                // A 'error' változót használjuk, így eltűnik az ESLint hiba
                console.error("Hiba a felhasználók betöltésekor:", error);
            }
        };

        fetchUsers();
    }, []); // Üres tömb: csak egyszer fut le betöltéskor

    // --- TÖRLÉS ---
    const handleDelete = async (id) => {
        if (window.confirm("Biztosan törölni szeretnéd ezt a felhasználót?")) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                // Frissítjük a listát a már meglévő adatokból (gyorsabb, mint a fetch)
                setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
            } catch (error) {
                console.error("Hiba a törlés során:", error);
                alert("Nem sikerült a törlés.");
            }
        }
    };

    // --- SZERKESZTÉS INDÍTÁSA ---
    const startEdit = (user) => {
        setEditingUser(user.id);
        setEditData({ username: user.username, email: user.email });
    };

    // --- MÓDOSÍTÁS MENTÉSE ---
    const handleUpdate = async (id) => {
        try {
            await axios.put(`${API_URL}/${id}`, editData);
            
            // Frissítjük a helyi állapotot a módosított adatokkal
            setUsers(prevUsers => prevUsers.map(user => 
                user.id === id ? { ...user, ...editData } : user
            ));
            
            setEditingUser(null);
        } catch (error) {
            console.error("Hiba a módosítás során:", error);
            alert("Nem sikerült elmenteni a módosításokat.");
        }
    };

    return (
        <div className="user-list-container">
            <h2>Felhasználók kezelése (Admin)</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Felhasználónév</th>
                        <th>Email</th>
                        <th>Műveletek</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>
                                    {editingUser === user.id ? (
                                        <input 
                                            type="text"
                                            value={editData.username} 
                                            onChange={e => setEditData({...editData, username: e.target.value})} 
                                        />
                                    ) : user.username}
                                </td>
                                <td>
                                    {editingUser === user.id ? (
                                        <input 
                                            type="email"
                                            value={editData.email} 
                                            onChange={e => setEditData({...editData, email: e.target.value})} 
                                        />
                                    ) : user.email}
                                </td>
                                <td>
                                    {editingUser === user.id ? (
                                        <>
                                            <button className="save-btn" onClick={() => handleUpdate(user.id)}>Mentés</button>
                                            <button className="cancel-btn" onClick={() => setEditingUser(null)}>Mégse</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="edit-btn" onClick={() => startEdit(user)}>Szerkesztés</button>
                                            <button className="delete-btn" onClick={() => handleDelete(user.id)}>Törlés</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>Nincsenek felhasználók vagy a szerver nem elérhető.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;