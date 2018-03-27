import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { clearLocalNotifications, setLocalNotification } from '../utils/notifications'



class Quiz extends Component {

	constructor(props){
		super(props)
		this.state = {
			currentCard: {},
			cardIndex: 0,
			score: 0,
			viewAnswer: false,
			showScore: false

		}
	}

	componentDidMount(){
		const { cardIndex } = this.state

		this.setState({currentCard: {
			...this.props.deck[cardIndex]
		}})
	}

	toggleAnswer(){
		this.setState({viewAnswer: !this.state.viewAnswer})
	}


	getNextCard(){

		if(this.state.cardIndex + 1 < this.props.deck.length){
			const next = this.state.cardIndex + 1;
			this.setState({cardIndex: next,
					   currentCard: {
					   		...this.props.deck[next]
					   	}
					  })
		}else{
			this.viewScore();
		}


	}


	viewScore(){
		this.setState({showScore: true})
	}



	markCorrect(){
		this.getNextCard()
		this.setState({
			score: this.state.score + 1
		})
	}

	markIncorrect(){
		this.getNextCard();
	}


	restartQuiz(){
		this.setState({
			currentCard: {
				...this.props.deck[0]
			},
			cardIndex: 0,
			score: 0,
			showScore: false
		})
	}


	render(){

		if(this.state.showScore){

			clearLocalNotifications().then(setLocalNotification)
			return (
				<View style={styles.bottomContent}>
					<Text style={styles.questionText}>YOUR SCORE:</Text>
					<Text style={styles.questionText}>{this.state.score}/{this.props.deck.length}</Text>
					<TouchableOpacity style={[styles.bottonContainer, {backgroundColor: 'black'}]} onPress={()=>this.restartQuiz()}>
						<Text style={styles.bottonText}>Restart</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.bottonContainer, {backgroundColor: 'black'}]} onPress={()=>this.props.navigation.navigate('DeckDetails', {deck: this.props.currentDeck.title})}>
						<Text style={styles.bottonText}>Back to Deck</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.bottonContainer, {backgroundColor: 'black'}]} onPress={()=>this.props.navigation.navigate('Home')}>
						<Text style={styles.bottonText}>Change Deck</Text>
					</TouchableOpacity>
				</View>
			)
		}
		else if(this.state.viewAnswer){
			const { answer } = this.state.currentCard;

			return (
				<View style={styles.container}>
					<Text style={styles.numOfCards}>{this.state.cardIndex + 1}/{this.props.deck.length}</Text>
					<View style={styles.bottomContent}>
						<Text style={styles.answerText}>{answer}</Text>
						<TouchableOpacity onPress={()=>this.toggleAnswer()}>
							<Text style={styles.toggleText}>Question</Text>
						</TouchableOpacity>
					</View>
				</View>
			)
		}else{
			const { question } =  this.state.currentCard;
			return (
				<View style={styles.container}>
					<Text style={styles.numOfCards}>{this.state.cardIndex + 1}/{this.props.deck.length}</Text>
					<View style={styles.bottomContent}>
						<Text style={styles.questionText}>{question}</Text>
						<TouchableOpacity onPress={()=>this.toggleAnswer()}>
							<Text style={styles.toggleText}>Answer</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.bottonContainer, {backgroundColor: 'green'}]} onPress={()=>this.markCorrect()}>
							<Text style={styles.bottonText}>Correct</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.bottonContainer, {backgroundColor: 'red'}]} onPress={()=>this.markIncorrect()}>
							<Text style={styles.bottonText}>Incorrect</Text>
						</TouchableOpacity>
					</View>
				</View>
			)

		}

	}

}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	numOfCards: {
		textAlign: 'left'
	},

	questionText: {
		textAlign: 'center',
		color: 'black',
		fontSize: 60
	},

	bottomContent: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'

	},

	bottonContainer: {
		width: 170,
		padding: 20,
		borderRadius: 5,
		marginTop: 20

	},

	bottonText: {
		fontSize: 30,
		color: 'white',
		textAlign: 'center'
	},

	toggleText: {
		fontSize: 30,
		color: 'red'
	},

	answerText: {
		fontSize: 20,
		textAlign: 'center',
		color: 'black',
		marginBottom: 10,
		padding: 10
	},



})

function mapStateToProps(state){

	return {
		deck: state.currentDeck.questions,
		currentDeck: state.currentDeck
	}
}


function mapDispatchToProps(){
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)


