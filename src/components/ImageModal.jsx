import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ImageModal({ imageUrl, thumbnailUrl, alt }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <img
                src={thumbnailUrl}
                className='w-100'
                alt={alt}
                onClick={handleShow}
                style={{ cursor: 'pointer' }}
            />

            <Modal show={showModal} onHide={handleClose} className='p-0 align-items-center d-flex'>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Image Preview</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <img src={imageUrl} alt={alt} style={{ width: '100%' }} />
                </Modal.Body>
            </Modal>
        </>
    );
};