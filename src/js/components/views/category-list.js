import React from 'react';
import { Link } from 'react-router';
import CategoryItem from './category-item'

// Using "Stateless Functional Components"

export default class CategoryList extends React.Component{

  constructor(){
    super()
  }

  render(){
    return (
        <table class="table table-striped table-hover">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Manage</th>
              </tr>
          </thead>
          <tbody>

        {this.props.categories.map((category, id) => {

          return (
            <CategoryItem key={id} order={id+1} category = {category} delete={this.props.delete.bind(null, category._id, category)}/>
          );

        })}
          </tbody>
        </table>
    )
  }

}