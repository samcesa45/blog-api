import {Router} from 'express';
import createNewBlog from '../controllers/createNewBlog';
import fetchAllBlogs from '../controllers/fetchAllBlog';
import fetchBlog from '../controllers/fetchBlog';
import updateBlog from '../controllers/updateBlog';

const blogRouter = Router();

blogRouter.get('/all_blogs', fetchAllBlogs);
blogRouter.get('/blog/:id', fetchBlog);
blogRouter.post('/create', createNewBlog);
blogRouter.put('/update/:id', updateBlog);

export default blogRouter;
