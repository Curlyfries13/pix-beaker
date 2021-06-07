// This type structure represents the shape of the data that comes back from the
// Pixabay API.
export type data = {
  comments: number,
  downloads: number,
  favorites: number,
  id: number,
  imageHeight: number,
  imageSize: number,
  imageWidth: number,
  largeImageURL: string,
  likes: number,
  pageURL: string,
  previewHeight: string,
  previewURL: string,
  previewWidth: number,
  tags: string,
  'type': string,
  user: string,
  userImageURL: string,
  user_id: number,
  views: number
  webformatHeight: number,
  webformatURL: string,
  webformatWidth: number,
}
