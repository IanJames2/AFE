# project/serializers.py
from rest_framework import serializers
from .models import User, Note


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'email',
            'name',
        )
    class Note:
        fields = (
            'id',
            'school',
            'content',
        )
        model = User, Note