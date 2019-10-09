import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import ToDo from './ToDo';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {
	state = {
		newTodo: '',
	};
	render() {
		const { newTodo } = this.state;
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Text style={styles.title}>Kawa To Do</Text>
				<View style={styles.card}>
					<TextInput
						style={styles.input}
						placeholder={'New To Do'}
						value={newTodo}
						onChangeText={this._controlNewToDo}
						returnKeyType={'done'}
						autoCorrect={false}
					/>
					<ScrollView contentContainerStyle={styles.ToDos}>
						<ToDo text={"Hello I'm a To Do"} />
					</ScrollView>
				</View>
			</View>
		);
	}
	_controlNewToDo = text => {
		this.setState({
			newTodo: text,
		});
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#cf6a87',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 30,
		marginTop: 50,
		fontWeight: '400',
		marginBottom: 30,
	},
	card: {
		backgroundColor: 'white',
		flex: 1,
		width: width - 50,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		...Platform.select({
			android: {
				elevation: 30,
			},
		}),
	},
	input: {
		padding: 20,
		borderBottomColor: '#d1d8e0',
		borderBottomWidth: 1,
		fontSize: 25,
	},
	ToDos: {
		alignItems: 'center',
	},
});
