extern crate argparse;
use std::os;
use argparse::{ArgumentParser, StoreTrue, Store};

fn main() {
    let mut run = false;
    {
        let mut ap = ArgumentParser::new();
        ap.set_description("Compile and run Lithium programs.");
        ap.refer(&mut verbose)
            .add_option(&["-r", "--run"], StoreTrue,
            "Run the specified file.");
        ap.parse_args_or_exit();
    }
}
