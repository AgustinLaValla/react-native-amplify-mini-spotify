import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { data } from './screens/data';
import SongPlayer from './components/AlbumScreen/SongPlayer/SongPlayer'

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { SongType } from './types';
Amplify.configure(config)

const SongContext = React.createContext<{ setSong: React.Dispatch<React.SetStateAction<SongType>> }>(null);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [song, setSong] = React.useState<SongType>();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <SongContext.Provider value={{ setSong }}>
          <Navigation colorScheme={colorScheme} />
          {
            song ? <SongPlayer song={song} /> : null
          }
          <StatusBar />
        </SongContext.Provider>
      </SafeAreaProvider>
    );
  }
}

export const useSongContext = () => React.useContext(SongContext)