const express = require('express');
const router = express.Router();
const db = require('../database');

// Összes termék lekérése
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        let sql = "SELECT * FROM products";
        let params = [];
        if (category) {
            sql += " WHERE category = ?";
            params.push(category);
        }
        const [rows] = await db.query(sql, params);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Hiba a lekéréskor" });
    }
});

// Új termék hozzáadása
router.post('/', async (req, res) => {
    try {
        const { name, category, price, stock, description } = req.body;
        const sql = "INSERT INTO products (name, category, price, stock, description) VALUES (?, ?, ?, ?, ?)";
        const [result] = await db.query(sql, [name, category, price, stock || 0, description || '']);
        res.status(201).json({ message: "Termék hozzáadva!", productId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: "Szerver hiba a mentéskor" });
    }
});

// Termék törlése
router.delete('/:id', async (req, res) => {
    try {
        const [result] = await db.query("DELETE FROM products WHERE id = ?", [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: "Nincs ilyen termék!" });
        res.json({ message: "Termék törölve!" });
    } catch (error) {
        res.status(500).json({ error: "Szerver hiba" });
    }
});

module.exports = router;