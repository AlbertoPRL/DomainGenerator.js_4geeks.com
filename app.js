function start(){  
    domainGenerator();
}

const domainGenerator = () => {
    const pronoun = ['the', 'our'];
    const adj = ['great', 'big'];
    const noun = ['jogger', 'racoon'];
    const domain = ['.com', '.es']

    let arrays = [pronoun, adj, noun, domain];
    let result = [];
    getCombinations(arrays, result, 0, []);

    console.log(result);
}

function getCombinations(arrays, result, index, current) {
    if (index === arrays.length) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < arrays[index].length; i++) {
      current[index] = arrays[index][i];
      getCombinations(arrays, result, index + 1, current);
    }
}

start();
