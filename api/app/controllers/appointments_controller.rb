class AppointmentsController < ApplicationController

    def index 
        render json: Appointment.all, status: :ok
    end
end
