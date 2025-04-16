from django.forms import ModelForm
from index import models


class AdviceForm(ModelForm):
    class Meta:
        model = models.ContactRequest
        fields = ['name', 'phone']