/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen';
import Writer, {FormalDPlayInput, FormalOPlayInput} from './screens/Writer';
import CoachDash, { StatsHome } from './screens/CoachDash';
import {Offense, OffenseFormation, OffensePlays} from './screens/OInput/OInput';
import {
  Blitz,
  Coverage,
  In,
  LineScheme,
  ORan,
} from './screens/DInput/DInput';
import DRundown from './screens/Coach/DRundown';
import ORundown from './screens/Coach/ORundown';
import PlayBook from './screens/Coach/PlayBook/PlayBook';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Default() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inputer" component={Writer} />

        <Stack.Screen name="Offense" component={Offense} />
        <Stack.Screen name="O Formations" component={OffenseFormation} />
        <Stack.Screen name="Pick a Play" component={OffensePlays} />
        <Stack.Screen name="Play Input" component={FormalOPlayInput} />

        <Stack.Screen name="Coverage" component={Coverage} />
        <Stack.Screen name='Blitz' component={Blitz} />
        <Stack.Screen name='Line Scheme' component={LineScheme} />
        <Stack.Screen name='O Ran' component={ORan} />
        <Stack.Screen name="In" component={In} />
        <Stack.Screen name="Record Play" component={FormalDPlayInput} />

        <Stack.Screen name="Coach's Dash" component={CoachDash} />

        <Stack.Screen name="PlayBook" component={PlayBook} />

        <Stack.Screen name="Stats" component={StatsHome} />
        <Stack.Screen name="Offensive Rundown" component={ORundown} />
        <Stack.Screen name="Defensive Rundown" component={DRundown} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
