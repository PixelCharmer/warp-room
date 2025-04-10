import React from 'react';
import PlasmaRegulator from '../components/PlasmaRegulator';
import useRegulatorStore from '../store/useRegulatorStore';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const status = useRegulatorStore((state) => state.status);
    const navigate = useNavigate();

    return (
        <div
            style={{
                minHeight: '100vh',
                background: '#000',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#ccffcc',
            }}
        >
            <PlasmaRegulator />

            {status === 'success' && (
                <button
                    style={{
                        marginTop: '2rem',
                        padding: '0.8rem 1.6rem',
                        backgroundColor: '#00ffaa',
                        color: '#000',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px #00ffaa',
                        cursor: 'pointer',
                    }}
                >
                    🚀 Activate Warp Drive Code: 2840 WARP NOW 🚀
                </button>
            )}
        </div>
    );
};

export default Home;
