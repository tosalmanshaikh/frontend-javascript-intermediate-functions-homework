// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


//* option 1 - using split and keeping it simple!
function getEmailDomain(emailadres){
    const newEmail = emailadres.split("@");
    return newEmail[1];
}

const result1 = getEmailDomain("a.wiersma@outlook.com");
console.log(result1);


//*option 2 - using loop not my idea but a genius colleague!
function domainName (email){
    let placeAt = 0;
    let domainName = "";
    for (let i = 0; i < email.length; i++){
        if (email[i] === "@"){
            placeAt = i;
        }
    }

    for (let j = 0; j < email.length; j++){
        if (j >= placeAt) {
            domainName = domainName + email[j];
        }
    }

    return domainName;
    // console.log(email.length)

}

const result2 = domainName("t.mellink@novi.nl");
console.log(result2);

//* optional way so you dont have to declare const
// console.log(domainName('t.mellink@novi.nl'))



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

//option 1: we use split here first and than use the index no in the array.
function typeOfEmail(emailadres){
    const newEmail = emailadres.split("@");
    // return newEmail;

    if (newEmail[1] === "novi-education.nl")
    {
        return "student";
    }

    else if (newEmail[1] === "novi.nl")
    {
        return "medewerker";
    }

    else
    {
        return "externe";
    }


}

const finalResult = typeOfEmail("salman@novi.nl")
console.log(finalResult);


//* option 2: we dont use split and we keep it simple!

function typeOfEmail(emailadres){
    if (emailadres.includes("@novi-education.nl"))
    {
        return "Student";
    }

    else if (emailadres.includes("@novi.nl"))
    {
        return "Medewerker";
    }

    else
    {
        return "Extern";
    }


}

const final = typeOfEmail("n.eeken@novi-education.nl")
console.log(final);



/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in


function checkEmailValidity(emailadres){

    if (emailadres.includes("@")
        && emailadres.includes(",") === false && emailadres.charAt(emailadres.length - 1) !== ".")
    {
        return true;
    }

    else

    {
        return false;
    }

}

const outcome = checkEmailValidity("salman@hotmail,com");
console.log(outcome);








