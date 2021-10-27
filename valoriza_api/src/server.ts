import express, { NextFunction, Request, Response } from "express";
import "./database";
import { router } from "./routes";

//biblioteca de tipos : @types/express
const app = express();

//criar requisição
//parametro 1: a rota
//parametro 2: Request => entrando e Response => resposta

// comando para iniciar as rotas
app.use(express.json())
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof(Error)){
        return response.status(400).json({error: err.message})
    }
    return response.status(500).json({
        status: "Error", 
        message: "Internal Server error"
    })
});

//iniciar servidor
app.listen(3000, () => console.log("Server Rodando"));