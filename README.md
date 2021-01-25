# TrueTube

[TrueTube](https://truetube.herokuapp.com/), a pixel-perfect YouTube clone, is a video-sharing application that allows users to publicly share and store videos to be viewed by other users. Users will have access to watch, comment, and leave a like or dislike on videos.

![TrueTube.gif](./app/assets/images/truetube.gif)

## Table of Contents
#
1. [Technologies](#technologies)
2. [Main Features](#main-features)
3. [Challenges & Solutions](#challenges-and-solutions)
4. [Future Features](#future-features)


## Technologies 
#

### This fullstack application was built using the following technologies:

* Backend: Ruby, Rails, PostgreSQL
* Frontend: JavaScript, React, Redux, HTML5, CSS3
* Storage: Amazon Web Services S3

## Main Features
  * Watch, upload and manage your video
  * Comment and edit your comments
  * Like and dislike videos
  * Search videos by keywords(i.e. Video's title & description)

## Challenges and Solutions 
### Video Index Component
The video index component is the bread and butter of the TrueTube application. This component is rendered on nearly every page and renders differently dependent on the url. This allowed me to cut down on components by 80% and keep the code dry. The implementation was tricky at first but with the code below and management of state, I was able to filter videos with the corresponding logic that goes for each url.

```javascript
filterIndexItems() {
  const { 
    videos, 
    users, 
    location, 
    currentUser, 
    openModal, 
    deleteVideo, 
    match, 
    filters, 
    video 
  } = this.props;

  let indexVideos = [];

  if (!Object.keys(videos)) return indexVideos;
  
  switch (match.path) {
    case "/results":
      indexVideos = [...filters].reverse().map(videoId => videos[videoId])
      break;
    case "/watch/:videoId":
      const clone = { ...videos }
      delete clone[video.id]
      indexVideos = Object.values(clone).reverse()
      break;
    case "/channel/:userId/videos":
      indexVideos = currentUser.videoIds.map(videoId => videos[videoId])
      break;
    case "/playlist/liked":
      indexVideos = currentUser.upvotedVideoIds.map(videoId => videos[videoId])
      break;
    default:
      indexVideos = Object.values(videos).reverse()
      break;
  }

  if (!indexVideos.length) return null;

  return indexVideos.map(video => {
    return <VideoIndexItem video={video} 
      className="video-container"
      key={`video${video.id}`}
      deleteVideo={deleteVideo}
      openModal={openModal}
      currentUser={currentUser}
      user={users[video.uploaderId]} 
      location={location} 
      match={match}
      />
  })
}
```
### Likes/Dislikes
Initially, I planned to create unique routes for each like/dislikes (i.e. video like, video dislike, etc.) but after many iterations of plan, I came to the conclusion to keep things efficient and clean by implementing RESTful routes. First, I added an additional column to the votes table to determine the status of the vote. Second, I add RESTful routes to create votes for both videos and comments. Last of all, the frontend handles the state of the vote by dispatching the correct action.

```ruby
  def create
    case
    when params[:video_id]
      @video = Video.find(params[:video_id])
      @vote = @video.votes.new(vote_params)
    when params[:comment_id]
      @vote = Comment.find(params[:comment_id]).votes.new(vote_params)
    end

    @vote.voter_id = current_user.id

    if @vote.save
      render :show
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def update
    @vote = Vote.find_by(id: params[:id])
    if @vote && current_user.id == @vote.voter_id
      @video = Video.find(@vote.votable_id)
      @vote.update(vote_params)
      render :show
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find_by(id: params[:id])
    @video = Video.find(@vote.votable_id)
    if @vote && current_user.id == @vote.voter_id
      @vote.destroy!
      render :show
    else
      render json: { message: 'Failure' }
    end
  end
```



## Future Features

* Views
  * Videos display the number of times it has been viewed.
  * Views can be created by anonymous users and logged-in users.
* Channel & Subscriptions
  * Users can subscribe to channels/
  * Channel page where users can view other channel's videos and videos or edit their own channel, user info, or videos.
* Video Tags
* Live streaming with live chat
