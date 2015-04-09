(function(React, module, undefined) {
  var Title = require("./Title.jsx");
  module.exports = React.createClass({
    getInitialState: function(){
      return {
        temp:    "N/A",
        conditions: "N/A"
      };
    },
    getWeather: function() {
      var url = "http://api.wunderground.com/api/1a99647b2f766c86/conditions/q/"+this.props.zip+".json?callback=?";
      $.getJSON(url, function(data){
        this.setState({
          temp:    data.current_observation.temp_f,
          conditions: data.current_observation.weather
        });
      }.bind(this));
    },
    render: function() {
      return (
        <div className="weather">
          <Title name={"For Area:  "+this.props.zip} />
          <button onClick={this.getWeather}>Get Weather</button>
          <div className="weather-info">
            <div class="conditions"><p>Conditions: {this.state.conditions}</p></div>
            <div class="degrees"><p>{this.state.temp}&#176; F</p></div>
          </div>
        </div>
      );
    }
  });
}(React, module));