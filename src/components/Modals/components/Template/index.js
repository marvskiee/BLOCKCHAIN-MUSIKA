import React,{useState} from 'react';
import {Modal} from 'react-bootstrap'

export const Template = ({shown,title,body,children,size}) => {
  return (
  			<Modal show={shown} size={size} aria-labelledby="contained-modal-title-vcenter" centered>
		        <Modal.Header >
		        	<Modal.Title>{title}</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        	{body}
		        </Modal.Body>
		        <Modal.Footer>
		        {
		          	children
		        }
		        </Modal.Footer>
	      	</Modal>
  )
}
