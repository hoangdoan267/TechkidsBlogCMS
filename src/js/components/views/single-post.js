import React from "react"
import Remarkable from	'remarkable'

export default class SinglePost extends React.Component {

	constructor(){
		super()
	}

	rawMarkup(text) {
	    let md = new Remarkable();
	    let rawMarkup = md.render(text);
	    return { __html: rawMarkup };
  	}

	render(){
		console.log(this.props.title)
		return (
	    	<div className="user-profile">
	      		<div className="details">
	        		<h2>{this.props.title}</h2>
	        		<p dangerouslySetInnerHTML={this.rawMarkup(this.props.content)}></p>
	      		</div>
	    	</div>
	  	)
	}
  
}
