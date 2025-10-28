import { useState } from 'react';

export default function Calculator() {
    const [inputValue, setInputValue] = useState('');
    const [display, setDisplay] = useState('');

    const handleClick = (value) => {
        setInputValue(inputValue + value);
        // setDisplay('');
    };

    const handleClear = () => {
        setInputValue('');
        setDisplay('');
    };

    const handleCalculate = () => {
        try {
            if (!inputValue || inputValue === 'Error') {
                setDisplay('Error');
                return;
            }

            const result = eval(inputValue);
            setDisplay(String(result));
        } catch (e) {
            setDisplay('Error');
            setInputValue('');
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>React Calculator</h1>
            <input
                type="text"
                value={inputValue}
                readOnly
                style={styles.display}
            />
            <div style={styles.errorText}>{display}</div>
            <div style={styles.buttonGrid}>
                <button style={styles.button} onClick={() => handleClick('7')}>7</button>
                <button style={styles.button} onClick={() => handleClick('8')}>8</button>
                <button style={styles.button} onClick={() => handleClick('9')}>9</button>
                <button style={styles.button} onClick={() => handleClick('+')}>+</button>

                <button style={styles.button} onClick={() => handleClick('4')}>4</button>
                <button style={styles.button} onClick={() => handleClick('5')}>5</button>
                <button style={styles.button} onClick={() => handleClick('6')}>6</button>
                <button style={styles.button} onClick={() => handleClick('-')}>-</button>

                <button style={styles.button} onClick={() => handleClick('1')}>1</button>
                <button style={styles.button} onClick={() => handleClick('2')}>2</button>
                <button style={styles.button} onClick={() => handleClick('3')}>3</button>
                <button style={styles.button} onClick={() => handleClick('*')}>*</button>

                <button style={styles.button} onClick={handleClear}>C</button>
                <button style={styles.button} onClick={() => handleClick('0')}>0</button>
                <button style={styles.button} onClick={handleCalculate}>=</button>
                <button style={styles.button} onClick={() => handleClick('/')}>/</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        textAlign: 'center',
        fontSize: '32px',
        marginBottom: '20px',
    },
    display: {
        width: '100%',
        padding: '15px',
        fontSize: '20px',
        marginBottom: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    errorText: {
        textAlign: 'center',
        color: '#999',
        height: '20px',
        marginBottom: '15px',
        fontSize: '14px',
    },
    buttonGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
    },
    button: {
        padding: '20px',
        fontSize: '18px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f5f5f5',
        cursor: 'pointer',
    }
};