import React, { Component } from 'react'
import './EditPost.css'
import { axiosInstance as axios } from '../../../../../axios-config'
import { connect } from 'react-redux'

// deps for editor
require('codemirror/lib/codemirror.css'); // codemirror
require('tui-editor/dist/tui-editor.css'); // editor ui
require('tui-editor/dist/tui-editor-contents.css'); // editor content
require('highlight.js/styles/github.css'); // code block highlight

const Editor = require('tui-editor')



class EditPost extends Component {

  state = {
    editor: false,
    inputs: {
      _id: false,
      author: '',
      title: '',
      description: '',
      category: '',
      tags: '',
      mainCat: '',
      postCardImg: '',
      imgThumb: '',
      body: ''
    },
    loading: false,
    error: false,
    success: false
  }

  componentDidMount() {
    // If there is a postId then this will be editing a post
    if (this.props.location.state) {
      let { postId } = this.props.location.state
      if (postId) {
        axios.get(`/posts/${postId}`)
          .then((post) => {
            this.setState({inputs: {...post.data.doc}})
            this.state.editor.setValue(post.data.doc.body)
          })
          .catch(err => console.log(err))
      }
    }


    const editor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      previewStyle: 'horizontal',
      height: '90vh',
      usageStatistics: false,
      events: {
        change: this.onChange
      }
    })

    this.setState({editor: editor}, () => {
      this.state.editor.setValue('adsjfkljasdkfjasdlkj')
    })
    
  }

  inputHandler(value, input) {
    let oldState = {...this.state}
    oldState.inputs[input] = value
    this.setState({...oldState})
  }

  onChange = (event) => {
    let oldState = {...this.state}
    oldState.inputs.body = this.state.editor.getValue()
    this.setState({...oldState})
  }

  submitPostHandler(e) {
    this.setState({loading: true})
    e.preventDefault()
    axios.post('/posts/newpost', {
      data: {
        ...this.state.inputs,
        token: this.props.token
      },
    })
      .then(() => {
        this.setState({loading: false, success: true})
      })
      .catch(err => {
        this.setState({error: err, loading: false})
      })

  }

  render() {
    return (
      this.state.success ? <h2>Post Submitted</h2> : (
      <div className="Editor__container">
       <div className="Editor__form-container">
          <div className="">
        <h2>
          New Post
        </h2>
        {this.state.error ? <p>There was an error with the request</p> : null}
        <form>
          <div>
            <p>Title</p>
            <input
              type="text"
              value={this.state.inputs.title}
              onChange={(e) => this.inputHandler(e.target.value, 'title')}
            />
          </div>
          <div>
            <p>Author</p>
            <input
              type="text"
              value={this.state.inputs.author}
              onChange={(e) => this.inputHandler(e.target.value, 'author')}
            />
          </div>
          <div>
            <p>Description</p>
            <input
              type="text"
              value={this.state.inputs.description}
              onChange={(e) => this.inputHandler(e.target.value, 'description')}
            />
          </div>
          <div>
            <p>Header Image</p>
            <input
              type="text"
              value={this.state.inputs.postCardImg}
              onChange={(e) => this.inputHandler(e.target.value, 'postCardImg')}
            />
          </div>
          <div>
            <p>Thumb Nail Image</p>
            <input
              type="text"
              value={this.state.inputs.imgThumb}
              onChange={(e) => this.inputHandler(e.target.value, 'imgThumb')}
            />
          </div>
          <div>
            <p>Category</p>
            <input
              type="text"
              value={this.state.inputs.category}
              onChange={(e) => this.inputHandler(e.target.value, 'category')}
            />
          </div>
          <div>
            <p>Tags(array)</p>
            <input
              type="text"
              value={this.state.inputs.tags}
              onChange={(e) => this.inputHandler(e.target.value, 'tags')}
            />
          </div>

          <div>
            <p>Main Category(one or two letters)</p>
            <input
              type="text"
              value={this.state.inputs.mainCat}
              onChange={(e) => this.inputHandler(e.target.value, 'mainCat')}
            />
          </div>

          {this.state.loading ? 'Loading...' : <button onClick={(e) => this.submitPostHandler(e)}>Submit</button>}
        </form>
          </div>
        </div>

        {/* THE EDITOR */}
        <div id="editSection">
         
      </div>
    </div>
    )
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.userManagement.token
  }
}

export default connect(mapStateToProps)(EditPost)
