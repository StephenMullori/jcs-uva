import pg from 'pg';
import express from 'express';

const { Client } = pg;

const app = express();
const port = 3000;

app.use(express.static('public'));

const db = new Client({
	user: 'yourusername',
	host: 'localhost',
	database: 'yourdatabase',
	password: 'yourpassword',
	port: 5432
});

db.connect();

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
