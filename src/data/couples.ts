export interface Couple {
  id: string;
  name: string;
  description: string;
  destination: string;
  portrait: string;
  gallery: string[];
}

export const couples: Couple[] = [
  {
    id: "emily-james",
    name: "Emily & James",
    description: "Emily and James celebrated their union with an intimate ceremony in the heart of Tuscany. Their day was filled with tender moments, laughter, and a golden sunset that painted the vineyard in warm hues. The rustic-chic venue perfectly complemented their vision of a romantic yet understated celebration surrounded by their closest friends and family.",
    destination: "Tuscany, Italy",
    portrait: "https://plus.unsplash.com/premium_photo-1706276540293-7a226a90be28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VkZGluZyUyMGNvdXBsZXxlbnwwfDB8MHx8fDA%3D",
    gallery: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://plus.unsplash.com/premium_photo-1681841590340-b968010a033d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGNlbGVicmF0aW9ufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  },
  {
    id: "sophia-michael",
    name: "Sophia & Michael",
    description: "Sophia and Michael's celebration was a perfect blend of elegance and coastal charm. Their beachfront ceremony in Santorini featured breathtaking views of the Aegean Sea. The couple exchanged vows as waves gently lapped the shore, followed by a reception filled with Mediterranean delights, traditional Greek dances, and an unforgettable firework display that lit up the night sky.",
    destination: "Santorini, Greece",
    portrait: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGNvdXBsZXxlbnwwfDB8MHx8fDA%3D",
    gallery: [
      "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1236&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1624634564754-e45be6d06159?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: "olivia-ethan",
    name: "Olivia & Ethan",
    description: "Olivia and Ethan's winter wonderland wedding transformed a historic New York venue into a magical snow-dusted escape. Crystal accents, white floral arrangements, and soft candlelight created an atmosphere of enchantment and intimacy. Their first dance amidst falling paper snowflakes remains one of the most touching moments we've had the privilege to capture. The couple's love story shone brilliantly against the backdrop of Manhattan's twinkling skyline.",
    destination: "New York City, USA",
    portrait: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1523051121227-d6626e4bb9f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdlZGRpbmclMjBjZWxlYnJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1525772764200-be829a350797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1243&q=80"
    ]
  },
  {
    id: "ava-benjamin",
    name: "Ava & Benjamin",
    description: "Ava and Benjamin chose the vibrant backdrop of Barcelona for their destination wedding. Their celebration was infused with Spanish influences, from the flamenco dancers that entertained guests during cocktail hour to the paella stations at their al fresco reception. As the sun set over the Mediterranean Sea, the couple and their guests danced under strings of market lights in a historic courtyard. Their day was a perfect fusion of cultural richness and personal touches.",
    destination: "Barcelona, Spain",
    portrait: "https://images.unsplash.com/flagged/photo-1566150217714-ebfea356f885?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdlZGRpbmclMjBjb3VwbGV8ZW58MHwwfDB8fHww",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://plus.unsplash.com/premium_photo-1711301937396-bc120ec1e219?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1675851210855-e7727076e829?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1652950618858-70811bd589ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1711188101191-a3c4e9d2040c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
    ]
  },
  {
    id: "zoe-alexander",
    name: "Zoe & Alexander",
    description: "Zoe and Alexander embraced the raw beauty of the Pacific Northwest for their wedding day. Their ceremony took place in a clearing surrounded by towering pine trees, with handcrafted wooden benches for guests and an altar adorned with native wildflowers. The couple incorporated numerous sustainable elements, from farm-to-table catering to seed paper invitations. As dusk fell, lanterns illuminated pathways through the woods to a tented reception where guests celebrated under the stars.",
    destination: "Seattle, Washington",
    portrait: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1525328302834-764f32276842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdlZGRpbmclMjBjZWxlYnJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/flagged/photo-1555993073-4b59fda91dcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1664302571194-7eea24472995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
    ]
  },
  {
    id: "charlotte-william",
    name: "Charlotte & William",
    description: "Charlotte and William's celebration in the Cotswolds was the epitome of classic English charm. Their ceremony in a 12th-century stone church was followed by a reception in a marquee set within the manicured gardens of a historic country estate. Garden roses, peonies, and trailing ivy created a romantic atmosphere that perfectly complemented the bride's heirloom lace gown. As evening descended, the couple and their guests enjoyed a traditional Scottish ceilidh dance under the stars.",
    destination: "Cotswolds, England",
    portrait: "https://images.unsplash.com/photo-1580824456624-90e7ebe08d4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmclMjBjb3VwbGV8ZW58MHwwfDB8fHww",
    gallery: [
      "https://images.unsplash.com/photo-1556302482-70b6e670e6b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdlZGRpbmclMjBjb3VwbGV8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://plus.unsplash.com/premium_photo-1661387660992-58fa17d55971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
    ]
  }
];
