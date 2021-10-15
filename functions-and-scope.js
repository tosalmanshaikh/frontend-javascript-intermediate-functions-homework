// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

// console.log(grades);
// console.log(grades.length);
// console.log(i);

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.


function cumLaude(result) {

    let count = 0;

    for (let i = 0; i < grades.length; i++) {

        if (grades[i] >= 8)
        {
            count ++;  //* count = count + 1;

        }
    }

    return count;
}

const outcome = cumLaude([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]);
console.log(outcome);


// ---- Verwachte uitkomst: 6



/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.


function cumLaude(grades) {
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8)
        {
            count ++;
        }
    }
    return count;
}

const outcome1 = cumLaude(grades);
const outcome2 = cumLaude([6, 4, 5]);
const outcome3 = cumLaude([8, 9, 4, 6, 10]);

console.log(outcome1, outcome2, outcome3);


// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3



/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.



function findAverage(array){

    let average = 0;

    for (let i = 0; i < array.length; i++) {

        // average = array [i] + average;

        let number = array[i]
        average = average + number //* average += number;
    }

    average = average / array.length
    return average;
}

const outcome4 = findAverage(grades);
console.log(outcome4);

// console.log(findAverage([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]));


// ---- Verwachte uitkomst: 6.642857142857143



/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function averageGrade(array){

    let average = 0;

    for (let i = 0; i < array.length; i++) {

        let currentNum = array[i]
        average = average + currentNum //* average += currentNum;
    }

    average = average / array.length
    return average;

}

const outcome5 = averageGrade(grades);
const outcome6 = averageGrade([6, 4, 5]);
const outcome7 = averageGrade([8, 9, 4, 6, 10]);

console.log(outcome5, outcome6, outcome7);


// console.log(averageGrade(grades));
// console.log(averageGrade([6, 4, 5]));
// console.log(averageGrade([8, 9, 4, 6, 10]));



/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function newAverageGrade(array){

    let average = 0;

    for (let i = 0; i < array.length; i++) {

        let currentNum = array[i]
        average = average + currentNum //* average += currentNum;
    }

    average = average / array.length
    return average.toFixed(2);

}

const outcome8 = newAverageGrade(grades);
const outcome9 = newAverageGrade([6, 4, 5]);
const outcome10 = newAverageGrade([8, 9, 4, 6, 10]);

console.log(outcome8, outcome9, outcome10);



/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan? door loops denk ik
// * Op welke conditie moet ik checken? hoogst behaalde cijfer
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan? if statement
// Log het antwoord in de terminal.

// const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];


function hoogsteCijfer(array) {


    let count = 0;
    for (let i = 0; i < array.length; i++)

        if (grades[i] > count) {
            count = grades [i]

        }

    return count;

}

const result = hoogsteCijfer([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]);
console.log(result);



// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10



function hoogsteCijfer(array) {


    let count = 0;
    for (let i = 0; i < array.length; i++)

        if (grades[i] > count) {
            count = grades [i]

        }

    return count;

}

const result1 = hoogsteCijfer([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]);
const result2 = hoogsteCijfer([6, 4, 5]);
const result3 = hoogsteCijfer([8, 9, 4, 6, 10]);
console.log(result1, result2, result3);


