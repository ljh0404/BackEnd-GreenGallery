import express from "express";
// import fs from "fs";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";


const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/plants', async (req, res) => {
    try {
        const page = req.query.page;
        const url = `https://trefle.io/api/v1/plants?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page=${page}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener datos de las plantas.' });
    }
  });

app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });