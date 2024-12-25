from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.index, name='index'),
    path('<str:name>', views.greet, name='greet'),
    path("rem", views.rem, name='rem'),
    path("david", views.david, name='david')
]
