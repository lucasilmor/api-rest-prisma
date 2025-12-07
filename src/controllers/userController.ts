import { Request, Response, NextFunction } from "express";
import * as userService from "../services/userService";

export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await userService.getUsers();
    return res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await userService.getUserById(req.params.id);
    return res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    return res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
    await userService.deleteUser(req.params.id);
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
}
