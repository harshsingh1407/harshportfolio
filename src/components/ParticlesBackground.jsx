import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
    }, []);
    
    const options = {
        background: {
            color: {
                value: "#1a1a2e",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                onClick: {
                    enable: true,
                    mode: "push", 
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 150,
                    links: {
                        opacity: 1,
                    },
                },
                push: {
                    quantity: 4,
                },
            },
        },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2, 
                direction: "none",
                outModes: {
                    default: "out",
                },
            },
            size: {
                value: { min: 1, max: 3 }, 
                random: true,
            },
            opacity: {
                value: 0.5,
                random: true,
            }
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
            style={{
                position: "fixed", 
                top: 0,
                left: 0,
                zIndex: -1, 
                width: "100%",
                height: "100%"
            }}
        />
    );
};

export default ParticlesBackground;