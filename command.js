import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import {DeleteNote,addNote} from "./notes2.js";

yargs()
    .command(
        {
            command: "Delete",
            describe: "Delete a note",
            builder: {
                delete : {demandOption: true , type: "number"}
            },
            handler: (argv) => {DeleteNote(argv.delete);

        }}


    )
    .help()
    .parse(hideBin(process.argv));

