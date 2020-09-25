Rails.application.config.middleware.use OmniAuth::Builder do
    provider :spotify, 'f1bee6691b9c499b8721212cd47ffeee', 'ef9ad588db7f4b018b6f92e36aef7194', scope: 'user-read-private user-read-email user-read-playback-state streaming user-library-read user-read-currently-playing'
  end


  # user-read-playback-state 
  # streaming
  # user-library-read users
  # user-read-currently-playing
  # user-read-private
