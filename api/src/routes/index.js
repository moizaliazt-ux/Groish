import { Router } from 'express';
import healthCheck from './health-check.js';
import contactRouter from './contact.js';

export default () => {
    const router = Router();
    router.get('/health', healthCheck);
    router.get('/', healthCheck);
    router.use('/contact', contactRouter);

    return router;
};