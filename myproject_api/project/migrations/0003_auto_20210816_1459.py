# Generated by Django 2.2.4 on 2021-08-16 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0002_appliedschool_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appliedschool',
            name='comment',
            field=models.CharField(default='Add A Comment About Your Application. Please add your name after the comment.', max_length=50),
        ),
    ]
