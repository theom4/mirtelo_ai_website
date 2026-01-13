import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FeatureCard {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}