class SlotsController < ApplicationController

    def index 
        render json: Slot.all, status: :ok
    end

    
    def show
        slot = Slot.find_by!(id: params[:id])
        render json: slot, status: :ok
    end

end
