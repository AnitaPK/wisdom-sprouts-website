"use client";
import alumni from "@/data/Alumni";
import AlumniGrid from "@/components/Placements/AlumniGrid";
import JourneyImpact from "@/components/Placements/JourneyImpact";
import PlacementPage from "@/components/Placements/PlacementPage";

export default function PlacementsPage() {
  return (
    <>
    <PlacementPage alumni={alumni} />
    {/* <JourneyImpact /> */}
    {/* <AlumniGrid alumni={alumni} /> */}
    </>
  );
}
