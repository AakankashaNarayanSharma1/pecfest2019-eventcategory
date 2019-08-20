import React, { Component } from 'react';
import './App.css';
import demoImg from './img/1.jpg';

class EventCategory extends Component {
	render () {
		var className_ = this.props.selected ? 'grid__item underline' : 'grid__item';
		return (
			<div 
				className={className_}
				onClick={this.props.onClick} 
				id={this.props.id} 
			>
				{this.props.name}
			</div>
		)};
}

export default EventCategory;