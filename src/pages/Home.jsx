import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Form from '../components/Form.jsx';
//import Navbar from '../components/Navbar.jsx';
//import Footer from '../components/Footer.jsx';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="jumbotron text-center bg-dark">
					<h1 className="display-4" id="page-title">> Automate your processes.</h1> 
					<p className="lead">Tech consulting and scripting solutions for tedious daily/business related tasks. Easy to use, and easier to get started.</p><br/>
					<p><Link className="btn btn-primary btn-lg" to="/" role="button">Place an Order &raquo;</Link></p>
				</div>
				<Description />
				<MainPoints />
				<ServiceList />
				<Form />
            </div>
        );
    }
}

class Description extends Component {
    render() {
        return (
        	<div id="description">
            <div className="bg-light" id="desc">
                <div className="container-fluid text-center">
                	<div className="row" id="desc-row1">
                		<div className="col-sm-4 text-center"/>
	                	<div className="col-sm-4 text-center" id="title">
	                		<h1 className="display-4">Our Services</h1>
	                	</div>
                		<div className="col-sm-4 text-center"/>
                	</div>
                	<div className="row" id="desc-row1">
                		<div className="col-sm-1 text-center"/>
	                	<div className="col-sm-5 text-center">
	                		<span className="fas fa-clipboard-list fa-10x"/>
	                		<h2 className="display-6">Small Scale Tech Consulting</h2>
	                		<p className="lead">We will help you evaluate any tedious or inefficient work in your business and present automated solutions.</p>
	                	</div>
	                	<div className="col-sm-5 text-center">
	                		<span className="fas fa-code fa-10x"/>
	                		<h2 className="display-6">Process Automation</h2>
	                		<p className="lead">Eliminate busy work and optimize your job using our programs.</p>
	                	</div>
	                	<div className="col-sm-1 text-center"/>
	                </div>
                	<div className="row text-center" id="aa">
                		<div className="col-sm-3 text-center"/>
                		<div className="col-sm-6 text-center" id="midtext">
	                		<p className="lead">Eliminate tedious processes, improve efficiency, and make your life easier with a simple script that can do the work for you.<br/> 
	                		Here are some examples of processes that can be automated:
	                		</p>
	                	</div>
                		<div className="col-sm-3 text-center"/>
                	</div>
                	<div className="row" id="desc-row2">
	                	<div className="col-sm-4 text-center desc-comp">
	                		<i class="fas fa-chart-pie fa-10x"></i>
	                		<h4>Graph / Charts</h4>
	                		<p className="lead">
	                			Automated scripts to create graphs and charts based on data/files passed into it. 
	                		</p>
	                	</div>
	                	<div className="col-sm-4 text-center desc-comp">
	                		<i class="fas fa-file-excel fa-10x"></i>
	                		<h4>Excel Spreadsheets</h4>
	                		<p className="lead">
	                			Add macros and cell calculations to make your spreadsheets more effective.
	                		</p>
	                	</div>
	                	<div className="col-sm-4 text-center desc-comp">
	                		<i class="fas fa-clipboard-list fa-10x"></i>
	                		<h4>Expense Reports</h4>
	                		<p className="lead">
	                			Auto-generated reports based on spreadsheets built with your needs in mind.
	                		</p>
	                	</div>
	                </div>
	                
                </div>
            </div>
            </div>
        );
    }
}

class ServiceList extends Component {
	render() {
		return(
			<div className="bg-light">
				<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
			      <h1 class="display-4">Pricing</h1>
			      <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
			    </div>
			
			    <div class="container">
			      <div class="card-deck mb-3 text-center">
			        <div class="card mb-4 shadow-sm">
			          <div class="card-header">
			            <h4 class="my-0 font-weight-normal">Free</h4>
			          </div>
			          <div class="card-body">
			            <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
			            <ul class="list-unstyled mt-3 mb-4">
			              <li>10 users included</li>
			              <li>2 GB of storage</li>
			              <li>Email support</li>
			              <li>Help center access</li>
			            </ul>
			            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
			          </div>
			        </div>
			        <div class="card mb-4 shadow-sm">
			          <div class="card-header">
			            <h4 class="my-0 font-weight-normal">Pro</h4>
			          </div>
			          <div class="card-body">
			            <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
			            <ul class="list-unstyled mt-3 mb-4">
			              <li>20 users included</li>
			              <li>10 GB of storage</li>
			              <li>Priority email support</li>
			              <li>Help center access</li>
			            </ul>
			            <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
			          </div>
			        </div>
			        <div class="card mb-4 shadow-sm">
			          <div class="card-header">
			            <h4 class="my-0 font-weight-normal">Enterprise</h4>
			          </div>
			          <div class="card-body">
			            <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
			            <ul class="list-unstyled mt-3 mb-4">
			              <li>30 users included</li>
			              <li>15 GB of storage</li>
			              <li>Phone and email support</li>
			              <li>Help center access</li>
			            </ul>
			            <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
			          </div>
			        </div>
			      </div>
				</div>
			</div>
		);
	}
}

class MainPoints extends Component {
	render() {
		return (
			<div className="bg-dark" id="mainpoints">
                <div className="container-fluid" id="desc">
                	<div className="row" id="desc-row1">
                		<div className="col-sm-4 text-center"/>
	                	<div className="col-sm-4 text-center" id="title">
	                		<h1 id="title-text">What We Offer</h1>
	                	</div>
                		<div className="col-sm-4 text-center"/>
                	</div>
                	<div className="row" id="first-row">
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-dollar-sign fa-2x"/>
	                		<h4>Competitive Pricing</h4>
	                		<p className="small" id="offer-text-1">Affordable prices that scale based on size of project. Completely negotiable.</p>
	                	</div>
	                	<hr/>
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

export default Home;