import React, { useState } from 'react'

//change background color of page on load
//randomly generate number for H,S and L

export default function ColorSliderMain() {
  const [hue, setHue] = useState(Math.ceil(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.ceil(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.ceil(Math.random() * 100))

  const updateColor = () => {
    //update hue, Saturation, Lightness when page loads
    setHue(Math.ceil(Math.random() * 360))

    setSaturation(Math.ceil(Math.random() * 100))

    setLightness(Math.ceil(Math.random() * 100))
  }

  //update Hue color when moving slider
  const updateHue = event => {
    setHue(event.target.value)
  }

  //update Saturation color when moving slider
  const updateSaturation = event => {
    setSaturation(event.target.value)
  }
  //update Lightness color when moving slider
  const updateLightness = event => {
    setLightness(event.target.value)
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
