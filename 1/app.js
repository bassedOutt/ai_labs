
var beginner1
var beginner2
var beginner3

var competent1
var competent2
var competent3

var proficient1
var proficient2
var proficient3

var expert1
var expert2
var expert3

var novice1
var novice2
var novice3
var novice4

var noviceSum
var beginnerSum
var competentSum
var proficientSum
var expertSum

var noviceChart = null
var beginnerChart = null
var competentChart = null
var proficientChart = null
var expertChart = null
var allChart = null

function readValues() {

  novice1 = $('input[name="novice1"]:checked').val()
  novice2 = $('input[name="novice2"]:checked').val()
  novice3 = $('input[name="novice3"]:checked').val()
  novice4 = $('input[name="novice4"]:checked').val()

  beginner1 = $('input[name="beginner1"]:checked').val()
  beginner2 = $('input[name="beginner2"]:checked').val()
  beginner3 = $('input[name="beginner3"]:checked').val()

  competent1 = $('input[name="competent1"]:checked').val()
  competent2 = $('input[name="competent2"]:checked').val()
  competent3 = $('input[name="competent3"]:checked').val()

  proficient1 = $('input[name="proficient1"]:checked').val()
  proficient2 = $('input[name="proficient2"]:checked').val()
  proficient3 = $('input[name="proficient3"]:checked').val()

  expert1 = $('input[name="expert1"]:checked').val()
  expert2 = $('input[name="expert2"]:checked').val()
  expert3 = $('input[name="expert3"]:checked').val()

  noviceSum = +novice1 + +novice2 + +novice3
  beginnerSum = +beginner1 + +beginner2 + +beginner3
  competentSum = +competent1 + +competent2 + +competent3
  proficientSum = +proficient1 + +proficient2 + +proficient3
  expertSum = + +expert1 + +expert2 + +expert3

}

$('#submit').click(() => {
  readValues()
  drawAll()
})

$('#noviceSubmit').click(() => {
  readValues()
  drawNovice()
})

$('#beginnerSubmit').click(() => {
  readValues()
  drawBeginner()
})

$('#competentSubmit').click(() => {
  readValues()
  drawCompetent()
})

$('#proficientSubmit').click(() => {
  readValues()
  drawProficient()
})

$('#expertSubmit').click(() => {
  readValues()
  drawExpert()
})


function drawNovice() {

  if (noviceChart !== null)
    noviceChart.destroy()

  const ctx = $('#noviceChart')

  noviceChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4, 'сумарна оцінка'],
      datasets: [{
        label: "novice chart",
        data: [novice1, novice2, novice3, novice4, noviceSum],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)'
        ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            text: 'Оцінка',
            display: true
          }
        },

        x: {
          beginAtZero: true,
          title: {
            text: '№ питання',
            display: true
          }
        }
      }
    }
  })

}

function drawBeginner() {
  if (beginnerChart !== null)
    beginnerChart.destroy()
  const ctx = $('#beginnerChart')

  beginnerChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 'сумарна оцінка'],
      datasets: [{
        label: "beginner chart",
        data: [beginner1, beginner2, beginner3, beginnerSum],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            text: 'Оцінка',
            display: true
          }
        },

        x: {
          beginAtZero: true,
          title: {
            text: '№ питання',
            display: true
          }
        }
      }
    }
  })

}

function drawCompetent() {
  
  if (competentChart !== null)
    competentChart.destroy()
  const ctx = $('#competentChart')

  competentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 'сумарна оцінка'],
      datasets: [{
        label: "competent chart",
        data: [competent1, competent2, competent3, competentSum],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            text: 'Оцінка',
            display: true
          }
        },

        x: {
          beginAtZero: true,
          title: {
            text: '№ питання',
            display: true
          }
        }
      }
    }
  })

}

function drawProficient() {
  if (proficientChart !== null)
    proficientChart.destroy()
  const ctx = $('#proficientChart')

  proficientChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 'сумарна оцінка'],
      datasets: [{
        label: "proficient chart",
        data: [proficient1, proficient2, proficient3, proficientSum],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            text: 'Оцінка',
            display: true
          }
        },

        x: {
          beginAtZero: true,
          title: {
            text: '№ питання',
            display: true
          }
        }
      }
    }
  })

}

function drawExpert() {
  if (expertChart !== null)
    expertChart.destroy()
  const ctx = $('#expertChart')

  expertChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 'сумарна оцінка'],
      datasets: [{
        label: "expert chart",
        data: [expert1, expert2, expert3, expertSum],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            text: 'Оцінка',
            display: true
          }
        },

        x: {
          beginAtZero: true,
          title: {
            text: '№ питання',
            display: true
          }
        }
      }
    }
  })

}

function drawAll() {

  drawNovice()
  drawBeginner()
  drawCompetent()
  drawExpert()
  drawProficient()

  if (allChart !== null)
    allChart.destroy()

  const ctx = $('#allChart')

  allChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Новачок', 'Твердий початківець', 'Компетентний', 'Досвідчений', 'Експерт'],
      datasets: [{
        label: "Об'єднаний графік",
        data: [noviceSum, beginnerSum, competentSum, proficientSum, expertSum],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)'

        ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            text: 'Оцінка',
            display: true
          }
        },

        x: {
          beginAtZero: true,
          title: {
            text: 'Рівень',
            display: true
          }
        }
      }
    }
  })

}