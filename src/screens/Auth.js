import React from 'react'

import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ImageBackground,
	TouchableOpacity,
	Alert
} from 'react-native'
import AuthInput from '../components/AuthInput'
import CommonStyles from '../CommonStyles'
import backgroundImage from '../../assets/imgs/today.jpg'

export default class Auth extends React.Component {
	state = {
		stageNew: false,
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	}

	signinOrSignup = () => {
		if(this.state.stageNew) {
			Alert.alert('Sucesso!', 'Criar Conta')
		} else {
			Alert.alert('Sucesso!', 'Logar')
		}
	}

	render () {
		return (
			<ImageBackground source={backgroundImage}
				style={styles.background}>
				<Text style={styles.title}>Tarefas</Text>

				<View style={styles.formContainer}>
					<Text style={styles.subtitle}>
						{ this.state.stageNew ? 'Crie uma Conta.'
							: 'Informe seus dados.'}
					</Text>
					{this.state.stageNew &&
						<AuthInput icon='user' placeholder='Nome'
							style={styles.input}
							value={this.state.name}
							onChangeText={name => this.setState({ name })} />}

					<AuthInput icon='at' placeholder='e-Mail' style={styles.input}
						value={this.state.email}
						onChangeText={email => this.setState({ email })} />

					<AuthInput icon='lock'
						secureTextEntry={true}
						placeholder='Senha'
						style={styles.input }
						value={this.state.password}
						onChangeText={password => this.setState({ password })} />

					{this.state.stageNew &&
						<AuthInput icon='asterisk'
							secureTextEntry={true}
							placeholder='Confirmação'
							style={styles.input}
							value={this.state.confirmPassword}
							onChangeText={confirmPassword => this.setState({ confirmPassword })} />}

					<TouchableOpacity onPress={this.signinOrSignup}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>
								{this.state.stageNew ? 'Registrar' : 'Entrar'}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={{ padding: 10 }}
					onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
					<Text style={styles.buttonText}>
						{this.state.stageNew ? 'Já possue uma conta?': 'Ainda não possue uma conta?'}
					</Text>
				</TouchableOpacity>
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: CommonStyles.fontFamily,
        color: '#FFF',
        fontSize: 70,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: CommonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: CommonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    }
})