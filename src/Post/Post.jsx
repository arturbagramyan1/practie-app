// components/Post.jsx
import React, { useContext } from "react";
import { ACTIONS, PostsContext } from "../Contexts/PostListContext";

function Post({ post, isFavorite }) {
	const { dispatch } = useContext(PostsContext);

	const toggleFavorite = () => {
		dispatch({
			type: isFavorite ? ACTIONS.REMOVE_FAVORITE : ACTIONS.ADD_FAVORITE,
			payload: post.id,
		});
	};

	return (
		<div className="post-card">
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			<button onClick={toggleFavorite}>
				{isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
			</button>
		</div>
	);
}

export default Post;
