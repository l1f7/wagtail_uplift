from django.utils.html import format_html
from django.contrib.staticfiles.templatetags.staticfiles import static
from wagtail.wagtailcore import hooks


@hooks.register('insert_global_admin_css')
def global_admin_css():
    html = '<link rel="stylesheet" href="{path}">'.format(path=static('css/wagtail_uplift.min.css'))
    return format_html(html)
