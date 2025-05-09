document.addEventListener("DOMContentLoaded", function () {
    const streakCountElement = document.getElementById("streak-count");

    // recup les donnees (sur le local)
    let lastVisit = localStorage.getItem("lastVisit");
    let streak = parseInt(localStorage.getItem("streak")) || 0;

    // recup date (sans heure)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // verif date derniere co
    if (lastVisit) {
        const lastDate = new Date(lastVisit);
        lastDate.setHours(0, 0, 0, 0);

        // incremente le streak
        if (today.getTime() - lastDate.getTime() === 86400000) { 
            streak++;
        }
        // reset le streak
        else if (today.getTime() - lastDate.getTime() > 86400000) { 
            streak = 1;
        }
    } else {
        streak = 1; // jour 1
    }

    // save date co
    localStorage.setItem("lastVisit", today);
    localStorage.setItem("streak", streak);

    streakCountElement.textContent = streak;
});