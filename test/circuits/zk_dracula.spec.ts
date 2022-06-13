import { expect } from "chai";

import { testCircuit } from "./utils";

describe("Fury of Dracula", function () {
  this.timeout(100000000);

  it("works with circom_tester", async () => {
    const [, output] = await testCircuit("src/circuits/zk_dracula.circom", {
      pubGuessA: "5",
      pubGuessB: "4",
      pubGuessC: "3",
      pubGuessD: "2",
      pubGuessE: "1",

      pubNumHit: "5",
      pubNumBlow: "0",
      pubSolnHash: "15205191110637363744810499938453135529666887789796835345951558480184934827613",

      privSalt: "11235",
      privSolnA: "5",
      privSolnB: "4",
      privSolnC: "3",
      privSolnD: "2",
      privSolnE: "1",
    });

    expect(output).to.frEq(15205191110637363744810499938453135529666887789796835345951558480184934827613n);
  });
});
