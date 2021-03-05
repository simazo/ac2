class RoomChannel < ApplicationCable::Channel
  def subscribed
     stream_from "room_channel_#{params['room']}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # jsで実行されたspeakのmessageを受け取り、room_channelのreceivedにブロードキャストする
    #ActionCable.server.broadcast 'room_channel', {message: data['message']}
  
    # DB保存に変更
    # turbolinksを無効にしないと、params['room']が渡ってこない
    Message.create! content: data['message'], user_id: current_user.id, room_id: params['room']
    
  end 
end
