import axios from 'axios'
import store from '../store'
import { getAllFiles } from '../actions/file-actions'


export function getFiles() {
	return axios.get('http://techkids.vn:9196/api/blog/getAllImages')
		.then(res => {
			console.log(res)
			store.dispatch(getAllFiles(res.data))
			return res
		})
		.catch((error) =>{
			console.log(error)
		});
}
