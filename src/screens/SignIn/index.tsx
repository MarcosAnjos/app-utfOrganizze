import React ,{ useContext} from "react";
import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper,
} from "./styles";
import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
import LogoSvg from '../../assets/logo.svg'

import { RFValue } from "react-native-responsive-fontsize";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { useAuth } from "../../hooks/auth";
import { Alert, Platform } from "react-native";


export function SignIn() {
   const {signInWithGoogle, signInWithApple} = useAuth()

   async function handleSignInWithGoogle(){
    try{
       return await signInWithGoogle()
    }catch(err){
        console.log(err.message)
        Alert.alert('Não foi possivel conectar a conta google')
    }
   }

   async function handleSignInWithApple(){
    try{
        await signInWithApple()
    }catch(err){
        console.log(err.message)
        Alert.alert('Não foi possivel conectar a conta google')
    }
   }
   
    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>
                        Você no Controle  {'\n'}
                        das  {'\n'}
                        suas finaças
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Faça seu Login  {'\n'}
                    usando uma conta abaixo
                </SignInTitle>
            </Header>
            <Footer>
                <FooterWrapper>
                    
                    <SignInSocialButton
                        title="Entrar com conta Apple"
                        svg={AppleSvg}
                        onPress={handleSignInWithApple}
                    />
                    <SignInSocialButton
                    title="Entrar com conta Google"
                    svg={GoogleSvg}
                    onPress={handleSignInWithGoogle}
                    />

                </FooterWrapper>
            </Footer>
        </Container>
    )
}