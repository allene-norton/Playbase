class AddUriToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :spotify_uri, :string
  end
end
