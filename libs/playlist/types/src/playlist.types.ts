export interface Playlist {
  artwork: string;
  curator_name: string;
  id: string;
  kind: string;
  name: string;
  url: string;
}

export interface PlaylistResponse {
  featuredPlaylists: {
    name: string;
    content: Playlist[];
  };
}
