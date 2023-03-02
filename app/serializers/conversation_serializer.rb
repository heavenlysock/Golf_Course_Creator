class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :sender_id, :recipient_id, :created_at
  belongs_to :sender
  belongs_to :recipient
  has_many :messages
end