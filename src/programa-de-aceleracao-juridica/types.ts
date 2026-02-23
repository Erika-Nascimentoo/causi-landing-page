import { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ComparisonItemProps {
  label: string;
  oldWay: string;
  newWay: string;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}

export interface QualificationItemProps {
  text: string;
  type: 'check' | 'cross';
}