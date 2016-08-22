import React from 'react'

export default class OptionCategoryList extends React.Component{
	constructor() {
		super()
	}

	render() {
		return (
			<select onChange={this.props.select} class="form-control" required>
				<option>{this.props.default}</option>
				{this.props.categories.map(item=>{
						if(item !== this.props.default ) {
							return (
								<option key={item._id}>{item.title}</option>
							)	
						}
				})}
			</select>
		)
	}
}