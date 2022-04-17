import "./ConfirmModal.scss"

import { Modal } from "@elbaz888/ebz-ui-library"


function ConfirmModal({ isOpened, toggle }) {
  return (
    <Modal isOpened={isOpened} onClose={toggle} modalContent="Employee Created !" />
  )
}

export default ConfirmModal
