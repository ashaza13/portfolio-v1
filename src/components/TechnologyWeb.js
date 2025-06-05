import React, { useState, useEffect, useRef } from "react";
import TechnologySkill from "./TechnologySkill";

const TechnologyWeb = ({ technologies }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [positions, setPositions] = useState([]);
    const [currentPositions, setCurrentPositions] = useState([]);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef(null);

    // Generate positions for technologies in a more organic web pattern
    useEffect(() => {
        const centerX = 300;
        const centerY = 300;
        const baseRadius = 180;
        
        const newPositions = technologies.map((_, index) => {
            const angle = (index / technologies.length) * 2 * Math.PI;
            // Add some randomness to make it more organic
            const radiusVariation = baseRadius + (Math.random() - 0.5) * 60;
            const angleVariation = angle + (Math.random() - 0.5) * 0.3;
            
            const x = centerX + radiusVariation * Math.cos(angleVariation);
            const y = centerY + radiusVariation * Math.sin(angleVariation);
            return { x, y };
        });
        
        setPositions(newPositions);
        setCurrentPositions(newPositions);
    }, [technologies]);

    // Generate spider web-like connections
    const generateConnections = () => {
        const connections = [];
        const centerX = 300;
        const centerY = 300;
        
        for (let i = 0; i < technologies.length; i++) {
            if (!currentPositions[i]) continue;
            
            // Connect to center (like spokes of a web)
            connections.push({
                from: { x: centerX, y: centerY },
                to: currentPositions[i],
                fromIndex: -1, // -1 represents center
                toIndex: i,
                type: 'spoke'
            });
            
            // Connect to some nearby nodes (web strands)
            for (let j = i + 1; j < technologies.length; j++) {
                if (!currentPositions[j]) continue;
                
                const distance = Math.sqrt(
                    Math.pow(currentPositions[i].x - currentPositions[j].x, 2) + 
                    Math.pow(currentPositions[i].y - currentPositions[j].y, 2)
                );
                
                // Only connect if nodes are reasonably close (creates more realistic web)
                if (distance < 200 && Math.random() > 0.4) {
                    connections.push({
                        from: currentPositions[i],
                        to: currentPositions[j],
                        fromIndex: i,
                        toIndex: j,
                        type: 'strand'
                    });
                }
            }
        }
        return connections;
    };

    const handleMouseDown = (e, index) => {
        e.preventDefault();
        setDraggedIndex(index);
        
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        setDragOffset({
            x: mouseX - currentPositions[index].x,
            y: mouseY - currentPositions[index].y
        });
    };

    const handleMouseMove = (e) => {
        if (draggedIndex === null) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const newX = mouseX - dragOffset.x;
        const newY = mouseY - dragOffset.y;
        
        // Limit drag distance from original position
        const originalPos = positions[draggedIndex];
        const maxDistance = 80;
        const distance = Math.sqrt(
            Math.pow(newX - originalPos.x, 2) + Math.pow(newY - originalPos.y, 2)
        );
        
        let finalX = newX;
        let finalY = newY;
        
        if (distance > maxDistance) {
            const angle = Math.atan2(newY - originalPos.y, newX - originalPos.x);
            finalX = originalPos.x + maxDistance * Math.cos(angle);
            finalY = originalPos.y + maxDistance * Math.sin(angle);
        }
        
        setCurrentPositions(prev => {
            const newPositions = [...prev];
            newPositions[draggedIndex] = { x: finalX, y: finalY };
            return newPositions;
        });
    };

    const handleMouseUp = () => {
        if (draggedIndex === null) return;
        
        setIsAnimating(true);
        
        // Animate back to original position
        const originalPos = positions[draggedIndex];
        const currentPos = currentPositions[draggedIndex];
        
        const animationDuration = 1500;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / animationDuration, 1);
            
            // Elastic easing function for bounce effect
            const easeOutElastic = (t) => {
                const c4 = (2 * Math.PI) / 3;
                return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
            };
            
            const easedProgress = easeOutElastic(progress);
            
            const x = currentPos.x + (originalPos.x - currentPos.x) * easedProgress;
            const y = currentPos.y + (originalPos.y - currentPos.y) * easedProgress;
            
            setCurrentPositions(prev => {
                const newPositions = [...prev];
                newPositions[draggedIndex] = { x, y };
                return newPositions;
            });
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setIsAnimating(false);
                setDraggedIndex(null);
            }
        };
        
        requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (draggedIndex !== null) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [draggedIndex, dragOffset, positions, currentPositions]);

    const connections = generateConnections();

    return (
        <div className="relative w-full flex justify-center">
            <div 
                ref={containerRef}
                className="relative select-none" 
                style={{ width: '600px', height: '600px' }}
            >
                {/* SVG for connection lines */}
                <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ zIndex: 1 }}
                >
                    {connections.map((connection, index) => {
                        const isHighlighted = hoveredIndex !== null && 
                            (connection.fromIndex === hoveredIndex || connection.toIndex === hoveredIndex);
                        
                        const isSpoke = connection.type === 'spoke';
                        
                        return (
                            <line
                                key={index}
                                x1={connection.from.x}
                                y1={connection.from.y}
                                x2={connection.to.x}
                                y2={connection.to.y}
                                stroke={isHighlighted ? "#f97316" : (isSpoke ? "#4b5563" : "#374151")}
                                strokeWidth={isHighlighted ? "2" : (isSpoke ? "1.5" : "1")}
                                opacity={isHighlighted ? "0.9" : (isSpoke ? "0.4" : "0.2")}
                                className="transition-all duration-300"
                                strokeDasharray={isSpoke ? "none" : "2,2"}
                            />
                        );
                    })}
                </svg>

                {/* Technology nodes */}
                {technologies.map((tech, index) => {
                    if (!currentPositions[index]) return null;
                    
                    return (
                        <div
                            key={index}
                            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                                draggedIndex === index ? 'cursor-grabbing' : 'cursor-grab'
                            } ${isAnimating && draggedIndex === index ? 'pointer-events-none' : ''}`}
                            style={{
                                left: currentPositions[index].x,
                                top: currentPositions[index].y,
                                zIndex: draggedIndex === index ? 4 : 2
                            }}
                            onMouseEnter={() => !draggedIndex && setHoveredIndex(index)}
                            onMouseLeave={() => !draggedIndex && setHoveredIndex(null)}
                            onMouseDown={(e) => handleMouseDown(e, index)}
                        >
                            <TechnologySkill
                                icon={tech.icon}
                                name={tech.name}
                                hoverColor={tech.hoverColor}
                            />
                        </div>
                    );
                })}

                {/* Center node - spider body */}
                <div 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 rounded-full w-24 h-24 flex items-center justify-center shadow-lg"
                    style={{
                        left: 300,
                        top: 300,
                        zIndex: 3
                    }}
                >
                    <span className="text-white font-bold text-xs">Technologies</span>
                </div>
            </div>
        </div>
    );
};

export default TechnologyWeb; 