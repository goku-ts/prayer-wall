
import { StyleSheet, Text, View, StatusBar, ScrollView, Platform, TouchableOpacity } from 'react-native';

import { COLORS } from '../constants/theme';

import { Wrapper } from '../components/ScreenWrapper';
import Header from '../components/prayerWall/Header';
import { FC } from 'react';
import PrayerCard from '../components/prayerWall/PrayerCards';

import { FontAwesome } from '@expo/vector-icons';

const cards = [1, 2, 3, 4, 5]

type wallType = {
  navigation: any
}

const PrayerWall: FC<wallType> = ({ navigation }) => {
  return (
    <>
      <Wrapper >
        <Header onPress={() => navigation.navigate("Home")} />
        <ScrollView style={styles.scroll} bounces={false} showsVerticalScrollIndicator={false} >
          <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} />
            {cards.map((c) => <PrayerCard key={c} />)}
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button} activeOpacity={0.9}>
          <FontAwesome name="pencil-square-o" size={25} color="white" />
        </TouchableOpacity>
      </Wrapper>
    </>
  );
}

export default PrayerWall

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center"
  },
  scroll: {
    flex: 1,

    backgroundColor: COLORS.background
  },
  button: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    position : "absolute",
    bottom : 30,
    right : 30
  }
});
