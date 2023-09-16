const statusStore = []

export const sendStatus = (condition = false) => {
  const statusBox = document.getElementById('statusBox')

  if (condition === true) {
    statusStore.push(
      `<div class="box--container"><div class="box box--1"><div class="circle circle--1"></div></div><div class="box box--2"><div class="circle circle--2"></div></div></div>`
    )
    statusBox.innerHTML = statusStore.join('<hr>')
  }
}
