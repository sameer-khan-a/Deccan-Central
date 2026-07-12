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
  url,
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
    url,
  }));

export const highlights = [
  // ==========================
  // Karnataka
  // ==========================
  ...createHighlights(
    karnataka.architectureItems,
    "Karnataka",
    "Architecture",
    "/karnataka/architecture",
    "#8B5CF6"
  ),
  ...createHighlights(
    karnataka.cultureItems,
    "Karnataka",
    "Culture",
    "/karnataka/culture",
    "#10B981"
  ),
  ...createHighlights(
    karnataka.cuisineItems,
    "Karnataka",
    "Cuisine",
    "/karnataka/cuisine",
    "#EC4899"
  ),
  ...createHighlights(
    karnataka.kingdomsItems,
    "Karnataka",
    "Kingdom",
    "/karnataka/kingdoms",
    "#F59E0B"
  ),
  ...createHighlights(
    karnataka.placesItems,
    "Karnataka",
    "Places",
    "/karnataka/places",
    "#06B6D4"
  ),
  ...createHighlights(
    karnataka.wildlifeItems,
    "Karnataka",
    "Wildlife",
    "/karnataka/wildlife",
    "#84CC16"
  ),

  // ==========================
  // Kerala
  // ==========================
  ...createHighlights(
    kerala.architectureItems,
    "Kerala",
    "Architecture",
    "/kerala/architecture",
    "#8B5CF6"
  ),
  ...createHighlights(
    kerala.cultureItems,
    "Kerala",
    "Culture",
    "/kerala/culture",
    "#10B981"
  ),
  ...createHighlights(
    kerala.cuisineItems,
    "Kerala",
    "Cuisine",
    "/kerala/cuisine",
    "#EC4899"
  ),
  ...createHighlights(
    kerala.kingdomsItems,
    "Kerala",
    "Kingdom",
    "/kerala/kingdoms",
    "#F59E0B"
  ),
  ...createHighlights(
    kerala.placesItems,
    "Kerala",
    "Places",
    "/kerala/places",
    "#06B6D4"
  ),
  ...createHighlights(
    kerala.wildlifeItems,
    "Kerala",
    "Wildlife",
    "/kerala/wildlife",
    "#84CC16"
  ),

  // ==========================
  // Andhra Pradesh
  // ==========================
  ...createHighlights(
    andrapradesh.architectureItems,
    "Andhra Pradesh",
    "Architecture",
    "/andhra-pradesh/architecture",
    "#8B5CF6"
  ),
  ...createHighlights(
    andrapradesh.cultureItems,
    "Andhra Pradesh",
    "Culture",
    "/andhra-pradesh/culture",
    "#10B981"
  ),
  ...createHighlights(
    andrapradesh.cuisineItems,
    "Andhra Pradesh",
    "Cuisine",
    "/andhra-pradesh/cuisine",
    "#EC4899"
  ),
  ...createHighlights(
    andrapradesh.kingdomsItems,
    "Andhra Pradesh",
    "Kingdom",
    "/andhra-pradesh/kingdoms",
    "#F59E0B"
  ),
  ...createHighlights(
    andrapradesh.placesItems,
    "Andhra Pradesh",
    "Places",
    "/andhra-pradesh/places",
    "#06B6D4"
  ),
  ...createHighlights(
    andrapradesh.wildlifeItems,
    "Andhra Pradesh",
    "Wildlife",
    "/andhra-pradesh/wildlife",
    "#84CC16"
  ),

  // ==========================
  // Tamil Nadu
  // ==========================
  ...createHighlights(
    tamilnadu.architectureItems,
    "Tamil Nadu",
    "Architecture",
    "/tamil-nadu/architecture",
    "#8B5CF6"
  ),
  ...createHighlights(
    tamilnadu.cultureItems,
    "Tamil Nadu",
    "Culture",
    "/tamil-nadu/culture",
    "#10B981"
  ),
  ...createHighlights(
    tamilnadu.cuisineItems,
    "Tamil Nadu",
    "Cuisine",
    "/tamil-nadu/cuisine",
    "#EC4899"
  ),
  ...createHighlights(
    tamilnadu.kingdomsItems,
    "Tamil Nadu",
    "Kingdom",
    "/tamil-nadu/kingdoms",
    "#F59E0B"
  ),
  ...createHighlights(
    tamilnadu.placesItems,
    "Tamil Nadu",
    "Places",
    "/tamil-nadu/places",
    "#06B6D4"
  ),
  ...createHighlights(
    tamilnadu.wildlifeItems,
    "Tamil Nadu",
    "Wildlife",
    "/tamil-nadu/wildlife",
    "#84CC16"
  ),

  // ==========================
  // Telangana
  // ==========================
  ...createHighlights(
    telangana.architectureItems,
    "Telangana",
    "Architecture",
    "/telangana/architecture",
    "#8B5CF6"
  ),
  ...createHighlights(
    telangana.cultureItems,
    "Telangana",
    "Culture",
    "/telangana/culture",
    "#10B981"
  ),
  ...createHighlights(
    telangana.cuisineItems,
    "Telangana",
    "Cuisine",
    "/telangana/cuisine",
    "#EC4899"
  ),
  ...createHighlights(
    telangana.kingdomsItems,
    "Telangana",
    "Kingdom",
    "/telangana/kingdoms",
    "#F59E0B"
  ),
  ...createHighlights(
    telangana.placesItems,
    "Telangana",
    "Places",
    "/telangana/places",
    "#06B6D4"
  ),
  ...createHighlights(
    telangana.wildlifeItems,
    "Telangana",
    "Wildlife",
    "/telangana/wildlife",
    "#84CC16"
  ),
];