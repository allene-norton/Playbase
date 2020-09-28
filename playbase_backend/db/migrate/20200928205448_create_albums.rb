class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.string :artist
      t.string :album_url
      t.string :spotify_id
      t.string :image_url
      t.string :name

      t.timestamps
    end
  end
end
