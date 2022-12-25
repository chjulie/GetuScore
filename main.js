// Fonctions:
// - addLine: ajouter une ligne de calcul
// - runCalculation: calculer le total de la ligne de calcul
// - removeLine: effacer une ligne de calcul 
// - runRanking: calculer le classement des scores

function addLine() {
    // Créer un nouveau élement div
    var currentDiv = document.getElementById("btnDiv");

    // Vérifier que la catégorie est valide:
    if (typeof categorie != 'undefined' ) {
        
        // EFFACER LE MESSAGE D'ERREUR
        const errorList = document.querySelectorAll('.errorMsg');
        if (errorList.length != 0) {
            for (const errorMessage of errorList) {
                errorMessage.remove();
            };
        }

        var newDiv = document.createElement("div");

        // remplir le nouveau div
        // !! problème d'index !!
        newDiv.innerHTML = "<input type='text' id='nomGymnaste' name='nomGymnaste' placeholder='Nom'> ";
        newDiv.innerHTML += "<input type='number' id='BF' name='BF' min='0' max='10' step='0.05' placeholder='Reck'> ";
        newDiv.innerHTML += "<input type='number' id='SOL' name='SOL' min='0' max='10' step='0.05' placeholder='Sol'> ";
        newDiv.innerHTML += "<input type='number' id='AB' name='AB' min='0' max='10' step='0.05' placeholder='Anneaux'> ";
    
        // Ajouter des engins différents en fonction de la catégorie
        if (categorie == "G16") {
            //console.log('Catégorie garçons C1-C6');
            newDiv.innerHTML += "<input type='number' id='ST1' name='ST1' min='0' max='10' step='0.05' placeholder='Saut'> ";
            newDiv.innerHTML += "<input type='number' id='BP' name='BP' min='0' max='10' step='0.05' placeholder='Barres parallèles'> ";
            newDiv.innerHTML += "<output id='total' name='total' for='BF SOL AB ST1 BP'> </output>";
            newDiv.innerHTML += "<button id='removeButton' onclick='removeLine()'>x</button>";
            newDiv.className = 'gymnasteG16';
        } else if (categorie == "G7") {
            //console.log('Catégorie garçons C7');
            newDiv.innerHTML += "<input type='number' id='ST1' name='ST1' min='0' max='10' step='0.05' placeholder='Saut 1'> ";
            newDiv.innerHTML += "<input type='number' id='ST2' name='ST2' min='0' max='10' step='0.05' placeholder='Saut 2'> ";
            newDiv.innerHTML += "<input type='number' id='BP' name='BP' min='0' max='10' step='0.05' placeholder='Barres parallèles'> ";
            newDiv.innerHTML += "<output id='total' name='total' for='BF SOL AB ST1 ST2 BP'> </output>";
            newDiv.innerHTML += "<button id='removeButton' onclick='removeLine()'>x</button>";
            newDiv.className = 'gymnasteG7';
        } else if (categorie == "F7") {
            //console.log('Catégorie filles C7');
            newDiv.innerHTML += "<input type='number' id='ST1' name='ST1' min='0' max='10' step='0.05' placeholder='Saut 1'> ";
            newDiv.innerHTML += "<input type='number' id='ST2' name='ST2' min='0' max='10' step='0.05' placeholder='Saut 2'> ";
            newDiv.innerHTML += "<output id='total' name='total' for='BF SOL AB ST1 ST2'> </output>";
            newDiv.innerHTML += "<button id='removeButton' onclick='removeLine()'>x</button>";
            newDiv.className = 'gymnasteF7';
        } else if (categorie == "F16") {
            console.log("Catégorie filles C1-C6");
            newDiv.innerHTML += "<input type='number' id='ST1' name='ST1' min='0' max='10' step='0.05' placeholder='Saut'> ";
            newDiv.innerHTML += "<output id='total' name='total' for='BF SOL AB ST1'> </output>";
            newDiv.innerHTML += "<button id='removeButton' onclick='removeLine()'>x</button>";
            newDiv.className = 'gymnasteF16';
        }
    } else {
        var newDiv = document.createElement('div');
        newDiv.className = 'errorMsg';
        newDiv.innerText = "Choisissez d'abord une catégorie!";
    }

    // Ajouter le div au body html
    currentDiv.parentNode.insertBefore(newDiv, currentDiv);
};



