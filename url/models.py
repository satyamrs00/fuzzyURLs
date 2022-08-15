from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class UrlLink(models.Model):
    url = models.URLField(max_length=200)
    short_url = models.CharField(max_length=8, unique=True)