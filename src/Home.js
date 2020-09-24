import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="background">

				

				<div class="hello">
				<h1 style={{ "font-weight" : "700"}}>Video Meet</h1>
				<h4 style={{ "font-weight" : "400"}}>Meet your friends in seconds!</h4>
				<br></br>
				<input id="roomKey" placeholder="Code" style={{ "margin-right" : "10px", width: "300px"}} onChange={e => this.handleChange(e)}></input>
					<Button id="joinRoom" style={{background: "#1B346D", color:"white"}} onClick={this.join} >Join / Create</Button>
				</div>
			</div>
		)
	}
}

export default Home;