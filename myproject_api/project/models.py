from django.db import models
from datetime import date, datetime
from time import strftime

# Create your models here.
class User(models.Model):
    email = models.EmailField(max_length=50)
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.email

class SchoolType(models.Model):
    name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.name

class School(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    school_types = models.ManyToManyField(SchoolType, related_name= "categories")
    logo = models.CharField(max_length=50)
    institutionName = models.CharField(max_length=50)
    major = models.CharField(max_length=50)
    tuition = models.IntegerField()
    websiteURL = models.CharField(max_length=50)
    enrollmentStatus = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.user

class AppliedSchool(models.Model):
    school = models.ForeignKey(School, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    applied = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.school

class Note(models.Model):
    school = models.ForeignKey(School, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def __str__(self):
        return self.school

