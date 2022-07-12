import React, {Fragment, useState} from 'react';
import {View, Button, Text, ScrollView, Image} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  incremented,
  amountAdded,
  resetIt,
  amountDecreased,
} from '../redux/features/counter-slice';
import {useFetchBreedsQuery} from '../redux/features/dogs-api-slice';
import {Title} from './components/Content/styles';
const ReduxExampleScreen = () => {
  const {
    counter: {value: count},
  } = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const [numDogs, setNumDogs] = useState(5);
  const {data = [], isFetching} = useFetchBreedsQuery(numDogs);

  const onPress = () => {
    // increment by 1
    dispatch(incremented());
    // increment by a fixed amount
    // dispatch(amountAdded(3));
  };
  return (
    <Fragment>
      <Button title={`${count}`} onPress={onPress} color="green" />
      <Button
        title={'Reset'}
        onPress={() => {
          dispatch(resetIt());
        }}
        color="red"
      />
      <Button
        title={'decreseBy1'}
        onPress={() => {
          dispatch(amountDecreased(1));
        }}
        color="red"
      />
      <View style={{flex: 1}}>
        <Title>Dogs to fetch: {numDogs}</Title>
        {['1', '5', '10', '15', '20'].map(itm => (
          <Button
            title={itm}
            onPress={() => {
              setNumDogs(Number(itm));
            }}
            color="white"
            key={itm}
          />
        ))}

        {isFetching ? (
          <View style={{flex: 1}} />
        ) : (
          <ScrollView>
            {data.map(breed => (
              <View key={breed.id}>
                <Text>{breed.name}</Text>
                <Image source={{uri: breed.image.url}} style={{height: 200}} />
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </Fragment>
  );
};

export default ReduxExampleScreen;
