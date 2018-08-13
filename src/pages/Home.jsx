import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//import Navbar from '../components/Navbar.jsx';
//import Footer from '../components/Footer.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center bg-dark">
					<h1>Your programming solutions, here.</h1> 
					<p>Tech consulting and scripting solutions for tedious daily/business related tasks. Easy to use, and easier to place an order.</p> 
					<p><Link className="btn btn-primary btn-lg" to="/order" role="button">Place an Order &raquo;</Link></p>
				</div>
				<Description />
				<Timeline />
				<ServiceList />
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
                	<div className="row">
                		<div className="col-sm-1"/>
	                	<div className="col-sm-2 text-center">
	                		<span className="fas fa-clipboard-list fa-10x"/>
	                	</div>
	                	<div className="col-sm-8 text-center">
	                		<h2 className="display-6">Small Scale Tech Consulting</h2>
	                		<h4 className="display-6">We will help you evaluate any tedious or inefficient work in your business and present automated solutions.</h4>
	                		<p>Any business has their fair share of tedious tasks. Filling out excel sheets, gathering information from online sources, keeping track of emails, and so on. 
	                		You can submit these tasks to us, and we can help you create an automated program that can greatly reduce the amount of time spent on these tasks.
	                		Since everything will be done remotely, communication will be through skype or your messaging platform of choice. The solution will be well described and documented
	                		to prevent any kind of miscommunication in order to make sure that the program fits the job.
	                		</p>
	                	</div>
	                	<div className="col-sm-1"/>
	                </div>
	                <div className="row">
                		<div className="col-sm-1"/>
	                	<div className="col-sm-8 text-center">
	                		<h2 className="display-6">Process Optimization</h2>
	                		<h4 className="display-6">Optimize your processes.</h4>
	                		<p>Any business has their fair share of tedious tasks. Filling out excel sheets, gathering information from online sources, keeping track of emails, and so on. 
	                		You can submit these tasks to us, and we can help you create an automated program that can greatly reduce the amount of time spent on these tasks.
	                		Since everything will be done remotely, communication will be through skype or your messaging platform of choice. The solution will be well described and documented
	                		to prevent any kind of miscommunication in order to make sure that the program fits the job.
	                		</p>
	                	</div>
	                	<div className="col-sm-2 text-center">
	                		<span className="fas fa-code fa-10x"/>
	                	</div>
	                	<div className="col-sm-1"/>
	                </div>
                </div>
            </div>
        );
    }
}

class Timeline extends Component {
	render() {
		return (
			<div className="bg-dark container-fluid">
				<h1 className="text-center display-5">General Timeline</h1><br/>
				<VerticalTimeline>
					  <VerticalTimelineElement
					    className="vertical-timeline-element--work"
					    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					  >
					    <h3 className="vertical-timeline-element-title">Consulting</h3>
					    <h4 className="vertical-timeline-element-subtitle">1~2 days</h4>
					    <p>
					      Discuss time consuming business processes and potential programmable solutions.
					    </p>
					  </VerticalTimelineElement>
					  <VerticalTimelineElement
					    className="vertical-timeline-element--work"
					    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					  >
					    <h3 className="vertical-timeline-element-title">Preparation</h3>
					    <h4 className="vertical-timeline-element-subtitle">Same Day</h4>
					    <p>
					      Plan out timeline, from development of tool to deployment and even training. Gather required resources for testing (explained below).
					    </p>
					  </VerticalTimelineElement>
					  <VerticalTimelineElement
					    className="vertical-timeline-element--work"
					    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					  >
					    <h3 className="vertical-timeline-element-title">Development</h3>
					    <h4 className="vertical-timeline-element-subtitle">1~ days (depends on scale)</h4>
					    <p>
					      Tool will be developed and tested according to parameters given by customer. Program will be tested and documentation will be created for ease of use.
					    </p>
					  </VerticalTimelineElement>
					  <VerticalTimelineElement
					    className="vertical-timeline-element--work"
					    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					  >
					    <h3 className="vertical-timeline-element-title">Deployment</h3>
					    <h4 className="vertical-timeline-element-subtitle">1 day</h4>
					    <p>
					      Deliver tool to customer, and provide assistance until the script is working properly.
					    </p>
					  </VerticalTimelineElement>
					  <VerticalTimelineElement
					    className="vertical-timeline-element--education"
					    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
					  >
					    <h3 className="vertical-timeline-element-title">Technical Support</h3>
					    <h4 className="vertical-timeline-element-subtitle">To infinity, and beyond.</h4>
					    <p>
					      24/7 assistance for any tools developed by us.
					    </p>
					  </VerticalTimelineElement>
					  <VerticalTimelineElement
					    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
					  />
				</VerticalTimeline>	
			</div>
		);
	}
}

class ServiceList extends Component {
	render() {
		return(
			<div>
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
					<h1 className="text-center display-5" id="offers">Inquiries</h1><br/>
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