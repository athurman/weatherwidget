(function(React, module, undefined) {
  var Weather = require('./Weather.jsx');
  module.exports = React.createClass({
    render: function() {
      return (
        <div className="container">
          <div className="page-header">
            <h1>Receive Weather Updates</h1>
          </div>
          <Weather zip="37027" />
        </div>
      );
    }
  });
}(React, module));
