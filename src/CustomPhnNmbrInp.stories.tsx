import React from 'react';

import CustomPhnNmbrInp  from './CustomPhnNmbrInp';

import { Meta,Story } from '@storybook/react';


interface CustomPhnNmbrInpProps {
  
  }


export default {
  component: CustomPhnNmbrInp,
  title: 'Components/Custom phone number input',
} as Meta;



const Template:Story<CustomPhnNmbrInpProps>=(args)=><CustomPhnNmbrInp {...args}/>;

export const CustomSelectAndInput=Template.bind({})
CustomSelectAndInput.args={
    
}