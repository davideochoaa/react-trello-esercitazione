import React from 'react'
import PropTypes from 'prop-types';

class InputText extends React.Component {
	constructor(props) {
		super(props)
		this.input = React.createRef();
	}

	state = {};

	/*handleChange = (e) => {

		//console.log(e.target.value);
		//console.log(this.input.current.value);
		/*this.setState({
			value: e.target.value,
		})
	};*/



	render() {
		return (
			<input
				type={"text"}
				name={this.props.name}
				id={this.props.id}
				onChange={this.props.onChange}
				value={this.props.value}
				//ref={this.input}
			></input>
		);
	}
}

InputText.propTypes = {
	name: PropTypes.string,
}

export default InputText;