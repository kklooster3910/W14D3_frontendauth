class Api::SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        # @user = User.find_by_credentials(params)
    end
    
    def destroy
        if current_user
            logout!    
            render :destroy
        else
            render :not_found
        end
    end

end
