class User < ApplicationRecord
    has_many :sent_messages, class_name: "Message", foreign_key: "sender_id"
    has_many :received_messages, class_name: "Message", foreign_key: "recipient_id"
    has_many :sent_conversations, class_name: "Conversation", foreign_key: "sender_id"
    has_many :received_conversations, class_name: "Conversation", foreign_key: "recipient_id"
    has_and_belongs_to_many :courses
    has_many :reviews


    
end
