# project/serializers.py
from rest_framework import serializers
from .models import User, Note


class ProjectSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = (
            'id',
            'email',
            'name'
        )

    class Note:
        model = Note
        fields = [
            'id',
            'school',
            'content',
        ]
