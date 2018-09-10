import React, { Component } from 'react';
import './Home_jp.css';
import 'react-vertical-timeline-component/style.min.css';
import Formjp from '../components/Form_jp.jsx';
//import Navbar from '../components/Navbar.jsx';
//import Footer from '../components/Footer.jsx';

class Home_jp extends Component {
    render() {
        return (
            <div id="home">
                <div className="jumbotron text-center bg-dark">
					<h1 className="display-4" id="page-title">> あらゆるプログラミングソリューションを、ここに。</h1> 
					<p className="lead">冗長な日常業務を改善するITコンサルティング・スクリプト作成サービス。気軽にご相談ください。</p><br/>
					<p><a className="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#modalContactForm">Place an Order &raquo;</a></p>
				</div>
				<Description />
				<MainPoints />
				<ServiceList />
				<Formjp />
				
				<div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" method="post">
				    <div class="modal-dialog" role="document">
				        <div class="modal-content">
				            <div class="modal-header text-center">
				                <h4 class="modal-title w-100 font-weight-bold">Place an Order</h4>
				                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				                    <span aria-hidden="true">&times;</span>
				                </button>
				            </div>
				            <form class="modal-body mx-3" action="https://formspree.io/customscripts.order@gmail.com" method="POST">
				                <div class="md-form mb-2">
				                    <i class="fa fa-user prefix grey-text"></i>
				                    <label data-error="wrong" data-success="right" for="form34">&nbsp;Your name</label>
				                    <input type="text" id="form34" class="form-control validate" name="name"/>
				                </div>
				
				                <div class="md-form mb-2">
				                    <i class="fa fa-envelope prefix grey-text"></i>
				                    <label data-error="wrong" data-success="right" for="form29">&nbsp;Your email</label>
				                    <input type="email" id="form29" class="form-control validate" name="email"/>
				                </div>
				
				                <div class="md-form mb-2">
				                    <i class="fa fa-tag prefix grey-text"></i>
				                    <label data-error="wrong" data-success="right" for="form32">&nbsp;Service</label>
				                    <select class="form-control" id="exampleFormControlSelect1" name="service">
										<option selected disabled hidden>Select</option> 
										<option value="personal">Personal</option>
										<option value="corporate">Corporate</option>
										<option value="enterprise">Enterprise</option>
										<option value="other">Not Sure/Other</option>
									</select>
				                </div>
				                <div class="md-form">
				                    <i class="fa fa-pencil-alt prefix grey-text"></i>
				                    <label data-error="wrong" data-success="right" for="form8">&nbsp;Your message</label>
				                    <textarea type="text" id="form8" class="md-textarea form-control" rows="4" name="desc"></textarea>
				                </div>
				
				            
				            <div class="modal-footer d-flex justify-content-center">
				                <button class="btn btn-unique" value="submit">Send <i class="fa fa-paper-plane ml-1"></i></button>
				            </div>
				            </form>
				        </div>
				    </div>
				</div>
				
				<div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        ...
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" class="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>
            </div>
            
        );
    }
}

class Description extends Component {
    render() {
        return (
        	<div id="description">
            <div className="bg-light" id="desc">
            	<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
			      <h1 class="display-4">Our Services</h1>
			      <p class="lead">According to surveys, 80% of a work day is wasted on menial tasks. We can help you cut this down so you can focus on the important tasks.</p>
			    </div>
                <div className="container-fluid text-center">
                	<div className="row" id="desc-row1">
                		<div className="col-sm-1 text-center"/>
	                	<div className="col-sm-5 text-center">
	                		<span className="fas fa-clipboard-list fa-10x"/>
	                		<h2 className="display-6">深く、狭くを掲げたコンサルティングサービス</h2>
	                		<p className="lead">お客様の事業においてより改善の余地がある箇所を我々が調査し、解決策を提案します。</p>
	                	</div>
	                	<div className="col-sm-5 text-center">
	                		<span className="fas fa-code fa-10x"/>
	                		<h2 className="display-6">プロセスの効率化</h2>
	                		<p className="lead">弊社サービスで、作業的な業務を効率化。</p>
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
	                		<i class="fas fa-file-invoice-dollar fa-10x"></i>
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
			<div className="bg-light" id="pricing">
				<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
			      <h1 class="display-4">Service Tiers</h1>
			      <p class="lead">The service provided and cost can depend on the scale of the project. Tiers are based on how long the project will take.</p>
			      <p class="text-muted">*We will work with you to determine how long your project should take.</p>
			    </div>
			
			    <div class="container" id="pad-top">
			      <div class="card-deck mb-3 text-center">
			        <div class="card mb-4 shadow-sm">
			          <div class="card-header">
			            <h4 class="my-0 font-weight-normal">Personal</h4>
			          </div>
			          <div class="card-body">
			            <h1 class="card-title pricing-card-title">1~3 Days</h1>
			            <p class="text-muted">Personal projects and small business tasks that can be done with one script, like:</p>
			            <ul class="list-unstyled mt-3 mb-4">
			              <li>Web scraping (one time)</li>
			              <li>Sorting data</li>
			              <li>Excel sheet macros</li>
			              <li>Graphing data</li>
			            </ul>
			          </div>
			        </div>
			        <div class="card mb-4 shadow-sm">
			          <div class="card-header">
			            <h4 class="my-0 font-weight-normal">Corporate</h4>
			          </div>
			          <div class="card-body">
			            <h1 class="card-title pricing-card-title">1~2 Week(s)</h1>
			            <p class="text-muted">Medium scale business tasks that require multiple scripts or large projects, like:</p>
			            <ul class="list-unstyled mt-3 mb-4">
			              <li>Web scraping (multi-use)</li>
			              <li>Report creation</li>
			              <li>Excel sheet automation</li>
			              <li>Data analysis</li>
			            </ul>
			          </div>
			        </div>
			        <div class="card mb-4 shadow-sm">
			          <div class="card-header">
			            <h4 class="my-0 font-weight-normal">Enterprise</h4>
			          </div>
			          <div class="card-body">
			            <h1 class="card-title pricing-card-title">~1 Month</h1>
			            <p class="text-muted">Full scale business process automation. This tier comes with in depth consulting on how best to optimize your workload.</p>
			            <p class="list-unstyled mt-3 mb-4">
			              Contact us and let us know if your project may require this tier.
			            </p>
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
				<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
			      <h1 class="display-4">What We Offer</h1>
			      <p class="lead">Quality is a guarantee with CustomScripts. But there's so much more we offer with it.</p>
			    </div>
                <div className="container-fluid" id="desc">
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
	                		<h4>On-Demand Support</h4>
	                		<p className="small" id="offer-text-6">Always prepared to fix bugs and address concerns.</p>
	                	</div>
	                </div>
                </div>
            </div>	
		);
	}
}

export default Home_jp;