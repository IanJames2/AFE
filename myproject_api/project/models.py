from django.db import models

# Create your models here.
class User(models.Model):
    email = models.EmailField(max_length=30)
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class School(models.Model):
    us
