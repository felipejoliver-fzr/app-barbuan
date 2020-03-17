import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import AuthInput from '../components/AuthInput'
import commonStyles from '../commonStyles'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false,
}

export default class Auth extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <View style={styles.background}>

                <View style={styles.logo}>
                    <Image
                        style={{ width: 230, height: 180 }}
                        source={require('../../assets/imgs/logo-barbuan.jpg')}
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.title}>
                        {this.state.stageNew ? 'Crie sua conta' : 'Insira seus dados'}
                    </Text>
                    {this.state.stageNew &&
                        <AuthInput icon='person'
                            placeholder='Nome Completo'
                            value={this.state.name}
                            style={styles.input}
                            onChangeText={name => this.setState({ name })} />
                    }
                    <AuthInput icon='at'
                        placeholder='E-mail'
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={email => this.setState({ email })} />

                    <AuthInput icon='lock'
                        placeholder='Senha'
                        value={this.state.password}
                        style={styles.input}
                        onChangeText={password => this.setState({ password })} />

                    {this.state.stageNew &&
                        <AuthInput icon='lock'
                            placeholder='Confirmação de senha'
                            value={this.state.confirmPassword}
                            style={styles.input}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                    }

                    <TouchableOpacity onPress={this.signInOrSignup}>
                        <View style={[styles.button]}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>

                    </TouchableOpacity>

                    <Text style={styles.tituloConta}>
                        {this.state.stageNew ? 'Possuo uma conta' : 'Não tem uma conta?'}
                    </Text>

                    <TouchableOpacity onPress={this.signInOrSignup}>

                        <Text style={styles.tituloCadastrese}>
                            Cadastre-se
                        </Text>

                    </TouchableOpacity>


                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        padding: 20,
        width: '90%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.09)',
        padding: 20,
        width: '90%',
        borderRadius: 10

    },
    input: {
        marginTop: 10,
        backgroundColor: commonStyles.colors.secondary
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    tituloConta: {
        fontFamily: commonStyles.fontFamily,
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    tituloCadastrese: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    button: {
        backgroundColor: commonStyles.colors.primary,
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
    }
})
