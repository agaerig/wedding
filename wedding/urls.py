import os
from django.conf import settings
from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'drewnora.views.home', name='home'),
    url(r'^rsvp/$', 'drewnora.views.rsvp', name='rsvp'),
    url(r'^information/$', 'drewnora.views.information', name='information'),
    url(r'^annora-and-drew/$', 'drewnora.views.couple', name='couple'),
    url(r'^detroit/$', 'drewnora.views.detroit', name='detroit'),
    url(r'^registry/$', 'drewnora.views.registry', name='registry'),
    url(r'^static/(?P<path>.*)$', 'django.views.static.serve',
        {'document_root': settings.MEDIA_ROOT}),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
