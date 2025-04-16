from django.db import models

# Create your models here.
class Job(models.Model):
    car_name = models.CharField(max_length=25)
    job_description = models.TextField()

class Image(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='job_images', null=True)
    image = models.ImageField(upload_to='images/')

class ContactRequest(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)