module Text.Lithium where

import Data.Aeson as JSON
import System.IO  
import Control.Monad

options :: IO()
options = do
	let textopts <- readFile "/opt/lithium/targets.json"
	let opts = decode textopts