import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import AuthInput from '../components/AuthInput'
import commonStyles from '../commonStyles'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false,
    esqueciMinhaSenha: false,
}

export default class Auth extends Component {

    state = {
        ...initialState
    }

    signInOrSignup = () => {
        if (this.state.stageNew) {
            this.signInOrSignup
        }
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
                        <AuthInput icon='user'
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
                    {!this.state.stageNew &&
                        <TouchableOpacity onPress={() => {this.setState({ esqueciMinhaSenha: !this.state.esqueciMinhaSenha })}}>

                            <Text style={styles.esqueceuSuaSenha}>
                                Esqueceu sua senha?
                        </Text>

                        </TouchableOpacity>
                    }


                </View>

                <View style={styles.containerNaoPossuiConta}>

                    {!this.state.stageNew &&

                        <Text style={styles.tituloConta}>
                            Não possui uma conta?
                        </Text>

                    }

                    {this.state.stageNew &&
                        <TouchableOpacity onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                            <Text style={styles.tituloConta}>
                                Já possuo uma conta
                            </Text>
                        </TouchableOpacity>
                    }


                    {!this.state.stageNew &&
                        <TouchableOpacity onPress={() => this.setState({ stageNew: !this.state.stageNew })}>

                            <Text style={styles.tituloCadastrese}>
                                Cadastre-se
                        </Text>

                        </TouchableOpacity>
                    }

                </View>

                {/* <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        borderColor: '#808080', 
                        borderWidth: 0.5,
                        width: '10%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10

                    }}>

                    </View>

                    <Text style={styles.tituloConta}>
                      Ou acesse via
                    </Text>

                    <View style={{
                        borderColor: '#808080', 
                        borderWidth: 0.5,
                        width: '10%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 10

                    }}></View>
                </View> 


                <View style={styles.containerFormasDeLogin}>

                    <TouchableOpacity>

                        <View style={styles.botaoLogarVia}>
                            <Icon name='google' size={20} />
                            <Text> Google </Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity>

                        <View style={styles.botaoLogarVia}>
                            <Icon name='facebook' size={20} />
                            <Text> Facebook </Text>
                        </View>

                    </TouchableOpacity>

                </View>
*/}

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
        alignItems: 'center',
        justifyContent: 'center'
    },
    esqueceuSuaSenha: {
        fontFamily: commonStyles.fontFamily,
        color: '#000',
        fontSize: 17,
        textAlign: 'right',
        marginTop: 10
    },
    tituloCadastrese: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',

        marginLeft: 5
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
    },
    containerNaoPossuiConta: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    containerFormasDeLogin: {
        flexDirection: 'row',
        marginTop: 10,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    botaoLogarVia: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
