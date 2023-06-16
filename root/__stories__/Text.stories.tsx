import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '../Typography';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const HeadingTemplate: ComponentStory<typeof Text> = (args) => (
  <>
    <Text as="h1">
      H1 - {args.children} - {args.children}
    </Text>
    <Text as="h2">H2 - {args.children}</Text>
    <Text as="h3">H3 - {args.children}</Text>
    <Text as="h4">H4 - {args.children}</Text>
    <Text as="h5">H5 - {args.children}</Text>
    <Text as="h6">H6 - {args.children}</Text>
    <Text>Normal Text - {args.children}</Text>
    <Text as="div">Div - {args.children}</Text>
    <Text as="p">Paragraph - {args.children}</Text>
    <Text as="subheading">Subheading - {args.children}</Text>
    <Text as="subtitle">Subtitle - {args.children}</Text>
    <Text as="subtitle-small">Subtitle Small - {args.children}</Text>
    <Text as="p-small">Para small - {args.children}</Text>
    <Text as="caption">Caption - {args.children}</Text>
    <Text as="caption-medium">Caption Medium - {args.children}</Text>
    <Text as="caption-medium-bold">caption Medium Bold - {args.children}</Text>
    <Text as="caption-large">Caption Large - {args.children}</Text>
    <Text as="overline">Overline - {args.children}</Text>
    <Text as="overline-medium">Overline Medium - {args.children}</Text>
    <Text as="tooltip">Tooltip - {args.children}</Text>
  </>
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic text',
};

export const Heading = HeadingTemplate.bind({});
Heading.args = {
  children: 'Heading',
};
