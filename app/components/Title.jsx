(function(React, module, undefined) {
  module.exports = React.createClass({
    render: function() {
      return <h1>{this.props.name}</h1>;
    }
  });
}(React, module));