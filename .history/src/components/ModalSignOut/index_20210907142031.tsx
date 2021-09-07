import React from 'react'
import { ReactNode } from 'react'
import { View, Modal, ModalProps, TouchableWithoutFeedback, Text} from 'react-native'
import { styles } from './styles'
import { Background } from '../Background'
import { ButtonMedium } from '../ButtonMedium'

type Props = ModalProps & {
  closeModal: () => void
}

export function ModalSignOut({ closeModal,...rest}: Props) {

  return (
    <Modal 
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar}/>
              <View style={styles.contentSignOut}>
                <View style={styles.headTitle}>
                  <Text style={styles.title}>Deseja sair do Game</Text>
                  <Text style={styles.complementTitle}>Play?</Text>
                </View>

                <View style={styles.footer}>
                  <View style={styles.border}>
                    <ButtonMedium title="Não" buttonConfirm={false}/>
                  </View>
                  <ButtonMedium title="Sim" buttonConfirm/>
                </View> 
              </View>
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}