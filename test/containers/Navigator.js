import { Platform } from "react-native";
import { StackNavigator } from "react-navigation";
import { PublicStyles, ThemeStyle } from "../utils/PublicStyleModule";
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import IndexView from "../pages";
import { MessageDetail } from "../../src/Root";
// import TestTab from "../pages/tab";
import MessageList from "../pages/list";



const Navigator = StackNavigator(
    {
        IndexView: {
            screen: IndexView,
            navigationOptions: {
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: "#3699FF"
                },
                title: "魔际 IM"
            }
        },
        Message: {
            screen: MessageList,
            navigationOptions: {
                title: '消息列表'
            }
        },
        MessageDetail: {
            screen: MessageDetail,
        },
        // TestTab: {
        //     screen: TestTab,
        //     navigationOptions: {
        //         header: null
        //     }
        // }
    },
    {
        navigationOptions: {
            headerTintColor: ThemeStyle.ThemeColor,
            gesturesEnabled: true,
            headerStyle: {
                backgroundColor: "#fff"
            }
        },
        initialRouteName: "IndexView",
        initialRouteParams: { isCloseable: true },
        mode: "card",
        ...Platform.select({
            ios: {
                headerMode: "float"
            },
            android: {
                headerMode: "screen",
                transitionConfig: () => ({
                    screenInterpolator: CardStackStyleInterpolator.forHorizontal
                })
            }
        })
    }
);

export default Navigator
