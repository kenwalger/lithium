import unittest

from src import core

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

if __name__ == "__main__":
	unittest.main()