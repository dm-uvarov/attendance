class AttendancesController < ApplicationController

    def index 
        render json: Attendance.all, status: :ok
    end

end
