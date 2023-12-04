import React from "react";

const Posts = ({error, posts, handleAddPosts}) => {
    if (error) return <h1>{error}</h1>
    return (
        <>
            <button onClick={handleAddPosts}>ADD</button>
            <ul>
                {posts.map((posts) => {
                    return (
                        <li>
                            <h3>{posts.title}</h3>
                            <p>{posts.body}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Posts;