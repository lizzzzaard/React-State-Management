import React from "react";
 //is post.type===text then return post.content,
 // else return image alt=post.content src=post.content 

//<p>Liz{post}</p>

function PostDelete({post, deletePost}) {
    return (
    <div className="post">
            {post.type === "Text" ? (
                post.content
            ):(
                <img alt={post.content} src={post.content} />
            )}
            <br />
        <button name="delete" onClick={deletePost}>Delete</button>
    </div>
    )
}

export default PostDelete;