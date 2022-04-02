# Generated by Django 4.0.3 on 2022-03-25 14:22

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic_title', models.CharField(choices=[('introduction', 'Introduction'), ('footprinting', 'Footprinting'), ('network scaning', 'Network Scanning'), ('enumeration', 'Enumeration'), ('vulnerability Analysis', 'Vulnerability Analysis'), ('system hacking', 'System Hacking'), ('malware analysis', 'Malware Analysis'), ('sniffing', 'Sniffing'), ('social engineering', 'Social Engineering'), ('denieal of service attack', 'Denieal Of Service Attack'), ('session hijacking', 'Session Hijacking'), ('firewall', 'Firewall Ids Ips Honeypots'), ('hacking web servers', 'Hacking Web Servers'), ('hacking web applications', 'Hacking Web Applications'), ('sql injection', 'Sql Injection'), ('hacking mobile platforms', 'Hacking Mobile Platforms'), ('wifi hacking', 'Wifi Hacking'), ('iot', 'Iot'), ('cloud computing', 'Cloud Computing'), ('cryptography', 'Cryptography')], default='introduction', max_length=50)),
                ('topic_slug', models.SlugField()),
                ('topic_description', models.TextField()),
                ('topic_content', models.TextField()),
                ('topic_number', models.IntegerField()),
                ('topic_date_created', models.DateTimeField(blank=True, default=datetime.datetime.now, null=True)),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='modules.module')),
            ],
        ),
    ]