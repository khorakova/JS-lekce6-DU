/** Bez použití knihovny dayjs napište funkci parseDate, která na vstupu obdrží řetězec obsahující 
 datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:
 */

 const parseData = (datumVstup) => {
    let datum = {
        day: datumVstup.slice(0,2),
        month: datumVstup.slice(3,5),
        year: datumVstup.slice(6,10)
    }
    return datum
 }

console.log(parseData('12.03.2015')); 

/**
 Bez použití knihovny dayjs napište funkci formatDate, která na vstupu obdrží objekt představující 
 datum v následujícím formátu. { day: 12, month: 3, year: 2015 }
Funkce vrátí řetězec představující datum ve formátu DD.MM.YYYY. Příklad použití.

> formatDate({ day: 6, month: 4, year: 2021 })
"06.04.2021"
V tomto cvičení se vám jistě bude hodit metoda padStart. Zkuste také uvnitř těla funkce použít destrukturování.
 */

 const formatDate = (date) => {
    const day = date.day.toString().padStart(2, 0);
    const month = date.month.toString().padStart(2, 0);
    const year = date.year;
    
    const newDate = `${day}.${month}.${year}`

    console.log(newDate)
}

formatDate ({ day: 6, month: 4, year: 2021 });

// destrukturovani
const formatDate2 = (date) => {
    let { day, month, year } = date

    day = day.toString().padStart(2, 0);
    month = month.toString().padStart(2, 0);
  
    const newDate = `${day}.${month}.${year}`

    console.log(newDate)
}

formatDate2 ({ day: 6, month: 4, year: 2021 });

/** Napište funkci jménem round, která bude zaokrouhlovat čísla na celé jednotky podle následujících pravidel.

Pokud je desetinná část menší než 0.5, zaokrouhlujeme dolů.
Pokud je desetinná část větší než 0.5, zaokrouhlujeme nahoru.
Pokud je desetinná část přesně rovna 0.5, zaokrouhlujeme k sudému číslu. Tedy například 3.5 se zaokrouhlí na 4,
naopak 2.5 se zaokrouhlí na 2.
V tomto cvičení se vám může hodit funkce Math.trunc, která umí odříznout desetinnou část čísla. */

const round = (number) => {
    let decimalPart = number - Math.trunc(number);
    let wholeNumber = Math.trunc(number)

    if (decimalPart < 0.5) {
        roundNumber = Math.floor(number);
    } else if (decimalPart > 0.5) {
        roundNumber = Math.ceil(number)
    } else {
        if (wholeNumber % 2 === 0) {
            roundNumber = Math.floor(number);
        } else {
            roundNumber = Math.ceil(number)
        }
    }
    return roundNumber
}

// i pro zaporna cisla
const round2 = (number) => {
    if (number < 0) {
        return  -1 * round(number * -1);
    } else {
        return round(number)
    }
}

console.log(round2(5.7));
console.log(round2(-345.4));
