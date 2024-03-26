import { handleToggle, toggleState } from "@/store/slice";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Modal: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dialog = useRef<HTMLDialogElement>(null)
  const toggle = useSelector(toggleState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleTog = () => {
    dispatch(handleToggle())
  }

  useEffect(() => {
    // Using useEffect to sync the Modal component with the DOM Dialog API
    // This code will open the native <dialog> via it's built-in API whenever the <Modal> component is rendered
    const modal = dialog.current

    console.log(toggle);

    if (modal && toggle) {
      modal.showModal()
    }

    if (modal && !toggle) {
      navigate('..')
    }
  }, [navigate, toggle])

  return createPortal(
    <dialog className="modal" ref={dialog} onClick={handleTog}>
      {children}
    </dialog>,
    document.getElementById('modal') as HTMLElement
  )
}


export default Modal