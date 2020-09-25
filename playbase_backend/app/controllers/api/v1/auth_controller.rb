class Api::V1::AuthController < ApplicationController

    # skip_before_action :authorized, only: [:spotify_request]
  
    def spotify_request
      url = "https://accounts.spotify.com/authorize"
      query_params = {
        client_id: 'id',
        response_type: 'code',
        redirect_uri: 'http://localhost:3000/api/v1/user',
        scope: "user-read-private user-read-email user-read-playback-state streaming user-library-read user-read-currently-playing",
        show_dialog: true
      }
      redirect_to "#{url}?#{query_params.to_query}"
    end
  end