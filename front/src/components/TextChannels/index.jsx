import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './textChannels.module.css'
import OneText from '../OneText';

function TextChannels(){
    const [textChannels, setTextChannels] = useState([]);

    const getSome = async() => {
        const result = await axios.get('http://localhost:3001/main');
    
        setTextChannels(result.data);
        console.log(textChannels);
    }

    useEffect(() => {
        getSome();
    }, []);

    return(
        <div className={styles.text_channels}>
            <h3>Текстові канали</h3>
            <ul className={styles.channels_list}>
                {textChannels.map(item => 
                <li key={item.id.toString()}><OneText name={item.name}/></li>)}
            </ul>
        </div>
    );
};

export default TextChannels;