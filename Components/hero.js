import React from 'react';
import { Box, Flex, Spacer, Text, Center, useMediaQuery } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import main from '../Assets/main.svg';
import Image from 'next/image';

const Hero = () => {

  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Box className={styles.hero}>
      <Flex justifyContent={'center'} align='center' direction={isMobile? 'column': 'row'}>
        <Box border='2px' borderColor='red'>
          <Text className={styles.headerText}>Hey There,</Text>
          <Text className={styles.headerText}>I ' am Avinash</Text>

          <Text as='h3' className={styles.textemail} marginTop={isMobile ? '1.5em' : '3em'}>avinashgupta.works</Text>
          <h2 className={styles.textemail}>@gmail.com</h2>
        </Box>

        <Spacer/>

        <Image src={main} className={styles.image} />

        <Spacer/>

        <Text w={isMobile? '80%' : '20%'} marginTop={isMobile ? '5em' : '0em'}>I design beautifully things and I love what I do.</Text>
      </Flex>
    </Box>
  )
}

export default Hero;