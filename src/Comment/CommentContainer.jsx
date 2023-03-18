import React from 'react'
import ReactDOM from 'react-dom'
import CommentList from './CommentList.jsx'
import CommentForm from './CommentForm.jsx'
import CommentForm2 from './CommentForm2.jsx'
const FAKE_DATA = [{"id":1388534400000,"author":"Pete Hunt","text":"Hey there!"},{"id":1420070400000,"author":"Paul O’Shannessy","text":"React is *great*!"},{"id":1463470817996,"author":"htf","text":"哈哈哈"},{"id":1678005266947,"author":"hedy","text":"hello nice to meet you !!!"},{"id":1678005361735,"author":"teemo","text":"ok again"},{"id":1678005476456,"author":"hedy","text":"who are you???"},{"id":1678005773815,"author":"hedy","text":"not interval"},{"id":1678798189480,"author":"hedy again","text":"open now"}]

class CommentContainer extends React.Component {
    constructor(){
        super()
        this.state = {}
        this.state.data = []

        // 绑定函数运行时的this对象，防止在html中调用该函数时，函数中的this指向window或者undefined
        this.getComments = this.getComments.bind(this)
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this)

    }
    getComments(){
        fetch(this.props.url).then((res) => {
            return res.json()
        }).then((data) => {
            this.setState({data})
        })
    }
    handleCommentSubmit(comment){
        fetch(this.props.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        }).then((res)=> {
            console.log('res: ', res);
            return res.json()
        }).then(data => {
            console.log('data: ', data);
            this.setState({data: this.state.data.concat(data)})
        })
    }
    componentDidMount(){
        this.getComments()
    }
    render(){
        return (
            <div className='comment-container'>
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm2 handleCommentSubmit = {this.handleCommentSubmit} />
                {/* <CommentForm handleCommentSubmit = {this.handleCommentSubmit} /> */}
            </div>
        )
    }
}
ReactDOM.render(<CommentContainer url='http://localhost:3003/api/comments' />, document.getElementById('comment'))