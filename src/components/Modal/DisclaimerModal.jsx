
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisclaimerModal = ({ onAccept }) => {
  console.log("hi there");
  return (
    <Modal show={true} backdrop="static" keyboard={false} centered>
      <Modal.Header>
        <Modal.Title>Disclaimer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ul>
  <li>There has been <strong>no solicitation, advertisement, or personal communication</strong> from Dinesh Bishnoi or his associates.</li>
  <li>The user is accessing this website <strong>voluntarily for informational purposes</strong> only.</li>
  <li>Accessing this site does <strong>not create any lawyer-client relationship</strong>.</li>
  <li>Content is a general resource and <strong>not legal advice or a substitute for legal advice</strong>.</li>
  <li>Dinesh Bishnoi <strong>disclaims all liability</strong> for actions taken based on this website’s content.</li>
  <li>All materials (except legal texts or judgments) are the <strong>intellectual property</strong> of Dinesh Bishnoi and may not be reused without written consent.</li>
</ul>

      </Modal.Body>
      <Modal.Footer>
      <Button style={{ backgroundColor: 'black', borderColor: 'black' }} onClick={onAccept}>
  I Agree
</Button>

      </Modal.Footer>
    </Modal>
  );
};

export default DisclaimerModal;
