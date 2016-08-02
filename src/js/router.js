import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Layout from "./components/pages/Layout"
import Dashboard from "./components/pages/Dashboard"
import Posts from "./components/pages/Posts"
import PostListContainer from "./components/containers/post-list-container"
import SinglePostContainer from "./components/containers/single-post-container"
import PostFormContainer from "./components/containers/post-form-container"
import EditFormContainer from "./components/containers/edit-form-container"

export default (
	<Router history={hashHistory}>
		<Route path="/" component = {Layout}>
			<IndexRoute component={Dashboard}></IndexRoute>
			<Route path="dashboard" name="dashboard" component={Dashboard}></Route>
			<Route path="posts" name="posts" component={PostListContainer}></Route>
			<Route path="post/:id" name="post" component={SinglePostContainer}></Route>
			<Route path="add-post" name="add" component={PostFormContainer}></Route>
			<Route path="edit-post/:id" name="edit" component={EditFormContainer}></Route>
		</Route> 
	</Router>
)