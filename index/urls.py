from django.contrib import admin
from django.urls import path
from index import views

urlpatterns = [
    path('', views.IndexView.as_view(), name="index"),
    path('cars/<int:car_id>/', views.CarsView.as_view(), name='cars'),
]
