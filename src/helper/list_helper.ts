interface IBlog {
  _id: string;
  title: string;
  author: string;
  url: string;
  likes: number;
  __v: number;
}

export const dummyBlog = (blogs: string[]) => {
  if (blogs.length === 0) return 1;
  return blogs;
};

export const totalLikes = (blogs: IBlog[]) => {
  return blogs.reduce((curr: number, acc: {likes: number}) => acc.likes + curr, 0);
};

export const favoriteBlog = (blogs: IBlog[]) => {
  if (blogs.length === 0) {
    return null;
  }

  let maxLikes = -1;
  let favorite = null;

  for (const blog of blogs) {
    if (blog.likes > maxLikes) {
      maxLikes = blog.likes;
      favorite = blog;
    }
  }

  return favorite;
};

export const mostBlogs = (blogs: IBlog[]) => {
  if (blogs.length === 0) {
    return null;
  }
  const authorCounts: Record<string, number> = {};

  for (const blog of blogs) {
    const author = blog.author;
    authorCounts[author] = (authorCounts[author] || 0) + 1;
  }

  //find the author with the most blogs
  let topAuthor = null as string | null;
  let maxBlogs = -1;

  for (const author in authorCounts) {
    if (authorCounts[author] > maxBlogs) {
      maxBlogs = authorCounts[author];
      topAuthor = author;
    }
  }

  return {
    author: topAuthor || '',
    blogs: maxBlogs,
  };
};

export const mostLikes = (blogs: IBlog[]) => {
  if (blogs.length === 0) {
    return null;
  }

  const authorLikes: Record<string, number> = {};

  for (const blog of blogs) {
    const author = blog.author;
    const likes = blog.likes;

    //initialize the author's likes count if not already defined
    if (!authorLikes[author]) {
      authorLikes[author] = 0;
    }

    //add the likes from the current blog to the author's total likes
    authorLikes[author] += likes;
  }

  //find the author with the most total likes
  let topAuthor = null as string | null;
  let maxLikes = -1;

  for (const author in authorLikes) {
    if (authorLikes[author] > maxLikes) {
      maxLikes = authorLikes[author];
      topAuthor = author;
    }
  }

  return {
    author: topAuthor || '',
    likes: maxLikes,
  };
};
