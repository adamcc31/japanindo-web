"use client";

import { useState, useEffect, useRef } from "react";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: string; // Material Icon identifier (string name)
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [viewMode] = useState<"orbital" | "flat">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.2) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    // Smooth transition to centering at top (270 deg)
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 220; // Slightly larger orbit
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.3,
      Math.min(1, 0.3 + 0.7 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusBadge = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return (
          <span className="px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase border border-blue-500/30 bg-blue-500/10 text-blue-400 rounded-full">
            COMPLETE
          </span>
        );
      case "in-progress":
        return (
          <span className="px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 rounded-full animate-pulse">
            IN PROGRESS
          </span>
        );
      case "pending":
        return (
          <span className="px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase border border-[#2D2D2D] bg-[#111111] text-[#52525B] rounded-full">
            PENDING
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="w-full min-h-[600px] h-[75vh] flex flex-col items-center justify-center bg-[#000000] border border-[#1F1F1F] rounded-3xl relative overflow-hidden select-none"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Background hint */}
      <div className="absolute inset-0 bg-[#000000] opacity-50 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Helper instruction */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
        <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">Interactive Infrastructure map</div>
        <div className="text-[10px] text-[#52525B]">Click nodes to pause rotation and drill down into details</div>
      </div>

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Central System Hub Core */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-white animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-blue-500/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-blue-500/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-black/90 flex items-center justify-center font-bold text-white text-[10px]">WABA</div>
          </div>

          {/* Orbit Line Ring */}
          <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-blue-500/15 pointer-events-none"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer flex flex-col items-center justify-center"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Glow ring around the node */}
                <div
                  className={`absolute rounded-full -inset-2 transition-all duration-1000 ${
                    isPulsing ? "animate-pulse" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0) 70%)`,
                    width: `${item.energy * 0.4 + 50}px`,
                    height: `${item.energy * 0.4 + 50}px`,
                    left: `-${(item.energy * 0.4 + 50 - 44) / 2}px`,
                    top: `-${(item.energy * 0.4 + 50 - 44) / 2}px`,
                  }}
                ></div>

                {/* Node circle */}
                <div
                  className={`
                    w-11 h-11 rounded-full flex items-center justify-center
                    ${
                      isExpanded
                        ? "bg-[#2563EB] text-white scale-125"
                        : isRelated
                        ? "bg-[#2563EB]/40 text-white"
                        : "bg-[#0a0a0a] text-[#A1A1AA]"
                    }
                    border-2 
                    ${
                      isExpanded
                        ? "border-[#2563EB] shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                        : isRelated
                        ? "border-[#2563EB] animate-pulse"
                        : "border-[#1F1F1F] hover:border-[#2D2D2D]"
                    }
                    transition-all duration-500 transform
                  `}
                >
                  <span className="material-icons-round text-lg leading-none">{item.icon}</span>
                </div>

                {/* Node Title text below circle */}
                <div
                  className={`
                    absolute top-12 whitespace-nowrap
                    text-[10px] font-bold uppercase tracking-wider
                    transition-all duration-300 pointer-events-none
                    ${isExpanded ? "text-white scale-110 font-bold" : "text-[#52525B]"}
                  `}
                >
                  {item.title}
                </div>

                {/* Detail Card Overlay */}
                {isExpanded && (
                  <div
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-72 bg-[#0a0a0a]/95 backdrop-blur-md border border-[#1F1F1F] rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] p-6 overflow-visible z-[250] text-left hover:border-[#2D2D2D] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Arrow pin pointing to the node */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0a0a] border-t border-l border-[#1F1F1F] rotate-45"></div>
                    
                    {/* Card Header */}
                    <div className="flex justify-between items-center mb-3">
                      {getStatusBadge(item.status)}
                      <span className="text-[10px] font-mono text-[#52525B]">
                        {item.date}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-sm font-bold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>

                    {/* Card Content Description */}
                    <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                      {item.content}
                    </p>

                    {/* Energy Level (Progress Bar) */}
                    <div className="mt-4 pt-3 border-t border-[#1F1F1F]">
                      <div className="flex justify-between items-center text-[10px] mb-1.5">
                        <span className="flex items-center text-[#52525B] uppercase font-bold tracking-wider">
                          <span className="material-icons-round text-xs mr-1 text-blue-500">bolt</span>
                          Activity weight
                        </span>
                        <span className="font-mono text-white">{item.energy}%</span>
                      </div>
                      <div className="w-full h-1 bg-[#1F1F1F] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#2563EB] rounded-full transition-all duration-1000"
                          style={{ width: `${item.energy}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Connected Nodes */}
                    {item.relatedIds.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-[#1F1F1F]">
                        <div className="flex items-center mb-2">
                          <span className="material-icons-round text-xs text-[#52525B] mr-1">link</span>
                          <h4 className="text-[9px] uppercase tracking-wider font-bold text-[#52525B]">
                            Connected Channels
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find((i) => i.id === relatedId);
                            return (
                              <button
                                key={relatedId}
                                className="flex items-center h-6 px-2 text-[9px] font-bold uppercase border border-[#1F1F1F] bg-black/60 rounded-md hover:bg-[#111111] hover:border-[#2D2D2D] text-[#A1A1AA] hover:text-white transition-all"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relatedId);
                                }}
                              >
                                {relatedItem?.title}
                                <span className="material-icons-round text-[9px] ml-1 text-blue-500">east</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
