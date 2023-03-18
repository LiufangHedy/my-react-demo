import { render } from 'less';
import React from 'react';
export default class CommentForm extends React.Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            author: '',
            text: ''
        }
    }
    handleSubmit(e){
        e.preventDefault()
        if(!this.state.text || !this.state.author) {
            return
        }
        this.props.handleCommentSubmit({
            author: this.state.author,
            text: this.state.text
        })
        this.setState({
            author: '',
            text: ''
        })
    }

    render(){
        return (
            <form className='comment-form' onSubmit={this.handleSubmit}>
                <div className='comment-main'>
                    <a>
                        <img src="https://avatars0.githubusercontent.com/u/3126745?v=3&s=96" />
                    </a>
                    <div className='comment-text'>
                        <textarea rows="5" placeholder='say something' value={this.state.text} onChange={(e) =>this.setState({text:e.target.value})}></textarea>
                    </div>
                </div>
                <div className='comment-footer'>
                    <input type="text" placeholder='your name' value={this.state.author} onChange={(e) =>this.setState({author:e.target.value})}/>
                    <input type="submit" value='post'/>
                </div>
            </form>
        )

    }
}