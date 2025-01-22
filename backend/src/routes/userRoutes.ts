import express, { Request, Response } from 'express';
import { incrementPoints } from '../jobs/incrementPoints';
import User, { IUser } from '../models/User';

const router = express.Router();

/**
 * Create/Get User
 * Endpoint: POST /api/user
 * Description: Creates a new user if it doesn't exist or retrieves an existing user by username.
 */
router.post('/user', async (req: Request, res: Response) => {
  const { username } = req.body;

  try {
    let user: IUser | null = await User.findOne({ username });

    if (!user) {
      user = await User.create({ username });
    }

    res.json(user);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});



/**
 * Increment Points
 * Endpoint: POST /api/increment
 * Description: Increments points for a user based on random logic and updates their prize count if applicable.
 */
router.post('/increment', async (req: Request, res: Response) => {
  const { userId } = req.body;

  try {
    const result = await incrementPoints(userId);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * Get User by ID
 * Endpoint: GET /api/user/:id
 * Description: Fetches a user by their unique ID.
 */
router.get(
    '/user/:id',
    async (req: Request<{ id: string }>, res: Response): Promise<void> => {
      const { id } = req.params;
  
      try {
        const user: IUser | null = await User.findById(id);
  
        if (!user) {
          res.status(404).json({ error: 'User not found' });
          return;
        }
  
        res.json(user);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    }
  );


export default router;
