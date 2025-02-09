document.addEventListener("DOMContentLoaded", function () {
    const coursContainer = document.getElementById("cours-container");

    // Charger les ressources depuis le fichier JSON
    fetch("ressources.json")
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(coursName => {
                const coursData = data[coursName];

                // 📌 Création du conteneur du cours
                const coursDiv = document.createElement("div");
                coursDiv.classList.add("cours-container");

                // 📌 Ajout du titre du cours
                const coursTitle = document.createElement("div");
                coursTitle.classList.add("cours-title");
                coursTitle.textContent = `${coursName} ⌄`;

                // 📌 Création du menu déroulant
                const dropdownContent = document.createElement("div");
                dropdownContent.classList.add("dropdown-content");

                // 📌 Lien vers le notebook
                const notebookLink = document.createElement("a");
                notebookLink.href = coursData.notebook;
                notebookLink.textContent = "📖 Ouvrir le notebook";
                notebookLink.target = "_blank";
                dropdownContent.appendChild(notebookLink);

                // 📌 Ajout du titre "Ressources"
                const ressourcesTitle = document.createElement("div");
                ressourcesTitle.classList.add("dropdown-title");
                ressourcesTitle.textContent = "Ressources :";
                dropdownContent.appendChild(ressourcesTitle);

                // 📌 Ajout des ressources
                coursData.ressources.forEach(ressource => {
                    const ressourceLink = document.createElement("a");
                    ressourceLink.href = ressource.url;
                    ressourceLink.textContent = ressource.text;
                    ressourceLink.target = "_blank";
                    dropdownContent.appendChild(ressourceLink);
                });

                // 📌 Ajouter les éléments au conteneur du cours
                coursDiv.appendChild(coursTitle);
                coursDiv.appendChild(dropdownContent);
                coursContainer.appendChild(coursDiv);
            });
        })
        .catch(error => console.error("❌ Erreur lors du chargement des ressources :", error));
});