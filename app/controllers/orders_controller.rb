class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]

  # GET /orders
  def index
    @orders = Order.includes(:product).all
    render json: @orders.to_json(include: :product)

  end

  # GET /orders/:id
  def show
    render json: @order
  end

  # POST /orders
  def create
    @order = Order.new(order_params)
    if @order.save
      render json: @order, status: :created
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/:id
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/:id
  def destroy
    @order.destroy
    head :no_content
  end

  private

  # Set order for show, update, destroy actions
  def set_order
    @order = Order.find(params[:id])
  end

  # Only allow trusted parameters through
  def order_params
    params.require(:order).permit(:quantity, :image_url, :category, :price, :product_id)
  end
end
