class AlbumsController < ApplicationController
  
  def new
    @album = Album.new
  end

  def create
    @album = Album.new(album_parmas)
    if @album.save
      flash[:success] = 'New album was successfully created.'
    else
      flash[:error] = 'Something went wrong.'
    end
    redirect_to(new_album_path)
  end

  private

  def album_parmas
    params.require(:album).permit(:title, :release_date, :cover, songs_attributes: [:id, :title, :album_name, :duration, :file, :_destroy])
  end
end
