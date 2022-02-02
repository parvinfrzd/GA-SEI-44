from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home (request): 
    return HttpResponse('YO YO PARVIN')

def about(request): 
    return render(request, 'main_app/about.html')