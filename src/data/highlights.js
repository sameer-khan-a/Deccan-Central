// src/data/highlights.js

import {
  karnataka,
  kerala,
  andrapradesh,
  tamilnadu,
  telangana,
} from "./";

const createHighlights = (
  items,
  state,
  handle,
  color
) =>
  items.map((item) => ({
    image: item.image,
    title: item.title,
    state,
    subtitle: item.subtitle,
    handle,
    borderColor: color,
    gradient: `linear-gradient(145deg, ${color}, #000)`,
    link: item.link,
  }));

export const highlights = [
  // ==========================
  // Karnataka
  // ==========================
  ...createHighlights(
    karnataka.architectureItems,
    "Karnataka",
    "Architecture",
    "#8B5CF6"
  ),
  ...createHighlights(
    karnataka.cultureItems,
    "Karnataka",
    "Culture",
    "#10B981"
  ),
  ...createHighlights(
    karnataka.cuisineItems,
    "Karnataka",
    "Cuisine",
    "#EC4899"
  ),
  ...createHighlights(
    karnataka.kingdomsItems,
    "Karnataka",
    "Kingdom",
    "#F59E0B"
  ),
  ...createHighlights(
    karnataka.placesItems,
    "Karnataka",
    "Places",
    "#06B6D4"
  ),
  ...createHighlights(
    karnataka.wildlifeItems,
    "Karnataka",
    "Wildlife",
    "#84CC16"
  ),

  // ==========================
  // Kerala
  // ==========================
  ...createHighlights(
    kerala.architectureItems,
    "Kerala",
    "Architecture",
    "#8B5CF6"
  ),
  ...createHighlights(
    kerala.cultureItems,
    "Kerala",
    "Culture",
    "#10B981"
  ),
  ...createHighlights(
    kerala.cuisineItems,
    "Kerala",
    "Cuisine",
    "#EC4899"
  ),
  ...createHighlights(
    kerala.kingdomsItems,
    "Kerala",
    "Kingdom",
    "#F59E0B"
  ),
  ...createHighlights(
    kerala.placesItems,
    "Kerala",
    "Places",
    "#06B6D4"
  ),
  ...createHighlights(
    kerala.wildlifeItems,
    "Kerala",
    "Wildlife",
    "#84CC16"
  ),

  // ==========================
  // Andhra Pradesh
  // ==========================
  ...createHighlights(
    andrapradesh.architectureItems,
    "Andhra Pradesh",
    "Architecture",
    "#8B5CF6"
  ),
  ...createHighlights(
    andrapradesh.cultureItems,
    "Andhra Pradesh",
    "Culture",
    "#10B981"
  ),
  ...createHighlights(
    andrapradesh.cuisineItems,
    "Andhra Pradesh",
    "Cuisine",
    "#EC4899"
  ),
  ...createHighlights(
    andrapradesh.kingdomsItems,
    "Andhra Pradesh",
    "Kingdom",
    "#F59E0B"
  ),
  ...createHighlights(
    andrapradesh.placesItems,
    "Andhra Pradesh",
    "Places",
    "#06B6D4"
  ),
  ...createHighlights(
    andrapradesh.wildlifeItems,
    "Andhra Pradesh",
    "Wildlife",
    "#84CC16"
  ),

  // ==========================
  // Tamil Nadu
  // ==========================
  ...createHighlights(
    tamilnadu.architectureItems,
    "Tamil Nadu",
    "Architecture",
    "#8B5CF6"
  ),
  ...createHighlights(
    tamilnadu.cultureItems,
    "Tamil Nadu",
    "Culture",
    "#10B981"
  ),
  ...createHighlights(
    tamilnadu.cuisineItems,
    "Tamil Nadu",
    "Cuisine",
    "#EC4899"
  ),
  ...createHighlights(
    tamilnadu.kingdomsItems,
    "Tamil Nadu",
    "Kingdom",
    "#F59E0B"
  ),
  ...createHighlights(
    tamilnadu.placesItems,
    "Tamil Nadu",
    "Places",
    "#06B6D4"
  ),
  ...createHighlights(
    tamilnadu.wildlifeItems,
    "Tamil Nadu",
    "Wildlife",
    "#84CC16"
  ),

  // ==========================
  // Telangana
  // ==========================
  ...createHighlights(
    telangana.architectureItems,
    "Telangana",
    "Architecture",
    "#8B5CF6"
  ),
  ...createHighlights(
    telangana.cultureItems,
    "Telangana",
    "Culture",
    "#10B981"
  ),
  ...createHighlights(
    telangana.cuisineItems,
    "Telangana",
    "Cuisine",
    "#EC4899"
  ),
  ...createHighlights(
    telangana.kingdomsItems,
    "Telangana",
    "Kingdom",
    "#F59E0B"
  ),
  ...createHighlights(
    telangana.placesItems,
    "Telangana",
    "Places",
    "#06B6D4"
  ),
  ...createHighlights(
    telangana.wildlifeItems,
    "Telangana",
    "Wildlife",
    "#84CC16"
  ),
];
