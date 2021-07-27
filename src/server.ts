import express, { Request, Response, NextFunction} from "express";
import { router } from "./routes";
import swaggerUi  from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();

app.use(express.json());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(router);

app.listen(3000, () => console.log("It's running"));