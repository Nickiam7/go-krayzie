class Album < ApplicationRecord
  has_many :songs, inverse_of: :album
  
  accepts_nested_attributes_for :songs, allow_destroy: true

  mount_uploader :cover, CoverUploader
end
