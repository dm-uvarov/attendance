class DisciplinesController < ApplicationController

    def index 
        render json: Discipline.all, status: :ok
    end

    def show
        discipline = Discipline.find_by!(id: params[:id])
        render json: discipline, status: :ok
    end

end
