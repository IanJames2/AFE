from django.db import models

# Create your models here.
class User(models.Model):
    email = models.EmailField(max_length=50)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class SchoolType(models.Model):
    name = models.CharField(max_length=50)

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

    def __str__(self):
        return self.institutionName

class AppliedSchool(models.Model):
    school = models.ForeignKey(School, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.CharField(max_length=50, default="Add A Comment About Your Application. Please add your name after the comment.")
    applied = models.BooleanField(default=True)

    def __str__(self):
        return self.comment

class Note(models.Model):
    school = models.ForeignKey(School, on_delete=models.CASCADE)
    content = models.TextField()

    def __str__(self):
        return self.content

