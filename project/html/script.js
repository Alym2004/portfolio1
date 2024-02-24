function showPhoto(photoSrc) {
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
  
    modalImage.src = photoSrc;
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'none';
  }
  