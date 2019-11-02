import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import CandidateListScreen from '../screens/CandidateListScreen';

const MainNavigator = createSwitchNavigator({
    CandidateList: CandidateListScreen,
});

export default createAppContainer(MainNavigator);
