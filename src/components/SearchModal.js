import React from 'react';
import { Modal, Button } from  'react-bootstrap'
import styles from './SearchModal.module.css';
export default function SearchModal(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        The weather in Us
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="container">
                    <div className="cards">
                        <h1>{props.city},{props.country}</h1>
                        <h5 className="py-4">
                            <i className="wi wi-day-sunny display-1"></i>
                        </h5>
                        <h1 className="py-2">25&deg;</h1>
                        {/* For min max temp display */}
                        {minmaxTemp(24,19)}
                        <h4 className="py-2"> Slow Rain</h4>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
const minmaxTemp=(min,max)=>{
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
}

