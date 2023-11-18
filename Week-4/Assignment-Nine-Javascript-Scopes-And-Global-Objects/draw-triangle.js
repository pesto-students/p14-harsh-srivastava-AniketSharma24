function drawTriangle(triangleSize) {
  for (let i = 0; i < triangleSize; i++) {
    let asterisk = "";
    for (let j = 0; j < i + 1; j++) {
      asterisk += "*";
    }
    console.log("\n", asterisk);
  }
}

drawTriangle(4);
