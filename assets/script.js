const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* j'affecte mes constantes */

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const nbrImgSlide = slides.length;
const img = document.querySelector(".banner-img");
const texte = document.querySelector("#banner p");
const containerBulletPoint = document.querySelector(".dots");



/* Initialisation du compteur : enregistre la valeur de l'index de l'image */
let counter = 0;


/* Création dynamiquement des puces (bullets points) */
for(let i = 0; i < slides.length; i++) { /* va pacourir les images du tableau */
	const bulletPoint = document.createElement('div');  /* création d'une div pour chaque image */
	bulletPoint.classList.add("dot"); /* j'ajoute la class "dot" aux div crées pour leur ajouter du style  */
	containerBulletPoint.appendChild(bulletPoint); /* regroupages des puces crées dans un conteneur parent déjà présent le fichier HTML */
}

/* je crée une nouvelle variable qui récupère toutes les puces*/
let bulletsPoints = document.querySelectorAll(".dot");

/* je rajoute la classe "dot_selected" à la puce active  */
bulletsPoints[0].classList.add("dot_selected");


arrow_right.addEventListener("click", () => {

	/* j'incremente mon compteur de 1 en 1  */
	counter++;

	/* condition qui me permet de revenir à la 1ère image lorsque j'arrive à la dernière */
	if(counter === nbrImgSlide){

		/* je supprime la classe "dot_selected" à la puce  correspondante à l'image qui est passée */
		bulletsPoints[nbrImgSlide-1].classList.remove("dot_selected");
		counter = 0; /* permet de revenir à la 1ere image */
	}

	/* Je récupère le nom de l'image dans le tableau que j'associe à son chemin  */
	img.src = "./assets/images/slideshow/" + slides[counter].image;

	/* Je récupère le texte de l'image  */
	texte.innerHTML = slides[counter].tagLine;

	/* cette condition me permet d'enlever la classe "dot_selected" au point précédent */
	if(counter != 0 ){
		bulletsPoints[counter-1].classList.remove("dot_selected");
	}

	/* j'ajoute la classe "dot_selected" à l'image en cours de visionnage */
	bulletsPoints[counter].classList.add("dot_selected");
	
});


arrow_left.addEventListener("click", () => {

	/* incrémentation du compteur de -1 en -1 */
	counter--;

	/* condition qui me permet de passser de la 1ère image à la dernière  */
	if(counter < 0){ 

		/* On supprime la classe "dot_selected" sur la puce de l'image précédente, ici elle correspond à l'image suivante si on naviguait en avant */
		bulletsPoints[counter+1].classList.remove("dot_selected"); /* apparaitre / disparaitre  */
		
		counter = nbrImgSlide - 1; /* Permet de revenir à la dernière image du tableau */
	}
	
	/* Je vais chercher le chemin des images que j'associe au compteur d'image du tableau */	
	img.src = "./assets/images/slideshow/" + slides[counter].image;

	/* J'ajoute le texte de chaque image du tableau */
	texte.innerHTML = slides[counter].tagLine;

	/* cette condition me permet d'enlever la classe "dot_selected" à chaque incrémentation */
	if(counter != nbrImgSlide - 1){

		bulletsPoints[counter+1].classList.remove("dot_selected");	
	}
	
	/* j'ajoute la classe "dot_selected" à l'image en cours de visionnage */
	bulletsPoints[counter].classList.add("dot_selected");

});




	 



