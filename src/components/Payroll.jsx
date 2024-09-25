import React from 'react'
import Clock from './Clock'
import { Flex, HStack, VStack ,Stack, Text, Heading, Box} from '@chakra-ui/react'
import { FaMailBulk, FaMoneyBill, FaUser } from 'react-icons/fa'
import { FaClockRotateLeft, FaListCheck } from 'react-icons/fa6'


const Payroll = () => {
  return (
    <VStack  mt={28} w={"100%"}  px={12}  >
        {/* <Clock/> */}
        <Flex flexWrap={'wrap'} gap={8}  width={'50%'} >
            
            <VStack  p={8}  backgroundColor={'orange'} color={'white'} rounded={'xl'} justifyContent={'center'} alignItems={'center'}>
<FaMoneyBill color='white' size={48}/>
<Text  textAlign={'center'} w={'100%'}>Salary Calculation</Text>
            </VStack>

            <VStack  p={8}  backgroundColor={'red'} color={'white'} rounded={'xl'} justifyContent={'center'} alignItems={'center'}>
<FaMailBulk color='white' size={48}/>
<Text  textAlign={'center'} w={'100%'}>Leave Applications</Text>
            </VStack>

            <VStack  p={8}  backgroundColor={'green'} color={'white'} rounded={'xl'} justifyContent={'center'} alignItems={'center'}>
<FaClockRotateLeft color='white' size={48}/>
<Text  textAlign={'center'} w={'100%'}>Duty Shifts</Text>
            </VStack>

            <VStack  p={8}  backgroundColor={'blue'} color={'white'} rounded={'xl'} justifyContent={'center'} alignItems={'center'}>
<FaListCheck color='white' size={48}/>
<Text  textAlign={'center'} w={'100%'}>Daily Roasters</Text>
            </VStack>
            <VStack  p={8}  backgroundColor={'gray'} color={'white'} rounded={'xl'} justifyContent={'center'} alignItems={'center'}>
<FaUser color='white' size={48}/>
<Text  textAlign={'center'} w={'100%'}>Employee Data</Text>
            </VStack>
            

        </Flex>
      
        
       
    </VStack>
  )
}

export default Payroll