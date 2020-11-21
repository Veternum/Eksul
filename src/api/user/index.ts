import express from 'express';
import{
    index,
    register,
    signin,
    remove,
    update
} from './user.controller';
import * as middleware from '../../middleware';

let userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/signin', signin);
userRouter.get('/', middleware.isAuthenticated, index);
userRouter.delete('/:id', middleware.isAuthenticated, remove);
userRouter.put('/:id', middleware.isAuthenticated, update);

export default userRouter;