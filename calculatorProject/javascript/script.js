const form = document.getElementById("activityForm");
const imgApproved = '<img src="img/aprovado.png" alt="Emoji partying"/>';
const imgReproved = '<img src="img/reprovado.png" alt="Emoji Crying"/>';
const activities = [];
const grades = [];
const spanApproved = '<span class="result approved">Approved</span>';
const spanReproved = '<span class="result reproved">Reproved</span>';
let lines = ' ';
const minimalGrade = parseFloat(prompt("Type the minimal Grade to approvement:"));

form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    addLine();
    refreshTable();
    refreshFinalAverageGrade();
});

function addLine(){
    const inputActivityName = document.getElementById("activityName");
    const inputActivityGrade = document.getElementById("activityGrade");

    if (activities.includes(inputActivityName.value)){
        alert (`The activity ${inputActivityName.value} was already inserted`);
    }else{

   
    activities.push(inputActivityName.value);
    grades.push(parseFloat(inputActivityGrade.value));

    let line = `<tr>`;
    line += `<td>${inputActivityName.value}</td>`;
    line += `<td>${inputActivityGrade.value}</td>`;
    line += `<td>${inputActivityGrade.value >= minimalGrade ? imgApproved : imgReproved}</td>`;
    line += `</tr>`;
    
    lines += line;
    }
    inputActivityGrade.value = '';
    inputActivityName.value = '';
}

function refreshTable(){
    const tableBody = document.querySelector('tbody'); 
    tableBody.innerHTML = lines;
}

function refreshFinalAverageGrade() {
    const finalAverageGrade = parseFloat(calculateFinalAverageGrade())
    
    document.getElementById("finalGrade").innerHTML = finalAverageGrade
    document.getElementById("finalGradeResult").innerHTML = finalAverageGrade >= minimalGrade ? spanApproved : spanReproved;
}

function calculateFinalAverageGrade() {
    let gradesSum = 0;
    
    for (let i=0; i < grades.length; i++){
        gradesSum += grades[i];
    }

   return gradesSum / grades.length;
}
