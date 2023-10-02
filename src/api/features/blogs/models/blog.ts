import mongoose from 'mongoose';

mongoose.Schema.Types.String.set('validate', (v: string | null) => v === null || v.length > 0);

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 10,
    required: true,
  },
  author: {
    type: String,
    minLength: 5,
    unique: true,
    required: true,
  },
  url: {
    type: String,
    validate: {
      validator: function(v: string) {
        return /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g.test(
          v
        );
      },
      message: (props: {value: object}) => `${props.value} is not a valid url!`,
    },
    required: [true, 'url  is required'],
  },

  likes: {
    type: String,
    validate: {
      validator: function(v: string) {
        return /\d/.test(v);
      },
      message: (props: {value: object}) => `${props.value} is not a valid number!`,
    },
    required: [true, 'likes must be a number'],
  },
});

blogSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
