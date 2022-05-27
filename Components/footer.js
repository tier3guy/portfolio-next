import React from 'react';
import {Box, Text, Spacer, Flex, Textarea, Input, Button } from '@chakra-ui/react';
import main from '../Assets/secondary-main.svg';
import Image from 'next/image';
import styles from '../styles/footer.module.css'

const footer = () => {
  return (
    <>
    <Flex minH='90vh' width='100vw' bgColor='#FFFFF0' p='8em 4em'>
      <Box>
        <Text w='80%' as='h1' color='#065666'  fontSize='2em'  className='' mb='0'>Connect with me</Text>
        <Text w='50%' as='p' fontSize='1.1em' m='0' color='#C53030' className=''>“Communication is merely an exchange of information, but connection is an exchange of our humanity.”</Text>
      
        <Box mt='2em' className={styles.footer}>
          <Input className={styles.input} placeholder='example@hotmail.com' />
          <Textarea className={styles.textArea} placeholder='Put your message here.' />
        </Box>

        <Button className={styles.btn}>Send Message {'>'} </Button>
      </Box>
      
      <Spacer/>
      <Image src={main} bgColor='fffff0'/>
    </Flex>
    <Box w='100%' p='1em' bgColor='#065666' color='#FFFFF0' align='center'>Made by Avinash with ❤️</Box>
    </>
    )
}

export default footer