# Generated by Django 4.0.3 on 2022-03-30 08:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0003_module_module_topic_list_alter_topic_topic_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='module',
            name='module_topic_list',
        ),
    ]