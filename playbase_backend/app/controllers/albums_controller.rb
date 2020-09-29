class AlbumsController < ApplicationController
    def index
        albums = Album.all 
        render json: albums
    end

    def create
        album = Album.find_or_create_by(
            name: album_params["name"], 
            album_url: album_params["album_url"],
            image_url: album_params["image_url"],
            spotify_id: album_params["spotify_id"],
            artist: album_params["artist"],
            spotify_uri: album_params["spotify_uri"])
            render json: album
    end


    def show
        album = Album.find_by(id: params[:id])
        render json: album
    end

    def destroy
        album = Album.find_by(id: params[:id])
        album.destroy
      end
    
    
private

    def album_params
        params.require(:album).permit(:name, :image_url, :artist, :album_url, :spotify_id, :spotify_uri)
    end
end
