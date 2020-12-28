# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#        api_video_comments GET    /api/videos/:video_id/comments(.:format)                                                 api/comments#index {:format=>:json}
#                           POST   /api/videos/:video_id/comments(.:format)                                                 api/comments#create {:format=>:json}
#                api_videos GET    /api/videos(.:format)                                                                    api/videos#index {:format=>:json}
#                           POST   /api/videos(.:format)                                                                    api/videos#create {:format=>:json}
#                 api_video GET    /api/videos/:id(.:format)                                                                api/videos#show {:format=>:json}
#                           PATCH  /api/videos/:id(.:format)                                                                api/videos#update {:format=>:json}
#                           PUT    /api/videos/:id(.:format)                                                                api/videos#update {:format=>:json}
#                           DELETE /api/videos/:id(.:format)                                                                api/videos#destroy {:format=>:json}
#      api_comment_comments GET    /api/comments/:comment_id/comments(.:format)                                             api/comments#index {:format=>:json}
#                           POST   /api/comments/:comment_id/comments(.:format)                                             api/comments#create {:format=>:json}
#               api_comment GET    /api/comments/:id(.:format)                                                              api/comments#show {:format=>:json}
#                           PATCH  /api/comments/:id(.:format)                                                              api/comments#update {:format=>:json}
#                           PUT    /api/comments/:id(.:format)                                                              api/comments#update {:format=>:json}
#                           DELETE /api/comments/:id(.:format)                                                              api/comments#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
    
    resources :videos, except: [:new, :edit] do
      resources :comments, only: [:index, :create]
      resources :votes, only: [:index, :create]
    end

    resources :comments, only: [:show, :update, :destroy] do
      resources :comments, only: [:index, :create]
      resources :votes, only: [:index, :create]
    end

    resources :votes, only: [:update, :destroy]
  end

  root to: 'static_pages#root'
end
