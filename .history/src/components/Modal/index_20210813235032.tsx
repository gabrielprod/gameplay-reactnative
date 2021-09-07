import React from 'react'
import { ReactNode } from 'react'
import { View, Modal, ModalProps } from 'react-native'
import { styles } from '../../components/Background/styles'
import { Background } from '../Background'

type Props = ModalProps & {
  children: ReactNode
}

export function Modal({children, ...rest}: Props) {

  return (
    <Modal 
      transparent
      animationType="slide"
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar}/>
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  )
}