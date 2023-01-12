import React from "react";
import PostDelete from "./PostDelete";

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({posts, deletePost}) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
  <div className="post-list">
    <ul>
    {posts.map((post, index) => (
      <PostDelete
      deletePost={() => deletePost(index)}
      key={index}
      post={post}
    />
    ))}
    </ul>
  </div>
  )
}

export default PostList;
