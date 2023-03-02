class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :sent_messages
  has_many :received_messages
  has_many :sent_conversations
  has_many :received_conversations
  has_and_belongs_to_many :courses
  has_many :reviews
end