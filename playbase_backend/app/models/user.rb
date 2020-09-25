require 'rest-client'

class User < ApplicationRecord

  def access_token_expired?
    #check if user's token is older than 55 minutes
    (Time.now - self.updated_at) > 3300 
  end

  def refresh_access_token
    if access_token_expired?
      body = {
        grant_type: 'refresh_token',
        refresh_token: self.refresh_token,
        client_id: 'f1bee6691b9c499b8721212cd47ffeee',
        client_secret: 'ef9ad588db7f4b018b6f92e36aef7194'
      }
      auth_response = RestClient.post('https://accounts.spotify.com/api/token', body)
      auth_params = JSON.parse(auth_response)
      self.update(access_token: auth_params["access_token"])
    else
      puts "Current Token Has Not Expired"
    end
  end
end