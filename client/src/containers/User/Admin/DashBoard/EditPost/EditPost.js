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
      author: ' ',
      title: ' ',
      description: ' ',
      category: ' ',
      tags: [],
      mainCat: ' ',
      postCardImg: ' ',
      imgThumb: ' ',
      body: ' ',
      public: false
    },
    loading: false,
    error: false,
    success: false
  }

  componentDidMount() {
    const editor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      previewStyle: 'horizontal',
      height: '90vh',
      usageStatistics: false,
      events: {
        change: this.onChange,
        
      }
    })

    this.setState({editor: editor})
    // If there is a postId then this will be editing a post
    if (this.props.location.state) {
      let { postId } = this.props.location.state
      let previousInputs = {}
      if (postId) {
        axios.get(`/posts/${postId}`)
          .then((post) => {
            for (let key in post.data.doc) {
              if (key in this.state.inputs) {
                previousInputs[key] = post.data.doc[key] ? post.data.doc[key] : false
              }
            }
            this.setState({inputs: {...previousInputs}})
            this.state.editor.setValue(post.data.doc.body)
          })
          .catch(err => console.log(err))
      }
    }
  }

  inputHandler(value, input) {
    let oldState = {...this.state}
    if (input === 'tags') {
      value = value.split(',')
    }
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
        token: this.props.token.split(" ")[1]
      },
    })
      .then(() => {
        this.setState({loading: false, success: true})
        this.props.history.push('/profile')
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
          {this.props.location.postId ? 'New Post' : 'Editing Post'}
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
            <textarea
              value={this.state.inputs.description}
              onChange={(e) => this.inputHandler(e.target.value, 'description')}>

            </textarea>
            {/* <input
              type="text"
              value={this.state.inputs.description}
              onChange={(e) => this.inputHandler(e.target.value, 'description')}
            /> */}
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

        </form>
          </div>
        </div>


        <p>Body </p>
        {/* THE EDITOR */}
        <div id="editSection">
         
        </div>

        {this.state.loading ? 'Loading...' : <button className="EditPost__button-submit"onClick={(e) => this.submitPostHandler(e)}>Submit</button>}

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
