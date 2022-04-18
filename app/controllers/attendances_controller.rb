class AttendancesController < ApplicationController

    def index 
        render json: Attendance.all, status: :ok
    end

    def show
        attendance = Attendance.find_by!(id: params[:id])
        render json: attendance, status: :ok
    end

    def update
        attendance = Attendance.find_by!(id: params[:id])
        attendance.update(is_attended: params[:is_attended])
        
        render json: attendance,status: :ok
        
    end

end
