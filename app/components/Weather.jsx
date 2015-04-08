(function(React, module, undefined) {
  var Title = require("./Title.jsx");
  module.exports = React.createClass({
    getInitialState: function(){
      return {
        temp:    0,
        conditions: ""
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
          <Title name={this.props.zip} />
          <button onClick={this.getWeather}>Get Weather</button>
          <div class="conditions">{this.state.conditions}</div>
          <div class="degrees">{this.state.temp} degrees</div>
        </div>
      );
    }
  });
}(React, module));