// App.jsx (точка входа)
import React from "react";
import { PostsProvider } from "./Contexts/PostListContext";
import PostList from "./PostList/PostList";

function App() {
	return (
		<PostsProvider>
			<PostList />
		</PostsProvider>
	);
}

export default App;
