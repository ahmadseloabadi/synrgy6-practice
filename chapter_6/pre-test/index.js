const n = 10;

async function generateSequence(n) {
  if (n < 0) throw new Error("n must be positif");

  const sequnce = [];
  for (let i = 1; i <= n; i++) sequnce.push(i);

  return sequnce;
}

generateSequence(n).then(console.log);
