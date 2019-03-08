// import React from 'react'

import { createStackNavigator, createAppContainer } from "react-navigation";
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'

const MainRoutes = {
	Auth: {
		name: 'Auth',
		screen: Auth
	},
	Home: {
		name: 'Home',
		screen: Agenda
	}
}

const AppNavigator = createStackNavigator({ ...MainRoutes });

export default createAppContainer(AppNavigator);