import React from 'react'
import { Text, View, Image, Button, TouchableOpacity } from 'react-native'
import { AlbumType } from '../../../types'
import { styles } from './styles'

type AlbumScreenHeader = {
    album: Partial<AlbumType> | undefined
}

export default function AlbumScreenHeader({ album }: AlbumScreenHeader) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: album?.imageUrl }} style={styles.image} />
            <Text style={styles.name}>{album?.title}</Text>
            <Text style={styles.by}>BY {album?.by} . {album?.numberOfLikes} LIKES</Text>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
