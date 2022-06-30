import React from 'react';
import styled from 'styled-components';
import {allPosts} from '../blog/ListofPosts.js'
import { useParams, useNavigate} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from "react";
import style from '../styles/markdown-styles.module.css';

const BlogPost = () => {
    // Get the URL parameters
    const {id} = useParams();
    const [content, setContent] = useState("");
    let navigate = useNavigate();
    const post = allPosts.find((p) => p.id === Number(id));

    useEffect(() => {
      function fetchBlog() {
        try {
          import(`../blog/${post.file}`)
          .then(res => {
            fetch(res.default)
              .then(res => res.text())
              .then(res => setContent(res))
              .catch(err => console.log(err)
              );
          })
          .catch(err => console.log("AKSJDFLASKJFLKSDJFADLSKF"));
        } catch (error) {
          navigate("/", { replace: true })
          // expected output: ReferenceError: nonExistentFunction is not defined
          // Note - error messages will vary depending on browser
        }
      }
        fetchBlog()
      }, []);

    // Filter allPosts array: keep posts who have the
    // same month AND same year as the URL parameters
    return (
        <BlogItem> 
          <ReactMarkdown 
          children={content}
          className={style.reactMarkDown}/></BlogItem>
    );

};


export default BlogPost;

const BlogItem = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`