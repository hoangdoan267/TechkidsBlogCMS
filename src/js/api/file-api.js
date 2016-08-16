import axios from 'axios'
import store from '../store'
import { getAllFiles, uploadFileSuccess } from '../actions/file-actions'


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
export function uploadFile(formData) {

	return 	axios({
				method: 'post',
				url: 'http://techkids.vn:9196/api/blog/uploadImage',
				data: formData,
				progress: function(pro) {
					let progress = pro.loaded/pro.total * 100
					console.log(progress)
					$('#bar').css("width", progress+ "%" )
				}
			})
			.then((res)=>{
				$('#alert').css("display", "block")
				store.dispatch(uploadFileSuccess(res.data))
			})
			.catch((err)=>{
				console.log(err)
			});
}