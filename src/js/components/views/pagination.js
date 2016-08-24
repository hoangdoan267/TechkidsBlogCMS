import React from 'react'
import { connect } from 'react-redux';
import {Link, withRouter, browserHistory, IndexLink} from "react-router";
import * as postApi from '../../api/post-api';


export default class Pagination extends React.Component {
	constructor() {
		super()
	}

	componentDidMount() {
		postApi.getNumber()
	}

	render() {
		const active = this.props.active
		let pagination = this.props.page_number.map((item, index) => {
			if(item == active) {
				return <li key= {index} class="active"><Link to = {`/posts/${item}`} onClick = {this.props.trigger.bind(null, item)}>{item}</Link></li>
			}
			return <li key= {index}><Link to = {`/posts/${item}`} onClick = {this.props.trigger.bind(null, item)}>{item}</Link></li>
		})
		return (
			<ul class="pagination" id="pagination"> 
				{pagination}
			</ul>		
		)
	}
}

const mapStateToProps = function (store) {
	return {
		page_number: store.postState.page_number
	};
} 
export default connect(mapStateToProps)(Pagination)