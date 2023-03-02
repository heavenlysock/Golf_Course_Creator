class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :conversation_id, :sender_id, :recipient_id, :created_at
  belongs_to :conversation
  belongs_to :sender
  belongs_to :recipient
  end