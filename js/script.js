let mijnAfstand = 1;
// slider

let mijnUitleg = document.getElementById('UX');
var inputElement = document.getElementById('customRangeInput');





inputElement.oninput = setInput;
inputElement.onchange = setInput;   // IE fix
veranderenAfstand()
function setInput(){
    inputElement.value = closestValue(inputElement.value);

}

var validValues = [25,100,200,275,365,535,750,900,1010];
function closestValue(input)
{
    var differences = [];
    for (var i = 0; i < validValues.length; i++)
        differences.push( Math.abs(validValues[i] - input));

    var index = indexOfSmallest(differences);

    // slider verplaatsen afstand veranderen
      mijnAfstand = index + 1;



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
        ['duits', 50, 39.1, 33.3, 39.3, 33.9, 35, 26.3, 19.2, 28.8],
        ['frans', 30, 19.5, 16.7, 34.4, 30.5, 33.8, 39.1, 49.2, 43.3],
        ['italiaans', 3.3, 4.7, 5.1, 4.9, 1.7, 2.4, 3, 2.3, 5.8],
        ['amerikaans', 3.3, 6.3, 7.7, 3.3, 6.8, 4.8, 6.8, 9.2, 4.8],
        ['koreaans', 6.7, 7.8, 5.1, 1.6, 5.1, 2.4, 0.8, 1.5, 1.9],
        ['japans', 0, 12.5, 20.5, 9.8, 10.2, 9.6, 13.5, 12.3, 5.8],
        ['anders', 6.7, 10.2, 9, 6.6, 10.2, 12, 10.5, 6.2, 9.6],
        ['meetfout', 0, 0, 2.6, 0, 1.7, 0, 0, 0, 0],
]

let nummerplaten = [
        ['duitsland', 10, 0, 2.6, 0, 0, 8.5, 3, 1.5, 4.8],
        ['frankrijk', 0, 0, 6.4, 26.2, 54.2, 39.8, 84.2, 90, 86.5],
        ['belgie', 60, 82, 59, 14.8, 15.3, 12, 3, 3.1, 2.9],
        ['nederland', 30, 18, 24.4, 29.5, 16.9, 33.7, 5.3, 4.6, 2.9],
        ['engeland', 0, 0, 0, 0, 0, 1.2, 2.3, 0.8, 1],
        ['luxemburg', 0, 0, 6.4, 27.9, 10.2, 2.4, 1.5, 0, 0],
        ['anders', 0, 0, 1.3, 1.6, 3.4, 2.4, 0.8, 0, 1.9],
]

let mijnFabrikantenSegment = document.querySelectorAll('.fab_segment')
let mijnNummerplaatSegment = document.querySelectorAll('.num_segment')


  console.log(mijnAfstand);
  while(mijnFabrikantenSegment.length> q){
    mijnFabrikantenSegment[q].style.setProperty('--value', fabrikanten[q][mijnAfstand] ) ;
    mijnFabrikantenSegment[q].style.setProperty('--offset', offsetVariabele ) ;
    offsetVariabele = offsetVariabele + fabrikanten[q][mijnAfstand];
    q++;
  }


  while(mijnNummerplaatSegment.length> z){
    mijnNummerplaatSegment[z].style.setProperty('--value', nummerplaten[z][mijnAfstand] ) ;
    mijnNummerplaatSegment[z].style.setProperty('--over50', 0) ;
      if(nummerplaten[z][mijnAfstand]>50){
        mijnNummerplaatSegment[z].style.setProperty('--over50', 1) ;
      }
    mijnNummerplaatSegment[z].style.setProperty('--offset', offsetVariabeleTwee) ;
    offsetVariabeleTwee = offsetVariabeleTwee + nummerplaten[z][mijnAfstand];
    z++;
  }

// algemene info aanpassen
let mijnTijden = ['09h50-10h20', '10h20-11h06', '11h06-12h00', '12h00-12h47', '12h47-13h41', '13h41-16h00', '16h00-17h30', '17h30-19h22', '19h22-20h40' ]
let mijnPlaatsen = ['Antwerpen -> Brussel', 'Brussel -> Provincie Luxemburg', 'Provincie Luxemburg -> Grens Luxemburg', 'Grens Luxemburg -> Grens Frankrijk', 'Grens Frankrijk -> Nancy', 'Nancy -> Dijon', 'Dijon -> Lyon', 'Lyon -> Valence', 'Valence -> Avignon' ]
let mijnPlaats = document.getElementById('plaats');
let mijnTijd = document.getElementById('tijd');
mijnTijd.innerHTML = mijnTijden[mijnAfstand -1];
mijnPlaats.innerHTML = mijnPlaatsen[mijnAfstand -1];


let mijnWeerDiv = document.querySelector('.weather');
let mijnTemperatuur = document.getElementById('temperatuur');
let beschrijvingWeer = document.getElementById('weerBesch');
let weer = ['Bewolkt', 'Bewolkt', 'Regen', 'Regen', 'Bewolkt', 'Zonnig', 'Zonnig', 'Zonnig', 'Zonsondergang' ]
let temperatuur = ['16°C', '17°C', '18°C', '20°C', '20°C', '20°C', '22°C-24°C', '25°C', '25°C' ]
mijnWeerDiv.style.backgroundImage = "url('img/" +weer[mijnAfstand -1]+".gif')";
    if(weer[mijnAfstand -1] === 'Bewolkt') {
      mijnWeerDiv.style.backgroundSize = "70%";
    } else{
      mijnWeerDiv.style.backgroundSize = "100%";
    }
