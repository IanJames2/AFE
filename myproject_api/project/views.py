# project/views.py
from rest_framework import generics

from .models import User, SchoolType, School, AppliedSchool, Note
from .serializers import ProjectSerializer


class ListProject(generics.ListCreateAPIView):
    queryset = SchoolType.objects.all()
    queryset = School.objects.all()
    queryset = AppliedSchool.objects.all()
    queryset = Note.objects.all()
    queryset = User.objects.all()
    serializer_class = ProjectSerializer


class DetailProject(generics.RetrieveUpdateDestroyAPIView):
    queryset = SchoolType.objects.all()
    queryset = School.objects.all()
    queryset = AppliedSchool.objects.all()
    queryset = Note.objects.all()
    queryset = User.objects.all()
    serializer_class = ProjectSerializer