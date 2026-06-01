import type { PartyMember, PartySection } from "@/types/party";

export const BRIDE_PARTY: PartyMember[] = [
  { name: "Kimberly Beromilla", role: "Maid of Honor" },
  { name: "Nicole Anne Granada", role: "Maid of Honor" },
  { name: "Leira Manalansan", role: "Bridesmaid" },
];

export const GROOM_PARTY: PartyMember[] = [
  { name: "Jeremy Saing", role: "Best Man" },
  { name: "Ralph Largo", role: "Best Man" },
  { name: "Christian Jade Santos", role: "Groomsman" },
];

export const ADDITIONAL_SECTIONS: PartySection[] = [
  {
    title: "Mother of the Groom",
    members: [{ name: "Mrs. Susan M. Tacazon" }],
  },
  {
    title: "Parents of the Bride",
    members: [
      { name: "Mr. Teodoro S. Santos Jr." },
      { name: "Mrs. Gilda M. Santos" },
    ],
  },
  {
    title: "Principal Sponsors",
    members: [
      { name: "Mr. Rainier Vidal" },
      { name: "Mrs. Nancy Vidal" },
      { name: "Mr. Norbert Lavarias" },
      { name: "Ms. Felegina Bugay" },
      { name: "Mr. Memer Tatel" },
      { name: "Mrs. Sarah Tatel" },
      { name: "Mr. Roberto Estrella" },
      { name: "Mrs. Grace Estrella" },
      { name: "Mr. Michael Magat" },
      { name: "Mrs. Myrna Magat" },
      { name: "Mr. Robert Oli" },
      { name: "Mrs. Emerlina Oli" },
      { name: "Mr. Alfredo Santos" },
      { name: "Mrs. Eva Unay" },
      { name: "Mr. Francisco Garcia" },
      { name: "Mrs. Elvira Coquilla" },
      { name: "Mr. Ariel Manalansan" },
      { name: "Mrs. Elma Española" },
      { name: "Mr. Rolando Reyes" },
      { name: "Mrs. Rebecca Soliman" },
      { name: "Mrs. Loida Beltran" },
      { name: "Mrs. Ruth Rada" },
      { name: "Mrs. Elsie Cabral" },
    ],
  },
  {
    title: "Candle Sponsors",
    members: [{ name: "Gem Avy Montalla" }, { name: "Ana Marimar Francisco" }],
  },
  {
    title: "Veil Sponsors",
    members: [{ name: "Paul Fruelda" }, { name: "Yvonne Ivy Magat" }],
  },
  {
    title: "Cord Sponsors",
    members: [{ name: "Christian Jay Paulo Sotto" }, { name: "Erica Mae Santos" }],
  },
  {
    title: "Ring Bearer",
    members: [{ name: "Ramone Ymmanuel Espinorio" }],
  },
  {
    title: "Bible Bearer",
    members: [{ name: "Ram Felix Valencia" }],
  },
  {
    title: "Coin Bearer",
    members: [{ name: "Giann Miguel Valencia" }],
  },
  {
    title: "Flower Girl",
    members: [{ name: "Mireya Yzha Espinorio" }],
  },
];
