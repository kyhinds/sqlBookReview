const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool } = require('pg');

app.use(bodyParser.json());

const pool = new Pool({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'movie_ratings',
    port: 5432
});

app.get('/api/:type/reviewerPairs', async (req, res) => {
    try {
        const { type } = req.params;
        let tableName;
        if(type === 'movies'){
            tableName = 'movies';
        } else if (type === 'shows'){
            tableName = 'shows';
        } else {
            return res.status(400).json({ error: 'Invalid type provided. Use either "movies" or "shows".' });
        }

        const queryResult = await pool.query(`
            SELECT 
                DISTINCT LEAST(R1.name, R2.name) AS name1,
                GREATEST(R1.name, R2.name) AS name2
            FROM 
                ratings AS RA1
            JOIN 
                ratings AS RA2 ON RA1.${tableName}_id = RA2.${tableName}_id AND RA1.reviewer_id <> RA2.reviewer_id
            JOIN 
                reviewers AS R1 ON RA1.reviewer_id = R1.id
            JOIN 
                reviewers AS R2 ON RA2.reviewer_id = R2.id
            ORDER BY 
                name1, name2;
        `);
        res.status(200).json(queryResult.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
