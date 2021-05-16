// ref slider element
const slider = document.getElementById("slider")
// ref output
const output = document.getElementById("range-output")
// ref slider labels and ticks
const sliderLabels = document.getElementById('slider-labels')
// output default slider value function
const updateOutput = value => output.innerHTML = ` ${value } W`
// output default slider value
updateOutput(slider.value)
// update output slider value on input event
slider.oninput = function() {
  updateOutput(this.value)
}
// update slider value from labels click event
sliderLabels.onclick = function(e){
  const element = e.target
  // check for label element
  if (element.className.includes('tick')) {
    const value = element.parentElement.dataset.value
    slider.value = value
    // give focus to a slider control
    slider.focus()
    updateOutput(value)
  }
}

