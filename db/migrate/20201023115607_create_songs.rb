class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :album_name
      t.string :duration
      t.string :file
      t.references :album, null: false, foreign_key: true

      t.timestamps
    end
  end
end
