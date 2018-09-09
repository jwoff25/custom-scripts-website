import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'John Doe',
			email: 'example@example.com',
			service: 'Select',
			text: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	render() {
		return(
			<div className="bg-dark" id="userform">
				<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
		      <h1 class="display-4">Contact Us</h1>
		      <p class="lead">Have a question? Want to place an order? Reach us through this form.</p>
		    </div>
				<div className="container">
				<form method="POST" action="https://formspree.io/customscripts.order@gmail.com">
					<div class="form-group">
						<label for="exampleFormControlInput1">Name</label>
						<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe" name="name"/>
					</div>
					<div class="form-group">
						<label for="exampleFormControlInput1">Email address</label>
						<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="replyto"/>
					</div>
					<div class="form-group">
						<label for="exampleFormControlSelect1">Inquiry</label>
						<select class="form-control" id="exampleFormControlSelect1" name="service">
							<option selected disabled hidden>Select</option> 
							<option value="script">Request Service</option>
							<option value="question">Make an Inquiry</option>
						</select>
					</div>
					<div class="form-group">
						<label for="exampleFormControlTextarea1">Description</label>
						<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="desc"></textarea>
					</div>
					<input type="submit" value="Submit" className="btn btn-secondary"/>
				</form>
				</div>
			</div>
		);
	}
	
	handleChange(event) {
		
	}
	
	handleSubmit (event) {
    event.preventDefault()
		
    console.log("done");
    this.contactForm.reset();
  }
}

export default Form;