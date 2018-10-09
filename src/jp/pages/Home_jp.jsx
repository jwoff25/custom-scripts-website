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
					<p className="lead">冗長な日常業務を楽にするITコンサルとスクリプトサービス。発注から導入まで、簡単に。</p><br/>
					<p><a className="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#modalContactForm">発注する &raquo;</a></p>
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
				            <form class="modal-body mx-3" action="https://formspree.io/order@custom-scripts.xyz" method="POST">
				                <div class="md-form mb-2">
				                    <i class="fa fa-user prefix grey-text"></i>
				                    <label data-error="wrong" data-success="right" for="form34">&nbsp;名前</label>
				                    <input type="text" id="form34" class="form-control validate" name="name"/>
				                </div>
				
				                <div class="md-form mb-2">
				                    <i class="fa fa-envelope prefix grey-text"></i>
				                    <label data-error="wrong" data-success="right" for="form29">&nbsp;メールアドレス</label>
				                    <input type="email" id="form29" class="form-control validate" name="email"/>
				                </div>
				
				                <div class="md-form mb-2">
				                    <i class="fa fa-tag prefix grey-text"></i>
				                    <label data-error="wrong" data-success="right" for="form32">&nbsp;サービス</label>
				                    <select class="form-control" id="exampleFormControlSelect1" name="service">
										<option selected disabled hidden>選択してください</option> 
										<option value="personal">Personal</option>
										<option value="corporate">Corporate</option>
										<option value="enterprise">Enterprise</option>
										<option value="other">Not Sure/Other</option>
									</select>
				                </div>
				                <div class="md-form">
				                    <i class="fa fa-pencil-alt prefix grey-text"></i>
				                    <label data-error="wrong" data-success="right" for="form8">&nbsp;詳細</label>
				                    <textarea type="text" id="form8" class="md-textarea form-control" rows="4" name="desc"></textarea>
				                </div>
				
				            
				            <div class="modal-footer d-flex justify-content-center">
				                <button class="btn btn-unique" value="submit">送信 <i class="fa fa-paper-plane ml-1"></i></button>
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
			      <h1 class="display-4">サービス</h1>
			      <p class="lead">我々の調査によれば、一日の80%は単調な作業で占められています。これらの作業を簡略化することによって、より重要な業務に時間を割くことが可能になります。</p>
			    </div>
                <div className="container-fluid text-center">
                	<div className="row" id="desc-row1">
                		<div className="col-sm-1 text-center"/>
	                	<div className="col-sm-5 text-center">
	                		<span className="fas fa-clipboard-list fa-10x"/>
	                		<h2 className="display-6">「根深い」ITコンサル</h2>
	                		<p className="lead">1から10まで、お客様のビジネスの中でより効率化できる部分を我々が探し、解決策を示します。</p>
	                	</div>
	                	<div className="col-sm-5 text-center">
	                		<span className="fas fa-code fa-10x"/>
	                		<h2 className="display-6">プロセスの自動化</h2>
	                		<p className="lead">プログラミングを使って作業を効率化し、無駄を省く。。</p>
	                	</div>
	                	<div className="col-sm-1 text-center"/>
	                </div>
                	<div className="row text-center" id="aa">
                		<div className="col-sm-3 text-center"/>
                		<div className="col-sm-6 text-center" id="midtext">
	                		<p className="lead">冗長な作業を省略し、効率を上げ、ビジネス運営をより簡単に。<br/> 
	                		自動化できるプロセスの例：
	                		</p>
	                	</div>
                		<div className="col-sm-3 text-center"/>
                	</div>
                	<div className="row" id="desc-row2">
	                	<div className="col-sm-4 text-center desc-comp">
	                		<i class="fas fa-chart-pie fa-10x"></i>
	                		<h4>データ分析・グラフ</h4>
	                		<p className="lead">
	                			スクリプトを使い、自動的にデータを分析しグラフやチャートに変換します。
	                		</p>
	                	</div>
	                	<div className="col-sm-4 text-center desc-comp">
	                		<i class="fas fa-file-excel fa-10x"></i>
	                		<h4>Excel表の編集・管理</h4>
	                		<p className="lead">
	                			マクロや関数より、Excelによるデータ管理をより効果的に。
	                		</p>
	                	</div>
	                	<div className="col-sm-4 text-center desc-comp">
	                		<i class="fas fa-file-invoice-dollar fa-10x"></i>
	                		<h4>経費精算</h4>
	                		<p className="lead">
	                			お客様のビジネスに合わせ、経費を自動的に計算します。
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
			      <h1 class="display-4">「Tier」一覧</h1>
			      <p class="lead">コストはプロジェクトの規模に左右されます。プロジェクトの規模を「Tier」と呼び、長さ・必要経費などのファクターによって決まります。</p>
			      <p class="text-muted">＊「Tier」に関しては、お客様と相談しながらこちらで決めさせていただきます。</p>
			    </div>
			
			    <div class="container" id="pad-top">
			      <div class="card-deck mb-3 text-center">
			        <div class="card mb-4 shadow-sm">
			          <div class="card-header">
			            <h4 class="my-0 font-weight-normal">Tier 3</h4>
			          </div>
			          <div class="card-body">
			            <h1 class="card-title pricing-card-title">1~3日</h1>
			            <p class="text-muted">簡単なスクリプトで解決できる個人的な業務やちょっとした作業など：</p>
			            <ul class="list-unstyled mt-3 mb-4">
			              <li>Webスクレイピング</li>
			              <li>データソート</li>
			              <li>Excelマクロ</li>
			              <li>グラフ作成</li>
			            </ul>
			          </div>
			        </div>
			        <div class="card mb-4 shadow-sm">
			          <div class="card-header">
			            <h4 class="my-0 font-weight-normal">Tier 2</h4>
			          </div>
			          <div class="card-body">
			            <h1 class="card-title pricing-card-title">1~2週間</h1>
			            <p class="text-muted">複数のスクリプト・より詳細な分析を必要とした中規模なタスクなど：</p>
			            <ul class="list-unstyled mt-3 mb-4">
			              <li>Webスクレイピング</li>
			              <li>レポート作成</li>
			              <li>Excel表の自動化</li>
			              <li>データ分析</li>
			            </ul>
			          </div>
			        </div>
			        <div class="card mb-4 shadow-sm">
			          <div class="card-header">
			            <h4 class="my-0 font-weight-normal">Tier 1</h4>
			          </div>
			          <div class="card-body">
			            <h1 class="card-title pricing-card-title">~1ヶ月間</h1>
			            <p class="text-muted">ビジネスプロセスの完全なる効率化。コンサルティングによって、最善の案を提供させていただきます。</p>
			            <p class="list-unstyled mt-3 mb-4">
			              こちらの「Tier」に関しましては直接ご相談ください。
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
			      <h1 class="display-4">「CustomScripts」を選ぶ理由</h1>
			      <p class="lead">CustomScriptsを選んでいただく以上、品質をはもちろん、他にも様々な利点があります。</p>
			    </div>
                <div className="container-fluid" id="desc">
                	<div className="row" id="first-row">
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-dollar-sign fa-2x"/>
	                		<h4>価格</h4>
	                		<p className="small" id="offer-text-1">プロジェクトの規模に合わせ、価格を交渉・調整します。</p>
	                	</div>
	                	<hr/>
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-clipboard fa-2x"/>
	                		<h4>柔軟</h4>
	                		<p className="small" id="offer-text-2">細分まで調整し、お客様のニーズに合わせたサービスを提供します。</p>
	                	</div>
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-comment fa-2x"/>
	                		<h4>コミュニケーション</h4>
	                		<p className="small" id="offer-text-3">品質とコンプライアンスを保証するため、お客様とのコミュニケーションを欠かしません。</p>
	                	</div>
	                </div>
	                <div className="row">
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-cog fa-2x"/>
	                		<h4>簡単</h4>
	                		<p className="small" id="offer-text-4">注文・導入まで簡単に。全力でサポートいたします。</p>
	                	</div>
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-clock fa-2x"/>
	                		<h4>プロフェッショナリズム</h4>
	                		<p className="small" id="offer-text-5">お客様の時間を無駄にはしません。製品を効率的に、無駄なくお届けします。</p>
	                	</div>
	                	<div className="col-sm-4 text-center">
	                		<span className="fas fa-question-circle fa-2x"/>
	                		<h4>迅速な対応</h4>
	                		<p className="small" id="offer-text-6">質問や疑問に迅速にお答えします。</p>
	                	</div>
	                </div>
                </div>
            </div>	
		);
	}
}

export default Home_jp;