import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { confirmable, createConfirmation } from "react-confirm";

const Confirmation = ({
  okLabel = "OK",
  title = "Login Berhasil",
  confirmation,
  show,
  proceed,
  enableEscape = true
}) => {
  return (
    <div className="static-modal">
      <Modal
        animation={false}
        show={show}
        onHide={() => proceed(false)}
        backdrop={enableEscape ? true : "static"}
        keyboard={enableEscape}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{confirmation}</Modal.Body>
        <Modal.Footer>
          <Button
            className="button-l"
            bsStyle="primary"
            onClick={() => proceed(true)}
          >
            {okLabel}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Confirmation.propTypes = {
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func, // called when ok button is clicked.
  enableEscape: PropTypes.bool
};

export function confirm(
  confirmation,
  proceedLabel = "OK",
  cancelLabel = "cancel",
  options = {}
) {
  return createConfirmation(confirmable(Confirmation))({
    confirmation,
    proceedLabel,
    cancelLabel,
    ...options
  });
}

export default Confirmation;