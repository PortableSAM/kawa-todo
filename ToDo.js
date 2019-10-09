import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class ToDo extends Component {
	state = {
		isEditing: false,
		isCompleted: false,
		toDoValue: '',
	};
	render() {
		const { isCompleted, isEditing, toDoValue } = this.state;
		const { text } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.column}>
					<TouchableOpacity onPress={this._toggleComplete}>
						<View
							style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]}
						/>
					</TouchableOpacity>
					{isEditing ? (
						<TextInput
							style={[
								styles.input,
								styles.text,
								isCompleted ? styles.completedText : styles.uncompletedText,
							]}
							value={toDoValue}
							multiline={true}
							onChangeText={this._controllInput}
							returnKeyType={'done'}
							onBlur={this._endEditing}
						/>
					) : (
						<Text style={[styles.text, isCompleted ? styles.completedText : styles.uncompletedText]}>
							{text}
						</Text>
					)}
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
		const { text } = this.props;
		this.setState({
			isEditing: true,
			toDoValue: text,
		});
	};
	_endEditing = () => {
		this.setState({
			isEditing: false,
		});
	};
	_controllInput = text => {
		this.setState({ toDoValue: text });
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
	input: {
		marginVertical: 15,
		width: width / 2,
	},
});
