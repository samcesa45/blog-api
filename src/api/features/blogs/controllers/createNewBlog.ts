import {Response, Request} from 'express';
import {
  sendFailureResponse,
  sendSuccessResponse,
} from '../../../shared/globals/server/serverResponse';
import Blog from '../models/blog';

export default function createNewBlog(req: Request, res: Response) {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    likes: req.body.likes,
  });

  blog
    .save()
    .then(savedBlog => {
      return sendSuccessResponse({
        res,
        statusCode: 201,
        message: 'Blog created successfully',
        data: {savedBlog},
      });
    })
    .catch(error => {
      console.log('There was an error creating blog', error);
      return sendFailureResponse({
        res,
        statusCode: 500,
        message: 'There was an error creating blog',
      });
    });
}
