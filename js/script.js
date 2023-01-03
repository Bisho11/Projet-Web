const openModalButton = document.getElementById("open-modal");
const modalWindowOverlay = document.getElementById("modal-overlay");

const showModalWindow = () => {
  modalWindowOverlay.style.display = 'flex';
}

openModalButton.addEventListener("click", showModalWindow);

const closeModalButton = document.getElementById("close-modal");

const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none';
}

closeModalButton.addEventListener("click", hideModalWindow);

const hideModalWindowOnBlur = (e) => {

  if(e.target === e.currentTarget) {
      hideModalWindow();
  }
}

modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur);