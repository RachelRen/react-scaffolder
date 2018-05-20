import React, { Component, PropTypes } from 'react'
import defaultCourseImg from 'Images/defaultCourseImg.png';




class Info  extends Component{
	constructor() {
        super();
    }
	render(){
		
		const {value, addValue, data} = this.props;
		return (
			<section className="m-info-section">
		        <div className="m-info-section-img">
		        	<img alt="info" src={defaultCourseImg} />
		        </div>
		        <div className="m-info-section-infos">
		        	<h3>福利资讯</h3>
		        	<table>
		        		<tbody>
		        			<tr>
		        				<td></td>
		        				<td></td>
		        			</tr>
		        		</tbody>
		        	</table>
		        </div>
		       
		    </section>
		)
	}
}

export default Info