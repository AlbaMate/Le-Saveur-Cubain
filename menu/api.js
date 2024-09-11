//console.log(hello);
const apiDrinkUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
console.log(apiDrinkUrl.length);
console.log(apiDrinkUrl.split("/"));

fetch(apiDrinkUrl)
  .then((response) => {
    // Vérifie si la réponse de la requête est réussie (statut HTTP 200-299)
    if (!response.ok) {
      throw new Error("Erreur de réseau : " + response.status);
    }
    // Convertir la réponse en JSON et la renvoie
    return response.json();
  })
  .then((data) => {
    // Traitement des données
    console.log(data); // Affiche les données récupérées dans la console
    // Exemple : Accéder aux éléments à l'intérieur de l'objet data et les utiliser
    const drinks = data.drinks; // Supposons que les données contiennent un tableau de boissons
    console.log(drinks); // Affiche les boissons dans la console
    // Maintenant tu peux utiliser drinks pour accéder aux éléments à l'intérieur de ton API
  })
  .catch((error) => {
    // Gestion des erreurs
    console.error("Erreur lors de la récupération des données :", error);
  });

fetch(apiDrinkUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur de réseau : " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    // Récupérer le premier élément du tableau (si le tableau s'appelle "items")
    const premierElement = data.drinks[0];
    console.log(premierElement);
    console.log(data.drinks[0].drinks);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données :", error);
  });
