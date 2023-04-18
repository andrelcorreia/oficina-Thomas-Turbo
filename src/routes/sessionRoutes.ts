import { Router } from 'express';
import { SessionController } from '../module/controllers/session/sessionController';

const SessionRouter = Router();

const sessionController = new SessionController();

SessionRouter.post('/', sessionController.handle);

export { SessionRouter };
