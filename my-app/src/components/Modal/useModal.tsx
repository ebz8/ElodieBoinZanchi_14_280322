import { useState } from 'react'

export const useModal = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const toggleModal = () => setIsOpened((isOpened) => !isOpened)
  return {
    isOpened,
    toggleModal,
  }
}