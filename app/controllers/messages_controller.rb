class MessagesController < ApplicationController
    def index
      @messages = Message.all
      render json: @messages
    end
  
    def show
      @message = Message.find(params[:id])
      render json: @message
    end
  
    def create
      @message = Message.new(message_params)
  
      if @message.save
        render json: @message, status: :created
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @message = Message.find(params[:id])
  
      if @message.update(message_params)
        render json: @message
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @message = Message.find(params[:id])
      @message.destroy
    end

    private

    def message_params
        params.require(:message).permit(:body, :conversation_id, :sender_id, :recipient_id)
    end
end