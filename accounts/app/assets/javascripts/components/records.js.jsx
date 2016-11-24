
var Records = React.createClass({ 
  displayName: "Records",
    getInitialState: function(){
		return  { records: this.props.data };
  	},
    getDefaultProps: function(){
    	return { records: [] };
  	},
  	render: function(){
    	return (
      		<div className="records">
        	 	<h2 className="title"> Records </h2>
		      	<table className='table table-bordered'>
		          <thead>
		            <tr>
		              <th>Date</th>
		              <th>Title</th>
		              <th>Amount</th>
		              <th>Actions</th>
		            </tr>
		          </thead>
		          <tbody>
		            {this.state.records.map(function(record) {
		              return <Record key={record.id} record={record}
		                             handleDeleteRecord={this.deleteRecord}
		                             handleEditRecord={this.updateRecord} />
		             }.bind(this))}
		          </tbody>
		        </table>
      		</div>
    	)
  	}
})