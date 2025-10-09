"use client";
import React from 'react';
import HeaderGallery from './HeaderGallery';
import PlacementGallery from './PlacementGallery';
import './GalleryPage.css';
import RecruitmentShowcase from './RecruitmentShowcase';
import CultureShowcase from './CultureShowcase';
import WorkshopsShowcase from './WorkshopsShowcase';

const GallaryPage = () => {
  return (
    <>
      <HeaderGallery />
      <PlacementGallery />
      <RecruitmentShowcase />
      <WorkshopsShowcase />
      <CultureShowcase />
    </>
  );
};

export default GallaryPage;


