import React, { Component } from 'react'

//change background color of page on load
//randomly generate number for H,S and L

class ColorSliderMain extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0
  }
  updateColor = () => {
    //update hue when page loads
    const randomHue = Math.ceil(Math.random() * 360)
    console.log(randomHue)
    //update saturation when page loads
    const randomSaturation = Math.ceil(Math.random() * 100)
    console.log(randomSaturation)
    //update lightness when page loads
    const randomLightness = Math.ceil(Math.random() * 100)
    console.log(randomLightness)
    this.setState({
      lightness: randomLightness,
      hue: randomHue,
      saturation: randomSaturation
    })
  }
  componentDidMount() {
    this.updateColor()
  }
  updateHue = event => {
    // const randomHue = Math.ceil(Math.random() * 360)

    console.log(event.target.value)
    this.setState({ hue: event.target.value })
  }
  updateSaturation = event => {
    //const randomSaturation = Math.ceil(Math.random() * 100)
    //console.log(randomSaturation)
    this.setState({ saturation: event.target.value })
  }
  updateLightness = event => {
    // const randomLightness = Math.ceil(Math.random() * 100)
    //console.log(randomLightness)
    this.setState({ lightness: event.target.value })
  }
  render() {
    return (
      <main
        style={{
          backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${
            this.state.lightness
          }%)`
        }}
      >
        <h1>Color Slider</h1>
        <div className="slide-container">
          <section>
            <h2>Hue is {this.state.hue}</h2>
            <input
              type="range"
              min="1"
              max="360"
              className="slider"
              id="Hue"
              onChange={this.updateHue}
            />
          </section>
          <section>
            <h3>Saturation is {this.state.saturation}%</h3>
            <input
              type="range"
              min="1"
              max="100"
              className="slider"
              id="Saturation"
              onChange={this.updateSaturation}
            />
          </section>
          <section>
            <h4>Lightness is {this.state.lightness}%</h4>
            <input
              type="range"
              min="1"
              max="100"
              className="slider"
              id="Lightness"
              onChange={this.updateLightness}
            />
          </section>
          <button className="reset-button" onClick={this.updateColor}>
            reset color
          </button>
        </div>
      </main>
    )
  }
}

export default ColorSliderMain
