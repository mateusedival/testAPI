import { Request, Response, NextFunction } from "express";
import { ManagerRepository } from "../repositories/ManagerRepository";


export async function ensureAdmin(request: Request, response: Response, nextFunction: NextFunction) {
    
    const { user_id } = request;
    
    const managerRepository = new ManagerRepository();

    const manager = await managerRepository.findById(user_id);

    if(manager) {
        return nextFunction();
    }

    return response.status(403).json({
        error: "Forbidden",
    });
}