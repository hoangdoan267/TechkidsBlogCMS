import React from 'react';
import { Link } from 'react-router';
import UtilsConfirmModal from './utils-confirm-modal'
import PostItem from './post-item'

// Using "Stateless Functional Components"

export default class PostList extends React.Component{

  constructor(){
    super()
  }



  render(){
    return (
      <div>
        <table class="table table-striped table-hover">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date Created</th>
                  <th>Manage</th>
              </tr>
          </thead>
          <tbody>

        {this.props.posts.map((post,rank) => {
          return (
            <PostItem key = {rank} order = {rank+1} post = {post} delete={this.props.deletePost.bind(null, post._id, post)}/>
          );
        })}
          </tbody>
        </table>
      </div>
    )
  }

}