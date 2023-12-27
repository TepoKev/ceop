const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ceop'
});

export async function GET() {
    return Response.json({ message: 'login!' })
}

export async function POST(request: Request) {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM users');
    conn.release();
    return Response.json({ users: rows })
}