mijnTemperatuur.innerHTML = temperatuur[mijnAfstand -1];
beschrijvingWeer.innerHTML = weer[mijnAfstand -1];
// kleur
let mijnKleurContainer = document.querySelector('.kleur');
let auto ;
let n = 0;
let variabeleKleur = 0;
let aantalAutos = [30, 128, 78, 61, 59, 83, 133, 130, 104]
let kleur = [
        ['gray', 12, 47, 19, 28, 13, 21, 40, 35, 33],
        ['black', 7, 30, 22, 18, 15, 21, 37, 31, 27],
        ['white', 7, 20, 16, 3, 14, 16, 33, 35, 21],
        ['blue', 3, 13, 7, 7, 8, 9, 8, 9, 10],
        ['brown', 1, 7, 7, 4, 2, 3, 5, 2, 4],
        ['red', 0, 6, 6, 1, 4, 7, 10, 8, 8],
        ['anders', 0, 4, 1, 0, 3, 5, 0, 8, 1],
        ['meetfout', 0, 1, 0, 0, 0, 1, 0, 2, 0],
]

let kleurPercentages = [
        ['gray', 40, 36.7, 24.4, 45.9 , 22, 25.3, 30.1, 26.9, 31.7],
        ['black', 23.3, 23.4, 28.2, 29.5, 25.4, 25.3, 27.8, 23.8, 26],
        ['white', 23.3, 15.6, 20.5, 4.9, 23.7, 19.3, 24.8, 26.9, 20.2],
        ['blue', 10, 10.2, 9 , 11.5, 13.6, 10.8, 6, 6.9, 9.6],
        ['brown', 3.4, 5.5, 9, 6.6, 3.4, 3.6, 3.8, 1.5, 3.8],
        ['red', 0, 4.7, 7.7, 1.6, 6.8, 8.4, 7.5, 6.2, 7.7],
        ['anders', 0, 3.1, 1.3, 0, 5.1, 6.0, 0, 6.2, 1],
        ['meetfout', 0, 0.8, 0, 0, 0, 1.2, 0, 1.5, 0],
]

q = 0;
offsetVariabele = 0;
let mijnKleurSegment = document.querySelectorAll('.kl_segment');
let mijnKleurGrafiek = document.querySelector('.kleur .pie');
let mijnKleurLegende = document.querySelector('.kleur .legende');
let lol = kleur[0][mijnAfstand];
let mijnAutos = document.querySelectorAll('.auto');
let m = 0;

while(mijnKleurSegment.length> q){
  mijnKleurSegment[q].style.setProperty('--value', kleurPercentages[q][mijnAfstand] ) ;
  mijnKleurSegment[q].style.setProperty('--offset', offsetVariabele ) ;
  offsetVariabele = offsetVariabele + kleurPercentages[q][mijnAfstand];
  q++;
}

function grafiekTonen(){
    m=0;
    mijnKleurLegende.classList.remove('onzichtbaar');
    mijnKleurGrafiek.classList.remove('onzichtbaar');

    mijnAutos = document.querySelectorAll('.auto');
    while(mijnAutos.length> m){
      mijnAutos[m].classList.add('onzichtbaar');
      m++;
    }
    mijnKleurContainer.style.setProperty('display', 'block') ;

}

function grafiekVerbergen(){
  m=0;
  mijnKleurLegende.classList.add('onzichtbaar');
  mijnKleurGrafiek.classList.add('onzichtbaar');
  mijnAutos = document.querySelectorAll('.auto');
  while(mijnAutos.length> m){
    mijnAutos[m].classList.remove('onzichtbaar');
    m++;
  }
      mijnKleurContainer.style.setProperty('display', 'flex') ;
}

mijnKleurContainer.addEventListener('mouseover', grafiekTonen);
mijnKleurContainer.addEventListener('mouseout', grafiekVerbergen);

m = 0;

while(mijnAutos.length> m){
  mijnAutos[m].remove();
  m++;
}

while(n< aantalAutos[mijnAfstand - 1]){
      auto = document.createElement('div');
      auto.classList.add('auto');

      if(n < lol ){
          auto.style.backgroundImage = "url('img/" +kleur[variabeleKleur][0]+".png')"  ;

      } else{
        variabeleKleur ++;
        lol = lol + kleur[variabeleKleur][mijnAfstand];

        auto.style.backgroundImage = "url('img/" +kleur[variabeleKleur][0]+".png')"  ;
      }

      mijnKleurContainer.appendChild(auto);

  n++;
}
// Afstand
  let weergaveDrukte = document.getElementById('drukte');
  let drukte = [0.67, 1.28, 0.78, 0.85, 0.62, 0.42, 0.67, 1.08, 0.87];
  weergaveDrukte.innerHTML = drukte[mijnAfstand -1] + " nieuwe auto's per km";
  let hoeveel = document.getElementById('hoeveel');

// uitleg

function uitleg(){
    mijnUitleg.classList.remove('onzichtbaar');
    hoeveel.classList.add('onzichtbaar');
}

function uitlegWeg(){
    mijnUitleg.classList.add('onzichtbaar');
    hoeveel.classList.remove('onzichtbaar');
}


if(mijnAfstand> 1){
mijnUitleg.classList.add('weg');
  hoeveel.classList.add('zichtbaar');
}

  inputElement.addEventListener('mouseover', uitleg);
  inputElement.addEventListener('mouseout', uitlegWeg);


}
