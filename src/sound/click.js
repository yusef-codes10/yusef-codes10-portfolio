// here are the click object
const clickSound1 = new Audio('/sound/click-sound2.mp3')

const playClickSound = () => {
  restrartClickSound()
  clickSound1.play().catch((err) => {
    console.warn('Audio failed to play:', err)
  })
}

const restrartClickSound = () => {
  clickSound1.pause()
  clickSound1.currentTime = 0
}

export { playClickSound }
