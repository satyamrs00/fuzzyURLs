# Generated by Django 4.1 on 2022-08-15 00:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('url', '0002_urllink'),
    ]

    operations = [
        migrations.AlterField(
            model_name='urllink',
            name='short_url',
            field=models.CharField(max_length=8, unique=True),
        ),
    ]
