web: python wedding/manage.py collectstatic --noinput; bin/gunicorn_django --workers=4 --bind=0.0.0.0:$PORT wedding/settings.py 
web: python wedding/manage.py run_gunicorn -b "0.0.0.0:$PORT" -w 2