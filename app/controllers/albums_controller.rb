class AlbumsController < ApplicationController
  
  def show
    @album = Album.find(params[:id])
  end

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

  def edit
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find(params[:id])
    if @album.update(album_parmas)
      flash[:success] = 'Album saved successfully'
      redirect_to(edit_album_path(@album))
    else
      flash[:error] = 'Something went wrong.'
      render(:edit)
    end
  end

  private

  def album_parmas
    params.require(:album).permit(:title, :release_date, :cover, songs_attributes: [:id, :title, :album_name, :duration, :file, :_destroy])
  end
end
