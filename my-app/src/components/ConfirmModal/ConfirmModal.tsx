import { Modal } from "@elbaz888/ebz-ui-library"
import "./ConfirmModal.scss"

function ConfirmModal({
  isOpened,
  onClose,
}: {
  isOpened: boolean
  onClose: () => void
}) {
  return (
    <Modal
      isOpened={isOpened}
      onClose={onClose}
      modalContent="Employee Created !"
    />
  )
}

export default ConfirmModal
