import React, { FC } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

import { SCREEN } from '../constants/theme';
import { MainWrapper } from '../components/ScreenWrapper';

import Greeting from '../components/home/Greeting';
import DetailsCard from '../components/home/DetailsCard';

type navType = {
  navigation: any
}

export const Home: FC<navType> = ({ navigation }) => {
  return (
    <MainWrapper>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.largeText}>Today</Text>
        </View>
        <View style={styles.scripture}>
          <Text style={styles.regularText}>
            Now all glory to God, who is able, through his mighty power at work within us,
            to accomplish infinitely more than we might ask or think.
 
          </Text>
          <Text style={styles.smallText}>Ephesians 3:20 NLT</Text>
        </View>
      </View>
      <View style={styles.bottomSheet} >
        <Greeting />
        <DetailsCard
          icon={"pray"}
          title='Prayer Wall'
          details='Write your prayer requests on the wall of faith, and get prayed for by a community of praying saints. '
          onPress={() => navigation.navigate("PrayerWall")} />
        <DetailsCard
          icon={"smile"}
          title='Gratitude'
          details='What are you grateful for today?'
          onPress={() => navigation.navigate("Gratitude")} />
        <DetailsCard
          icon={"smile"} title='Gratitude'
          details='What are you grateful for today?'
          onPress={() => navigation.navigate("Gratitude")} />
      </View>
    </MainWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scripture: {
    height: SCREEN.height * 0.35,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginTop: Platform.OS === "ios" ? 0 : 30
  },
  smallText: {
    fontSize: 15,
    marginTop: 20,
    color: "white",
    fontFamily: "Poppins-Medium",
    marginBottom: 20
  },
  bottomSheet: {
    backgroundColor: "#fafaf0",
    width: SCREEN.width * 1,
    height: SCREEN.height * 0.5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center"
  },
  regularText: {
    fontSize: 20,
    width: "90%",
    flexWrap: "wrap",
    color: "white",
    fontFamily: "Poppins-Medium"
  },
  largeText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins-Medium"
  },
});
