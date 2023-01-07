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
      
  }
}

modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur);

document.getElementById("submit-button").addEventListener('click', function() {
  alert('Demande de Reservation envoyée!!');
  hideModalWindow();
});


