import * as listHelper from '../../../../helper/list_helper';

test('dummy returns 1 for empty array', () => {
  const emptyBlog: string[] = [];
  const nonEmptyBlog: string[] = ['blog 1', 'blog 2'];

  const resultEmpty = listHelper.dummyBlog(emptyBlog);
  const resultNonEmpty = listHelper.dummyBlog(nonEmptyBlog);

  expect(resultEmpty).toBe(1);
  expect(resultNonEmpty).toEqual(nonEmptyBlog);
});

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
  ];

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });
});

describe('blog with most likes', () => {
  const listOfBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'life of a programmer',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 9,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 12,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d18d9',
      title: 'How to be a better programmer',
      author: 'Robert C. Martins',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0,
    },
  ];

  test('which blog has the mostlikes', () => {
    const result = listHelper.favoriteBlog(listOfBlogs);

    expect(result).toEqual({
      _id: '5a422aa71b54a676234d17f8',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 12,
      __v: 0,
    });
  });
});

describe('most author', () => {
  const listOfBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'life of a programmer',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 9,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 12,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d18d9',
      title: 'How to be a better programmer',
      author: 'Robert C. Martins',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0,
    },
  ];

  test('author with most blogs is returned', () => {
    const result = listHelper.mostBlogs(listOfBlogs);

    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      blogs: 3,
    });
  });
});
describe('most likes', () => {
  const listOfBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'life of a programmer',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 9,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 12,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d18d9',
      title: 'How to be a better programmer',
      author: 'Robert C. Martins',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 7,
      __v: 0,
    },
  ];

  test('author with most likes is returned', () => {
    const result = listHelper.mostLikes(listOfBlogs);

    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 26,
    });
  });
});
