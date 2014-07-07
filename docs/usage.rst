Usage
=====

Getting Started
---------------

0. Copy/clone `Pypkg` to use as the basis for your project.
1. Setup your Python package in a package directory with a matching name (e.g. package `pypkg` in the `pypkg` package directory).
2. Set the package version `x.x.x` in the package's `VERSION` file.
3. Update `setup.py` and `setup.cfg` with the name, dependencies, etc. of your package.
4. Install development dependencies into a virtual environment and list them in `requirements.txt`.
5. Develop the package locally.

.. code-block:: bash
    
    python setup.py develop      # setuptools way
    pip install -e .             # pip way

6. Write tests for the package and ensure the .travis.yml config will run them.

.. code-block:: bash

    nosetests  # autodiscover and run tests (run from project root)

7. Write Sphinx documentation for the package.

.. code-block:: bash

    cd docs
    make html

8. Change the `LICENSE` file to a license you like. Update the license link in `README.rst`.

Modifications: Checklist
------------------------

After making changes, complete the following tasks:

* Local nosetests pass
* Changes are summarized in `CHANGES.rst`
* Increment the version in `pypkg/VERSION` and the documentation
* README summary matches `DESCRIPTION.rst`
* Continuous Integration tests pass (sandbox)
* Code pushed to source host
* Rebuild the `ReadTheDocs <https://readthedocs.org/>`_ docs from the project overview
* Upload releases to `PyPI <https://pypi.python.org/pypi>`_. If metadata has changed, re-register the package to upload the new metadata.


Publishing
----------

1. Create a new repository on a source host such as Github or Bitbucket.
2. Go to `Travis CI <https://travis-ci.org/>`_ or another CI runner and setup your repository.
3. Update the badge links in the project `README.rst`.
4. Push the source to your repository host.
5. Go to `ReadTheDocs <https://readthedocs.org/>`_ and build your docs from the hosted source.
6. Build and pack the package.

.. code-block:: bash

    python setup.py sdist          # source distribution
    python setup.py bdist_wheel    # binary wheel distribution

7. Register the package name with `PyPI <https://pypi.python.org/pypi>`_.

.. code-block:: bash

    python setup.py register       # uploads all metadata to PyPI     

Note that registration still currently occurs over insecure http rather than https. The first attempt to connect to PyPI prompts for a username and password and generates a `.pypirc` file like the following:

.. code-block:: ini

    [distutils]
    index-servers =
        pypi

    [pypi]
    username:dghubble
    password:mypass

to simplify future registrations/uploads. Registration also updates the 

8. Upload the package distributions to PyPI.

.. code-block:: bash

    twine upload dist/*       # using twine


9. Check all README.rst links, documentation links, and PyPI links for correctness.
10. Improve and maintain the project, docs, and tests. There is no last step. You are never done.
