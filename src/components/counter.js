import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'



class Counter  extends Component{
	handleChange = () => (e)=> {
		//debugger;
		console.log(this.props.value)
		console.log(this.props.dispatch)
	}
	render(){
		
		const {value, addValue, data} = this.props;
		return (
			<div>
		        <button onClick={this.handleChange()}>
		        	add
		        </button>
		        <div>
		          Clicked: {value} times {data.name}
		        </div>
		       
		    </div>
		)
	}
}

export default connect(
	state => ({
		value: state.value,
		data: state.data || {name: "test"}
	})
)(Counter)