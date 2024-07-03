import pg from 'pg';
import express from 'express';
import 'dotenv/config';

const { Pool } = pg;

const app = express();
const port = 3000;

app.use(express.static('public'));

export const db = new Pool({
	user: process.env.DB,
	host: 'localhost',
	database: 'yourdatabase',
	password: 'yourpassword',
	port: 5432
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
