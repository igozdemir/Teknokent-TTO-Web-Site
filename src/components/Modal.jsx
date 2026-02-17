// Modal.js
import React, { useEffect, useState } from 'react';
import flyer from '../images/afis.jpeg'; // Replace with your image

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // Show modal when component mounts
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-md animate__animated animate__bounceIn">
            <div className="modal-content bg-light">
              <div className="modal-header">
                <h5 className="modal-title">Ar-Ge Projesi Geliştirme ve Yönetimi Eğitimi</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <img src={flyer} alt="Logo" className="img-fluid mb-3" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Kapat</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
