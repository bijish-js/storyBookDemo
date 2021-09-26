import React from 'react';

import CustomHeader  from './CustomHeader';

import { Meta,Story } from '@storybook/react';


interface CustomHeaderProps {
  heading:string,
  desc:string
  }


export default {
  component: CustomHeader,
  title: 'Components/Custom Header',
} as Meta;



const Template:Story<CustomHeaderProps>=(args)=><CustomHeader {...args}/>;

export const SimpleHeader=Template.bind({})
SimpleHeader.args={
    heading:"this is a test :)",
    desc:"helooo"
}