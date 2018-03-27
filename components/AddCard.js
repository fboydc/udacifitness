import React, {Component} from 'react'
import { View, StyleSheet, TextInput, Button, Platform, TouchableOpacity, Text } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { insertCard, getDeck } from '../utils/api'


class AddCard extends Component{

	constructor(){
		super()
		this.state = {
			question: '',
			answer: ''
		}
	}


	addNewCard= ()=>{

		const {deck} = this.props.navigation.state.params
		this.props.addCard(deck, this.state)

		this.routeBack();


	}


	routeBack = (deck)=>{
		this.props.navigation.goBack();
	}

	render(){

		if(Platform.OS === 'ios'){
			return(
				<View style={styles.container}>
					<TextInput style={styles.input} value={this.state.question} onChangeText={(text)=>{this.setState({question: text })}}/>
					<TextInput style={styles.input} value={this.state.answer} onChangeText={(text)=>{this.setState({answer: text})}}/>
					<TouchableOpacity onPress={()=>{this.addNewCard()}} style={ styles.iosButton}>
						<Text style={styles.iosButtonText}>submit</Text>
					</TouchableOpacity>
				</View>

				)

		}else{
			return (
				<View style={styles.container}>
					<TextInput style={styles.input} value={this.state.question} onChangeText={(text)=>{this.setState({question: text})}}/>
					<TextInput style={styles.input} value={this.state.answer} onChangeText={(text)=>{this.setState({answer: text})}}/>
					<Button title="submit" color="black" onPress={()=>{this.addNewCard()}}/>
				</View>
			)
		}


	}
}


const styles = StyleSheet.create({
	container: {
	 	flex: 1,
	 	justifyContent: 'center',
	 	padding: 20
	},
	input: {
		borderColor: 'gray',
		height: 40,
		borderWidth: 1,
		marginBottom: 10
	},
	iosButton: {
		backgroundColor: 'black',
		padding: 15,
		borderRadius: 5
	},
	iosButtonText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 22
	}
})




function mapDispatchToProps(dispatch){
	return {
		addCard: (deck, card) => {
			insertCard(deck, card).then(()=>{
				getDeck(deck.title).then((deck)=>{
					dispatch(actions.addCard(deck, card))
					dispatch(actions.getDeck(deck))
				})
			})

		}
	}
}


export default connect(null, mapDispatchToProps)(AddCard)






