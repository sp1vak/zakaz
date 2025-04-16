from django.contrib import admin
from index import models

# Register your models here.
@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'image', 'job']
    search_fields = ['id']
    list_filter = ['id']
    list_per_page = 10
    ordering = ['id']

@admin.register(models.Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ['id', 'car_name', 'job_description']
    search_fields = ['car_name']
    list_filter = ['car_name']
    list_per_page = 10
    ordering = ['id']

@admin.register(models.ContactRequest)
class ContactRequestAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'phone', 'created_at']
    search_fields = ['name', 'phone']
    list_filter = ['created_at']
    list_per_page = 10
    ordering = ['id']