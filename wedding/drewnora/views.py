from django.views.generic import TemplateView
from django.http import HttpResponse

home = TemplateView.as_view(template_name='wedding/home.html')
rsvp = TemplateView.as_view(template_name='wedding/rsvp.html')
couple = TemplateView.as_view(template_name='wedding/couple.html')
information = TemplateView.as_view(template_name='wedding/information.html')
detroit = TemplateView.as_view(template_name='wedding/detroit.html')
registry = TemplateView.as_view(template_name='wedding/registry.html')
accommodations = TemplateView.as_view(template_name='wedding/accommodations.html')
