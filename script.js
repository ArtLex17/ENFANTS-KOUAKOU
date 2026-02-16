// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // Récupérer toutes les images de la galerie
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    // Ajouter un écouteur de clic sur chaque image
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.style.display = 'block';           // Afficher la lightbox
            lightboxImg.src = this.src;                  // Mettre la source de l'image cliquée
            caption.innerHTML = this.alt;                 // Utiliser le texte alternatif comme légende
        });
    });

    // Fermer la lightbox au clic sur la croix
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Fermer la lightbox en cliquant en dehors de l'image
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});