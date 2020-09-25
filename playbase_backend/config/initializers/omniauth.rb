Rails.application.config.middleware.use OmniAuth::Builder do
    provider :spotify, 'client_id', 'client_secret', scope: 'user-read-private user-read-email user-read-playback-state streaming user-library-read user-read-currently-playing'
  end


  # user-read-playback-state 
  # streaming
  # user-library-read users
  # user-read-currently-playing
  # user-read-private
