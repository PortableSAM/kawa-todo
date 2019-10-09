import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class ToDo extends Component {
	state = {
		isEditing: false,
		isCompleted: false,
	};
	render() {
		const { isCompleted, isEditing } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.column}>
					<TouchableOpacity onPress={this._toggleComplete}>
						<View
							style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]}
						/>
					</TouchableOpacity>
					<Text style={[styles.text, isCompleted ? styles.completedText : styles.uncompletedText]}>
						Hello I'am To Do.
					</Text>
				</View>
				{isEditing ? (
					<View style={styles.actions}>
						<TouchableOpacity onPressOut={this._endEditing}>
							<View style={styles.actionContainer}>
								<Text style={styles.actionText}>✔</Text>
							</View>
						</TouchableOpacity>
					</View>
				) : (
					<View style={styles.actions}>
						<TouchableOpacity onPressOut={this._startEditing}>
							<View style={styles.actionContainer}>
								<Text style={styles.actionText}>✒</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.actionContainer}>
								<Text style={styles.actionText}>❌</Text>
							</View>
						</TouchableOpacity>
					</View>
				)}
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
	_startEditing = () => {
		this.setState({
			isEditing: true,
		});
	};
	_endEditing = () => {
		this.setState({
			isEditing: false,
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
		justifyContent: 'space-between',
	},
	circle: {
		width: 25,
		height: 25,
		borderRadius: 15,
		borderWidth: 2,
		marginRight: 10,
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
		marginVertical: 10,
	},
	completedText: {
		color: '#778ca3',
		textDecorationLine: 'line-through',
	},
	uncompletedText: {
		color: '#2f3542',
	},
	column: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: width / 2,
	},
	actions: {
		flexDirection: 'row',
	},
	actionContainer: {
		marginVertical: 10,
		marginHorizontal: 15,
	},
});
