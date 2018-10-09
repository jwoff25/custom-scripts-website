import React, { Component } from 'react';

class Form_jp extends Component {
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
		      <h1 class="display-4">お問い合わせ</h1>
		      <p class="lead">質問から注文まで、お客様の疑問にお答えします。下記フォームに入力してください。</p>
		    </div>
				<div className="container">
				<form method="POST" action="https://formspree.io/order@custom-scripts.xyz">
					<div class="form-group">
						<label for="exampleFormControlInput1">名前</label>
						<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe" name="name"/>
					</div>
					<div class="form-group">
						<label for="exampleFormControlInput1">Email address</label>
						<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="replyto"/>
					</div>
					<div class="form-group">
						<label for="exampleFormControlSelect1">お問い合わせ内容</label>
						<select class="form-control" id="exampleFormControlSelect1" name="service">
							<option selected disabled hidden>選択してください</option> 
							<option value="script">サービスの発注</option>
							<option value="question">お問い合わせ</option>
						</select>
					</div>
					<div class="form-group">
						<label for="exampleFormControlTextarea1">概要</label>
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

export default Form_jp;