function runCalculation() {
    // Itérer sur chaque catégorie pour faire le calcul (en utilisant la classe)
    var catList = ['gymnasteF16', 'gymnasteF7', 'gymnasteG16', 'gymnasteG7'];

    for (catName of catList) {
        const gymnaste = document.querySelectorAll('.' + catName);
    
        // Iterating over all the things in one line (ex: 1 element = 1 input box)
        for (const scoreLine of gymnaste) {
            const element = scoreLine.children;
    
            // Accéder à la valeur de la note à chaque engin et la transformer en Number
            var BF = Number(element[1].value);
            var SOL = Number(element[2].value);
            var AB = Number(element[3].value);
            var ST1 = Number(element[4].value);
            
            // Effectuer le calcul en fonction de la catégorie et le display à l'écran
            if (categorie == "F16") {
                let result = BF + SOL + AB + ST1;
                var outputValue = element[5];
                outputValue.value = result;
    
            } else if (categorie == "F7") {
                var ST2 = Number(element[5].value);
                let result = BF + SOL + AB + 0.5 * (ST1 + ST2);
                var outputValue = element[6];
                outputValue.value = result;
    
            } else if (categorie == "G16") {
                var BP = Number(element[5].value);
                let result = BF + SOL + AB + ST1 + BP;
                var outputValue = element[6];
                outputValue.value = result;
    
            } else if (categorie == "G7") {
                var ST2 = Number(element[5].value);
                var BP = Number(element[6].value);
                let result = BF + SOL + AB + 0.5 * (ST1 + ST2) + BP;
                var outputValue = element[7];
                outputValue.value = result;
            };
        };
    };
};


//Créer des boutons pour les catégories + relier chacun à une fonction
// - retourner la catégorie pour ajouter des nlles lignes de calcul!!!
// - changer la couleur du boutons sélectionné

function catF16() {
    // déclaration d'une variable globale pour la catégorie (réutilisée dans les fonctions addLine() et runCalculation())
    window.categorie = "F16";

    // Effacer le message d'erreur si il y en a un
    const errorList = document.querySelectorAll('.errorMsg');
    if (errorList.length != 0) {
        for (const errorMessage of errorList) {
            errorMessage.remove();
        };
    }
    
    // Ajout des titres de chaque engin
    var newDiv = document.createElement("div");
    newDiv.className = 'nomEngins';
    const currentDiv = document.getElementById("btnDiv");

    newDiv.innerHTML = "<p class='titreEngins' id='titreEngins_gymnasteF16'>Nom Reck Sol Anneaux Saut Total</p>";

    currentDiv.parentNode.insertBefore(newDiv, currentDiv);

    // Ajout de la première ligne de calcul
    var newDiv2 = document.createElement("div");
    newDiv2.className = 'gymnasteF16';

    newDiv2.innerHTML = "<input type='text' id='nomGymnaste' name='nomGymnaste' placeholder='Nom'> ";
    newDiv2.innerHTML += "<input type='number' id='BF' name='BF' min='0' max='10' step='0.05' placeholder='Reck'> ";
    newDiv2.innerHTML += "<input type='number' id='SOL' name='SOL' min='0' max='10' step='0.05' placeholder='Sol'> ";
    newDiv2.innerHTML += "<input type='number' id='AB' name='AB' min='0' max='10' step='0.05' placeholder='Anneaux'> ";
    newDiv2.innerHTML += "<input type='number' id='ST1' name='ST1' min='0' max='10' step='0.05' placeholder='Saut'> ";
    newDiv2.innerHTML += "<output id='total' name='total' for='BF SOL AB ST1 ST2'> </output>";
    newDiv2.innerHTML += "<button id='removeButton' onclick='removeLine()'>x</button>";

    currentDiv.parentNode.insertBefore(newDiv2, currentDiv);
};

