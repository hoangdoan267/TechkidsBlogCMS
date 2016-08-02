import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import router from "./router"
import Layout from "./components/pages/Layout"
 
const app = document.getElementById('app');

ReactDOM.render(

	<Provider store = { store } >
		{router}
	</Provider>, app
)

