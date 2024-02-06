import express from "express";
// import fs from "fs";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";


const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/plants/list', async (req, res) => {
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

  app.get('/plants/species', async (req, res) => {
    try {
        const specie = req.query.specie;
        const url = `https://trefle.io/api/v1/plants/${specie}?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al recuperar la especie.' });
    }
  });

  app.get('/plants/search', async (req, res) => {
    try {
        const q = req.query.q;
        const page = req.query.page;
        const url = `https://trefle.io/api/v1/plants/search?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&q=${q}&page=${page}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al recuperar la especie.' });
    }
  });

  app.get('/families/list', async (req, res) => {
    try {
        const page = req.query.page;
        const url = `https://trefle.io/api/v1/families?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page=${page}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al recuperar la especie.' });
    }
  });

  app.get('/genus/genus-by-family', async (req, res) => {
    try {
        const family = req.query.family;
        const page = req.query.page;
        // const url = http://localhost:4200/api/v1/families/acrobolbaceae/genus?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page=1
        const url = `https://trefle.io/api/v1/families/${family}/genus?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page=${page}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al recuperar la especie.' });
    }
  });

  app.get('/plants/plants-by-genus', async (req, res) => {
    try {
        const genus = req.query.genus;
        const page = req.query.page;
        const url = `https://trefle.io/api/v1/genus/${genus}/plants?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page=${page}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al recuperar la especie.' });
    }
  });

app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });