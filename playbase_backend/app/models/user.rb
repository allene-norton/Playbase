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
        client_id: Rails.application.credentials[:client_id],
        client_secret: Rails.application.credentials[:client_secret]
      }
      headers =  {content_type: 'application/x-www-form-urlencoded'}
      auth_response = RestClient.post('https://accounts.spotify.com/api/token', body, headers)
      auth_params = JSON.parse(auth_response)
      self.update(access_token: auth_params["access_token"])
    else
      puts "Current Token Has Not Expired"
    end
  end
end