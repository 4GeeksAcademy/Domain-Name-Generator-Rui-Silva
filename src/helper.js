let domainNameGenerator = () => {
  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "worst"];
  let noun = ["jogger", "racoon", "game"];
  let extensions = [".com", ".pt", ".us"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + extensions[l]);
        }
      }
    }
  }
};

console.log(domainNameGenerator());
