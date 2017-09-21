//https://www.codewars.com/kata/554e4a2f232cdd87d9000038
function DNAStrand(dna){
  //In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all 
  var dnaPairs = {'A':'T', 'T':'A', 'G':'C', 'C':'G'};
  return dna.replace(/./g, sym => dnaPairs[sym]);
}