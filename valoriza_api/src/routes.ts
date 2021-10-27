import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListagemTagController } from "./controllers/ListagemTagController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const listagemTag = new ListagemTagController();
const deletarUser = new DeleteUserController();
// rota cadastrar usuario

router.post("/users", createUserController.handle);
router.post("/tag", ensureAdmin, createTagController.handle);
router.get("/tag/listarUma", listagemTag.listarTagPorNome);
router.get("/tag/listarTodas", listagemTag.listarTodasAsTags);
router.delete("/user/deletarUser", deletarUser.deletarUsuario);
//

export {router};