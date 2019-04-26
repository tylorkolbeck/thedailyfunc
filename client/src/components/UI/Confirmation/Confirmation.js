import React from 'react'
import './Confirmation.css'

export default function Confirmation({deletePostHandler, closeConfirmationModal, postId}) {
  return (
    <div className="Confirmation__modal-container">
      <h2>Are you sure you want to delete this post?</h2>

      <div className="Confirmation__modal-button-container">
        <button onClick={() => closeConfirmationModal(false)}>No</button>
        <button onClick={(postId) => deletePostHandler(postId)}>Yes</button>
      </div>

    </div>
  )
}
