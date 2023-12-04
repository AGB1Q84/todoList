import React, { useEffect } from "react";
import Posts from "../../components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../store/posts/slice"
import { fetchPosts } from "../../store/posts/action";
import { getPosts } from "../../store/posts/selectors"

const PostsContainer = () => {
    const dispatch = useDispatch();
    const { isLoad, error, posts} = useSelector(getPosts);

    const handleAddPosts = () => {
        dispatch(addPosts({
            title: "title",
            body: "body",
        }));
    }
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);
    return (
    <>
     {isLoad ? <h1>Идет загрузка!</h1> : <Posts error={error} posts={posts} handleAddPosts ={handleAddPosts}/>}
    </>
    );
}

export default PostsContainer