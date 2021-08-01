import express, { Request, Response, NextFunction} from "express";
import "express-async-errors";
import { router } from "./routes";
import swaggerUi  from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import "./database"
import { GenericError } from "./errors/error";


const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(router);

app.use((err: GenericError, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(err.code).json({
            error: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
});

app.listen(3000, () => console.log("It's running"));