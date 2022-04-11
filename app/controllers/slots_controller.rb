class SlotsController < ApplicationController

    def index 
        render json: Slot.all, status: :ok
    end
end
