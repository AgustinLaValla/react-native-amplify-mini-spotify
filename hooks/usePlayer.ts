import React from 'react';
import { Audio } from 'expo-av';
import { SongType } from '../types';


export const usePlayer = (song: SongType) => {
    const [player, setPlayer] = React.useState<Audio.Sound>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progressWidth, setProgressWidth] = React.useState(0);

    const togglePlayer = () => {
        setIsPlaying(!isPlaying);
    }

    const loadSong = async (uri: string) => {
        switch (uri) {
            case 'angels.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/angels.mp3'));
                await setIsPlaying(true);
                break;

            case 'ice-queen.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/ice-queen.mp3'));
                await setIsPlaying(true);
                break;

            case 'like-a-stone.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/like-a-stone.mp3'));
                await setIsPlaying(true);
                break;
            case 'mother-earth.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/mother-earth.mp3'));
                await setIsPlaying(true);
                break;
            case 'nemo.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/nemo.mp3'));
                await setIsPlaying(true);
                break;
            case 'nutshell.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/nutshell.mp3'));
                await setIsPlaying(true);
                break;
            case 'revelations.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/revelations.mp3'));
                await setIsPlaying(true);
                break;

            case 'shot-in-the-dark.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/shot-in-the-dark.mp3'));
                await setIsPlaying(true);
                break;

            case 'sinéad.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/sinéad.mp3'));
                await setIsPlaying(true);
                break;


            case 'wish-i-had-an-angel.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/wish-i-had-an-angel.mp3'));
                await setIsPlaying(true);
                break;

            case 'would.mp3':
                await setIsPlaying(false);
                await player.unloadAsync();
                await player.loadAsync(require('../assets/would.mp3'));
                await setIsPlaying(true);
                break;

            default:
                console.warn('Song not found');
                player.unloadAsync();
                break;
        }
    }

    React.useEffect(() => {

        const initPlayer = async () => {
            let sound = new Audio.Sound();
            await setPlayer(sound);

        }

        initPlayer();

        return () => {
            setIsPlaying(false);
            if (player) {
                player.unloadAsync();
            }
        };

    }, [])

    React.useEffect(() => {
        if (player) {
            if (song && song.uri) {
                loadSong(song.uri);
            } else {
                player.unloadAsync();
            }
        }
    }, [player, song])

    React.useEffect(() => {
        if (player) {
            player.setOnPlaybackStatusUpdate((status: any) => {
                setProgressWidth(status.positionMillis / status.durationMillis * 100);
            });

            if (isPlaying) {
                player.playAsync();

            } else {
                player.pauseAsync();
            }
        }
    }, [isPlaying, player])

    return { togglePlayer, progressWidth, isPlaying }
}