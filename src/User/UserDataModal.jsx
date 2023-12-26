import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const UserDataModal = ( { show, handleClose, userData } ) => {
  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Created User { userData.name }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>
            User Details: 
            </h3>
            <div>Name: {userData.name}</div>
            <div>Email: {userData.email}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserDataModal