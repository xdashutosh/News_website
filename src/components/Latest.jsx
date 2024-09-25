import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiChat, BiLike, BiShare } from 'react-icons/bi'

const Latest = () => {
const [newscard,setnewscard]=useState([]);
const email = sessionStorage.getItem("auth");
useEffect(()=>{
const getdata =async()=>{




const res= await axios.post("http://localhost:5000/0auth/getalldata",{})
setnewscard(res?.data.reverse());
}
getdata();
},[])



  return (
    <Flex flexWrap={'wrap'} gap={12} mt={32} justifyContent={'center'}>
      {

        newscard?.map((data,i)=>(
          !data?.pending?(      <Card maxW='sm'>
            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar name={data?.email} backgroundColor={'blue'} color={'white'} />
          
                  <Box>
                    <Heading size='sm'>{data?.email.split("@")[0]}</Heading>
                    <Text>Posted on:<b>{data?.newsDate.split("T")[0]}</b></Text>
                  </Box>
                </Flex>
               
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                {data?.details.slice(21,160)}...
              </Text>
            </CardBody>
            <Image
              objectFit='cover'
              src={data?.image}
              alt='Chakra UI'
              />
          
            <CardFooter
              justify='space-between'
              flexWrap='wrap'
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
              >
              <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                Like
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                Comment
              </Button>
              <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                Share
              </Button>
            </CardFooter>
          </Card>):(<></>)
    
))
  
}

    </Flex>
  )
}

export default Latest