import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("Error:", err);

  return res.status(400).json({
    status: "error",
    message: err.message || "Internal server error"
  });
};
