alert("Bienvenue Sur Mon Portfolio!!!!!!!!!!!!!!!!!");

function cacherElements(elementId, containerClass) {
  var languesHeader = document.getElementById(elementId);
  languesHeader.addEventListener("click", function() {
    var elementsACacher = document.querySelectorAll("." + containerClass + " > *");
    elementsACacher.forEach(function(element) {
      element.classList.toggle("hidden");
    });
  });
}

cacherElements("profil", "classprofil .profilcontainer");
cacherElements("competences", "classcompetences .competencescontainer");
cacherElements("formation", "classformation .formationcontainer");
cacherElements("interets", "classinterets .interest-container > .interest");
cacherElements("experiences", "classexperiences .experiencescontainer");

var sousLangues = document.getElementById("langues");
  sousLangues.addEventListener("click", function() {
    var elementsACacher = document.querySelectorAll(".classLangues .drapeau-container");
    elementsACacher.forEach(function(element) {
      element.classList.toggle("hidden");
    });
  });

var textWrapper = document.querySelector('.milena .lettres');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.milena .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.milena',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


var dataLangues = {
    labels: ["Français", "Armenien", "Anglais","Espagnol", "Italien", "Coreen"],
    datasets: [{
        label: "Niveau de langue",
        data: [5, 5, 3.5, 3, 2.5, 0.5],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderWidth: 1
    }]
};

var optionsChart = {
    scales: {
        y: {
            beginAtZero: true,
            max: 5 
        }
    }
};


var ctx = document.getElementById('langChart').getContext('2d');
var langChart = new Chart(ctx, {
    type: 'bar',
    data: dataLangues,
    options: optionsChart
});



