const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// PostgreSQL database connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'db', // The hostname 'db' corresponds to the service name in docker-compose.yml
  database: 'movie_review',
  password: 'postgres',
  port: 5432
});

// Endpoint to get all reviewer pairs who rated the same movie
app.get('/api/reviewerPairs', async (req, res) => {
  const result = await pool.query(`
    SELECT 
      DISTINCT LEAST(R1.name, R2.name) AS reviewer1,
      GREATEST(R1.name, R2.name) AS reviewer2
    FROM 
      ratings AS RA1
    JOIN 
      ratings AS RA2 ON RA1.movie_id = RA2.movie_id AND RA1.reviewer_id <> RA2.reviewer_id
    JOIN 
      reviewers AS R1 ON RA1.reviewer_id = R1.id
    JOIN 
      reviewers AS R2 ON RA2.reviewer_id = R2.id
    ORDER BY 
      reviewer1, reviewer2
  `);
  res.json(result.rows);
});

// Endpoint to get reviewers who rated a specific movie
app.get('/api/movies/:id/reviewers', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query(`
    SELECT 
      reviewers.name
    FROM 
      ratings
    JOIN 
      reviewers ON ratings.reviewer_id = reviewers.id
    WHERE 
      ratings.movie_id = $1
  `, [id]);
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
