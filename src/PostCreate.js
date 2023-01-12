import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *- Already done
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({ savePost }) {
  const [type, setType] = useState("Text");
  const [content, setContent] = useState("")
  const handleTypeChange = (event) =>
    setType(event.target.value)
  
  const handleContentChange = (event) =>
    setContent(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!", type, content)
    setType("Text")
    setContent("")
    savePost({type, content})
  }

  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute- already done
  // - one child `<button>` with a `type="submit"` attribute- already done
  // - one child `<select>` with a `name="type"` attribute- already done
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`- already done

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type:</label>
          <select 
            id="type" 
            name="type" 
            value={type}
            onChange={handleTypeChange}
            required={true}>
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">
            Content: 
            </label>
          {type === "Text" ? (
            <textarea 
              id="content" 
              name="content" 
              required={true} 
              rows={3} 
              value={content}
              onChange={handleContentChange}
              />
          ) : (
            <input 
              id="content" 
              name="content" 
              type="url" 
              required={true} 
              value={content}
              onChange={handleContentChange}
              />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
