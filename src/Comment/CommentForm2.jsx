import React, { useState } from 'react'
export default function CommentForm2(props){
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(!author || !text) {
            return
        }
        props.handleCommentSubmit({
            text,
            author
        })
        setAuthor('')
        setText('')
    }

    return (
        <form className='comment-form' onSubmit={handleSubmit}>
            <div className='comment-main'>
                <a>
                    <img src="https://avatars0.githubusercontent.com/u/3126745?v=3&s=96" />
                </a>
                <div className='comment-text'>
                    <textarea placeholder='say something' rows="5" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
                </div>
            </div>
            <div className='comment-footer'>
                <input type="text" placeholder='your name' value={author} onChange={(e)=> setAuthor(e.target.value)}/>
                <input type="submit" value='post'/>
            </div>
        </form>
    )
}