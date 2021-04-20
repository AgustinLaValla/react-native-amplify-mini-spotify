import React from 'react'
import { View, Image, Text } from 'react-native'
import { SongType } from '../../../types'
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { usePlayer } from '../../../hooks/usePlayer';
import { TouchableOpacity } from 'react-native-gesture-handler';


type SongPlayerProps = {
    song: SongType | undefined;
}

export default function SongPlayer({ song }: SongPlayerProps) {

    const { progressWidth, togglePlayer, isPlaying } = usePlayer(song);

    return song ? (
        <View style={styles.mainWrapper}>
            <View style={[styles.progress, { width: `${progressWidth}%` }]} />
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{ uri: song?.imageUrl }} />
                    <View style={styles.songDetailsWrapper}>
                        <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail">
                            {song?.artist}
                            <View style={styles.dot} />
                            <Text style={styles.songTitle} numberOfLines={1} ellipsizeMode="tail">{ }</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.iconsWrapper}>
                    <EvilIcons style={styles.heart} name="heart" color="#fff" size={40} />
                    <TouchableOpacity onPress={togglePlayer} activeOpacity={0.6}>
                        <Ionicons name={isPlaying ? "pause" : "play"} color="#fff" size={35} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
        : null
}
