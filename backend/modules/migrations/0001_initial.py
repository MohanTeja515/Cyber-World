# Generated by Django 4.0.3 on 2022-03-25 14:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Module',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('module_title', models.CharField(choices=[('introduction', 'Introduction'), ('footprinting', 'Footprinting'), ('network scaning', 'Network Scanning'), ('enumeration', 'Enumeration'), ('vulnerability Analysis', 'Vulnerability Analysis'), ('system hacking', 'System Hacking'), ('malware analysis', 'Malware Analysis'), ('sniffing', 'Sniffing'), ('social engineering', 'Social Engineering'), ('denieal of service attack', 'Denieal Of Service Attack'), ('session hijacking', 'Session Hijacking'), ('firewall', 'Firewall Ids Ips Honeypots'), ('hacking web servers', 'Hacking Web Servers'), ('hacking web applications', 'Hacking Web Applications'), ('sql injection', 'Sql Injection'), ('hacking mobile platforms', 'Hacking Mobile Platforms'), ('wifi hacking', 'Wifi Hacking'), ('iot', 'Iot'), ('cloud computing', 'Cloud Computing'), ('cryptography', 'Cryptography')], default='introduction', max_length=50)),
                ('module_slug', models.SlugField()),
                ('module_photos', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/')),
                ('module_description', models.TextField()),
                ('module_content', models.TextField()),
                ('module_level', models.IntegerField()),
                ('module_difficulty', models.CharField(max_length=100)),
                ('module_area', models.CharField(max_length=100)),
                ('module_sections', models.IntegerField()),
                ('module_points_add', models.IntegerField()),
                ('module_points_minus', models.IntegerField()),
                ('module_date_created', models.DateTimeField(blank=True, default=datetime.datetime.now, null=True)),
            ],
        ),
    ]
