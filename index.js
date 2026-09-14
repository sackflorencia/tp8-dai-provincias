import express  from "express";
import cors     from "cors"; 
import ProvinceRouter from "./src/controllers/provinciasController.js" 
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json' with { type: 'json' };

const app  = express();
const port = 3000; 

app.use(cors());
app.use(express.json());

app.use("/api/province", ProvinceRouter); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {     console.log(`Example app listening on port ${port}`) }) 