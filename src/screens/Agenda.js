import React from 'react'
import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	FlatList,
	TouchableOpacity,
	Platform
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import CommonStyles from '../CommonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

import Task from '../components/Task'

export default class Agenda extends React.Component {
	state = {
		tasks: [
			{
				id: Math.random(),
				description: 'Comprar curso de React native',
				estimateAt: new Date(),
				doneAt: new Date()
			},
			{
				id: Math.random(),
				description: 'Concluir o curso',
				estimateAt: new Date(),
				doneAt: null
			},
			{
				id: Math.random(),
				description: 'Comprar curso de React native',
				estimateAt: new Date(),
				doneAt: new Date()
			},
			{
				id: Math.random(),
				description: 'Concluir o curso',
				estimateAt: new Date(),
				doneAt: null
			},
			{
				id: Math.random(),
				description: 'Comprar curso de React native',
				estimateAt: new Date(),
				doneAt: new Date()
			},
			{
				id: Math.random(),
				description: 'Concluir o curso',
				estimateAt: new Date(),
				doneAt: null
			},
			{
				id: Math.random(),
				description: 'Comprar curso de React native',
				estimateAt: new Date(),
				doneAt: new Date()
			},
			{
				id: Math.random(),
				description: 'Concluir o curso',
				estimateAt: new Date(),
				doneAt: null
			},
		],
		visibleTasks: [],
		showTasksDone: true
	}

	filterTasks = () => {
		let visibleTasks = null
		if(this.state.showDoneTasks) {
			visibleTasks = [...this.state.tasks]
		} else {
			const pendding = task => task.doneAt === null
			visibleTasks = this.state.tasks.filter(pendding)
		}
		this.setState({ visibleTasks })
	}

	toggleFilter = () => {
		this.setState({ showDoneTasks: !this.state.showDoneTasks },
			this.filterTasks)

	}

	toggleTask = id => {
		const tasks = this.state.tasks.map(task => {
			if(task.id === id) {
				task = { ...task}
				task.doneAt = task.doneAt ? null : new Date()
			}
			return task
		})

		this.setState({ tasks }, this.filterTasks)
	}

	componentDidMount = () => {
		this.filterTasks()
	}

	render () {
		return (
			<View style={styles.container}>
				<ImageBackground source={todayImage} style={styles.background}>
					<View style={styles.iconBar}>
						<TouchableOpacity onPress={this.toggleFilter}>
							<Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
								size={20}
								color={CommonStyles.colors.secondary} />
						</TouchableOpacity>
					</View>
					<View style={styles.titleBar}>
						<Text style={styles.title}>Hoje</Text>
						<Text style={styles.subtitle}>
							{moment().locale('pt-br').format('ddd, D [de] MMMM')}
						</Text>
					</View>
				</ImageBackground>

				<View style={styles.tasksContainer}>
					<FlatList
						data={this.state.visibleTasks}
						keyExtractor={item => `${item.id}`}
						renderItem={({item}) =>
							<Task { ...item } toggleTask={this.toggleTask} />} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 3
	},
	titleBar: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	title: {
		fontFamily: CommonStyles.fontFamily,
		color: CommonStyles.colors.secondary,
		fontSize: 50,
		marginLeft: 20,
		marginBottom: 10
	},
	subtitle: {
		fontFamily: CommonStyles.fontFamily,
		color: CommonStyles.colors.secondary,
		fontSize: 20,
		marginLeft: 20,
		marginBottom: 30
	},
	tasksContainer: {
		flex: 7
	},
	iconBar: {
		marginTop: Platform.OS === 'ios' ? 30 : 10,
		marginHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}
})