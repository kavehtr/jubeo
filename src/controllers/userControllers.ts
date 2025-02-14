import { Request, Response, NextFunction } from "express";

export const Login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("okey");
  } catch (err) {
    console.log(err);
  }
};
