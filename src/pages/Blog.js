import React from 'react';
import styled from 'styled-components';

import { allPosts } from '../blog/ListofPosts.js'

import { useNavigate } from 'react-router-dom';
const Blog = () => {
    const history = useNavigate();
    function redirectClick(id) {
        history(`/blog/${id}`)
    }
    return (
        <Outer>
            <p>Not much to see here yet, just starting a collection of ramblings</p>
            {allPosts.slice(0).reverse().map((post) => (
                <BlogEntry key={post.id} onClick={() => redirectClick(post.id)}>
                    <BlogTitle>
                        <h3>{post.title}</h3>
                    </BlogTitle>
                    <BlogDate>{post.date}</BlogDate>
                </BlogEntry>
            ))}
        </Outer>
    );
};
const BlogDate = styled.div`
    display:flex; 
    color: white;
`
const BlogTitle = styled.div`
    display:flex; 

`
const BlogEntry = styled.div`
    display:flex;  
    margin-bottom: 1rem;
    width: 50%;
    justify-content: space-between;
    cursor: pointer;
`
const Outer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
    p{
        color: white;
        margin-bottom: 1rem;
    }
`
export default Blog;