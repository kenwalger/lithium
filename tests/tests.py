import unittest
import os

class TrueTest(unittest.TestCase):
    
    def test_true(self):
        self.assertTrue(True)

class HelpTest(unittest.TestCase):

	def test_help(self):

		expectation = ["Lithium Version 0.0.1 Help", "", "For help type:", "", \
			"--feature <feature> for help with a particular Lithium feature", \
		 	"", "--package <name> for help with a Lithium package", "", \
			"--error <number> for help with an error message", "", \
			"--action <task> for help with a common task, such as translating",\
			 "", "--quit to quit Lithium help", ""]

		reality = os.popen("lithium help").readlines()

		for i in range(len(reality)):
			reality[i] = reality[i].strip()

		self.assertEqual(expectation, reality)

if __name__ == "__main__":
	unittest.main()