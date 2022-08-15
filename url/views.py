from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.shortcuts import redirect
from django.core.exceptions import ObjectDoesNotExist

from random import choices
import string
import json

from .models import UrlLink

# Create your views here.
def index(request):
    if request.method == "POST":
        data = json.loads(request.body)
        while True:
            randomString = ''.join(choices(string.ascii_lowercase + string.digits, k=8))
            if not UrlLink.objects.filter(short_url=randomString).exists():
                break

        l = UrlLink(url=data.get('url'), short_url=randomString)
        l.save()

        return JsonResponse({
            "short_url": randomString
        })
    return render(request, 'url/index.html')

def redirect_url(request, short_url):
    try:
        l = UrlLink.objects.get(short_url=short_url)
    except ObjectDoesNotExist:
        return HttpResponse('Does not exist', status=404)
    
    return redirect(l.url)