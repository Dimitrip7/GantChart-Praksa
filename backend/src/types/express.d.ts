import 'express';

declare global {
  namespace Express {
    export interface Request {
      body: any; // Use 'any' for now to bypass strict checks
    }
  }
}