function catF7() {
    window.categorie = "F7";

    const errorList = document.querySelectorAll('.errorMsg');
    if (errorList.length != 0) {
        for (const errorMessage of errorList) {
            errorMessage.remove();
        };
    }

    var newDiv = document.createElement("div");
    newDiv.className = 'nomEngins';
    const currentDiv = document.getElementById("btnDiv");

    newDiv.innerHTML = "<p class='titreEngins' id='titreEngins_gymnasteF7'>Nom Reck Sol Anneaux Saut_1 Saut_2 Total</p>";

    currentDiv.parentNode.insertBefore(newDiv, currentDiv);

    var newDiv2 = document.createElement("div");
    newDiv2.className = 'gymnasteF7';

    newDiv2.innerHTML = "<input type='text' id='nomGymnaste' name='nomGymnaste' placeholder='Nom'> ";
    newDiv2.innerHTML += "<input type='number' id='BF' name='BF' min='0' max='10' step='0.05' placeholder='Reck'> ";
    newDiv2.innerHTML += "<input type='number' id='SOL' name='SOL' min='0' max='10' step='0.05' placeholder='Sol'> ";
    newDiv2.innerHTML += "<input type='number' id='AB' name='AB' min='0' max='10' step='0.05' placeholder='Anneaux'> ";
    newDiv2.innerHTML += "<input type='number' id='ST1' name='ST1' min='0' max='10' step='0.05' placeholder='Saut 1'> ";
    newDiv2.innerHTML += "<input type='number' id='ST2' name='ST2' min='0' max='10' step='0.05' placeholder='Saut 2'> ";
    newDiv2.innerHTML += "<output id='total' name='total' for='BF SOL AB ST1 ST2'> </output>";
    newDiv2.innerHTML += "<button id='removeButton' onclick='removeLine()'>x</button>";

    currentDiv.parentNode.insertBefore(newDiv2, currentDiv);
};

function catG16() {
    window.categorie = "G16";

    const errorList = document.querySelectorAll('.errorMsg');
    if (errorList.length != 0) {
        for (const errorMessage of errorList) {
            errorMessage.remove();
        };
    }

    var newDiv = document.createElement("div");
    newDiv.className = 'nomEngins';
    const currentDiv = document.getElementById("btnDiv");

    newDiv.innerHTML = "<p class='titreEngins' id='titreEngins_gymnasteG16'>Nom Reck Sol Anneaux Saut_1 Barres_parallèles Total</p>";

    currentDiv.parentNode.insertBefore(newDiv, currentDiv);

    var newDiv2 = document.createElement("div");
    newDiv2.className = 'gymnasteG16';

    newDiv2.innerHTML = "<input type='text' id='nomGymnaste' name='nomGymnaste' placeholder='Nom'> ";
    newDiv2.innerHTML += "<input type='number' id='BF' name='BF' min='0' max='10' step='0.05' placeholder='Reck'> ";
    newDiv2.innerHTML += "<input type='number' id='SOL' name='SOL' min='0' max='10' step='0.05' placeholder='Sol'>";
    newDiv2.innerHTML += "<input type='number' id='AB' name='AB' min='0' max='10' step='0.05' placeholder='Anneaux'> ";
    newDiv2.innerHTML += "<input type='number' id='ST1' name='ST1' min='0' max='10' step='0.05' placeholder='Saut'> ";
    newDiv2.innerHTML += "<input type='number' id='BP' name='BP' min='0' max='10' step='0.05' placeholder='Barres parallèles'> ";
    newDiv2.innerHTML += "<output id='total' name='total' for='BF SOL AB ST1 BP'> </output>";
    newDiv2.innerHTML += "<button id='removeButton' onclick='removeLine()'>x</button>";

    currentDiv.parentNode.insertBefore(newDiv2, currentDiv);
};

