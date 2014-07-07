import unittest

from src import core, utils

class PypkgTest(unittest.TestCase):
    
    def test_true(self):
        self.assertTrue(True)

class CoreTest(unittest.TestCase):

	def setUp(self):
		pass

	def tearDown(self):
		pass

	def test_echo(self):
		self.assertEqual("ping", core.echo("ping"))
		self.assertEqual([1,2], core.echo([1,2]))
		self.assertEqual({1:2}, core.echo({1:2}))

	def test_fancy_print_returns_none(self):
		self.assertEqual(None, core.fancy_print("ping"))


class UtilsTest(unittest.TestCase):

	def test_fancy(self):
		self.assertEqual("~dog~", utils.fancy("dog"))


if __name__ == "__main__":
	unittest.main()