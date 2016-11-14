const PATTERNS = [
    {
      "id": 0,
      "name": "Silk",
      "ac": "6",
      "costs": {
        "Avenger": "7",
        "Paladin": "5",
        "Ranger": "7",
        "Bard": "19",
        "Rogue": "24",
        "Assassin": "32",
        "Healer": "5",
        "Druid": "7",
        "Inquisitor": "7",
        "Enchanter": "19",
        "Conjurer": "24",
        "Necromancer": "32"
		}
    },
    {
      "id": 1,
      "name": "Suede",
      "ac": "12",
      "costs": {
        "Avenger": "44",
        "Paladin": "32",
        "Ranger": "44",
        "Bard": "101",
        "Rogue": "131",
        "Assassin": "176",
        "Healer": "32",
        "Druid": "44",
        "Inquisitor": "44",
        "Enchanter": "101",
        "Conjurer": "131",
        "Necromancer": "176"
      }
    },
    {
      "id": 2,
      "name": "Leather",
      "ac": "18",
      "costs": {
        "Avenger": "120",
        "Paladin": "86",
        "Ranger": "120",
        "Bard": "280",
        "Rogue": "369",
        "Assassin": "502",
        "Healer": "86",
        "Druid": "120",
        "Inquisitor": "120",
        "Enchanter": "280",
        "Conjurer": "369",
        "Necromancer": "502"
      }
    }
];

export function getPatterns() {
  return PATTERNS;
};