import React, { useRef, useState } from 'react';
import { Box, Flex, Spacer, Text, Center } from '@chakra-ui/react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <Box bgColor='whiteAlpha.500' className={styles.aboutContainer}>
      <Text w='80%' as='h1' className={styles.headerText}>Who is avinash?</Text>
      <Text as='p' className={styles.contentText}>I' am Avinash Gupta from Kolkata, IN. </Text>
      <Text as='p' className={styles.contentText}>I am a young coder who is currently pursuing his bachelor's degree in Technology, specializing in Info. Tech. From the very first day in my B.Tech I am very passionate towards latest technology and that passion helped me cracking GSSoC in my first year only. In GSSoC'21, I acted as a frontend developer and build some cool frontend design for an open-source project @Algo-Phantoms, an online coding community platform.</Text>
      <Text as='p' className={styles.contentText}>After GSSoC'21, I got more interest in web developement and I started taking part in hackathons and I cannot forget the day when I was announced as the 1st runner-up in grand india level hackathon orgnized by codeForCause. The project that made me the 1st runner up was a an background removing react application.</Text>
      <Text as='p' className={styles.contentText}>Recently I am finished my internship as a React/Next JS intern @QwertyThoughts.com.</Text>
      
      <Text as='h6' fontSize='1.3em' marginTop='1em'>Why did I choose Engineering?</Text>

      <audio controls src='https://www.mboxdrive.com/3 idiots film dialogue Degree nahi hogi to naukri nahi hogi [TubeRipper.com].mp3'/>

      <Text w='80%' as='p' fontSize='1.2em' className={styles.contentText}>So, if you had liked my story. You can connect with @LinkedIn</Text>
      
    </Box>
  )
}

export default About