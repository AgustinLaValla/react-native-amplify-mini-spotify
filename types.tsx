export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  "Your Library": undefined;
  Spotify: undefined
};

export type HomeScreenList = {
  Home: undefined;
  Album: undefined;
};

export type SearchScreenList = {
  Search: undefined;
};

export type AlbumType = {
  id?: string | undefined;
  title: string;
  imageUrl: string;
  artistsHeaderline: string;
  songs?: SongType[]
  by?: string;
  numberOfLikes?: number
}

export type CategoryType = {
  title: string;
  albums: AlbumType[];
  recentlyPlayed?: boolean;
}

export type SongType = {
  id?: string | undefined;
  imageUrl: string;
  title: string;
  artist: string;
  uri?: string;
}
