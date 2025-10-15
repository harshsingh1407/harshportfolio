import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // या loadFull

const ParticlesBackground = () => {
    // यह फ़ंक्शन tsparticles इंजन को लोड करता है।
    const particlesInit = useCallback(async (engine) => {
        // Slim वर्जन छोटे फ़ाइल आकार के लिए बुनियादी इफ़ेक्ट लोड करता है।
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // कंसोल में देखने के लिए (वैकल्पिक)
        // console.log(container);
    }, []);
    
    // कणों के प्रभाव के लिए कॉन्फ़िगरेशन
    const options = {
        background: {
            color: {
                value: "#1a1a2e", // CSS में दिया गया गहरा नीला/काला रंग
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab", // माउस के पास आने पर कणों को जोड़ना
                },
                onClick: {
                    enable: true,
                    mode: "push", // क्लिक करने पर कणों को धकेलना
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
                value: 80, // कणों की संख्या
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#ffffff", // कणों का रंग (सफेद)
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
                speed: 2, // गति
                direction: "none",
                outModes: {
                    default: "out",
                },
            },
            size: {
                value: { min: 1, max: 3 }, // कणों का आकार
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
                position: "fixed", // इसे पृष्ठभूमि में स्थिर करता है
                top: 0,
                left: 0,
                zIndex: -1, // सबसे नीचे रखें
                width: "100%",
                height: "100%"
            }}
        />
    );
};

export default ParticlesBackground;