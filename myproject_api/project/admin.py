# project/admin.py
from django.contrib import admin
from .models import User, SchoolType, School, AppliedSchool, Note

admin.site.register(User)
admin.site.register(SchoolType)
admin.site.register(School)
admin.site.register(AppliedSchool)
admin.site.register(Note)
