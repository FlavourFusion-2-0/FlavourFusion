# Generated by Django 3.0.5 on 2020-07-06 15:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0015_auto_20200601_1951'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='type',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
