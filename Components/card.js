import React from 'react';
import {Box, Text, Flex, Spacer} from '@chakra-ui/react';
import styles from '../styles/Card.module.css';
import gh from '../Assets/github-brands.svg';
import Image from 'next/image';

const card = (props) => {
  return (
      <Box className={styles.card}>
        <Flex justifyContent='center'>
          <Box>
            <Text m='1em' fontSize='2.3em' style={{color: '#065666'}}>{props.headerText}</Text>
            
            <Text m='0.5em 2.5em' w='85%' fontSize='1em' style={{color: '#C53030'}}>
              {props.textArea}
            </Text>
          </Box>
          <Spacer/>
          <a href={props.gh_link}><Image src={gh} height='100px' width='100px'/></a>
        </Flex>
      </Box>
      
  )
}

export default card