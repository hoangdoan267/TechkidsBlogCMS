import React from "react"

export default class UtilsConfirmModal extends React.Component {
	constructor() {
		super()
	}

	process(){
		this.props.confirm()
		$('#' + this.props.id).modal('hide')
	}

	render() {
		return (
			<div class="modal fade" tabIndex="-1" role="dialog" id={this.props.id}>
			  <div class="modal-dialog modal-sm" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 class="modal-title">Are you sure?</h4>
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-primary" onClick={this.process.bind(this)}>Yup!</button>
			        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}