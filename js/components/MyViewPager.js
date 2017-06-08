/**
 * Created by xyh on 2017/6/7.
 */
import React from 'react';
import  {
    View,
    Image,
    Dimensions,
    ToastAndroid,
    StyleSheet
} from 'react-native';

import ViewPager from 'react-native-viewpager';

var deviceWidth = Dimensions.get('window').width;

const BANNER_IMGS = [
    require('./../image/banner/1.png'),
    require('./../image/banner/2.png'),
    require('./../image/banner/3.png'),
];

var images = [
    'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',
    'http://ac-c6scxa78.clouddn.com/91ead58b0bb213b6.jpg',
    'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg',
    'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',
    'http://ac-c6scxa78.clouddn.com/54fe022399902788.jpg',
];

export default class MyViewPager extends React.Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(images)
        }
    }

    _renderPage(data) {
        return (
            <Image
                source={{uri: data}}
                style={styles.page}
                onPress={this._onPageClick}/>
        );
    }

    /**
     dataSource: 提供页面数据,
     renderPage: 用于渲染页面视图,
     autoPlay: 为true 将自动播放,
     isLoop: 为true支持循环播放,
     locked: 为true禁止触摸滚动,
     onChangePage: 页面变化的回调,
     renderPageIndicator: 渲染自定义的 ViewPager indicator.
     */
    render() {
        return (
            <ViewPager
                style={this.props.style}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={true}/>
        );
    }

    _onPageClick(data) {
        ToastAndroid.show('Current page: ' + data, ToastAndroid.SHORT)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#999999',
    },
    page: {
        width: deviceWidth,//设备宽(只是一种实现，此处多余)
    },
});