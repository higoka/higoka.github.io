const form = document.querySelector('form')

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

form.onchange = () => draw(form.text.value, form.fontSize.value)

function draw (text, fontSize) {
  const baseImage = new Image()

  baseImage.src = 'img/hotel-loading.png'
  baseImage.onload = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(baseImage, 0, 0)

    context.textBaseline = 'middle'
    context.textAlign = 'center'
    context.fillStyle = 'white'
    context.font = `normal ${form.fontSize.value}px Arial`
    context.fillText(form.text.value, canvas.width / 2, canvas.height / 2)
  }
}

draw('H', 96)
