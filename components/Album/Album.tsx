import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { AlbumType } from '../../types'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
    album: AlbumType,
    recentlyPlayed: boolean
}

export default function Album({ album, recentlyPlayed = false }: AlbumProps) {
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigate('Album', { id: album.id })}>
                <Image
                    style={[styles.image, {
                        width: recentlyPlayed ? 115 : 155,
                        height: recentlyPlayed ? 115 : 155
                    }
                    ]}
                    source={{ uri: album.imageUrl }}
                />
            </TouchableWithoutFeedback>
            <Text style={styles.albumText}>{album.artistsHeaderline}</Text>
        </View>
    )
}
