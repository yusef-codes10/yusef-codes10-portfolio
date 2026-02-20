// here are the click object
const clickSound1 = new Audio('/sound/click-sound2.mp3')

const playClickSound = () => {
  clickSound1.play().catch((err) => {
    console.warn('Audio failed to play:', err)
  })
}

export { playClickSound }
