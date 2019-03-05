class AddGradeToLessons < ActiveRecord::Migration[5.2]
  def change
    add_column :lessons, :grade, :string
  end
end
