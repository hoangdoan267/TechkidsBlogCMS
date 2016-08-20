import React from 'react'

export default class OptionCategoryList extends React.Component{
	constructor() {
		super()
	}

	render() {
		return (
			<select onChange={this.props.select} class="form-control" value={this.props.default || ""} required>
				<option value="" disabled>Select Category</option>
				{this.props.categories.map(item=>{
						return (
							<option key={item._id}>{item.title}</option>
						)	
				})}
			</select>
		)
	}
}