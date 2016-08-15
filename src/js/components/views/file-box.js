import React from 'react'
import FileUploadForm from './file-upload-form';
import FileList from './file-list';
import { connect } from 'react-redux';
import * as fileApi from '../../api/file-api';

export default class FileBox extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {
		fileApi.getFiles();
	}

	render() {
		return (
	        <div class="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	          <div class="modal-dialog modal-lg" role="document">
	            <div class="modal-content">
	              <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	                <h4 class="modal-title" id="myModalLabel">File Manager Box</h4>
	              </div>
	              <div class="modal-body">
	                <FileUploadForm />
	                <FileList files = {this.props.files}/>
	              </div>
	            </div>
	          </div>
	        </div>
		)
	}
}

const mapStateToProps = function (store) {
	return {
		files: store.fileState.files
	};
} 
export default connect(mapStateToProps)(FileBox)