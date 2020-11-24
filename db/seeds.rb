# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'
require 'date'

ActiveRecord::Base.transaction do
  Video.destroy_all
  User.destroy_all

  puts 'creating users...'
  demo_user =User.create!(channel_name: 'Demo User', first_name: 'Demo', last_name: 'User', email: 'demouser@gmail.com', password: 'password')
  jon = User.create!(channel_name: 'jonlol', first_name: 'Jon', last_name: 'Tran', email: 'jontran@wemail.com', password: 'password')
  sara = User.create!(channel_name: '', first_name: '', last_name: 'User', email: 'demouser@gmail.com', password: 'password')
  User.create!(channel_name: '', first_name: '', last_name: 'User', email: 'demouser@gmail.com', password: 'password')
  User.create!(channel_name: '', first_name: '', last_name: 'User', email: 'demouser@gmail.com', password: 'password')



  

end