import { Router } from 'express';

const router = Router();

router.post('/auth/register', (req, res) => {
    console.log(req);
});

export default router;



