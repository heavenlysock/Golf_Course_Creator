class ConversationsController < ApplicationController
    def index
    @conversations = Conversation.all
    render json: @conversations
    end

    def show
    @conversation = Conversation.find(params[:id])
    render json: @conversation
    end

    def create
    @conversation = Conversation.new(conversation_params)

    if @conversation.save
        render json: @conversation, status: :created
    else
        render json: @conversation.errors, status: :unprocessable_entity
    end
    end

    def update
    @conversation = Conversation.find(params[:id])

    if @conversation.update(conversation_params)
        render json: @conversation
    else
        render json: @conversation.errors, status: :unprocessable_entity
    end
    end

    def destroy
    @conversation = Conversation.find(params[:id])
    @conversation.destroy
    end

    private

    def conversation_params
    params.require(:conversation).permit(:sender_id, :recipient_id)
    end
end
