import React from 'react'
import { styles } from './styles'
import { SongType } from '../../../types'
import { View, Text, Image } from 'react-native'
import { useSongContext } from '../../../App'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

type SongItemProps = {
    song: SongType
}

export default function SongItem({ song }: SongItemProps) {
    const { setSong } = useSongContext();

    const playSong = () => {
        if (song) {
            setSong(song);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={playSong}>
            <View style={styles.container}>
                {/* Image */}
                <Image source={{ uri: song.imageUrl }} style={styles.image} />
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
