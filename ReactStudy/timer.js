const Timer = React.createClass({
  getInitialState() {
    return {
      second: 0,
      minuts: 0,
      hours: 0,
    }
  },

  componentDidMount() {
    setInterval(this.second, 1000);
  },

  second() {
    this.state.second === 60 ? this.setState({second: this.state.second = 1}) : this.setState({second: this.state.second + 1})
    this.minuts();

    return this.state.second
  },

  minuts() {
    this.state.second === 60 ? this.setState({minuts: this.state.minuts +1}) : this.state.minuts;
    this.hours();

    return this.state.minuts
  },
  
  hours() {
    this.state.minuts === 60
     ? this.setState({
      hours: this.state.hours +1,
      minuts: this.state.minuts = 0,
    })
     : this.state.hours;

    return this.state.hours
  },
 
  render() {
    return (
      <div>
        <p>seconds: {this.state.second}</p>
        <p>minuts: {this.state.minuts}</p>
        <p>hours: {this.state.hours}</p>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
});

ReactDOM.render(
  <Timer />,
  document.getElementById('timer')
)