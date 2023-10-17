from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('home/', views.home, name='home'),
    path('notes/', views.notes, name='note'),
    path('notes/<slug:slug>', views.notes_detail, name='note-detail'),
    path('notes/<slug:slug>/<slug:slug1>', views.notes_detail_in, name='note-detail-in'),
    path('examsolution/', views.examsolution, name='examsolution'),
    path('examsolution/<slug:slug>/<slug:slug1>', views.examsolution_detail, name='examsolution-detail'),
    path('about/', views.about, name='about'),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)