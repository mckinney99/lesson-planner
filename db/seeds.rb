# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@examplesss.com', password: 'password', password_confirmation: 'password')

my_lesson = Lesson.create(
  title: "Kids Clay Project",
  description: "5th grade clay bowls using wheel",
  body: "Seperate clay into 1 pound chunks, give each kid a slab and clay it up!",
  source: "ms. Kedzie"
)

# my_lesson.user_lessons.create(user_id: 1)
# my_lesson.user_lessons.create(lesson_id: 1)
# my_lesson.user_lessons.create(class: "Ms. Thomas")
# my_lesson.user_lessons.create(subject: "art")
