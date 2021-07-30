import PushNotification from 'react-native-push-notification';
PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: function (notification) {
        console.log('LOCAL NOTIFICATION ==>', notification)
    },

    popInitialNotification: true,
    requestPermissions: true
})