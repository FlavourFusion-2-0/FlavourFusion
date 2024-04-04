# Generated by Django 3.0.5 on 2020-04-28 14:24
from django.contrib.postgres.search import SearchVector
from django.db import migrations

from recipe_api.settings import POSTGRES_LANGUAGE_UNACCENT


def update_search_vector(apps, schema_editor):
    Recipe = apps.get_model("recipes", "Recipe")
    vector = SearchVector('name', weight='A', config=POSTGRES_LANGUAGE_UNACCENT) + SearchVector('ingredients', weight='B', config=POSTGRES_LANGUAGE_UNACCENT)
    Recipe.objects.update(search_vector=vector)


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0013_auto_20200428_1416'),
    ]

    operations = [
        migrations.RunPython(update_search_vector),
    ]
