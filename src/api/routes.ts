import {Router} from 'express';
import blogRouter from './features/blogs/routes/blogs.routes';
export default function routes() {
  const router = Router();

  router.use('/blogs', blogRouter);

  return router;
}
