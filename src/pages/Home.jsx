import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
//import Navbar from '../components/Navbar.jsx';
//import Footer from '../components/Footer.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center bg-dark">
					<h1>Your programming solutions, here.</h1> 
					<p>Customized scripts to automate boring tasks, fully functional websites built from the ground up, and more. </p> 
					<p><Link className="btn btn-primary btn-lg" to="/order" role="button">Place an Order &raquo;</Link></p>
				</div>
				<Description />
				<MainPoints />
				<Quote />
            </div>
        );
    }
}

class Description extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container-fluid">
                	<h1 className="text-center display-5" id="service">Our Services</h1>
                	<br/>
                	<div className="row">
                		<div className="col-sm-1"/>
	                	<div className="col-sm-5 text-center">
	                		<span className="fab fa-python fa-10x"/>
	                		<h2 className="display-6">Custom Scripts</h2>
	                		<p className="lead">Automated solutions for tedious tasks.</p>
	                		<p className="small">Send us specifications on the task that needs to be automated, and we will provide a script that will automate it, thus saving precious time that you could spend doing something else.</p>
	                		<ul class="list-group">
								<li class="list-group-item">Personal/Business Use</li>
								<li class="list-group-item">Usually takes 1~2 days (depending on project)</li>
								<li class="list-group-item">Email Support</li>
							</ul>
	                		<p><Link className="btn btn-primary btn-lg" to="/scripts" role="button">Learn More &raquo;</Link></p>
	                	</div>
	                	<div className="col-sm-5 text-center">
	                		<span className="fab fa-html5 fa-10x"/>
	                		<h2 className="display-6">Personalized Website</h2>
	                		<p className="lead">For yourself, for your company, for your pets.</p>
	                		<p className="small">We will build your website for you. Full support from setting up a server/domain to maintenance post-development. We will use wordpress or build it from the ground up on request.</p>
	                		<ul class="list-group">
								<li class="list-group-item">Personal/Business Use</li>
								<li class="list-group-item">Can take more than a week (depending on project)</li>
								<li class="list-group-item">Full Email/Chat Support (on any SMS platform)</li>
							</ul>
	                		<p><Link className="btn btn-primary btn-lg" to="/webdev" role="button">Learn More &raquo;</Link></p>
	                	</div>
	                	<div className="col-sm-1"/>
	                </div>
                </div>
            </div>
        );
    }
}

class MainPoints extends Component {
	render() {
		return (
			<div className="bg-dark">
                <div className="container-fluid">
                	<h1 className="text-center display-5" id="offers">What We Offer</h1><br/>
                	<div className="row">
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-dollar-sign fa-2x"/>
	                		<h4>Cheap Pricing</h4>
	                		<p className="small" id="offer-text-1">Affordable prices that scale based on size of project. Completely negotiable.</p>
	                	</div>
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-clipboard fa-2x"/>
	                		<h4>Flexibility</h4>
	                		<p className="small" id="offer-text-2">Anything up to small details can be customized and changed to fit your needs.</p>
	                	</div>
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-comment fa-2x"/>
	                		<h4>Communication</h4>
	                		<p className="small" id="offer-text-3">We will be in touch with you as often as possible to ensure quality and compliance.</p>
	                	</div>
	                </div>
	                <div className="row">
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-cog fa-2x"/>
	                		<h4>Easy Usage</h4>
	                		<p className="small" id="offer-text-4">Easy to order, easy to use.</p>
	                	</div>
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-clock fa-2x"/>
	                		<h4>Timeliness</h4>
	                		<p className="small" id="offer-text-5">Products will be completed in minimal time.</p>
	                	</div>
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-question-circle fa-2x"/>
	                		<h4>On-Demand Q&A</h4>
	                		<p className="small" id="offer-text-6">Always prepared to answer questions and address concerns.</p>
	                	</div>
	                </div>
                </div>
            </div>	
		);
	}
}

class Quote extends Component {
	render() {
		return(
			<div className="bg-light">
				<div className="container">
					<h1 className="text-center display-5" id="offers">Get a Quote / Ask a Question</h1><br/>
					<form>
						<div class="form-group">
							<label for="exampleFormControlInput1">Email address</label>
							<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
						</div>
						<div class="form-group">
							<label for="exampleFormControlSelect1">Inquiry</label>
							<select class="form-control" id="exampleFormControlSelect1">
								<option selected disabled hidden>Select</option> 
								<option value="script">Custom Scripts</option>
								<option value="website">Website</option>
								<option>Question</option>
							</select>
						</div>
						<div class="form-group">
							<label for="exampleFormControlTextarea1">Description</label>
							<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Home;