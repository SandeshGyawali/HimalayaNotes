from django.shortcuts import render
from .models import Note, Chapter, Examsolution

# Create your views here.
def home(request):
    return render(request, 'notes/home.html')

def notes(request):
    note = Note.objects.all()
    return render(request, 'notes/notesec.html', {'note':note})

def notes_detail(request, slug):
    all_ch = Chapter.objects.filter(subject_name__slug=slug)
    ch_one = Chapter.objects.filter(subject_name__slug=slug).get(chapter=1)

    return render(request, 'notes/notesdetail.html', {'ch':all_ch, 'ch_one':ch_one})

def notes_detail_in(request, slug, slug1):
    all_ch = Chapter.objects.filter(subject_name__slug=slug)
    ch_one = Chapter.objects.get(slug=slug1)

    return render(request, 'notes/notesdetail.html', {'ch':all_ch, 'ch_one':ch_one})

def examsolution(request):
    note = Note.objects.all()
    exam = Examsolution.objects.all()
    return render(request,'notes/examsolution.html',{'subj':note, 'exam':exam})

def examsolution_detail(request,slug,slug1):
    all_soln = Examsolution.objects.filter(subject_name__slug=slug)
    soln = Examsolution.objects.filter(subject_name__slug=slug).get(slug=slug1)
    return render(request, 'notes/examsolutiondetail.html',{'all_soln':all_soln, 'soln':soln})

def about(request):
    return render(request, 'notes/about.html')

