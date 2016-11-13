const PATTERNS = [
    {
      "id": 0,
      "name": "Silk",
      "ac": "6",
      "costs": {
        "Avenger": "10",
        "Paladin": "20",
        "Ranger": "30"
      }
    },
    {
      "id": 1,
      "name": "Suede",
      "ac": "3",
      "costs": {
        "Avenger": "20",
        "Paladin": "2"
      }
    },
    {
      "id": 2,
      "name": "Leather",
      "ac": "3",
      "costs": {
        "Avenger": "20",
        "Paladin": "2",
        "Ranger": "30"
      }
    }
];

export function getPatterns() {
  return PATTERNS;
};