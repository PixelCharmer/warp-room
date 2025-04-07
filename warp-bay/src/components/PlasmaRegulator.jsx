import React, { useEffect } from 'react';
import useRegulatorStore from '../store/useRegulatorStore';

const PlasmaRegulator = () => {
    const {
        pressures,
        setPressure,
        status,
        reset,
        checkSolution,
    } = useRegulatorStore();

    useEffect(() => {
        reset();
    }, [reset]);

    return (
        <div
            style={{
                backgroundColor: '#0b0b0b',
                border: '2px solid #00ffcc',
                borderRadius: '16px',
                padding: '2rem',
                maxWidth: '600px',
                margin: '0 auto',
                color: '#ccffcc',
                fontFamily: 'Orbitron, sans-serif',
                boxShadow: '0 0 20px #00ffcc',
            }}
        >
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#00ffaa' }}>
                ⚡ Plasma Regulator Console
            </h2>

            {pressures.map((val, i) => (
                <div key={i} style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '.25rem', fontSize: '1.1rem' }}>
                        Valve {i + 1}
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={val}
                        onChange={(e) => setPressure(i, parseInt(e.target.value))}
                        disabled={status !== 'running'}
                        style={{
                            width: '100%',
                            height: '12px',
                            background: '#222',
                            accentColor: '#00ffaa',
                        }}
                    />
                    <div style={{ marginTop: '.5rem', fontSize: '0.9rem', color: '#88ff88' }}>
                        Current: <strong>{val}</strong>
                    </div>
                </div>
            ))}

            <div style={{ marginTop: '1.5rem' }}>
                {status === 'success' && (
                    <div style={{ color: '#00ff88', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        ✅ Warp Core Calibrated Successfully!
                    </div>
                )}
                {status === 'failure' && (
                    <div style={{ color: '#ff4444', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        ❌ Incorrect Settings. Try Again.
                    </div>
                )}
                {status === 'running' && (
                    <div style={{ color: '#ffff99', fontSize: '1rem' }}>
                        Adjust the valves and submit to calibrate.
                    </div>
                )}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <button
                    onClick={checkSolution}
                    disabled={status !== 'running'}
                    style={{
                        padding: '0.75rem 1.5rem',
                        fontSize: '1rem',
                        backgroundColor: '#00ffaa',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#000',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 0 10px #00ffaa',
                    }}
                >
                    SUBMIT
                </button>

                {status !== 'running' && (
                    <button
                        onClick={reset}
                        style={{
                            padding: '0.75rem 1.5rem',
                            fontSize: '1rem',
                            backgroundColor: '#cccccc',
                            border: 'none',
                            borderRadius: '8px',
                            color: '#000',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            boxShadow: '0 0 10px #888',
                        }}
                    >
                        RESET
                    </button>
                )}
            </div>
        </div>
    );
};

export default PlasmaRegulator;
