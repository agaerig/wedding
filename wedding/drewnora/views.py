from django.views.generic import TemplateView
from django.http import HttpResponse

home = TemplateView.as_view(template_name='wedding/home.html')