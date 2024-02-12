import express, { query } from "express";
import client from "./Database.js";

const Port = 5000;
const App = express();
App.use(express.urlencoded({ extended: true }));
App.use(express.json());


App.get("/", (_, res) => {
  res.send("Server up And Running");
});

App.get("/get-barang", (_, res) => {
    const sql = "SELECT * FROM public.tbl_barang ORDER BY id_barang ASC"
    client.query(sql, (err, result) => {
      if (err) return res.status(400).json({message: "Gagal Melakukan Fetch data"})
       res.status(200).json({
        message: "Berhasil Fetch Data",
        data: result.rows
      })
    })
});

App.post("/post-barang", (req,res) => {
  const {nama_barang, kategori_barang} = req.body;
  const sql = `INSERT INTO tbl_barang(nama_barang, kategori_barang) VALUES('${nama_barang}', '${kategori_barang}')`
  client.query(sql, (err,result) => {
    if (err) return res.status(400).json({message: "Gagal Menambahkan Data"})
    res.status(200).json({message: "Data Berhasil Ditambahkan"})
  })
})

App.patch("/update-barang/:id", (req, res) => {
  const id_barang = req.params.id;
  const {nama_barang, kategori_barang} = req.body;
  const sql = `UPDATE tbl_barang SET nama_barang = '${nama_barang}', kategori_barang = '${kategori_barang}' WHERE id_barang = ${id_barang}`;
  client.query(sql, (err,result) =>{
    if (err) return res.status(400).json({message: "Gagal Mengupdate Barang"});
    res.status(200).json({message: "Berhasil Mengupdate Data barang"})
  })
})

App.delete('/delete-barang/:id',(req,res) => {
  const id_barang = req.params.id;
  const sql = `DELETE FROM tbl_barang WHERE id_barang = ${id_barang}`;
  client.query(sql, (err, result) => {
    if(err) return res.status(400).json({message: "Gagal Menghapus Barang"})
    res.status(200).json({message: "Berhasil Menghapus Data Barang"})
  })
})



App.listen(Port, () => {
  console.log(`Application Up and Running on Port ${Port}`);
});
