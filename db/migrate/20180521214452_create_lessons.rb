class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.string :title
      t.string :description
      t.string :body
      t.string :source

      t.timestamps
    end
  end
end
