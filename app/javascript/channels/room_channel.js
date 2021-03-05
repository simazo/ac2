import consumer from "./consumer"

$(function() {
  const chatChannel = consumer.subscriptions.create({ channel: 'RoomChannel', room: $('#messages').data('room_id') }, {
    connected() {
      // Called when the subscription is ready for use on the server
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    // room_channel.rbでブロードキャストされたものがここに届く
    received(data) {
      return $('#messages').append(data['message']);
    },

    // これが実行されるとコンシューマになったRoomChannel#speak({ message: message })が呼ばれる
    speak: function(message) {
      return this.perform('speak', {
        message: message
      });
    }
  });

  $(document).on('keypress', '[data-behavior~=room_speaker]', function(event) {
    if (event.keyCode === 13) {
      chatChannel.speak(event.target.value);
      event.target.value = '';
      return event.preventDefault();
    }
  });
  
});
