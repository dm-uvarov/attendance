class AttendancesController < ApplicationController

    def index 
        render json: Attendance.all, status: :ok
    end

    def show
        attendance = Attendance.find_by!(id: params[:id])
        render json: attendance, status: :ok
    end

    def update
        attendance = Attendance.find(params[:id])
        # byebug
        attendance.update!(attendance_params)
        render json: attendance,status: :ok
        
    end

    private

    def attendance_params 
        params.permit(:id, :is_attended)
    end

end
