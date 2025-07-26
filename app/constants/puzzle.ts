export const colors = {
  apricot: "#FFD19C", // soft peachy queen
  blue: "#4FC3F7", // fresh sky pop 💦
  blush: "#F98BA5", // rose cheeks, full sass 😘
  butter: "#FFE066", // golden melt 💛
  candyBlue: "#00CFFF", // pop and sparkle 🍭
  coral: "#FF6F61", // spicy warmth 🔥
  green: "#8BC34A", // garden goddess 🌿
  ice: "#B2EBF2", // frozen royalty ❄️
  lavender: "#B39DDB", // calm but dangerous 💜
  lilac: "#CE93D8", // flirt in floral 💐
  peach: "#FFB07C", // sweet but savage 🍑
  pink: "#FF94C2", // sugar with claws 💅
  pistachio: "#A0E6B3", // minty fresh 🌱
  sky: "#81D4FA", // horizon baddie ☁️
  yellow: "#FFEB3B", // sunshine sass 🌞
  stroke: "#111111", // strong outline mama 🖤
  white: "#FFFFFF", // pure but not innocent 😇
} as const;

export type Color = keyof typeof colors;
