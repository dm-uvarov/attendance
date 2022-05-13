class StudentsController < ApplicationController
    def index 
        render json: Student.all, status: :ok
    end

    
end
