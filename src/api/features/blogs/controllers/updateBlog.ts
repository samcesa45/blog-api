import {Request, Response} from 'express';
import {
  sendFailureResponse,
  sendSuccessResponse,
} from '../../../shared/globals/server/serverResponse';
import Blog from '../models/blog';

export default function updateBlog(req: Request, res: Response) {
  const body = req.body;
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  };
  Blog.findByIdAndUpdate(req.params.id, blog, {
    new: true,
    runValidators: true,
    context: 'query',
  })
    .then(updatedBlog => {
      return sendSuccessResponse({
        res,
        statusCode: 200,
        message: 'Blog updated successfully',
        data: {updatedBlog},
      });
    })
    .catch(error => {
      return sendFailureResponse({res, statusCode: error.statusCode, message: error.message});
    });
}
