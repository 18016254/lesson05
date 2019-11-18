import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

//INSERT DATA HERE

const PET_DATA = {
  name: 'Gizmo',
  age: '5',
  image: require('./src/img/bird.jpg'),
};

const OWNER_DATA = {
  name: 'Daniyah Bai',
  contact: '97502219',
  membership: 'gold',
};

const Lesson05quiz = () => {
  let petArr = [];
  let ownerArr = [];
  for (let i = 0; i < PET_DATA.length; i++) {
    let pet = PET_DATA[i];
    let owner = OWNER_DATA[i];
    <Text>Name:</Text>;
    petArr.push(<Text key={pet.name}>----{pet.name}</Text>);
    <Text>Age:</Text>;
    petArr.push(<Text key={pet.age}>----{pet.age}</Text>);
    petArr.push(<Image source={pet.image} />);
    <Text>Owner Information</Text>;
    <Text>--------</Text>;
    <Text>Name:</Text>;
    ownerArr.push(<Text key={owner.name}>----{owner.name}</Text>);
    <Text>Contact:</Text>;
    ownerArr.push(<Text key={owner.contact}>----{owner.contact}</Text>);
    <Text>Membership:</Text>;
    ownerArr.push(<Text key={owner.membership}>----{owner.membership}</Text>);
  }
  return (
    <ScrollView>
      <View>{petArr}</View>
      <View>{ownerArr}</View>
    </ScrollView>
  );
};
export default Lesson05quiz;
