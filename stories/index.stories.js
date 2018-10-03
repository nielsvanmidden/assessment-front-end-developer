import React from 'react';

import { storiesOf } from '@storybook/react';

import data from './__data__/index.json';
import ToasterWithReact from '../2-create-toaster/src/js/components';

storiesOf('Toaster', module)
  .add('with React', () => <div><ToasterWithReact data={ data } /></div>)
  .add('with React and Redux', () => <div><ToasterWithReact data={ data } /></div>);
