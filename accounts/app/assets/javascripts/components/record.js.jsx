var Record = React.createClass({

  getInitialState: function() {
    return { edit: false };
  },

  render: function() {
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{this.props.record.amount}</td>
      </tr>
    );
  }

 
});