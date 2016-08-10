import React from 'react'

export default class OptionCategoryList extends React.Component{
	constructor() {
		super()
	}

	render() {
		return (
			<select onChange={this.props.select}>
				<option selected="selected">
					{this.props.default}
				</option>
				{this.props.categories.map(item=>{
					if(item.title !== this.props.default){
						return (
							<option key={item._id}>{item.title}</option>
						)	
					}
				})}
			</select>
		)
	}
}