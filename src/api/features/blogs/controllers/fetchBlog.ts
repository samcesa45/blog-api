import {Request, Response} from 'express';
import {
  sendFailureResponse,
  sendNotFoundFailureResponse,
  sendSuccessResponse,
} from '../../../shared/globals/server/serverResponse';
import Blog from '../models/blog';

export default function fetchBlog(req: Request, res: Response) {
  Blog.findById(req.params.id)
    .then(blog => {
      if (!blog) {
        return sendNotFoundFailureResponse(res, 'Blog not found!');
      } else {
        return sendSuccessResponse({
          res,
          statusCode: 200,
          message: 'Blogs retrieved successfully',
          data: {blog},
        });
      }
    })
    .catch(error => {
      return sendFailureResponse({res, statusCode: 500, message: `'${error.message}'`});
    });
}
