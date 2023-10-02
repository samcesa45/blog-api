import {Router} from 'express';
import createNewBlog from '../controllers/createNewBlog';
import fetchAllBlogs from '../controllers/fetchAllBlog';

const blogRouter = Router();

blogRouter.get('/all_blogs', fetchAllBlogs);
blogRouter.post('/create', createNewBlog);

export default blogRouter;
