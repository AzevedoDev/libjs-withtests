export default class OnLeaveIntent {
  constructor(callback, delay) {
    this.callback = callback
    this.delay = delay

    this.init()
  }

  init = () => {
    this.timer = window.setTimeout(this.handleMouseOut, this.delay)
  }

  destroy = () => {
    clearTimeout(this.timer)
    document.removeEventListener('mouseout', this.checkOutOfBounds)
  }

  checkOutOfBounds = (e) => {
    if (e.relatedTarget === null) {
      this.callback()
      this.destroy()
    }
  }

  handleMouseOut = () => {
    document.addEventListener('mouseout', this.checkOutOfBounds)
  }
}
