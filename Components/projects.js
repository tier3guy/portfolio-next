import React from 'react';
import {Box, Text, Spacer, Flex} from '@chakra-ui/react';
import Card from './card';

const projects = () => {
  return (
    <Box minH='100vh' width='100vw' bgColor='whiteAlpha.300' pt='8em' p='4em'>
      <Flex>

        <Box>
          <Text fontSize='4.3em' mb='0' style={{color: '#065666'}}>Projects</Text>
          <Text fontSize='1.2em' style={{color: '#C53030'}} m='0'>Perfect Solution for digital</Text>
          <Text fontSize='1.2em' style={{color: '#C53030'}} m='0'>experience.</Text>
        </Box>
        <Spacer/>
        <Text fontSize='1.1em' style={{color: '#C53030'}} mt='6em'> {'<'} Explore more works {'/>'} </Text>
            
      </Flex>

      <Card textArea={"Student's Community Club, your no. 1 source for all your academic things . We're dedicated to giving you the very best of all the study materials and resources, with a focus on your overall academics, placements prepration and Roadmaps."} headerText="Students Community Club"/>

      <Card textArea={"One of my biggest problem is my weak memory and because of that it happened my times that I have to sit for the upcoming Codechef contest, solving that problem I created this small codechef's contest reminder application, it fetches data from the codechef's website using web scrapping done in beautiful soup and in every 5 hours it sends me list of all the contests that have listed on their website."} headerText="Contest Reminder Bot"/>

      <Card textArea={"I can bet you once in your life you have definately used of this background removing application to make your profile picture more attractive and beautiful. So, a random thought came into my mind lets create our own application that will remove background from an image and I came up with this application. Do give a try."} headerText="Background Eraser"/>

    </Box>
  )
}

export default projects;