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

document.querySelector('.test').addEventListener('click', () => {
  if ('Notification' in window) {
    Notification.requestPermission().then((result) => {
      if (result === 'granted') {
        new Notification('test', {
          body: 'das ist ein test',
        })
      } else {
        alert('Benachrichtigungen abgelehnt.')
      }
    })
  } else {
    alert('Benachrichtigungen werden nicht unterstützt.')
  }
})

const result = document.querySelector('.result')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!form.carb.value) {
    return
  }

  const amount = `
    <div>
      <p>${form.amount.value} Wert</p>
      <ul>
        <li>${Math.floor((100 / form.carb.value) * form.amount.value * 10)}g</li>
      </ul>
    </div>`

  const left = `
    <div>
      <p>Rest</p>
      <ul>
        <li>${Math.floor((form.carb.value / 100) * form.left.value)}g Kh</li>
      </ul>
    </div>`

  result.innerHTML = `
    <h1>Resultat</h1>
    <div class="result-group">
      <div>
        <p>1 Wert</p>
        <ul>
          <li>${Math.floor((100 / form.carb.value) * 10)}g</li>
        </ul>
      </div>
      ${form.amount.value ? amount : ''}
      ${form.left.value ? left : ''}
    </div>
  `
})

const update = () => {
  worker.postMessage({ action: 'skipWaiting' })
}
