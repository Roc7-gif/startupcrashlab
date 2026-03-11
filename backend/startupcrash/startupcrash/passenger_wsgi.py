import os
import sys

# Indique à Python où se trouve ton projet
sys.path.insert(0, os.path.dirname(__file__))

# Remplace 'NOM_DE_TON_PROJET' par le nom du dossier contenant ton settings.py
os.environ['DJANGO_SETTINGS_MODULE'] = 'startupcrash.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()