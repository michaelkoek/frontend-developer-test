import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import CandidateListScreen from '../screens/CandidateListScreen';
import MatchesScreen from '../screens/MatchesScreen';

const tabScreens = {
    CandidateList: {
        screen: CandidateListScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <MaterialCommunityIcons
                    name="cards-outline"
                    size={35}
                    color={tabInfo.tintColor} // use the color from the tabBarOptions
                />
            ),
        },
    },
    Matches: {
        screen: MatchesScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => (
                <Ionicons
                    name="ios-chatbubbles"
                    size={35}
                    color={tabInfo.tintColor}
                />
            ),
        },
    },
};

const TabNavigator = createBottomTabNavigator(tabScreens, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#e0917a',
        inactiveTintColor: '#b0b5c8',
        style: {
            backgroundColor: '#eaedf4',
        },
    },
});

export default createAppContainer(TabNavigator);
