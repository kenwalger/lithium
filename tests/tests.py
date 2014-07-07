import unittest

from pypkg import core, utils

def run_command(command):
    p = subprocess.Popen(command,
                         stdout=subprocess.PIPE,
                         stderr=subprocess.STDOUT)
    return iter(p.stdout.readline, b'')

class PypkgTest(unittest.TestCase):
    
    def test_true(self):
        self.assertTrue(True)

class CoreTest(unittest.TestCase):

	def test_echo(self):
		self.assertEqual("ping", "ping")

	def test_fancy_print_returns_none(self):
		self.assertEqual(None, core.fancy_print("ping"))


class UtilsTest(unittest.TestCase):

	def test_fancy(self):
		self.assertEqual("~dog~", utils.fancy("dog"))


if __name__ == "__main__":
	unittest.main()