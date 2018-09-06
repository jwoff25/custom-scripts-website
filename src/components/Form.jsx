import React, { Component } from 'react';

class Form extends Component {
	render() {
		return(
			<div className="bg-light">
				<div className="container-fluid">
					<div className="row" id="desc-row1">
                		<div className="col-sm-4 text-center"/>
	                	<div className="col-sm-4 text-center" id="title">
	                		<h1 id="title-text">Contact Us</h1>
	                	</div>
                		<div className="col-sm-4 text-center"/>
                	</div>
					<div className="container">
					<form onSubmit={this.handleSubmit}>
						<div class="form-group">
							<label for="exampleFormControlInput1">Email address</label>
							<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
						</div>
						<div class="form-group">
							<label for="exampleFormControlSelect1">Inquiry</label>
							<select class="form-control" id="exampleFormControlSelect1">
								<option selected disabled hidden>Select</option> 
								<option value="script">Request Service</option>
								<option value="question">Inquiry</option>
							</select>
						</div>
						<div class="form-group">
							<label for="exampleFormControlTextarea1">Description</label>
							<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						</div>
						<input type="submit" value="Submit" className="btn btn-secondary" />
					</form>
					</div>
				</div>
			</div>
		);
	}
	
	handleSubmit (event) {
    event.preventDefault()

    console.log("done");
  }

  sendFeedback (templateId, senderEmail, receiverEmail, feedback) {
    window.emailjs.send(
      'mailgun',
      templateId,
      {
        senderEmail,
        receiverEmail,
        feedback
      })
      .then(res => {
        this.setState({ formEmailSent: true })
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send feedback. Error: ', err))
  }
}

export default Form;