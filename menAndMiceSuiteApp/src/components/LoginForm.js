import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Card, CardSection, Input, Button, Header} from "./common";

class LoginForm extends Component {
    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Image
                            style={styles.imageStyle}
                            resizeMode='contain'
                            source={require('../icons/logo.jpg')}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Username"
                            placeholder="username"
                        />
                    </CardSection>
                    <CardSection>
                        <Input

                            label="Password"
                            placeholder="password"
                        />
                    </CardSection>
                    <CardSection>
                        <Button>
                            Login
                        </Button>
                    </CardSection>
                </Card>
            </View>

        );
    }
}

const styles = {
    imageStyle: {
        flexShrink: 1,
        height: 90
    }
};

export default LoginForm;