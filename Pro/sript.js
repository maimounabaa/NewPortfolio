 // Fonction pour changer l'image
 function changerImage(action) {
    const image = document.getElementById('image');
  
    if (action === 'survol') {
        // Changer l'image lors du survol du lien
        image.src = 'image2.png'; // Remplacez 'image2.png' par le chemin de votre nouvelle image
    } else if (action === 'quitter') {
        // Revenir à l'image d'origine lorsque la souris quitte le lien
        image.src = 'image1.png'; // Remplacez 'image1.png' par le chemin de votre image d'origine
    }
  }
  
  // Ajouter des gestionnaires d'événements pour le survol et la sortie du lien
  const lien = document.getElementById('lien');
  
  lien.addEventListener('mouseenter', function () {
    changerImage('survol');
  });
  
  lien.addEventListener('mouseleave', function () {
    changerImage('quitter');
  });