import React, { createContext, useReducer } from "react";

export const PostsContext = createContext(null);

export const ACTIONS = {
	SET_POSTS: "SET_POSTS",
	ADD_FAVORITE: "ADD_FAVORITE",
	REMOVE_FAVORITE: "REMOVE_FAVORITE",
};

function postsReducer(state, action) {
	switch (action.type) {
		case ACTIONS.SET_POSTS:
			return { ...state, posts: action.payload };
		case ACTIONS.ADD_FAVORITE:
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		case ACTIONS.REMOVE_FAVORITE:
			return {
				...state,
				favorites: state.favorites.filter((id) => id !== action.payload),
			};
		default:
			return state;
	}
}

export function PostsProvider({ children }) {
	const [state, dispatch] = useReducer(postsReducer, {
		posts: [],
		favorites: [],
	});

	return (
		<PostsContext.Provider value={{ state, dispatch }}>
			{children}
		</PostsContext.Provider>
	);
}
