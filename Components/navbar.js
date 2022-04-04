import React from 'react';
import { Box, Flex, Spacer, Text, Center, PhoneIcon, IconButton} from '@chakra-ui/react';
import Logo from './logo';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Flex className={styles.navbar} maxW='100vw' p='0.5em 3em' align='center'>
      <Logo/>
      <Spacer/>
      <Center className={styles.services} color='cyan.900' w='30%'>
        <Link href='#'><Text className={styles.links}>[  Services  ]</Text></Link>
        <Spacer/>
        <Link href='#'><Text className={styles.links}>Works</Text></Link>
        <Spacer/>
        <Link href='#'><Text className={styles.links}>Experiences</Text></Link>
      </Center>
      <Spacer/>
      <Link href='#'><Text className={styles.links}> +91 6290306361 </Text></Link>
    </Flex>
  )
}

export default Navbar;