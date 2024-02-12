import pkg from "pg";
const { Client } = pkg;
import dotenv from "dotenv"
dotenv.config();

export const client = new Client({
    host: process.env.host,
    user: process.env.user,
    port: process.env.port,
    password: process.env.password,
    database: process.env.database
});

client.connect(err => {
    if (err) throw err;
    console.log("Database Connected")
}
)
export default client;