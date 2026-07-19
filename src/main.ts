function main() {
  const commands: string[] = process.argv.slice(2);
  if (commands.length === 0) {
    throw new Error("No command line arguments passed");
  }
  /*
   * Format of the 'args' array: [
   *  <COMMAND_NAME_1> <ARG1> <ARG2> .. <ARG N>,
   *  <COMMAND_NAME_2> <ARG1> <ARG2> .. <ARG N>
   *]
   *
   * The code evaluator will execute this code by using the command
   * node main.js 'COMMAND_NAME_1 ARG1 ARG2 ARG3' 'COMMAND_NAME_2 ARG1'
   *
   * We loop through the list of commands passed in as input arguments and handle each one of them
   */
  for (let cmd of commands) {
    //arg will have each command passed in the command line argumens
    //example: "ADD_ITEM PHYSICAL Shoes 100 2"
    handle(cmd);
  }
}

/*
 * This method should parse each input and assigns it into different variables.
 *
 * The value of the function parameter "input" will be of the format - "`<COMMAND_NAME_1> <ARG1> <ARG2> .. <ARG N>".
 * We split the string and retrieve the input data appropriately into the variable inputListForOneCommand.
 *
 */
function handle(cmd: string) {
  const inputsForOneCommand: string[] = cmd.split(" ");

  const command = inputsForOneCommand[0];
  const args = inputsForOneCommand.slice(1);

  // Example:
  // command = "ADD_ITEM"
  // args = ["PHYSICAL", "Shoes", "100", "2"]

  console.log("Command:", command);
  console.log("Arguments:", args);

  // TODO: Implement the command handling logic and print the output.
}

main();
