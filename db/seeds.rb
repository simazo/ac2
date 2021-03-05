user = User.new(:email => 'hoge@hoge.com', :password => 'hogehoge')
user.save!

user = User.new(:email => 'fuga@fuga.com', :password => 'fugafuga')
user.save!


5.times do
    Room.create!
end