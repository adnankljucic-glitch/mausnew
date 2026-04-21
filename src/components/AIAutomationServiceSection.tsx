import PillarRow from './PillarRow';

const bulletPoints = [
  {
    title: 'Machine Learning & AI',
    description: 'Custom ML models and AI solutions tailored to your specific business challenges.',
  },
  {
    title: 'Process Automation',
    description: 'Intelligent workflow optimization that reduces manual effort and increases accuracy.',
  },
  {
    title: 'Data Analysis',
    description: 'Advanced analytics and predictive insights to drive informed decision-making.',
  },
  {
    title: 'AI Assistants',
    description: 'Conversational AI and chatbot solutions that enhance customer and team interactions.',
  },
];

export default function AIAutomationServiceSection() {
  return (
    <PillarRow
      variant="light"
      bgOverride="#F7F8FA"
      headline="Intelligence applied to business complexity"
      intro="Transform your operations with intelligent automation that goes beyond simple workflows. We integrate advanced AI and machine learning directly into your infrastructure, enabling predictive analytics, automated decision-making, and scalable process optimization that amplifies your team's capabilities while maintaining data integrity."
      bulletsTitled={bulletPoints}
      image="/aiback.webp"
      imageOverlayTitle="AI & Automation"
      imageOverlaySubtitle="Integrating advanced AI and machine learning to enable predictive analytics and automated decision-making."
      imageAlt="AI & Automation"
    />
  );
}
