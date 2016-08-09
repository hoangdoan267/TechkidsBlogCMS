import axios from "axios"
import store from "../store"

import { getCategoriesSuccess, getCategoryById, deleteCategoryById, createCategorySuccess, editCategorySuccess } from "../actions/category-action"

export function getCategories() {
	return axios.get('http://techkids.vn:9196/api/blog/getCategories')
		.then((res)=>{
			store.dispatch(getCategoriesSuccess(res.data))
			return res
		})
		.catch((err)=>{
			console.log(err)
		})
}

export function deleteCat(id, cat) {
	return axios.post('http://techkids.vn:9196/api/blog/deleteCategory', cat)
		.then(res => {
			store.dispatch(deleteCategoryById(id, cat))
			return res
		})
		.catch((err) =>{
			console.log(err)
		});
}

export function getCategory(id) {
	return axios.get('http://techkids.vn:9196/api/blog/getCategory/' + id )
		.then(res => {
			console.log(res)
			setTimeout(()=>{
				store.dispatch(getCategoryById(res.data))
			},200)			
			return res
		}).catch((err) =>{
			console.log(err)
		});
}

export function createCategory(cat) {
	let output = document.getElementById('notification')
	return axios.post('http://techkids.vn:9196/api/blog/postCategory', cat)
		.then(res => {
			store.dispatch(createCategorySuccess(cat))
			output.className = 'alert alert-dismissible alert-success';
            output.innerHTML = 'Create Category Successfully';
		})
		.catch((err)=>{
			console.log(err)
			output.className = 'alert alert-dismissible alert-danger'
            output.innerHTML = err
		})
}

export function editCategory(id, cat) {
	return axios.post('http://techkids.vn:9196/api/blog/editCategory', cat)
		.then(res=> {
			store.dispatch(editCategorySuccess(id, cat))
			return res
		}).catch((err)=> {
			console.log(err)
		})
}

