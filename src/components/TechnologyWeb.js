import React, { useState, useEffect, useRef } from "react";
import TechnologySkill from "./TechnologySkill";

const TechnologyWeb = ({ technologies }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [positions, setPositions] = useState([]);
    const [currentPositions, setCurrentPositions] = useState([]);
    const containerRef = useRef(null);

    // Generate positions based on intersection points but without storing the lines
    useEffect(() => {
        const containerWidth = 1200;
        const containerHeight = 800;
        const padding = 80;
        
        // Generate intersection points without storing the background lines
        const intersectionPoints = [];
        
        // Create potential intersection points from a grid-like pattern with randomness
        const horizontalLines = 6;
        const verticalLines = 8;
        
        // Generate horizontal line points
        const horizontalPoints = [];
        for (let i = 0; i < horizontalLines; i++) {
            const y = padding + (i * (containerHeight - 2 * padding) / (horizontalLines - 1));
            const linePoints = [];
            for (let x = padding; x <= containerWidth - padding; x += 150) {
                const offsetY = (Math.random() - 0.5) * 80;
                const offsetX = (Math.random() - 0.5) * 40;
                linePoints.push({
                    x: Math.max(padding, Math.min(containerWidth - padding, x + offsetX)),
                    y: Math.max(padding, Math.min(containerHeight - padding, y + offsetY))
                });
            }
            horizontalPoints.push(...linePoints);
        }
        
        // Generate vertical line points
        const verticalPoints = [];
        for (let i = 0; i < verticalLines; i++) {
            const x = padding + (i * (containerWidth - 2 * padding) / (verticalLines - 1));
            const linePoints = [];
            for (let y = padding; y <= containerHeight - padding; y += 120) {
                const offsetX = (Math.random() - 0.5) * 60;
                const offsetY = (Math.random() - 0.5) * 30;
                linePoints.push({
                    x: Math.max(padding, Math.min(containerWidth - padding, x + offsetX)),
                    y: Math.max(padding, Math.min(containerHeight - padding, y + offsetY))
                });
            }
            verticalPoints.push(...linePoints);
        }
        
        // Add some diagonal points
        const diagonalPoints = [];
        for (let i = 0; i < 20; i++) {
            diagonalPoints.push({
                x: padding + Math.random() * (containerWidth - 2 * padding),
                y: padding + Math.random() * (containerHeight - 2 * padding)
            });
        }
        
        const allPoints = [...horizontalPoints, ...verticalPoints, ...diagonalPoints];
        
        // Cluster nearby points to create intersection areas
        const clusters = [];
        const used = new Set();
        
        allPoints.forEach((point, index) => {
            if (used.has(index)) return;
            
            const cluster = [point];
            used.add(index);
            
            allPoints.forEach((otherPoint, otherIndex) => {
                if (used.has(otherIndex)) return;
                
                const distance = Math.sqrt(
                    Math.pow(point.x - otherPoint.x, 2) + 
                    Math.pow(point.y - otherPoint.y, 2)
                );
                
                if (distance < 60) {
                    cluster.push(otherPoint);
                    used.add(otherIndex);
                }
            });
            
            if (cluster.length >= 2) {
                // Calculate center of cluster
                const centerX = cluster.reduce((sum, p) => sum + p.x, 0) / cluster.length;
                const centerY = cluster.reduce((sum, p) => sum + p.y, 0) / cluster.length;
                clusters.push({ x: centerX, y: centerY });
            }
        });
        
        // Select the best intersection points for our technologies
        const selectedPositions = [];
        const shuffledClusters = clusters.sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < Math.min(technologies.length, shuffledClusters.length); i++) {
            selectedPositions.push(shuffledClusters[i]);
        }
        
        // If we need more positions, add some random ones
        while (selectedPositions.length < technologies.length) {
            selectedPositions.push({
                x: padding + Math.random() * (containerWidth - 2 * padding),
                y: padding + Math.random() * (containerHeight - 2 * padding)
            });
        }
        
        setPositions(selectedPositions);
        setCurrentPositions(selectedPositions);
    }, [technologies]);

    // Update positions based on hover effect
    useEffect(() => {
        if (hoveredIndex === null) {
            setCurrentPositions(positions);
            return;
        }

        const hoveredPos = positions[hoveredIndex];
        if (!hoveredPos) return;

        const newPositions = positions.map((pos, index) => {
            if (index === hoveredIndex) return pos;

            const distance = Math.sqrt(
                Math.pow(pos.x - hoveredPos.x, 2) + 
                Math.pow(pos.y - hoveredPos.y, 2)
            );

            if (distance < 120) {
                const angle = Math.atan2(pos.y - hoveredPos.y, pos.x - hoveredPos.x);
                const pushDistance = 25;
                return {
                    x: pos.x + pushDistance * Math.cos(angle),
                    y: pos.y + pushDistance * Math.sin(angle)
                };
            }

            return pos;
        });

        setCurrentPositions(newPositions);
    }, [hoveredIndex, positions]);

    // Generate connections between nearby nodes only
    const generateConnections = () => {
        const connections = [];
        const nodeConnections = new Array(currentPositions.length).fill(0); // Track connections per node
        
        // First pass: Create a more connected web by connecting to multiple nearby nodes
        for (let i = 0; i < currentPositions.length; i++) {
            const distances = [];
            
            // Calculate distances to all other nodes
            for (let j = 0; j < currentPositions.length; j++) {
                if (i === j) continue;
                
                const distance = Math.sqrt(
                    Math.pow(currentPositions[i].x - currentPositions[j].x, 2) + 
                    Math.pow(currentPositions[i].y - currentPositions[j].y, 2)
                );
                
                distances.push({ index: j, distance });
            }
            
            // Sort by distance and connect to closest nodes
            distances.sort((a, b) => a.distance - b.distance);
            
            // Connect to 2-4 closest nodes (creates more intricate web)
            const connectionsToMake = Math.min(Math.floor(Math.random() * 3) + 2, distances.length);
            
            for (let k = 0; k < connectionsToMake; k++) {
                const targetIndex = distances[k].index;
                
                // Check if connection already exists
                const connectionExists = connections.some(conn => 
                    (conn.fromIndex === i && conn.toIndex === targetIndex) ||
                    (conn.fromIndex === targetIndex && conn.toIndex === i)
                );
                
                if (!connectionExists && distances[k].distance < 400) {
                    connections.push({
                        from: currentPositions[i],
                        to: currentPositions[targetIndex],
                        fromIndex: i,
                        toIndex: targetIndex,
                        type: 'node'
                    });
                    nodeConnections[i]++;
                    nodeConnections[targetIndex]++;
                }
            }
        }
        
        // Second pass: Add some longer connections for web complexity
        for (let i = 0; i < currentPositions.length; i++) {
            // Add 1-2 random longer connections per node
            const longConnections = Math.floor(Math.random() * 2) + 1;
            
            for (let k = 0; k < longConnections; k++) {
                const randomIndex = Math.floor(Math.random() * currentPositions.length);
                if (randomIndex === i) continue;
                
                const distance = Math.sqrt(
                    Math.pow(currentPositions[i].x - currentPositions[randomIndex].x, 2) + 
                    Math.pow(currentPositions[i].y - currentPositions[randomIndex].y, 2)
                );
                
                // Check if connection already exists
                const connectionExists = connections.some(conn => 
                    (conn.fromIndex === i && conn.toIndex === randomIndex) ||
                    (conn.fromIndex === randomIndex && conn.toIndex === i)
                );
                
                if (!connectionExists && distance < 600 && Math.random() > 0.3) {
                    connections.push({
                        from: currentPositions[i],
                        to: currentPositions[randomIndex],
                        fromIndex: i,
                        toIndex: randomIndex,
                        type: 'long'
                    });
                    nodeConnections[i]++;
                    nodeConnections[randomIndex]++;
                }
            }
        }
        
        // Third pass: Ensure every node has at least 2 connections for web-like structure
        for (let i = 0; i < currentPositions.length; i++) {
            while (nodeConnections[i] < 2) {
                // Find nodes with fewer connections to balance the network
                let targetIndex = -1;
                let minConnections = Infinity;
                let closestDistance = Infinity;
                
                for (let j = 0; j < currentPositions.length; j++) {
                    if (i === j) continue;
                    
                    const distance = Math.sqrt(
                        Math.pow(currentPositions[i].x - currentPositions[j].x, 2) + 
                        Math.pow(currentPositions[i].y - currentPositions[j].y, 2)
                    );
                    
                    // Check if connection already exists
                    const connectionExists = connections.some(conn => 
                        (conn.fromIndex === i && conn.toIndex === j) ||
                        (conn.fromIndex === j && conn.toIndex === i)
                    );
                    
                    if (!connectionExists) {
                        // Prefer nodes with fewer connections and closer distance
                        if (nodeConnections[j] < minConnections || 
                            (nodeConnections[j] === minConnections && distance < closestDistance)) {
                            minConnections = nodeConnections[j];
                            closestDistance = distance;
                            targetIndex = j;
                        }
                    }
                }
                
                if (targetIndex !== -1) {
                    connections.push({
                        from: currentPositions[i],
                        to: currentPositions[targetIndex],
                        fromIndex: i,
                        toIndex: targetIndex,
                        type: 'node'
                    });
                    nodeConnections[i]++;
                    nodeConnections[targetIndex]++;
                } else {
                    break; // No more connections possible
                }
            }
        }
        
        return connections;
    };

    const connections = generateConnections();

    return (
        <div className="relative w-full flex justify-center">
            <div 
                ref={containerRef}
                className="relative select-none" 
                style={{ width: '1200px', height: '800px' }}
            >
                {/* SVG for connections between nodes only */}
                <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ zIndex: 1 }}
                >
                    {/* Render all connections between technology nodes */}
                    {connections.map((connection, index) => {
                        const isHighlighted = hoveredIndex !== null && 
                            (connection.fromIndex === hoveredIndex || connection.toIndex === hoveredIndex);
                        
                        return (
                            <line
                                key={`connection-${index}`}
                                x1={connection.from.x}
                                y1={connection.from.y}
                                x2={connection.to.x}
                                y2={connection.to.y}
                                stroke={isHighlighted ? "#f97316" : "#6b7280"}
                                strokeWidth={isHighlighted ? "3" : "1.5"}
                                opacity={isHighlighted ? "1" : "0.6"}
                                className="transition-all duration-1000 ease-out"
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
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ease-out"
                            style={{
                                left: currentPositions[index].x,
                                top: currentPositions[index].y,
                                zIndex: hoveredIndex === index ? 4 : 2,
                                transform: `translate(-50%, -50%) ${hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'}`
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <TechnologySkill
                                icon={tech.icon}
                                name={tech.name}
                                hoverColor={tech.hoverColor}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechnologyWeb; 