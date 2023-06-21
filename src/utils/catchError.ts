import { NextFunction, Request, Response } from 'express';

export function catchError(action: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await action(req, res, next).catch(next);
    } catch (error) {
      next(error);
    }
  };
}
