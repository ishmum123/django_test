from django.shortcuts import render
from django.http import HttpResponse

def index(request):
<<<<<<< HEAD
	#return HttpResponse("Hello World!")
	return render(request, 'login/index.html')
=======
	return HttpResponse("Hello World!")
>>>>>>> 22a89186b391d6ae918230b8013bb4588c9a4735
