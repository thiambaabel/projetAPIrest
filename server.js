const express = require('express'); 
const app = express();
const port = 3000;

// Tableau des produits
let produits = [
    { id: 1, nom: 'tee-shirt', prix: 10.0 },
    { id: 2, nom: 'pull', prix: 20.0 },
    { id: 3, nom: 'shoes', prix: 30.0 }
];

// Middleware pour parser le JSON
app.use(express.json());

// ----- GET : récupérer tous les produits -----
app.get('/api/produits', (req, res) => {
    res.json(produits);
});

// ----- POST : ajouter un produit -----
app.post('/api/produits', (req, res) => {
    const { nom, prix } = req.body;

    if (!nom) {
        return res.status(400).json({ error:'Le champ nom est obligatoire' });
    }

    const nouveauProduit = {
        id: produits.length + 1,
        nom,
        prix: prix || 0
    };

    produits.push(nouveauProduit);
    res.status(201).json(nouveauProduit);
});


// ----- PUT : mettre à jour un produit -----
app.put('/api/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nom, prix } = req.body;

    // On cherche le produit
    const produit = produits.find(p => p.id === id);

    if (!produit) {
        return res.status(404).json({ error: "Produit non trouvé" });
    }

    // Mise à jour des champs
    if (nom) produit.nom = nom;
    if (prix) produit.prix = prix;

    res.json({ message: "Produit mis à jour", produit });
});


// ----- DELETE : supprimer un produit -----
app.delete('/api/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = produits.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Produit non trouvé" });
    }

    // On supprime le produit du tableau
    produits.splice(index, 1);

    res.json({ message: "Produit supprimé" });
});


// ----- Démarrage du serveur -----
app.listen(port, () => {
    console.log(`Serveur a démarré sur le port ${port}`);
});
