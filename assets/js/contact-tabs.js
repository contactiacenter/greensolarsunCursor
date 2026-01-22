// Gestion des onglets de formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.contact-tab-btn');
    const formContainers = document.querySelectorAll('.contact-form-container');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetForm = this.getAttribute('data-form');
            
            // Retirer la classe active de tous les boutons et formulaires
            tabButtons.forEach(btn => btn.classList.remove('active'));
            formContainers.forEach(form => form.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué et au formulaire correspondant
            this.classList.add('active');
            const targetFormElement = document.getElementById(targetForm);
            if (targetFormElement) {
                targetFormElement.classList.add('active');
            }
        });
    });
    
    // Activer le premier onglet par défaut
    if (tabButtons.length > 0 && formContainers.length > 0) {
        tabButtons[0].classList.add('active');
        formContainers[0].classList.add('active');
    }
});


