import { useEffect, useRef, FunctionComponent } from 'react';
import './Modal.css'
//export interface ModalProps extends HTMLAttributes<HTMLDialogElement> {


export type ModalWidthType = "xl" | "lg" | "md" | "sm";
export interface ModalProps {
  isOpened?: boolean;
  onClose?: () => void;
  modalTitle?: string;
  modalContent?: string;
  modalWidth?: ModalWidthType;
}
/**
 *
 *  Modal functional component
 */
export const Modal: FunctionComponent<ModalProps> = ({
  isOpened,
  onClose,
  modalTitle,
  modalContent,
  modalWidth
}) => {
  const ref: any = useRef(null);
  // const preventAutoClose = (e: MouseEvent) => e.stopPropagation()

  useEffect(() => {
    isOpened ? ref.current?.showModal() : ref.current?.close();
  }, [isOpened]);

  return(
    <dialog ref={ref} title={modalTitle} className="modal" id="modal">
      <form method="dialog">
        <button
          autoFocus
          className="controls"
          title="close modal"
          value="close"
          onClick={onClose}
        >
          X
        </button>
        <article className="content">
          <p>{modalContent}</p>
        </article>
      </form>
    </dialog>
  );
};