import "express"

declare global {
  namespace Express {
    interface Request {
      userID?: string
    }
  }
}