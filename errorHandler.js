export const errorStore = []

export const sendError = (name, msg) => {
  const errorBox = document.getElementById('errorBox')
  const errorContext = {
    name: name,
    msg: msg,
  }

  errorStore.push(`${name}: ${msg}`)
  errorBox.innerHTML = errorStore.join('<hr>')
}

//`Zoom Distance: ${camera.zoom.toFixed(3)}`;
