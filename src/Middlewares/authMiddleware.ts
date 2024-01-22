import { Response, NextFunction } from 'express';
import jwt, { Secret, VerifyErrors } from 'jsonwebtoken';
const ACCESS_TOKEN_SECRET =  process.env.ACCESS_TOKEN_SECRET
const verifyJWT = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, ACCESS_TOKEN_SECRET as Secret , (err: VerifyErrors | null, decoded: any | undefined) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded!);
      }
    });
  });
};

export const authenticateJWT = async (req: any, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized. Token not provided.' });
  }

  try {
    const decoded = await verifyJWT(token);
    req.user = decoded; // Attach user information to the request
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Unauthorized. Invalid token.' });
  }
};

export const isAdminOrRestroAdmin = (req: any, res: Response, next: NextFunction) => {
  const user = req.user;

  if (user && (user.role === 'admin' || user.role === 'restroAdmin')) {
    // User has admin or restroAdmin role, proceed to the next middleware/controller
    next();
  } else {
    // User does not have the required role, send an error response
    return res.status(403).json({ error: 'Unauthorized. Insufficient privileges.' });
  }
};
