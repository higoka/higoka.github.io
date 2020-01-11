let worker;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then((reg) => {
      reg.addEventListener('updatefound', () => {
        worker = reg.installing
        worker.addEventListener('statechange', () => {
          switch (worker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                document.querySelector('.popup').style.display = 'block'
              }
              break;
          }
        })
      })
    })

  let refresh = false
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refresh) return
    window.location.reload()
    refresh = true
  })
}

const result = document.querySelector('.result')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!form.carb.value && !form.carb.fat) {
    return
  }

  const carb1 = `<li>${Math.floor((100 / form.carb.value) * 10)}g</li>`
  const fat1  = `<li>${Math.floor((100 / form.fat.value) * 10)}g Fett</li>`

  const carb2 = `<li>${Math.floor((100 / form.carb.value) * form.amount.value * 10)}g</li>`
  const fat2  = `<li>${Math.floor((100 / form.fat.value) * form.amount.value * 10)}g Fett</li>`

  const amount = `
    <div>
      <p>${form.amount.value} Wert</p>
      <ul>
        ${form.carb.value ? carb2 : ''}
        ${form.fat.value ? fat2 : ''}
      </ul>
    </div>`

  const left = `<p class="left">Übrig: ${Math.floor((form.carb.value / 100) * form.left.value)}g KH</p>`

  result.innerHTML = `
    <h1>Resultat</h1>
    <div class="result-group">
      <div>
        <p>1 Wert</p>
        <ul>
          ${form.carb.value ? carb1 : ''}
          ${form.fat.value ? fat1 : ''}
        </ul>
      </div>
      ${form.amount.value ? amount : ''}
    </div>
    ${form.left.value ? left : ''}
  `
})

const update = () => {
  worker.postMessage({ action: 'skipWaiting' })
}
