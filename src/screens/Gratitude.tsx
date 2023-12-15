
import { StyleSheet, Text, View, StatusBar, ScrollView, Platform } from 'react-native';

import { COLORS } from '../constants/theme';

import { Wrapper } from '../components/ScreenWrapper';
import Header from '../components/prayerWall/Header';
import { FC } from 'react';

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
          </View>
        </ScrollView>
      </Wrapper>
    </>
  );
}

export default PrayerWall

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scroll: {
    flex: 1,
   
    backgroundColor: COLORS.background
},
});
