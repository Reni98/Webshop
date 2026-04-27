const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../database');

// --- REGISZTRÁCIÓ ---
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        
        await db.query(sql, [username, email, hashedPassword]);
        res.status(201).json({ message: "Sikeres regisztráció!" });
    } catch (error) {
        res.status(500).json({ error: "Szerver hiba a regisztráció során" });
    }
});

// --- BEJELENTKEZÉS ---
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

        if (rows.length === 0) return res.status(401).json({ error: "Hibás adatok" });

        const isMatch = await bcrypt.compare(password, rows[0].password);
        if (isMatch) {
            res.json({ message: "Sikeres bejelentkezés!", username: rows[0].username });
        } else {
            res.status(401).json({ error: "Hibás adatok" });
        }
    } catch (error) {
        res.status(500).json({ error: "Szerver hiba" });
    }
});

// --- FELHASZNÁLÓ MÓDOSÍTÁSA ---
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;
        
        let sql = "UPDATE users SET username = ?, email = ? WHERE id = ?";
        let params = [username, email, id];

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            sql = "UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?";
            params = [username, email, hashedPassword, id];
        }

        const [result] = await db.query(sql, params);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Felhasználó nem található!" });
        }
        res.json({ message: "Adatok sikeresen frissítve!" });
    } catch (error) {
        res.status(500).json({ error: "Szerver hiba" });
    }
});
// --- ÖSSZES FELHASZNÁLÓ LEKÉRÉSE ---
router.get('/', async (req, res) => {
    try {
        // SQL: Csak a szükséges mezőket kérjük le, a password-öt NEM!
        const sql = "SELECT id, username, email FROM users";
        const [rows] = await db.query(sql);
        
        res.json(rows);
    } catch (error) {
        console.error("Lekérdezési hiba:", error);
        res.status(500).json({ error: "Hiba a felhasználók lekérésekor" });
    }
});

// --- EGY FELHASZNÁLÓ LEKÉRÉSE ID ALAPJÁN ---
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query("SELECT id, username, email FROM users WHERE id = ?", [id]);
        
        if (rows.length === 0) {
            return res.status(404).json({ error: "Felhasználó nem található" });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Szerver hiba" });
    }
});
module.exports = router;