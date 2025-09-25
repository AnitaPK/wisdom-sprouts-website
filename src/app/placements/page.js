"use client";
import alumni from "@/data/Alumni";
import PlacementPage from "@/components/Placements/PlacementPage";

export default function PlacementsPage() {
  return (
    <>
    <PlacementPage alumni={alumni} />
    </>
  );
}
