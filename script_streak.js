document.addEventListener("DOMContentLoaded", function () {
    const streakCountElement = document.getElementById("streak-count");

    // Récupérer les données du streak depuis localStorage
    let lastVisit = localStorage.getItem("lastVisit");
    let streak = parseInt(localStorage.getItem("streak")) || 0;

    // Obtenir la date actuelle (sans l'heure)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Vérifier si une date précédente existe
    if (lastVisit) {
        const lastDate = new Date(lastVisit);
        lastDate.setHours(0, 0, 0, 0);

        // Si l'utilisateur s'est connecté **hier**, incrémente le streak
        if (today.getTime() - lastDate.getTime() === 86400000) { 
            streak++;
        }
        // Si l'utilisateur s'est connecté après plus d'un jour, reset le streak
        else if (today.getTime() - lastDate.getTime() > 86400000) { 
            streak = 1;
        }
    } else {
        streak = 1; // Premier jour de connexion
    }

    // Sauvegarder la nouvelle date et le streak
    localStorage.setItem("lastVisit", today);
    localStorage.setItem("streak", streak);

    // Afficher le streak
    streakCountElement.textContent = streak;
});