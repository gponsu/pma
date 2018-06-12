import React from "react";
import PropTypes from "prop-types";

const POMODORO_TIME = 25 * 60;
const POMODORO_BREAK = 5 * 60;

const timerStyle = {
  marginTop: "5rem",
  fontSize: "5rem"
};

const playStyle = {
  borderWidth: "25px 0 25px 35px",
  borderColor: "transparent transparent transparent #fdf7ee",
  background: "transparent",
  transition: "100ms all ease",
  cursor: "pointer",
  outline: "none",
  marginLeft: "20px"
};

const pauseStyle = {
  borderColor: "transparent transparent transparent #fdf7ee",
  background: "transparent",
  transition: "100ms all ease",
  cursor: "pointer",
  marginLeft: "20px",
  borderWidth: "0px 0 0px 35px",
  borderStyle: "double",
  height: "40px",
  marginTop: "40px",
  outline: "none"
};

class Timer extends React.Component {
  state = { seconds: POMODORO_TIME, break: false, playing: false };

  play(seconds) {
    this.setState({ seconds: seconds - 1, playing: true });

    this.interval = setInterval(
      () =>
        this.setState(prevState => ({
          seconds: prevState.seconds - 1
        })),
      1000
    );
  }

  reset() {
    clearInterval(this.interval);
    if (!this.state.break)
      this.props.onCancel(POMODORO_TIME - this.state.seconds);

    this.setState({
      seconds: POMODORO_TIME,
      break: false,
      playing: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.seconds !== prevState.seconds && this.state.seconds == 0) {
      clearInterval(this.interval);
      if (!prevState.break) this.props.onDone();

      const seconds = this.state.break ? POMODORO_TIME : POMODORO_BREAK;

      this.setState(prevState => ({
        seconds,
        break: !prevState.break,
        playing: false
      }));

      const video = document.querySelector("audio");
      video.play();
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#fe4040";
    document.body.style.textAlign = "center";
    document.querySelector("form").style.display = "none";
    document.querySelector("ul").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.body.style.color = "#fdf7ee";
  }

  render() {
    const minutes = ("0" + Math.floor(this.state.seconds / 60)).substr(-2);
    const seconds = ("0" + this.state.seconds % 60).substr(-2);

    let button = (
      <button
        style={playStyle}
        onClick={() => {
          this.play(POMODORO_TIME);
        }}
      />
    );

    if (this.state.break)
      button = (
        <button
          style={playStyle}
          onClick={() => {
            this.play(POMODORO_BREAK);
          }}
        />
      );

    if (this.state.playing)
      button = (
        <button
          style={pauseStyle}
          onClick={() => {
            this.reset();
          }}
        />
      );

    return (
      <div style={timerStyle}>
        <div>
          {minutes}:{seconds}
        </div>
        <div>{button}</div>

        <audio>
          <source
            src="https://www.w3schools.com/tags/horse.ogg"
            type="audio/ogg"
          />
          <source
            src="https://www.w3schools.com/tags/horse.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

Timer.propTypes = {
  onDone: PropTypes.func,
  onCancel: PropTypes.func
};

export default Timer;
