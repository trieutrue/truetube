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
  #View.destroy_all
  #Vote.destroy_all
  #Comment.destroy_all
  Video.destroy_all
  User.destroy_all

  p 'creating content creators...'
  demo_user = User.create!(channel_name: 'Demo User', first_name: 'Demo', last_name: 'User', email: 'demouser@gmail.com', password: 'password')

  content_creators = [demo_user]

  4.times do |n|
    channel_name = Faker::Internet.username(specifier: 5..8)
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    email = Faker::Internet.email(name: "#{first_name} #{last_name}", separators: '_')
    user = User.create!(
      channel_name: channel_name, 
      first_name: first_name, 
      last_name: last_name, 
      email: email, 
      password: 'password' 
    )
    content_creators << user
  end

  videoUrls = [

  ]
  

  p 'creating content...'

  videos = videoUrls.map do |url, idx|
    video = Video.create!(
      title: Faker::TvShows::BreakingBad.episode,
      description: Faker::TvShows::VentureBros.quote,
      uploader_id: content_creators.sample 
    )

    submission = open(url)
    p "uploading vid#{idx + 1}..."
    video.attach(submission)
    video
  end

  
  
  
  
  p 'creating users..'
  
  # users = []
  
  # 1337.times do |n|
  #   channel_name = Faker::Internet.username(specifier: 5..8)
  #   first_name = Faker::Name.first_name
  #   last_name = Faker::Name.last_name
  #   email = Faker::Internet.email(name: "#{first_name} #{last_name}", separators: '_')
  #   user = User.create!(
  #     channel_name: channel_name, 
  #     irst_name: first_name, 
  #     last_name: last_name, 
  #     email: email, 
  #     password: 'password' 
  #     )
      
  #     users << user
  # end
    
  p 'creating comments...'
  # 1,000.times do |n|
  #   #create comment instance
  #   body = Faker::
  #   comment = Comment.create!(
  #     body: body,
  #     author_id: users.sample,
  #     video_id: videos.sample
  #   )
  # end
  
  
  p 'creating viewers...'
  1000000
  #create views instances
end




    #   vid1 = Video.new(title: , description: , uploader_id: content_creators.sample )
    #   submission1 = open("")
    #   p "uploading vid1..."
    #   vid1.attach(submission1)
    
    
    #   vid2 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission2 = open("")
    #   p "uploading vid2..."
    #   vid2.attach(submission2)
      
    #   vid3 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission3 = open("")
    #   p "uploading vid3..."
    #   vid3.attach(submission3)
    
    #   vid4 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission4 = open("")
    #   p "uploading vid4..."
    #   vid4.attach(submission4)
    
    #   vid5 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission5 = open("")
    #   p "uploading vid5..."
    #   vid5.attach(submission5)
    
    #   vid6 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission6 = open("")
    #   p "uploading vid6..."
    #   vid6.attach(submission6)
    
    #   vid7 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission7 = open("")
    #   p "uploading vid7..."
    #   vid7.attach(submission7)
    # 9
    #   vid8 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission8 = open("")
    #   p "uploading vid8..."
    #   vid8.attach(submission8)
    
    #   vid9 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission9 = open("")
    #   p "uploading vid9..."
    #   vid9.attach(submission9)
    
    #   vid10 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission10 = open("")
    #   p "uploading vid10..."
    #   vid10.attach(submission10)
    
    #   vid11 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission11 = open("")
    #   p "uploading vid11..."
    #   vid11.attach(submission11)
    
    #   vid12 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission12 = open("")
    #   p "uploading vid12..."
    #   vid12.attach(submission12)
    
    #   vid13 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission13 = open("")
    #   p "uploading vid13..."
    #   vid13.attach(submission13)
    
    #   vid14 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission14 = open("")
    #   p "uploading vid14..."
    #   vid14.attach(submission14)
    
    #   vid15 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission15 = open("")
    #   p "uploading vid15..."
    #   vid15.attach(submission15)
    
    #   vid16 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission16 = open("")
    #   p "uploading vid16..."
    #   vid16.attach(submission16)
    
    #   vid17 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission17 = open("")
    #   p "uploading vid17..."
    #   vid17.attach(submission17)
    
    #   vid18 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission18 = open("")
    #   p "uploading vid18..."
    #   vid18.attach(submission18)
    
    #   vid19 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission19 = open("")
    #   p "uploading vid19..."
    #   vid19.attach(submission19)
    
    #   vid20 = Video.new(title: , description: , uploader_id: content_creators.sample)
    #   submission20 = open("")
    #   p "uploading vid20..."
    #   vid20.attach(submission20)
