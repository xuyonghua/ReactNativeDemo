/**
 * Created by xyh on 2017/6/6.
 */
import React from 'react';
import {
    StyleSheet,
    Button,
    Image,
    View,
    ViewPagerAndroid,
    Text
} from 'react-native';

class ChatScreen extends React.Component {
    static navigationOptions = {
        headerTitle: '聊天',
        headerTitleStyle:{
            alignSelf:'center',
            color:'#fff'
        },
        headerStyle:{
            backgroundColor:'#4982f8',
        },
    };

    render() {
        const {params} = this.props.navigation.state;
        return (
                <ViewPagerAndroid
                    style={styles.container}
                    initialPage={0}
                    onPageSelected={this._onPageSelected}>
                    <View style={styles.page1Style}>
                        <Text>First page</Text>
                        <Text style={{padding:20}}>Chat with {params.user}</Text>
                    </View>
                    <View style={styles.page2Style}>
                        <Text>Second page</Text>
                    </View>
                </ViewPagerAndroid>
        );
    }
    _onPageSelected(e){
        let page = e.nativeEvent.position;
        console.log("pageIndex"+page);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    page1Style: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f00'
    },
    page2Style: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ff0'
    },
});
export default ChatScreen;