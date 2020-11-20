json.partial! 'api/videos/video', video: @video
json.extract! @video, :description