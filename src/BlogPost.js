import React, { useRef, useState } from "react";
import { getBlogs } from "./util";
import "./post.css";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const BlogPost = () => {
  const [blogs, setBlogs] = useState(getBlogs());
  const titleRef = useRef();
  const bodyRef = useRef();

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };

  const handlePost = () => {
    const postTitle = titleRef.current.value;
    const postBody = bodyRef.current.value;
    setBlogs((blogs) => [...blogs, { title: postTitle, body: postBody }]);
  };

  return (
    <div style={themeStyles}>
      <div className="blog-post-wrapper">
        <button
          onClick={toggleTheme}
          style={{
            position: "absolute",
            top: "40px",
            right: 0,
          }}
        >
          Toggle Theme{" "}
        </button>
        <div className="blog-post-wrapper__outer">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-post-wrapper__inner">
              <div className="blog-post-title">{blog.title}</div>
              <div className="blog-post-body">{blog.body}</div>
              <div className="blog-post-author"> Author: {blog.author}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="blog-post-form">
        <div className="blog-post-form-container">
          <div className="blog-form-title">Add new Blog</div>
          <div>
            <input placeholder="title" ref={titleRef} type="text" />
          </div>
          <div>
            <textarea
              cols={100}
              ref={bodyRef}
              rows={20}
              placeholder="content goes here"
            ></textarea>
          </div>
          <div>
            <button type="button" className="button" onClick={handlePost}>
              Add Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
