import { Modal } from "@elbaz888/ebz-ui-library"


function ConfirmModal({ isOpened, onClose }) {
  return (
    <Modal isOpened={isOpened} onClose={onClose} modalContent="Employee Created !" />
  )
}

export default ConfirmModal
