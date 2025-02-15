import { Request, Response, NextFunction } from "express";

export const setHeaders = (_req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.set({ "Cache-Control": "no-store, no-cache, private" });
  next();
};
