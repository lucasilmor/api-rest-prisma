import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error("Error:", err);

  return res.status(400).json({
    status: "error",
    message: err.message || "Internal server error"
  });
}
