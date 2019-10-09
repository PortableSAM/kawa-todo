import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class ToDo extends Component {
	state = {
		isEditing: false,
		isCompleted: false,
	};
	render() {
		const { isCompleted } = this.state;
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this._toggleComplete}>
					<View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
				</TouchableOpacity>
				<Text style={styles.text}>Hello I'am To Do.</Text>
			</View>
		);
	}

	_toggleComplete = () => {
		this.setState(prevState => {
			return {
				isCompleted: !prevState.isCompleted,
			};
		});
	};
}

const styles = StyleSheet.create({
	container: {
		width: width - 70,
		borderBottomColor: '#d1d8e0',
		borderBottomWidth: StyleSheet.hairlineWidth,
		flexDirection: 'row',
		alignItems: 'center',
	},
	circle: {
		width: 25,
		height: 25,
		borderRadius: 15,
		borderWidth: 2,
		marginRight: 15,
	},
	completedCircle: {
		borderColor: '#778ca3',
	},
	uncompletedCircle: {
		borderColor: '#fc5c65',
	},
	text: {
		fontWeight: '600',
		fontSize: 20,
		marginVertical: 20,
	},
});
