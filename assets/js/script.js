const imageModal = document.getElementById('imageModal');

if (imageModal) {
    imageModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        const button = event.relatedTarget;
        // Extract info from data-bs-img attribute
        const imageSrc = button.getAttribute('data-bs-img');
        // Update the modal's image source
        const modalImage = imageModal.querySelector('#modalImage');

        if (modalImage) {
            modalImage.src = imageSrc;
        }
    });
}