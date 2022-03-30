import React from "react";
import membres from "./membres";


//Réorganisation du tableau contenant les membres pour les avoir dans l'odre alphabétique
const compareLastName = (a,b) => {
    if ( a.nom.toLowerCase() < b.nom.toLowerCase()){
      return -1;
    }
    if ( a.nom.toLowerCase() > b.nom.toLowerCase()){
      return 1;
    }
    return 0;
}
membres.sort(compareLastName)

// Réorganisation du tableau pour avoir le formateur en première position (Gorski)
const formateurFirst = () =>{
    let index = membres.findIndex(e => e.nom === "Gorski");
    let formateurInfo = membres[index];
    membres.splice(index, 1);
    membres.unshift(formateurInfo);
    
}
formateurFirst();

// Création de la div vignette
const MiniCard = ({photo, prenom, nom}) => {
        return (
            <div className="background">
            <div className="accueil-photo image-profil">
                <img src={photo} className="photo-profil" alt={`photo of ${prenom} ${nom}`}/>
            </div>
            </div>
        )
};

// Création de la grille complète
const MainGrid = () => {
return(
    <div className="image">
            {membres.map((person, id)=> (<MiniCard key={id} {...person} />))}
    </div>    
);
}

export default MainGrid;