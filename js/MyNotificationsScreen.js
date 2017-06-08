/**
 * Created by ICBC on 2017/6/7.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        headerTitle: '通知',
        headerTitleStyle:{
            alignSelf:'center',
            color:'#fff'
        },
        headerStyle:{
            backgroundColor:'#4982f8',
        },
        drawerLabel: '通知',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./image/ic_trending@3x.png')}
                style={[styles.tabIcon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={{backgroundColor:'#fff'}}>
                <Button
                    style={{padding:20}}
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="点击打开侧滑菜单"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回我的界面"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
    },
});

export default MyNotificationsScreen;