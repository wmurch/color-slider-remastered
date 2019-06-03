import React, { useState } from 'react'

//change background color of page on load
//randomly generate number for H,S and L

export default function ColorSliderMain() {
  const [hue, setHue] = useState(Math.ceil(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.ceil(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.ceil(Math.random() * 100))

  const updateColor = () => {
    //update hue when page loads
    setHue(Math.ceil(Math.random() * 360))
    //const randomHue = Math.ceil(Math.random() * 360)
    console.log(setHue)
    //update saturation when page loads
    setSaturation(Math.ceil(Math.random() * 100))
    //const randomSaturation = Math.ceil(Math.random() * 100)
    console.log(setSaturation)
    //update lightness when page loads
    setLightness(Math.ceil(Math.random() * 100))
    //const randomLightness = Math.ceil(Math.random() * 100)
    console.log(setLightness)
  }
  const updateHue = event => {
    // const randomHue = Math.ceil(Math.random() * 360)
    console.log(event.target.value)
    setHue(event.target.value)
    //this.setState({ hue: event.target.value })
  }
  const updateSaturation = event => {
    setSaturation(event.target.value)
    //const randomSaturation = Math.ceil(Math.random() * 100)
    //console.log(randomSaturation)
    //this.setState({ saturation: event.target.value })
  }
  const updateLightness = event => {
    setLightness(event.target.value)
    // const randomLightness = Math.ceil(Math.random() * 100)
    //console.log(randomLightness)
    // this.setState({ lightness: event.target.value })
  }
  return (
    <main
      style={{
        backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`
      }}
    >
      <h1>Color Slider</h1>
      <div className="slide-container">
        <section>
          <h2>Hue is {hue}</h2>
          <input
            type="range"
            min="1"
            max="360"
            className="slider"
            id="Hue"
            onChange={updateHue}
          />
        </section>
        <section>
          <h3>Saturation is {saturation}%</h3>
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="Saturation"
            onChange={updateSaturation}
          />
        </section>
        <section>
          <h4>Lightness is {lightness}%</h4>
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="Lightness"
            onChange={updateLightness}
          />
        </section>
        <button className="reset-button" onClick={updateColor}>
          reset color
        </button>
      </div>
    </main>
  )
}
