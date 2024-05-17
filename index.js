
// Fonction pour générer un identifiant unique
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

document.getElementById("ajoutLivre").addEventListener("click", function() {
    document.getElementById("bookForm").style.display = "block";
    tr.setAttribute('data-book-id', bookId); // Ajouter l'identifiant unique comme attribut de données

});

document.getElementById("envoyer").addEventListener("click", ajouterLivre);

function ajouterLivre() {
    // Récupérer les valeurs saisies par l'utilisateur
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    // Vérifier si les champs ne sont pas vides
    if (title === "" || author === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Afficher le tableau si c'est la première entrée
    const table = document.getElementById('outputTable');
    table.style.display = "table";

    // Créer un nouvel identifiant unique pour le livre
    const bookId = generateId();

    // Créer un nouvel élément de ligne pour afficher le livre
    const tr = document.createElement('tr');
    tr.setAttribute('data-book-id', bookId); // Ajouter l'identifiant unique comme attribut de données

    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdActions = document.createElement('td');

    tdTitle.innerHTML = `<span class="titre">${title}</span>`;
    tdAuthor.textContent = author;
    tdActions.innerHTML = `
        <button class="lire">Lire</button>
        <button class="marquer">ID du livre</button> <!-- Afficher l'identifiant unique -->
        <button class="supprimer">Supprimer</button>
    `;

    // Ajouter les événements aux boutons
    tdActions.querySelector('.lire').addEventListener('click', function() {
        tdTitle.querySelector('.titre').style.textDecoration = 'line-through';
    });

    tdActions.querySelector('.marquer').addEventListener('click', function() {
        // Utilisez bookId pour effectuer des actions avec l'identifiant unique du livre
        alert(`ID du livre: ${bookId}`);
    });

    tdActions.querySelector('.supprimer').addEventListener('click', function() {
        const parentRow = this.parentNode.parentNode; // Trouver la ligne parente
        parentRow.remove();
        
        // Vérifier s'il n'y a plus de livres dans le tableau
        const table = document.getElementById('outputTable');
        if (document.getElementById('output').children.length === 0) {
            // Masquer le tableau si aucun livre n'est présent
            table.style.display = "block";
        }
    });
    
    
    
    
    // Ajouter les cellules à la ligne
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdActions);

    // Ajouter l'élément de ligne à la sortie
    document.getElementById('outputTable').appendChild(tr);

    // Réinitialiser le formulaire
    document.getElementById('bookForm').reset();
    document.getElementById('bookForm').style.display = "none";
}



