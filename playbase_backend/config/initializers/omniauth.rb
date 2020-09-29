Rails.application.config.middleware.use OmniAuth::Builder do
    provider :spotify, Rails.application.credentials[:client_id], Rails.application.credentials[:client_secret], scope: 'user-read-private user-read-email user-read-playback-state streaming user-library-read user-read-currently-playing user-modify-playback-state'
  end


  # user-read-playback-state 
  # streaming
  # user-library-read users
  # user-read-currently-playing
  # user-read-private
