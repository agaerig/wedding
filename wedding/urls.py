import os
from django.conf import settings
from django.conf.urls.defaults import patterns, include, url
from django.views.generic.simple import direct_to_template

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', direct_to_template, {'template': 'wedding/home.html'}, name='home'),
    url(r'^information/$', direct_to_template, {'template': 'wedding/interior/information.html'}, name='information'),
    url(r'^about-us/$', direct_to_template, {'template': 'wedding/interior/about-us.html'}, name='about-us'),
    url(r'^accommodations/$', direct_to_template, {'template': 'wedding/interior/accommodations.html'}, name='accommodations'),
    url(r'^detroit/$', direct_to_template, {'template': 'wedding/interior/detroit.html'}, name='detroit'),
    url(r'^registry/$', direct_to_template, {'template': 'wedding/interior/registry.html'}, name='registry'),
    # url(r'^static/(?P<path>.*)$', 'django.views.static.serve',
    #     {'document_root': settings.MEDIA_ROOT}),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
