class CreateUserLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :user_lessons do |t|

      t.integer :user_id
      t.integer :lesson_id
      t.string :class
      t.string :subject

      t.timestamps
    end
  end
end
