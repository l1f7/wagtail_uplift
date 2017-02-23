from django.conf.urls import url
from django.utils.html import format_html
from django.contrib.staticfiles.templatetags.staticfiles import static
from wagtail.wagtailcore import hooks
from wagtail.wagtailadmin.menu import MenuItem


@hooks.register('insert_global_admin_css')
def global_admin_css():
    html = '<link rel="stylesheet" href="{path}">'.format(path=static('css/wagtail_uplift.min.css'))
    return format_html(html)

@hooks.register('register_admin_menu_item')
def register_tile_menu_item():
    return MenuItem(
        'Pages',
        '/cmsadmin/pages/',
        classnames='icon icon-folder-open-1',
        order=1)

@hooks.register('construct_main_menu')
def hide_explorer_menu_item(request, menu_items):
    menu_items[:] = [item for item in menu_items if item.name != 'explorer']
