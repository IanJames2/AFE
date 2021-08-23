# project/serializers.py
from rest_framework import serializers
from .models import SchoolType, User, Note, School, AppliedSchool


class ProjectSerializer(serializers.ModelSerializer):
    class Meta():
        model = Note
        fields = [
            'id',
            'school',
            'content',
        ]


class ProjectSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = (
            'id',
            'email',
            'name'
        )


# class ProjectSerializer(serializers.ModelSerializer):
#     class Meta():
#         model = SchoolType
#         fields = [
#             'id',
#             'name'
#         ]


# class ProjectSerializer(serializers.ModelSerializer):
#     class Meta():
#         model = School
#         fields = [
#             'id',
#             'user',
#             'school_types',
#             'logo',
#             'institutionName',
#             'major',
#             'tuition',
#             'websiteURL',
#             'enrollmentStatus'
#         ]


# class ProjectSerializer(serializers.ModelSerializer):
#     class Meta():
#         model = AppliedSchool
#         fields = [
#             'id',
#             'school',
#             'user',
#             'comment',
#             'applied'
#         ]
