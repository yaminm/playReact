class Clock extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount()
  { //run first time the component get to the DOM
    this.timerID = setInterval
    (
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount()
  { //run when the component removed from the DOM
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);