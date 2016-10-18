from django.shortcuts import render
from django.http import HttpResponse

def index(request):
	#return HttpResponse("Hello World!")
	return render(request, 'login/index.html')
