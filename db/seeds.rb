# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# db/seeds.rb

# Create two test users
user1 = User.create!(name: "John Doe", email: "john@example.com", password: "password123")
user2 = User.create!(name: "Jane Doe", email: "jane@example.com", password: "password456")

# Create five tasks for user1
Task.create!(title: "Task 1", description: "Do something", due_date: Date.today + 3.days, user_id: user1.id)
Task.create!(title: "Task 2", description: "Do something else", due_date: Date.today + 1.week, user_id: user1.id)
Task.create!(title: "Task 3", description: "Do another thing", due_date: Date.today + 2.weeks, user_id: user1.id)
Task.create!(title: "Task 4", description: "Do yet another thing", due_date: Date.today + 1.month, user_id: user1.id)
Task.create!(title: "Task 5", description: "Do one last thing", due_date: Date.today + 2.months, user_id: user1.id)

# Create three tasks for user2
Task.create!(title: "Task 6", description: "Do something", due_date: Date.today + 1.week, user_id: user2.id)
Task.create!(title: "Task 7", description: "Do something else", due_date: Date.today + 2.weeks, user_id: user2.id)
Task.create!(title: "Task 8", description: "Do another thing", due_date: Date.today + 1.month, user_id: user2.id)
user3 = User.create!(name: "Michael Johnson", email: "michael@example.com", password: "password789")
user4 = User.create!(name: "Emily Johnson", email: "emily@example.com", password: "password12")

Task.create!(title: "Task 9", description: "Do a new thing", due_date: Date.today + 5.days, user_id: user3.id)
Task.create!(title: "Task 10", description: "Do a different thing", due_date: Date.today + 2.weeks, user_id: user3.id)
Task.create!(title: "Task 11", description: "Do something completely different", due_date: Date.today + 1.month, user_id: user3.id)
Task.create!(title: "Task 12", description: "Do something else entirely", due_date: Date.today + 3.months, user_id: user3.id)

Task.create!(title: "Task 13", description: "Do a new thing", due_date: Date.today + 2.weeks, user_id: user4.id)
Task.create!(title: "Task 14", description: "Do a different thing", due_date: Date.today + 1.month, user_id: user4.id)
Task.create!(title: "Task 15", description: "Do something completely different", due_date: Date.today + 2.months, user_id: user4.id)