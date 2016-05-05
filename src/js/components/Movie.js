var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var Movie = React.createClass({
	render: function(){
		return(
				<div className="well" >
					<div className="row">
						<div className="col-md-6">
							<img className="thumbnail" src={this.props.movie.Poster} />
						</div>
						<div className="col-md-6">
							<h4>{this.props.movie.Title}</h4>
								<ul className="list-group">
									<li className="list-group-item">Year Released: {this.props.movie.Year}</li>
									<li className="list-group-item">IMDB: {this.props.movie.imdbID}</li>
								</ul>
						</div>
					</div>
				</div>
			)
	}
});

module.exports = Movie;