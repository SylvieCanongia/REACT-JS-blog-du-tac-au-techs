import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import './singlePost.scss';

const SinglePost = ({ posts }) => {
  // get the url parameters
  const { slug } = useParams();
  // console.log(slug);

  const result = posts.find((post) => post.slug === slug);
  // console.log(result);

  return (
    <article className="singlePost">
      <h2 className="posts_single__title">{result.title}</h2>
      <div className="posts__single__category">{result.category}</div>
      <p className="posts__single__content">{result.content}</p>
    </article>
  );
};

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SinglePost;
