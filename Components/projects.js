import React from 'react';
import {Box, Text, Spacer, Flex, useMediaQuery} from '@chakra-ui/react';
import Card from './card';
import styles from '../styles/Projects.module.css';

const projects = () => {

  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Box bgColor='whiteAlpha.300' className={styles.container}>
      <Flex style={styles.Responsive} direction={isMobile? 'column' : 'row'}>

        <Box>
          <Text fontSize='4.3em' mb='0' style={{color: '#065666'}}>Projects</Text>
          <Text fontSize='1.2em' style={{color: '#C53030'}} m='0'>best way to apply</Text>
          <Text fontSize='1.2em' style={{color: '#C53030'}} m='0'>your theoritical knowledge</Text>
        </Box>
        <Spacer/>
        <a href={"https://github.com/tier3guy"} className={styles.anchor}><Text fontSize='1.1em' style={{color: '#C53030'}} mt={isMobile? '2em' : '6em'}> {'<'} Explore Github Profile {'/>'} </Text></a>
            
      </Flex>

      <Card
        textArea={"Acadmica, one stop solution for all your academic things . We're dedicated to giving you the very best of all the study materials and resources, with a focus on your overall academics, placements prepration and Roadmaps."}
        headerText="Acadmica"
        githubLink="https://github.com/tier3guy/Acadmica"
        liveUrl="https://acadmica.social"
      />

      <Card 
        textArea={"One of my biggest problem is my weak memory and because of that it happened my times that I have to sit for the upcoming Codechef contest, solving that problem I created this small codechef's contest reminder application, it fetches data from the codechef's website using web scrapping done in beautiful soup and in every 5 hours it sends me list of all the contests that have listed on their website."} 
        headerText="Contest Reminder Bot"
        githubLink="https://github.com/tier3guy/contest-reminder"
        liveUrl="https://github.com/tier3guy/contest-reminder"
      />

      <Card 
        textArea={"I can bet you once in your life you have definately used of this background removing application to make your profile picture more attractive and beautiful. So, a random thought came into my mind lets create our own application that will remove background from an image and I came up with this application. Do give a try."} 
        headerText="Background Eraser"
        githubLink="https://github.com/tier3guy/BG-REMOVER"
        liveUrl="https://617ba27410a9219c0a221181--bg-remove.netlify.app/"  
      />

      <Card 
        textArea={"Chekie is a cross-platform TODO application. The app is built on the top of React Native Technology. It will help you keep track of your todos."} 
        headerText="Chekie"
        githubLink="https://github.com/tier3guy/Chekie"
        liveUrl="https://github.com/tier3guy/Chekie"  
      />

    </Box>
  )
}

export default projects;