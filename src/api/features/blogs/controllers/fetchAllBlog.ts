import {Response, Request} from 'express';
import {sendSuccessResponse} from '../../../shared/globals/server/serverResponse';
import Blog from '../models/blog';

export default function fetchAllBlogs(req: Request, res: Response) {
  Blog.find({}).then(blogs => {
    return sendSuccessResponse({
      res,
      statusCode: 200,
      message: 'Blogs retrieved successfully',
      data: {blogs},
    });
  });
}
