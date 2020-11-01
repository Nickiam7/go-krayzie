class DashboardsController < ApplicationController

  def dashboard
    play_list_album = Album.last
    play_list_songs = Album.last.songs
    @play_list = {
      album: play_list_album,
      songs: play_list_songs
    }
  end
end
