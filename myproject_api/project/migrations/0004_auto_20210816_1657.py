# Generated by Django 2.2.4 on 2021-08-16 21:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0003_auto_20210816_1459'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appliedschool',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='appliedschool',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='note',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='note',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='school',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='school',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='schooltype',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='schooltype',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='user',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='user',
            name='updated_at',
        ),
    ]