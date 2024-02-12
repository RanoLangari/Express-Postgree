import pkg from "pg";
const { Client } = pkg;

export const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "23Juni2003",
    database: "db-barang"
});

client.connect(err => {
    if (err) throw err;
    console.log("Database Connected")
}
)
export default client;