import React, { Component } from 'react'
import { axiosInstance as axios } from '../../../axios-config'


export default class Register extends Component {

  componentDidMount() {
    console.log('[REGISTER COMPONENT MOUNTED]')
    axios.get('/user/register', (req, res) => {
      console.log(res)
      console.log(req)
    })
      .then(console.log('GOT REGISTER PAGE'))
  }
  render() {
    return (
      <div>
        <p>Registration Page</p>
      </div>
    )
  }
}
