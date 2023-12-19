import React from "react";
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export default function Date({Component}) {
	return class extends React.Component {
		state = {};
		componentDidMount () {
			this.setState({ date: moment(this.props.date).fromNow() });
		}
		render() {
			return <Component {...this.props} date={this.state.date} />
		}
	}
}