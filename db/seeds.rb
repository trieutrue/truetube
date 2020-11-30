# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'
require 'date'
require 'open-uri'

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
    "https://we-tube-seed.s3.amazonaws.com/Audio_bands_Feed.mov",
    "https://we-tube-seed.s3.amazonaws.com/autonomous-grand-piano.mp4",
    "https://we-tube-seed.s3.amazonaws.com/beach.mp4",
    "https://we-tube-seed.s3.amazonaws.com/cat-family.mp4",
    "https://we-tube-seed.s3.amazonaws.com/Creatures+Underwater.mp4",
    "https://we-tube-seed.s3.amazonaws.com/Dogs+Digging.mp4", #second smallest
    "https://we-tube-seed.s3.amazonaws.com/fall-road.mp4",
    "https://we-tube-seed.s3.amazonaws.com/jellyfish.mp4",
    "https://we-tube-seed.s3.amazonaws.com/kid-on-electric-kit.mp4", #fourth smallest
    "https://we-tube-seed.s3.amazonaws.com/kitten-vs-tape.mp4",
    "https://we-tube-seed.s3.amazonaws.com/lights.mp4", #third smallest
    "https://we-tube-seed.s3.amazonaws.com/mixkit-crowds-of-people-cross-a-street-junction-4401.mp4",
    "https://we-tube-seed.s3.amazonaws.com/mountain.mp4",
    "https://we-tube-seed.s3.amazonaws.com/telephone.mp4" #smallest
    "https://we-tube-seed.s3.amazonaws.com/tide.mp4",
    "https://we-tube-seed.s3.amazonaws.com/traditional-music.mp4",
    "https://we-tube-seed.s3.amazonaws.com/waterfall.mp4",
    "https://we-tube-seed.s3.amazonaws.com/wind-chimes.mp4"
  ]
  

  p 'creating content...'

  videos = videoUrls.map do |url|
    creator = content_creators.sample
    created_at = rand(Time.new(2020, 10)..Time.now)
    video = Video.new(
      title: Faker::TvShows::BreakingBad.episode,
      description: Faker::TvShows::VentureBros.quote,
      uploader_id: creator.id,
      created_at: created_at,
      updated_at: created_at
    )

    submission = open(url)
    p "uploading video..."
    video.submission.attach(io: submission, filename: "#{creator.email}_#{rand(1..1000)}" )
    video.save!
    video
  end

  p 'creating users..'
    
  users = []
  
  337.times do |n|
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
      
      users << user
  end
      

  p 'creating comments...'

  comments = []

  30.times do |n|
    parent_comment_id = comments.sample.id if n == rand(1..30)

    body = Faker::TvShows::NewGirl.quote
    comment = Comment.create!(
      body: body,
      author_id: users.sample.id,
      video_id: videos.sample.id,
      parent_comment_id: parent_comment_id
    )

    comments << comment
  end
end

  
  
  # p 'creating viewers...'
  # 1000000
  #create views instances




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
