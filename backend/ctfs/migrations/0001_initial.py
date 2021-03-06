# Generated by Django 4.0.3 on 2022-03-27 03:51

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CTFs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ctfs_title', models.CharField(choices=[('introduction', 'Introduction'), ('footprinting', 'Footprinting'), ('network scaning', 'Network Scanning'), ('enumeration', 'Enumeration'), ('vulnerability Analysis', 'Vulnerability Analysis'), ('system hacking', 'System Hacking'), ('malware analysis', 'Malware Analysis'), ('sniffing', 'Sniffing'), ('social engineering', 'Social Engineering'), ('denieal of service attack', 'Denieal Of Service Attack'), ('session hijacking', 'Session Hijacking'), ('firewall', 'Firewall Ids Ips Honeypots'), ('hacking web servers', 'Hacking Web Servers'), ('hacking web applications', 'Hacking Web Applications'), ('sql injection', 'Sql Injection'), ('hacking mobile platforms', 'Hacking Mobile Platforms'), ('wifi hacking', 'Wifi Hacking'), ('iot', 'Iot'), ('cloud computing', 'Cloud Computing'), ('cryptography', 'Cryptography')], default='introduction', max_length=50)),
                ('ctfs_slug', models.SlugField()),
                ('ctfs_photos', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/')),
                ('ctfs_description', models.TextField()),
                ('ctfs_content', models.TextField()),
                ('ctfs_level', models.IntegerField()),
                ('ctfs_difficulty', models.CharField(max_length=100)),
                ('ctfs_area', models.CharField(max_length=100)),
                ('ctfs_sections', models.IntegerField()),
                ('ctfs_points_add', models.IntegerField()),
                ('ctfs_points_minus', models.IntegerField()),
                ('ctfs_date_created', models.DateTimeField(blank=True, default=datetime.datetime.now, null=True)),
                ('ctfs_topic_list', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='CTFsTopic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ctfs_topic_title', models.CharField(max_length=300)),
                ('ctfs_topic_slug', models.SlugField()),
                ('ctfs_topic_description', models.TextField()),
                ('ctfs_topic_content', models.TextField()),
                ('ctfs_topic_number', models.IntegerField()),
                ('ctfs_topic_date_created', models.DateTimeField(blank=True, default=datetime.datetime.now, null=True)),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='ctfs.ctfs')),
            ],
        ),
    ]
