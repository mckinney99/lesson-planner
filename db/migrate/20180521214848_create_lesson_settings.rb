class CreateLessonSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :lesson_settings do |t|
      t.references :lesson, foreign_key: true
      t.string :user
      t.integer :grade
      t.string :subject

      t.timestamps
    end
  end
end
