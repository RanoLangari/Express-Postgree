import express from "express";
import client from "./Database.js";

const Port = 5000;
const App = express();
App.use(express.urlencoded({ extended: true }));
App.use(express.json());


App.get("/", (_, res) => {
  res.send("Server up And Running");
});

App.get("/getBarang", (_, res) => {
    const sql = "SELECT * FROM tbl_barang"
    client.query(sql, (err, result) => {
      if (err) return res.status(400).json({message: "Gagal Melakukan Fetch data"})
       res.status(200).json({
        message: "Berhasil Fetch Data",
        data: result
      })
    })
});

App.listen(Port, () => {
  console.log(`Application Up and Running on Port ${Port}`);
});
