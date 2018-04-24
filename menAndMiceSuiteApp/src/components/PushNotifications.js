import React, {Component} from 'react';
import {PushNotificationIOS} from 'react-native';
import PushNotification from 'react-native-push-notification';

const configure = () => {
    PushNotification.configure({
        onNotification: function (notification) {
            notification.finish(PushNotificationIOS.FetchResult.NoData)
        },
        permissions: {
            alert: true,
            badge: true,
            sound: true
        },
        popInitialNotification: true,
        requestPermissions: true,
    });
};

const localNotification = ({message}) =>{
    PushNotification.localNotification({
        autoCancel: true,
        largeIcon: 'micon',
        smallIcon: 'micon',
        color: 'green',
        vibrate: true,
        vibration: 300,
        title: 'Status has changed',
        message: "Please check your domain(s)",
        playSound: true,
        soundName: 'default'
    })
};

export default { configure, localNotification };