import React from 'react'
import Album from '../Album/Album';
import { AlbumType } from '../../types';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { FlatList } from 'react-native-gesture-handler';


type AlbumcategoryProps = {
    title: string;
    albums: AlbumType[];
    recentlyPlayed?: boolean;
};

export default function AlbumCategory({ title, albums, recentlyPlayed = false }: AlbumcategoryProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={albums}
                renderItem={({ item }) =>
                    <Album
                        key={item.id}
                        album={item}
                        recentlyPlayed={recentlyPlayed}
                    />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
