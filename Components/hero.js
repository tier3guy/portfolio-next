import React from 'react';
import { Box, Flex, Spacer, Text, Center } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import main from '../Assets/main.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <Box className={styles.hero}>
      <Flex justifyContent={'center'} align='center'>
        <Box border='2px' borderColor='red'>
          <Text className={styles.headerText}>Hey There,</Text>
          <Text className={styles.headerText}>I ' am Avinash</Text>

          <Text as='h3' className={styles.textemail} marginTop='3em'>avinashgupta.works</Text>
          <h2 className={styles.textemail}>@gmail.com</h2>
        </Box>

        <Spacer/>

        <Image src={main} />

        <Spacer/>

        <Text w='20%'>I design beautifully things and I love what I do.</Text>
      </Flex>
    </Box>
  )
}

export default Hero;