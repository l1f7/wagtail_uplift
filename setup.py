# -*- coding: utf-8 -*-
from setuptools import find_packages, setup


setup(
    name='wagtail_uplift',
    version='0.0.8',
    packages=find_packages(),
    include_package_data=True,
    license='BSD License',
    description='A custom theme for Wagtail’s dashboard.',
    long_description=open('README.rst').read(),
    url='https://github.com/l1f7/wagtail_uplift',
    author='Lift Interactive',
    author_email='dev+pypi@liftinteractive.com',
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Framework :: Django',
        'Framework :: Django :: 1.8',
        'Framework :: Django :: 1.9',
        'Topic :: Internet :: WWW/HTTP :: Site Management',
    ],
)
