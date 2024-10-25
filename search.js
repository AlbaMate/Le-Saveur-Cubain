
    
document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Empêche le formulaire de se soumettre de manière classique
console.log(event.target)})
//     const formData = new FormData(event.target); //récupérer les valeurs du formulaire
//     const query = new URLSearchParams(formData).toString(); //pour créer une chaîne de requête.

//     try {
//         const response = await fetch(`http://localhost:6500/search?${query}`);
//         const data = await response.json();
//         console.log(data)
//         const resultsDiv = document.getElementById('results');
//         resultsDiv.innerHTML = ''; // Vide les anciens résultats

//         if (data.length === 0) {
//             resultsDiv.innerHTML = 'Aucun cocktail trouvé.';
//             return;
//         }

//         data.forEach(cocktail => {
//             const cocktailDiv = document.createElement('div'); // crée un élément div pour chaque cocktail trouvé et affiche les informations
//             cocktailDiv.innerHTML = `
//                 <h3>${cocktail.name}</h3>
//                 <p>${cocktail.description}</p>
//                 <p><strong>Ingrédients:</strong> ${cocktail.ingredients.join(', ')}</p>
//                 <p><strong>Image:</strong> <img src="${cocktail.image}" alt="${cocktail.name}" /></p>
//             `;
//             resultsDiv.appendChild(cocktailDiv);
//         });
//     } catch (error) {
//         console.error('Erreur lors de la recherche:', error);
//     }
// });


