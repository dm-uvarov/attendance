class DiscliplinesController < ApplicationController
    def index 
        render json: Student.all, status: :ok
    end

    def show
        discipline = Discipline.find_by!(id: params[:id])
        render json: discipline, status: :ok
    end

end
