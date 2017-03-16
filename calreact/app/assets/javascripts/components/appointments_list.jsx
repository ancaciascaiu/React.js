var AppointmentsList = React.createClass({
	render: function(){
		return(
			<div className='my-div'>
				<h2> Appointments </h2>
				{this.props.appointments.map(function(appointment){
					return(
						<Appointment appointment={appointment} key={appointment.id} />
						)
				})}
			</div>
		)
	}
})
