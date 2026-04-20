import React from "react";
import { Canvas } from "@react-three/fiber";
import { GradientPlane, GradientPlaneYellow, GradientPlaneCases, GradientPlaneExpertise, GradientPlaneIndustries, GradientPlaneDiscovery } from "./SharedBackground";

interface HeroServicesWrapperProps {
  children: React.ReactNode;
  variant?: "default" | "yellow" | "cases" | "expertise" | "industries" | "discovery";
  autoHeight?: boolean;
}

export default function HeroServicesWrapper({ children, variant = "default", autoHeight = false }: HeroServicesWrapperProps) {
  const GradientComponent =
    variant === "yellow" ? GradientPlaneYellow :
    variant === "cases" ? GradientPlaneCases :
    variant === "expertise" ? GradientPlaneExpertise :
    variant === "industries" ? GradientPlaneIndustries :
    variant === "discovery" ? GradientPlaneDiscovery :
    GradientPlane;

  return (
    <div
      className={`relative overflow-hidden ${autoHeight ? '' : 'min-h-screen'}`}
      style={variant === "expertise" ? { backgroundColor: "#1a1530" } : undefined}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }} style={{ width: '100%', height: '100%' }}>
          <GradientComponent />
        </Canvas>
      </div>

      {variant !== "expertise" && (
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.45))",
          }}
        ></div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
