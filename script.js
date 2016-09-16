//Pierre, Feuille, Ciseaux
//La pierre casse les ciseaux, la feuille recouvre la pierre, les ciseaux coupent la feuille.

//Créer un tableau pour l'ordinateur
//Demander au user de choisir pierre, feuille ou ciseaux
//Demander à l'ordi de choisir aussi
//Comparer le choix user avec choix ordi
//Le meilleur des deux a gagné

//Recharger la page
function rePlay(){
	location.reload();
};

//Afficher un msg dans la balise #result
document.getElementById("result").textContent = "Fais ton choix";

//Programmer le choix de l'ordi
var computerPossibilities = ["pierre", "feuille", "ciseaux"];
var computerChoice = computerPossibilities[Math.floor(Math.random() * computerPossibilities.length)];

//Prog le choix du user
function userBet(userChoice){
	console.log(userChoice);

	if(userChoice == computerChoice){
		document.getElementById("result").textContent = "Egalité";

	} else if(computerChoice == "pierre" && userChoice == "feuille"){
		document.getElementById("result").textContent = "Bien joué Roger !";

	} else if(computerChoice == "feuille" && userChoice == "ciseaux"){
		document.getElementById("result").textContent = "Bien joué Roger !";
		
	} else if(computerChoice == "ciseaux" && userChoice == "pierre"){
		document.getElementById("result").textContent = "Bien joué Roger !";
		
	} else{
		document.getElementById("result").textContent = "Dans ton cul Lulu !!";
		
	};
};

