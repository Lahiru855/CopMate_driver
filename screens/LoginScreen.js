import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Login Screen</Text>
            </View>
            <Button
                title="Go to SignUp"
                onPress={() => navigation.navigate('SignUp')}
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});