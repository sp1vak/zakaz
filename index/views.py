from django.shortcuts import render
from django.views import View
from index import models, forms, utils

# Create your views here.
class IndexView(View):
    def get(self, request):
        form = forms.AdviceForm()
        return render(request, 'index.html', {'form': form})
    
    def post(self, request):
        form = forms.AdviceForm(request.POST)
        if form.is_valid():
            contact = form.save()
            utils.send_telegram_message(contact.name, contact.phone)
            return render(request, 'success.html')
        return render(request, 'index.html', {'form': form})

class CarsView(View):
    def get(self, request, car_id):
        cars = models.Job.objects.get(id=car_id)
        images = models.Image.objects.filter(job=cars)
        description = cars.job_description.split('\n')
        context = {
            'images': images,
            'cars': cars,
            'car_description': description,
        }
        return render(request, 'cars.html', context)
