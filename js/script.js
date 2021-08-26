let mijnAfstand = 1;
// slider

var inputElement = document.getElementById('customRangeInput');

inputElement.oninput = setInput;
inputElement.onchange = setInput;   // IE fix
veranderenAfstand()
function setInput(){
    inputElement.value = closestValue(inputElement.value);
}

var validValues = [0,25,100,200,275,365,535,750,900,1010];
function closestValue(input)
{
    var differences = [];
    for (var i = 0; i < validValues.length; i++)
        differences.push( Math.abs(validValues[i] - input));

    var index = indexOfSmallest(differences);

    // slider verplaatsen afstand veranderen
      mijnAfstand = index + 1;
      console.log(mijnAfstand);
      veranderenAfstand();

    return validValues[index];

}

function indexOfSmallest(inputArray) {
    var lowest = 0;
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] < inputArray[lowest]) lowest = i;

    }
    return lowest;
}

function veranderenAfstand(){
// pie charts


let offsetVariabele = 0;
let offsetVariabeleTwee = 0;
let q = 0;
let z = 0;
let fabrikanten = [
        ['duits', 50, 39.1, 33.3, 39.3],
        ['frans', 30, 19.5, 16.7, 34.4],
        ['italiaans', 3.3, 4.7, 5.1, 4.9],
        ['amerikaans', 3.3, 6.3, 7.7, 3.3],
        ['koreaans', 6.7, 7.8, 5.1, 1.6],
        ['japans', 0, 12.5, 20.5, 9.8],
        ['anders', 6.7, 10.2, 9, 6.6],
        ['meetfout', 0, 0, 2.6, 0],
]

let nummerplaten = [
        ['duitsland', 10, 0, 2.6, 0],
        ['frankrijk', 0, 0, 6.4, 26.2],
        ['belgie', 60, 82, 59, 14.8],
        ['nederland', 30, 18, 24.4, 29.5],
        ['engeland', 0, 0, 0, 0],
        ['luxemburg', 0, 0, 6.4, 27.9],
        ['anders', 0, 0, 1.3, 1.6],
        ['meetfout', 0, 0, 0, 0],
]

let mijnFabrikantenSegment = document.querySelectorAll('.fab_segment')
let mijnNummerplaatSegment = document.querySelectorAll('.num_segment')


  console.log('het werkt');
  console.log(mijnAfstand);
  while(mijnFabrikantenSegment.length> q){
    mijnFabrikantenSegment[q].style.setProperty('--value', fabrikanten[q][mijnAfstand] ) ;
    mijnFabrikantenSegment[q].style.setProperty('--offset', offsetVariabele ) ;
    offsetVariabele = offsetVariabele + fabrikanten[q][mijnAfstand];
    q++;
  }


  while(mijnNummerplaatSegment.length> z){
    mijnNummerplaatSegment[z].style.setProperty('--value', nummerplaten[z][mijnAfstand] ) ;

      if(nummerplaten[z][mijnAfstand]>50){
        mijnNummerplaatSegment[z].style.setProperty('--over50', 1) ;
      }
    mijnNummerplaatSegment[z].style.setProperty('--offset', offsetVariabeleTwee) ;
    offsetVariabeleTwee = offsetVariabeleTwee + nummerplaten[z][mijnAfstand];
    z++;
  }







// kleur
let mijnKleurContainer = document.querySelector('.kleur');
let auto ;
let n = 0;
let variabeleKleur = 0;
let aantalAutos = [30, 128, 78, 61]
let kleur = [
        ['gray', 12, 47, 19, 28],
        ['black', 7, 30, 22, 18],
        ['white', 7, 20, 16, 3],
        ['blue', 3, 13, 7, 7],
        ['brown', 1, 7, 7, 4],
        ['red', 0, 6, 6, 1],
        ['anders', 0, 4, 1, 0],
        ['meetfout', 0, 1, 0, 0],
]



let lol = kleur[0][mijnAfstand];
let mijnAutos = document.querySelectorAll('.auto');
let m = 0;

while(mijnAutos.length> m){
  mijnAutos[m].remove();
  m++;
}

while(n< aantalAutos[mijnAfstand - 1]){
      auto = document.createElement('div');
      auto.classList.add('auto');

      if(n < lol ){
          auto.style.background = kleur[variabeleKleur][0];
          console.log( kleur[variabeleKleur][0])
      } else{
        variabeleKleur ++;
        lol = lol + kleur[variabeleKleur][mijnAfstand];
        console.log(lol);
        auto.style.background = kleur[variabeleKleur][0];
      }

      mijnKleurContainer.appendChild(auto);

  n++;
}

}
