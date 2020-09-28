class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :artist, :album_url, :spotify_id, :image_url, :name
end
