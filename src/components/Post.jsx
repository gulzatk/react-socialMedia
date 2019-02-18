import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
 

    
  return (
    <div>
      <style jsx>
        {`
            
            button {
                background-color: powderblue;
                font-size: 20px;
                margin-left: 20px;
                margin-right: 20px;
                width: 50px;
                border-radius: 20%;
            }
            `
        }
      </style>
      <h3>{props.name}</h3>
      <p><em>{props.content}</em>
        <p>{props.id}</p>
        <button onClick={() => props.changeLikes(props.id)}
        >👍</button>
        <span>Likes: {props.likes}</span>
      </p>
      <hr />
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  content: PropTypes.string,
  likes: PropTypes.number,
  changeLikes: PropTypes.func
};

export default Post;