import React from 'react'
import Remarkable from	'remarkable'

export default class LivePreview extends React.Component{
	
	constructor(){
		super()
	}

	componentWillReceiveProps(nextProps){

	}

	rawMarkup(text) {
	    let md = new Remarkable();
	    let rawMarkup = md.render(text);
	    return { __html: rawMarkup };
  	}

	render(){
		return (
			<div class="preview">
				<div class ="page-header">
					<h1>Live Preview</h1>
				</div>
				<h2> { this.props.content.title} </h2>
				<p dangerouslySetInnerHTML={this.rawMarkup(this.props.content.content)}></p>
			</div>
		)
	}
}