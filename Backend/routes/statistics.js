const express = require('express');
const router = express.Router();
const DB_statistic = require('../Query/stat-query');


// GET the total earning by this year 
// URL: api/v1/statistics/YearlyEarning
router.get('/YearlyEarning', async (req, res) => {
    try {
        const result = await DB_statistic.getYearlyEarning();
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET the total earning by this year 
// URL: api/v1/statistics/YearlyEarning
router.get('/YearlyOrder', async (req, res) => {
    try {
        const result = await DB_statistic.getYearlyOrder();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// GET the total earning by this year 
// URL: api/v1/statistics/YearlyEarning
router.get('/MonthlyEarning', async (req, res) => {
    try {
        const result = await DB_statistic.getMonthlyEarning();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// GET the total earning by this year 
// URL: api/v1/statistics/YearlyEarning
router.get('/MonthlyOrder', async (req, res) => {
    try {
        const result = await DB_statistic.getMonthlyOrder();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET total earning by month and year
// URL: api/v1/statistics/AllMonthlyIncomByYear
router.get('/AllMonthlyIncomByYear', async (req, res) => {
    try {
        const result = await DB_statistic.getAllMonthlyIncomByYear();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;