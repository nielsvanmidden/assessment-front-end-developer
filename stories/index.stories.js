import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import data from './__data__/index.json';

// exercise 2
import ToasterExerciseTwo from '../2-create-toaster/src/js/components';

// exercise 3
import ToasterExerciseThree from '../3-enable-redux/src/js/components';
import StoreExerciseThree from '../3-enable-redux/src/js/store';
import { setPristine as setPristineExerciseThree } from '../3-enable-redux/src/js/store/actions';

// excercise 4
import ToasterExerciseFour from '../4-separation-of-concerns/src/js/components';
import StoreExerciseFour from '../4-separation-of-concerns/src/js/store';
import { setPristine as setPristineExerciseFour } from '../4-separation-of-concerns/src/js/store/actions';

// 2
const ExerciseTwo = () => (<div><ToasterExerciseTwo data={ data } /></div>);

// 3
const storeExerciseThree = new StoreExerciseThree();
storeExerciseThree.dispatch(setPristineExerciseThree({ data }));

const ExerciseThree = () => (
  <Provider store={ storeExerciseThree }>
    <ToasterExerciseThree />
  </Provider>
);

// 4
const storeExerciseFour = new StoreExerciseFour();
storeExerciseFour.dispatch(setPristineExerciseFour({ data }));

const ExerciseFour = () => (
  <Provider store={ storeExerciseFour }>
    <ToasterExerciseFour />
  </Provider>
);

storiesOf('Toaster', module)
  .add('with React', () => <ExerciseTwo />)
  .add('with React and Redux', () => <ExerciseThree />)
  .add(`clean from browser API's`, () => <ExerciseFour />);
