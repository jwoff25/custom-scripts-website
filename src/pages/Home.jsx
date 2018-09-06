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
            <div>
                <div className="jumbotron text-center bg-dark">
					<h1 className="display-4" id="page-title">> Automate your processes.</h1> 
					<p className="lead">Tech consulting and scripting solutions for tedious daily/business related tasks. Easy to use, and easier to get started.</p><br/>
					<p><Link className="btn btn-primary btn-lg" to="/order" role="button">Place an Order &raquo;</Link></p>
				</div>
				<Description />
				<ServiceList />
				<MainPoints />
				<Form />
            </div>
        );
    }
}

class Description extends Component {
    render() {
        return (
            <div className="bg-light" id="desc">
                <div className="container-fluid text-center">
                	<div className="row" id="desc-row1">
                		<div className="col-sm-4 text-center"/>
	                	<div className="col-sm-4 text-center" id="title">
	                		<h1 id="title-text">Our Services</h1>
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
        );
    }
}

// eslint-disable-next-line
class Description2 extends Component {
    render() {
        return (
            <div className="bg-light" id="desc">
                <div className="container-fluid">
                	<div className="row" id="desc-row1">
	                	<div className="col-sm-6 text-center">
	                		<span className="fas fa-clipboard-list fa-10x"/>
	                		<h2 className="display-6">Small Scale Tech Consulting</h2>
	                		<h4 className="display-6">We will help you evaluate any tedious or inefficient work in your business and present automated solutions.</h4>
	                		<p>Any business has their fair share of tedious tasks. Filling out excel sheets, gathering information from online sources, keeping track of emails, and so on. 
	                		You can submit these tasks to us, and we can help you create an automated program that can greatly reduce the amount of time spent on these tasks.
	                		Since everything will be done remotely, communication will be through skype or your messaging platform of choice. The solution will be well described and documented
	                		to prevent any kind of miscommunication in order to make sure that the program fits the job.
	                		</p>
	                	</div>
	                	<div className="col-sm-6 text-center">
	                		<span className="fas fa-code fa-10x"/>
	                		<h2 className="display-6">Process Automation</h2>
	                		<h4 className="display-6">Eliminate busy work and optimize your job using our programs.</h4>
	                		<p>After agreeing upon a solution for the inefficient processes, we will develop a programmed solution based on your requirements. 
	                		The script will be throughly tested and made to fit you/your business' needs. The program will be easy to use for anybody, at all levels of computer literacy.
	                		The final product will be delivered with technical documentation for those in need of technical details, as well as a manual for usage. We will assist you until and after 
	                		the program has been deployed. Small changes can be made at no charge for a certain duration - any changes after that will cost extra.
	                		</p>
	                	</div>
	                </div>
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line
class Timeline extends Component {
	render() {
		return (
			<div className="bg-dark container-fluid">
				<h1 className="text-center display-5" id="offers">General Timeline</h1><br/>
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
					    <h4 className="vertical-timeline-element-subtitle">Forever.</h4>
					    <p>
					      24/7 assistance for any tools developed by us.
					    </p>
					  </VerticalTimelineElement>
					  
				</VerticalTimeline>	
			</div>
		);
	}
}

class ServiceList extends Component {
	render() {
		return(
			<div className="bg-light">
				
			</div>
		);
	}
}

class MainPoints extends Component {
	render() {
		return (
			<div className="bg-dark">
                <div className="container-fluid">
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