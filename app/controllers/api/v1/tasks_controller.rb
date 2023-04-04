class Api::V1::TasksController < ApplicationController
    before_action :set_task, only: [:show, :update, :destroy, :create]
  
    # GET /tasks
    def index
      @tasks = Task.all
  
      render json: @tasks
    end
  
    # GET /tasks/1
    def show
      render json: @task
    end
  
    # POST /tasks
    def create
      task = Task.create(title: params[:title], description: params[:description])
      render json: task, status: :created
    end
    
  
    # PATCH/PUT /tasks/1
    def update
      if @task.update(task_params)
        render json: @task
      else
        render json: @task.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /tasks/1
    def destroy
      task = Task.find_by(id: params[:id])
      if task
        task.destroy
        head :no_content
      else
        render json: { error: "Task not found" }, status: :not_found
      end
    end
    
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_task
        @task = Task.find(params[:id])
      end

  end
  