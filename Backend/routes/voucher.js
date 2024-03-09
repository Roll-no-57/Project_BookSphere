const express = require('express');
const router = express.Router();
const DB_voucher = require('../Query/voucher-query')

// GET all vouchers
// URL : /api/voucher
router.get('/', async (req, res) => {
    try {
        const vouchers = await DB_voucher.getAllVouchers();
        res.json(vouchers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// GET a voucher
// URL : /api/voucher/:name
router.get('/:name', async (req, res) => {
    try {
        const voucher = await DB_voucher.getVoucher(req.params.name);

        res.status(200).json(voucher);


    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// POST a voucher
// URL : /api/voucher
router.post('/', async (req, res) => {
    try {
        const voucher = await DB_voucher.getVoucher(req.body.NAME);
        if (voucher.length > 0) {
            res.status(400).json({ message: "Voucher already exists" });
        }
        else {
            const sql = `INSERT INTO VOUCHER (NAME, DISCOUNT,validity,CAP) VALUES (:name, :discount,TO_DATE(:validity,'DD-MM-YYYY'),:CAP)`;
            const binds = {
                name: req.body.NAME,
                discount: req.body.DISCOUNT,
                validity: req.body.VALIDITY,
                CAP: req.body.CAP
            }
            await database.execute(sql, binds, database.options);
            res.status(201).json({ message: "Voucher created" });
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;