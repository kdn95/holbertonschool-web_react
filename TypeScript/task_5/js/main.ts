export interface MajorCredits {
  credits: number;
  // Add a brand property to each interface in order to uniquely identify each of them
  __brand: "MajorCredits";
}

export interface MinorCredits {
  credits: number;
  // Add a brand property to each interface in order to uniquely identify each of them
  __brand: "MinorCredits";
};

// Each function takes two arguments subject1 and subject2
// sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
// Each function sums the credits of the two subjects
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  return subject1.credits + subject2.credits;
}