function catG7() {
    window.categorie = "G7";

    const errorList = document.querySelectorAll('.errorMsg');
    if (errorList.length != 0) {
        for (const errorMessage of errorList) {
            errorMessage.remove();
        };
    }

    var newDiv = document.createElement("div");
    newDiv.className = 'nomEngins';
    const currentDiv = document.getElementById("btnDiv");

    newDiv.innerHTML = "<p class='titreEngins' id='titreEngins_gymnasteG7'>Nom Reck Sol Anneaux Saut_1 Saut_2 Barres_parallèles Total</p>";

    currentDiv.parentNode.insertBefore(newDiv, currentDiv);

    var newDiv2 = document.createElement("div");
    newDiv2.className = 'gymnasteG7';

    newDiv2.innerHTML = "<input type='text' id='nomGymnaste' name='nomGymnaste' placeholder='Nom'> ";
    newDiv2.innerHTML += "<input type='number' id='BF' name='BF' min='0' max='10' step='0.05' placeholder='Reck'> ";
    newDiv2.innerHTML += "<input type='number' id='SOL' name='SOL' min='0' max='10' step='0.05' placeholder='Sol'> ";
    newDiv2.innerHTML += "<input type='number' id='AB' name='AB' min='0' max='10' step='0.05' placeholder='Anneaux'> ";
    newDiv2.innerHTML += "<input type='number' id='ST1' name='ST1' min='0' max='10' step='0.05' placeholder='Saut 1'> ";
    newDiv2.innerHTML += "<input type='number' id='ST2' name='ST2' min='0' max='10' step='0.05' placeholder='Saut 2'> ";
    newDiv2.innerHTML += "<input type='number' id='BP' name='BP' min='0' max='10' step='0.05' placeholder='Barres parallèles'> ";
    newDiv2.innerHTML += "<output id='total' name='total' for='BF SOL AB ST1 ST2 BP'> </output>";
    newDiv2.innerHTML += "<button id='removeButton' onclick='removeLine()'>x</button>";

    currentDiv.parentNode.insertBefore(newDiv2, currentDiv);

};

// Créer la fonction pour effacer une ligne de calcul
function removeLine() {
    const child = document.getElementById('removeButton');
    child.parentElement.remove();
    const className = child.parentElement.className;
    console.log('.'+className);

    // Effacer le nom des engins s'il n'y a plus de lignes de calcul pour la catégorie considérée

    // Vérifier s'il y a encore des lignes de calcul   
    const lignes = document.querySelectorAll('.'+className);

        if (lignes.length == 0) {
            const titre = document.getElementById('titreEngins_'+className);    // Sélectionner les titres
            // console.log(titre);
            titre.remove(); // Effacer les titres
        }  
        
};

// Créer une fonction pour calculer le classement
// 1. créer et remplir un dictionnaire key:value = name:total
// 2. classer le dictionnaire dans l'ordre des scores => gestion des égalités?
// 3. écrire les résultats sur le site

// calcul des score avant obligatoire? renvoyer à la fctn
function runRanking() {
    // Effacer le classement s'il y en a deja un
    const classement = document.querySelectorAll('.rankingOutputDiv');

    if (classement.length != 0) {
        for (const classem of classement) {
            classem.remove();
        };

    }
    // Itérer sur chaque catégorie pour faire le calcul (en utilisant la classe)
    var catList = ['gymnasteF16', 'gymnasteF7', 'gymnasteG16', 'gymnasteG7'];

    for (catName of catList) {

        // Pour chaque catégorie: créer un dictionnaire nom:total (en utilisant le bon index pour retrouver le total)
        var dict = new Object();
        const scores = document.querySelectorAll('.' + catName);

        for (scoreLine of scores) {
            element = scoreLine.children;

            if (catName == 'gymnasteF16') {
                dict[element[0].value] = Number(element[5].value); 
            } else if (catName == 'gymnasteF7' || 'gymnasteG16') {
                dict[element[0].value] = Number(element[6].value);
            } else {
                dict[element[0].value] = Number(element[7].value);
            }     
        }

        // Trier le dictionnaire selon le total
        // Object.entries se réfère à chaque paire key-value
        // !! Attention à la gestion des égalités !!

        let sorted = Object.entries(dict).sort((a, b) => b[1]-a[1]);

        // Ecrire les résultats sur le site en créant un nouvel élément div

        var newDiv = document.createElement("div");
        newDiv.className = 'rankingOutputDiv';
        const currentDiv = document.getElementById('rankingBtnDiv');

        for (let i = 0; i < sorted.length; i++) {
            console.log(sorted[i]);
            let rang = i + 1;
            newDiv.innerHTML += rang + '.  ' + sorted[i][0] + '   ' + sorted[i][1] + '<br>';
        }

        // Ajouter une ligne divider entre chaque catégorie et ajouter le div à la page
        newDiv.innerHTML += "<hr>";
        currentDiv.parentNode.insertBefore(newDiv, currentDiv);
    };
};

