import React from 'react';
import {Box, Text, Spacer, Flex} from '@chakra-ui/react';
import Timeline from '../Components/timeline';

const education = () => {
  return (
    <Box minH='100vh' width='100vw' style={{backgroundColor: '#F7FAFC'}} p='0 4em' pb='2em'>
      <Text fontSize='4.3em' m='0' p="0" style={{color: '#065666'}}><span style={{color: '#C53030', fontSize: '4em'}}>.</span>education &rarr;</Text>

      <Timeline/>
    </Box>
  )
}

export default education;