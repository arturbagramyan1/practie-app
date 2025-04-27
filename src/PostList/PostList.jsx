// components/PostList.jsx
import React, { useEffect, useContext } from "react";
import fetchPosts from "../api/api";
import { ACTIONS, PostsContext } from "../Contexts/PostListContext";
import Post from "../Post/Post";

function PostList() {
	const {
		state: { posts = [], favorites = [] },
		dispatch,
	} = useContext(PostsContext);

	useEffect(() => {
		fetchPosts()
			.then((data) => dispatch({ type: ACTIONS.SET_POSTS, payload: data }))
			.catch((err) => console.error(err));
	}, [dispatch]);

	return (
		<div className="posts-list">
			{posts.map((post) => (
				<Post
					key={post.id}
					post={post}
					isFavorite={favorites.includes(post.id)}
				/>
			))}
		</div>
	);
}

export default PostList;
