import React from 'react'
import Comment from './Comment.jsx'
export default class CommentList extends React.Component {
    render(){
        let commentNodes = this.props.data.map((comment, i) => {
            let createTime = new Date(comment.id).toLocaleTimeString()
            return (
                <Comment author={comment.author} time={createTime} key={i}>
                    {comment.text}
                </Comment>
            )
        })
        return (
            <div className='comment-list'>
                {commentNodes}
            </div>
        )
    }
}