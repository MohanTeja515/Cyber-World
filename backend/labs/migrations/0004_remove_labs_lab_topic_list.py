# Generated by Django 4.0.3 on 2022-03-31 11:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0003_labs_labtopic_delete_labpost'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='labs',
            name='lab_topic_list',
        ),
    ]
